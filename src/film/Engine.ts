import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';

export type CueName = 'hero' | 'macro' | 'case' | 'teardown' | 'orbit' | 'home';

export interface EngineOptions {
  /** Called once after the first real frame is rendered (page fades the canvas in then). */
  onReady: () => void;
  /** Called if WebGL can't start or the context is lost; page shows a static fallback. */
  onFail: () => void;
}

/** A camera "shot": everything the scroll position can steer. All fields blend linearly. */
interface Shot {
  dist: number; // camera distance from target
  az: number; // azimuth around Y (rad), 0 = looking from +Z
  el: number; // elevation (rad)
  tx: number;
  ty: number;
  tz: number;
  offX: number; // shift of the framing, as a fraction of distance (+ = object to the right of screen)
  offY: number; // world-space vertical shift of the target (- = object sits higher on screen)
  explode: number;
  yaw: number;
  callouts: number;
  turn: number; // auto-turn weight (hero/home only)
}

const SHOT_KEYS = [
  'dist', 'az', 'el', 'tx', 'ty', 'tz', 'offX', 'offY', 'explode', 'yaw', 'callouts', 'turn',
] as const;

interface LayerSpec {
  size: number;
  height: number;
  gapAbove: number;
  radius: number;
  material: THREE.Material;
}

const GAP = 0.42; // vertical separation per layer at full explode
const STAGGER = 0.25; // how much lower layers lead while exploding
const KEY_INTENSITY = 2.4;
const RIM_INTENSITY = 2.8;
const ENV_INTENSITY = 1;
const REVEAL_SECONDS = 1.6;

const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));
const smoothstep = (f: number) => f * f * (3 - 2 * f);
const easeOutCubic = (f: number) => 1 - Math.pow(1 - f, 3);

/** Tiny deterministic PRNG so the circuit layout is the same on every load. */
function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export class Engine {
  private host: HTMLElement;
  private opts: EngineOptions;
  private alive = false;

  private renderer!: THREE.WebGLRenderer;
  private canvas!: HTMLCanvasElement;
  private scene = new THREE.Scene();
  private camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
  private envTexture: THREE.Texture | null = null;
  private keyLight!: THREE.DirectionalLight;
  private rimLight!: THREE.DirectionalLight;

  private module = new THREE.Group();
  private layers: THREE.Group[] = [];
  private layerBaseY: number[] = [];
  private layerHalf: number[] = [];
  private geometries: THREE.BufferGeometry[] = [];
  private materials: THREE.Material[] = [];

  private callouts: HTMLElement[] = [];
  private calloutCache: { x: number; y: number; o: number }[] = [];

  private sections: HTMLElement[] = [];
  private caseIndex: number[] = [];
  private bodyObserver: ResizeObserver | null = null;
  private hostObserver: ResizeObserver | null = null;

  private width = 1;
  private height = 1;
  private reducedMotion = false;
  private constrained = false; // coarse pointer or small screen
  private degraded = false;

  private raf = 0;
  private last = 0;
  private elapsed = 0;
  private ready = false;

  private state: Shot | null = null;
  private autoYaw = 0;
  private dragYaw = 0;
  private dragging = false;
  private dragId = -1;
  private dragX = 0;

  private fpsFrames = 0;
  private fpsTime = 0;
  private lowFpsTime = 0;

  // Scratch objects reused every frame to avoid GC churn.
  private v = new THREE.Vector3();
  private right = new THREE.Vector3();
  private target = new THREE.Vector3();
  private goal: Shot = Engine.blankShot();
  private shotA: Shot = Engine.blankShot();
  private shotB: Shot = Engine.blankShot();

  constructor(host: HTMLElement, opts: EngineOptions) {
    this.host = host;
    this.opts = opts;

    try {
      this.renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
    } catch {
      // Defer so the caller's constructor finishes before it reacts.
      queueMicrotask(() => this.opts.onFail());
      return;
    }
    this.alive = true;

    this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.constrained =
      window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 700;

    const r = this.renderer;
    r.setClearColor(0x000000, 0);
    r.outputColorSpace = THREE.SRGBColorSpace;
    r.toneMapping = THREE.ACESFilmicToneMapping;
    r.toneMappingExposure = 1.05;
    r.shadowMap.enabled = !this.constrained;
    r.shadowMap.type = THREE.PCFSoftShadowMap;

    this.canvas = r.domElement;
    this.canvas.style.cssText = 'display:block;width:100%;height:100%';
    this.canvas.addEventListener('webglcontextlost', this.onContextLost);
    host.appendChild(this.canvas);

    this.buildEnvironment();
    this.buildLights();
    this.buildModule();
    this.scene.add(this.module);

    this.resize();
    this.hostObserver = new ResizeObserver(() => this.resize());
    this.hostObserver.observe(host);

    this.querySections();
    this.bodyObserver = new ResizeObserver(() => this.querySections());
    this.bodyObserver.observe(document.body);

    window.addEventListener('pointerdown', this.onPointerDown, { passive: true });
    window.addEventListener('pointermove', this.onPointerMove, { passive: true });
    window.addEventListener('pointerup', this.onPointerUp, { passive: true });
    window.addEventListener('pointercancel', this.onPointerUp, { passive: true });
    document.addEventListener('visibilitychange', this.onVisibility);

    // Compile every program up front so the first scroll frame doesn't hitch.
    this.update(0);
    r.compile(this.scene, this.camera);

    if (!document.hidden) this.start();
  }

  /** Elements pinned to the 6 layers (0 = bottom ... 5 = lid). */
  setCallouts(els: HTMLElement[]): void {
    this.callouts = els;
    this.calloutCache = els.map(() => ({ x: NaN, y: NaN, o: NaN }));
  }

  dispose(): void {
    if (!this.alive) return;
    this.alive = false;
    this.stop();
    window.removeEventListener('pointerdown', this.onPointerDown);
    window.removeEventListener('pointermove', this.onPointerMove);
    window.removeEventListener('pointerup', this.onPointerUp);
    window.removeEventListener('pointercancel', this.onPointerUp);
    document.removeEventListener('visibilitychange', this.onVisibility);
    this.canvas.removeEventListener('webglcontextlost', this.onContextLost);
    this.hostObserver?.disconnect();
    this.bodyObserver?.disconnect();
    this.geometries.forEach((g) => g.dispose());
    this.materials.forEach((m) => m.dispose());
    this.envTexture?.dispose();
    this.keyLight.shadow.map?.dispose();
    this.renderer.dispose();
    this.canvas.remove();
    this.callouts = [];
    this.sections = [];
  }

  // ---------------------------------------------------------------- setup

  private buildEnvironment() {
    const pmrem = new THREE.PMREMGenerator(this.renderer);
    const room = new RoomEnvironment();
    this.envTexture = pmrem.fromScene(room, 0.04).texture;
    this.scene.environment = this.envTexture;
    room.traverse((o) => {
      const m = o as THREE.Mesh;
      if (m.isMesh) {
        m.geometry.dispose();
        (Array.isArray(m.material) ? m.material : [m.material]).forEach((x) => x.dispose());
      }
    });
    pmrem.dispose();
  }

  private buildLights() {
    // Key from upper-left so the bevels read; rim from behind to separate the silhouette from the black page.
    const key = new THREE.DirectionalLight(0xfff4e8, KEY_INTENSITY);
    key.position.set(-4, 7, 5);
    key.castShadow = !this.constrained;
    key.shadow.mapSize.set(1024, 1024);
    const sc = key.shadow.camera;
    sc.left = -3.2;
    sc.right = 3.2;
    sc.top = 3.2;
    sc.bottom = -3.2;
    sc.near = 1;
    sc.far = 20;
    key.shadow.bias = -0.0005;
    key.shadow.normalBias = 0.02;
    this.scene.add(key, key.target);

    const rim = new THREE.DirectionalLight(0xdfe8ff, RIM_INTENSITY);
    rim.position.set(1.5, 3, -6);
    this.scene.add(rim);

    this.keyLight = key;
    this.rimLight = rim;
  }

  private track<T extends THREE.Material>(m: T): T {
    this.materials.push(m);
    return m;
  }

  private trackGeo<T extends THREE.BufferGeometry>(g: T): T {
    this.geometries.push(g);
    return g;
  }

  private buildModule() {
    const aluminum = this.track(
      new THREE.MeshPhysicalMaterial({
        color: 0xd9dde2,
        metalness: 1,
        roughness: 0.34,
        anisotropy: 0.6, // brushed look without a texture
        clearcoat: 0.15,
      }),
    );
    const ceramic = this.track(
      new THREE.MeshPhysicalMaterial({
        color: 0xf4f2ee,
        metalness: 0,
        roughness: 0.38,
        clearcoat: 0.8,
        clearcoatRoughness: 0.15,
      }),
    );
    const graphite = this.track(
      new THREE.MeshStandardMaterial({ color: 0x3a3e46, metalness: 0.55, roughness: 0.42 }),
    );
    const copper = this.track(
      new THREE.MeshPhysicalMaterial({
        color: 0xe8a45c,
        metalness: 1,
        roughness: 0.26,
        clearcoat: 0.3,
      }),
    );
    const glass = this.track(
      new THREE.MeshPhysicalMaterial({
        color: 0xe9f1fb,
        metalness: 0,
        roughness: 0.18,
        clearcoat: 1,
        clearcoatRoughness: 0.08,
        transparent: true,
        opacity: 0.58,
        emissive: 0x1a2230,
      }),
    );
    const lid = this.track(
      new THREE.MeshPhysicalMaterial({
        color: 0xeceef1,
        metalness: 0.9,
        roughness: 0.22,
        anisotropy: 0.4,
        clearcoat: 0.4,
      }),
    );
    const parts = this.track(new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.75, roughness: 0.32 }));
    const gridGlow = this.track(
      new THREE.MeshStandardMaterial({ color: 0x000000, emissive: 0xffd7a3, emissiveIntensity: 0.7 }),
    );

    // Bottom -> top. The circuit layer gets extra headroom so its components can peek out.
    const specs: LayerSpec[] = [
      { size: 2.0, height: 0.16, gapAbove: 0.015, radius: 0.06, material: aluminum },
      { size: 1.92, height: 0.12, gapAbove: 0.015, radius: 0.05, material: ceramic },
      { size: 1.86, height: 0.1, gapAbove: 0.045, radius: 0.04, material: graphite },
      { size: 1.8, height: 0.05, gapAbove: 0.015, radius: 0.02, material: copper },
      { size: 1.88, height: 0.14, gapAbove: 0.015, radius: 0.05, material: glass },
      { size: 1.94, height: 0.1, gapAbove: 0, radius: 0.045, material: lid },
    ];

    const total = specs.reduce((s, l) => s + l.height + l.gapAbove, 0);
    let y = -total / 2;
    const castShadows = !this.constrained;

    specs.forEach((spec, i) => {
      const group = new THREE.Group();
      const geo = this.trackGeo(new RoundedBoxGeometry(spec.size, spec.height, spec.size, 4, spec.radius));
      const slab = new THREE.Mesh(geo, spec.material);
      slab.castShadow = castShadows;
      slab.receiveShadow = castShadows;
      group.add(slab);

      const baseY = y + spec.height / 2;
      group.position.y = baseY;
      this.layerBaseY.push(baseY);
      this.layerHalf.push(spec.size / 2);
      this.layers.push(group);
      this.module.add(group);
      y += spec.height + spec.gapAbove;

      if (i === 2) group.add(this.buildComponents(parts, spec, castShadows));
      if (i === 4) group.add(this.buildGrid(gridGlow, spec));
      if (i === 5) group.add(this.buildMonogram(copper, spec, castShadows));
    });
  }

  /** Raised "chips" on the graphite layer, one instanced draw call. */
  private buildComponents(mat: THREE.Material, spec: LayerSpec, shadows: boolean) {
    const rand = mulberry32(7);
    const cells = 6;
    const span = spec.size - 0.26;
    const cell = span / cells;
    const placements: THREE.Matrix4[] = [];
    const colors = [new THREE.Color(0xc9ced6), new THREE.Color(0xe8a45c), new THREE.Color(0x6a707a)];
    const picked: THREE.Color[] = [];
    const q = new THREE.Quaternion();
    for (let cx = 0; cx < cells; cx++) {
      for (let cz = 0; cz < cells; cz++) {
        if (rand() < 0.38) continue;
        const w = cell * (0.35 + rand() * 0.45);
        const d = cell * (0.3 + rand() * 0.45);
        const h = 0.018 + rand() * 0.02;
        const px = -span / 2 + cell * (cx + 0.5) + (rand() - 0.5) * cell * 0.15;
        const pz = -span / 2 + cell * (cz + 0.5) + (rand() - 0.5) * cell * 0.15;
        placements.push(
          new THREE.Matrix4().compose(
            new THREE.Vector3(px, spec.height / 2 + h / 2, pz),
            q,
            new THREE.Vector3(w, h, d),
          ),
        );
        picked.push(colors[Math.floor(rand() * colors.length)]);
      }
    }
    const geo = this.trackGeo(new THREE.BoxGeometry(1, 1, 1));
    const mesh = new THREE.InstancedMesh(geo, mat, placements.length);
    placements.forEach((m, i) => {
      mesh.setMatrixAt(i, m);
      mesh.setColorAt(i, picked[i]);
    });
    mesh.castShadow = shadows;
    mesh.receiveShadow = shadows;
    return mesh;
  }

  /** Faint glowing grid suspended inside the frosted glass layer. */
  private buildGrid(mat: THREE.Material, spec: LayerSpec) {
    const lines = 9;
    const span = spec.size - 0.2;
    const geo = this.trackGeo(new THREE.BoxGeometry(1, 1, 1));
    const mesh = new THREE.InstancedMesh(geo, mat, lines * 2);
    const q = new THREE.Quaternion();
    const m = new THREE.Matrix4();
    for (let i = 0; i < lines; i++) {
      const p = -span / 2 + (span * i) / (lines - 1);
      m.compose(new THREE.Vector3(p, 0, 0), q, new THREE.Vector3(0.008, 0.004, span));
      mesh.setMatrixAt(i, m);
      m.compose(new THREE.Vector3(0, 0, p), q, new THREE.Vector3(span, 0.004, 0.008));
      mesh.setMatrixAt(lines + i, m);
    }
    return mesh;
  }

  /** Embossed "EV" monogram on the lid, built from thin bars. */
  private buildMonogram(mat: THREE.Material, spec: LayerSpec, shadows: boolean) {
    const stroke = 0.05;
    const tall = 0.36;
    const h = 0.018;
    const y = spec.height / 2 + h / 2;
    const bars: { x: number; z: number; w: number; d: number; rot: number }[] = [
      // E (top of letter is -Z so it reads from the default camera)
      { x: -0.255, z: 0, w: stroke, d: tall, rot: 0 },
      { x: -0.17, z: -tall / 2 + stroke / 2, w: 0.22, d: stroke, rot: 0 },
      { x: -0.19, z: 0, w: 0.18, d: stroke, rot: 0 },
      { x: -0.17, z: tall / 2 - stroke / 2, w: 0.22, d: stroke, rot: 0 },
    ];
    // V: two slanted strokes meeting at the bottom.
    const vStroke = (x0: number, z0: number, x1: number, z1: number) => {
      const dx = x1 - x0;
      const dz = z1 - z0;
      bars.push({
        x: (x0 + x1) / 2,
        z: (z0 + z1) / 2,
        w: stroke,
        d: Math.hypot(dx, dz),
        rot: Math.atan2(dx, dz),
      });
    };
    vStroke(0.06, -tall / 2, 0.17, tall / 2);
    vStroke(0.28, -tall / 2, 0.17, tall / 2);

    const geo = this.trackGeo(new THREE.BoxGeometry(1, 1, 1));
    const mesh = new THREE.InstancedMesh(geo, mat, bars.length);
    const m = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    const up = new THREE.Vector3(0, 1, 0);
    bars.forEach((b, i) => {
      q.setFromAxisAngle(up, b.rot);
      m.compose(new THREE.Vector3(b.x, y, b.z), q, new THREE.Vector3(b.w, h, b.d));
      mesh.setMatrixAt(i, m);
    });
    mesh.castShadow = shadows;
    mesh.receiveShadow = shadows;
    return mesh;
  }

  // ---------------------------------------------------------------- DOM / sizing

  private querySections() {
    this.sections = Array.from(document.querySelectorAll<HTMLElement>('[data-cue]'));
    let n = 0;
    this.caseIndex = this.sections.map((s) => (s.dataset.cue === 'case' ? n++ : -1));
  }

  private pixelRatioCap() {
    if (this.degraded) return 1;
    return this.constrained ? 1.5 : 2;
  }

  private resize() {
    if (!this.alive) return;
    const w = Math.max(1, this.host.clientWidth);
    const h = Math.max(1, this.host.clientHeight);
    this.width = w;
    this.height = h;
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, this.pixelRatioCap()));
    this.renderer.setSize(w, h, false);
    const aspect = w / h;
    this.camera.aspect = aspect;
    // A wider lens on portrait keeps the module from needing an absurd pull-back.
    this.camera.fov = aspect < 1 ? 40 : 32;
    this.camera.updateProjectionMatrix();
  }

  // ---------------------------------------------------------------- shots

  private static blankShot(): Shot {
    return { dist: 0, az: 0, el: 0, tx: 0, ty: 0, tz: 0, offX: 0, offY: 0, explode: 0, yaw: 0, callouts: 0, turn: 0 };
  }

  private shotFor(i: number, f: number, out: Shot): Shot {
    const cue = (this.sections[i]?.dataset.cue ?? 'hero') as CueName;
    const wide = this.camera.aspect > 1.1;
    Object.assign(out, Engine.blankShot());
    const turn = this.reducedMotion ? 0 : 1;

    switch (cue) {
      case 'macro':
        out.dist = 2.3;
        out.az = 0.79;
        out.el = 0.3;
        out.tx = 0.62;
        out.ty = this.layerBaseY[2];
        out.tz = 0.62;
        out.explode = 0.15;
        break;
      case 'case': {
        const occ = Math.max(0, this.caseIndex[i] ?? 0);
        const side = occ % 2 === 0 ? 1 : -1;
        out.dist = 6;
        out.az = 0.2 + side * THREE.MathUtils.degToRad(35);
        out.el = 0.3 + (occ % 3) * 0.08;
        out.yaw = occ * 0.25;
        out.explode = 0.25;
        if (wide) out.offX = 0.22;
        else out.offY = -0.65;
        break;
      }
      case 'teardown':
        out.dist = 7.4;
        out.az = 0.45;
        out.el = 0.22;
        out.explode = 1;
        out.callouts = 1;
        if (wide) out.offX = 0.06; // leaves room on the right for the callouts
        else out.offY = -0.4;
        break;
      case 'orbit':
        out.dist = 6.4;
        out.az = -0.7 + f * 2.6;
        out.el = 0.3 + 0.15 * Math.sin(f * Math.PI);
        out.explode = 0.6;
        if (wide) out.offX = 0.22;
        else out.offY = -0.3;
        break;
      case 'hero':
      case 'home':
      default:
        // Wide screens keep the headline on the left, so the module sits back and to the right.
        out.dist = wide ? 7.4 : 5.6;
        out.az = 0.62;
        out.el = 0.42;
        out.turn = turn;
        if (wide) out.offX = 0.3;
        break;
    }
    // Follow the exploding stack upward so it stays framed.
    out.ty += out.explode * GAP * 2.5;
    return out;
  }

  /** Reads section rects (once per frame, never in a scroll handler) and blends the two nearest shots. */
  private computeGoal(): Shot {
    if (this.sections.length === 0) this.querySections();
    const n = this.sections.length;
    if (n === 0) return this.shotFor(-1, 0, this.goal);

    const center = window.innerHeight / 2;
    let idx = -1;
    let f = 0;
    for (let i = 0; i < n; i++) {
      const rect = this.sections[i].getBoundingClientRect();
      if (rect.top <= center) {
        idx = i;
        f = rect.height > 0 ? clamp((center - rect.top) / rect.height, 0, 1) : 1;
      } else break;
    }
    if (idx < 0) {
      idx = 0;
      f = 0;
    }

    const a = this.shotFor(idx, f, this.shotA);
    if (idx + 1 >= n) return Object.assign(this.goal, a);
    const b = this.shotFor(idx + 1, 0, this.shotB);
    const s = smoothstep(f);
    for (const k of SHOT_KEYS) this.goal[k] = a[k] + (b[k] - a[k]) * s;
    return this.goal;
  }

  // ---------------------------------------------------------------- loop

  private start() {
    if (!this.alive || this.raf) return;
    this.last = performance.now();
    this.raf = requestAnimationFrame(this.frame);
  }

  private stop() {
    if (this.raf) cancelAnimationFrame(this.raf);
    this.raf = 0;
  }

  private frame = (now: number) => {
    if (!this.alive) return;
    this.raf = requestAnimationFrame(this.frame);
    const dt = clamp((now - this.last) / 1000, 0, 0.05);
    this.last = now;

    this.update(dt);
    this.renderer.render(this.scene, this.camera);
    this.placeCallouts();
    this.monitorFps(now, dt);

    if (!this.ready) {
      this.ready = true;
      this.opts.onReady();
    }
  };

  private update(dt: number) {
    this.elapsed += dt;
    const goal = this.computeGoal();

    // Frame-rate independent easing; first frame snaps so load-at-scroll-position doesn't swoop.
    if (!this.state) this.state = { ...goal };
    const k = this.reducedMotion ? 12 : 5;
    const a = 1 - Math.exp(-k * dt);
    const st = this.state;
    for (const key of SHOT_KEYS) st[key] += (goal[key] - st[key]) * a;

    // Auto-turn only while the hero/home cue is active; otherwise unwind to a known yaw so shots compose predictably.
    this.autoYaw += dt * 0.15 * st.turn;
    if (this.autoYaw > Math.PI) this.autoYaw -= Math.PI * 2;
    this.autoYaw -= this.autoYaw * (1 - st.turn) * a;

    if (!this.dragging) this.dragYaw -= this.dragYaw * (1 - Math.exp(-1.5 * dt));

    this.module.rotation.y = this.autoYaw + st.yaw + this.dragYaw;

    // Reveal: lid drops in, lights come up.
    const reveal = this.reducedMotion ? 1 : easeOutCubic(clamp(this.elapsed / REVEAL_SECONDS, 0, 1));
    const light = this.reducedMotion ? 1 : easeOutCubic(clamp(this.elapsed / 1.2, 0, 1));
    this.keyLight.intensity = KEY_INTENSITY * light;
    this.rimLight.intensity = RIM_INTENSITY * light;
    this.scene.environmentIntensity = ENV_INTENSITY * light;

    // Explode: cumulative gap openings keep layers ordered; lower gaps open first.
    const ex = clamp(st.explode, 0, 1);
    let offset = 0;
    for (let i = 0; i < this.layers.length; i++) {
      if (i > 0) {
        const e = clamp(ex * (1 + STAGGER) - STAGGER * ((i - 1) / (this.layers.length - 2)), 0, 1);
        offset += e * GAP;
      }
      const lift = i === this.layers.length - 1 ? 0.4 * (1 - reveal) : 0;
      this.layers[i].position.y = this.layerBaseY[i] + offset + lift;
    }

    // Camera from spherical params around an offset target.
    const portraitScale = this.camera.aspect < 1 ? 1.5 : 1;
    const dist = st.dist * portraitScale;
    const cosEl = Math.cos(st.el);
    this.right.set(Math.cos(st.az), 0, -Math.sin(st.az));
    this.target
      .set(st.tx, st.ty + st.offY, st.tz)
      .addScaledVector(this.right, -st.offX * dist);
    this.camera.position.set(
      this.target.x + dist * cosEl * Math.sin(st.az),
      this.target.y + dist * Math.sin(st.el),
      this.target.z + dist * cosEl * Math.cos(st.az),
    );
    this.camera.lookAt(this.target);
    this.camera.updateMatrixWorld();
    this.module.updateMatrixWorld();
  }

  private placeCallouts() {
    const els = this.callouts;
    if (els.length === 0 || !this.state) return;
    const vis = clamp(this.state.callouts, 0, 1);
    // Camera-right in world space, so the anchor is always the layer's on-screen right edge.
    this.right.setFromMatrixColumn(this.camera.matrixWorld, 0).normalize();
    const n = Math.min(els.length, this.layers.length);
    for (let i = 0; i < n; i++) {
      const el = els[i];
      const cache = this.calloutCache[i];
      this.layers[i].getWorldPosition(this.v);
      this.v.addScaledVector(this.right, this.layerHalf[i] * 1.08);
      this.v.project(this.camera);
      const inFront = this.v.z > -1 && this.v.z < 1;
      const x = Math.round(((this.v.x + 1) / 2) * this.width * 10) / 10;
      const y = Math.round(((1 - this.v.y) / 2) * this.height * 10) / 10;
      const o = Math.round(vis * (inFront ? 1 : 0) * 1000) / 1000;
      if (cache && cache.x === x && cache.y === y && cache.o === o) continue;
      el.style.transform = `translate3d(${x}px,${y}px,0)`;
      el.style.opacity = String(o);
      if (cache) {
        cache.x = x;
        cache.y = y;
        cache.o = o;
      }
    }
  }

  /** One-shot quality drop if we sit under ~40fps for 2 seconds. */
  private monitorFps(now: number, dt: number) {
    if (this.degraded || dt <= 0) return;
    this.fpsFrames++;
    this.fpsTime += dt;
    if (this.fpsTime < 0.5) return;
    const fps = this.fpsFrames / this.fpsTime;
    this.lowFpsTime = fps < 40 ? this.lowFpsTime + this.fpsTime : 0;
    this.fpsFrames = 0;
    this.fpsTime = 0;
    void now;
    if (this.lowFpsTime >= 2) {
      this.degraded = true;
      this.renderer.shadowMap.enabled = false;
      this.keyLight.castShadow = false;
      this.materials.forEach((m) => (m.needsUpdate = true));
      this.resize();
    }
  }

  // ---------------------------------------------------------------- events

  private onVisibility = () => {
    if (document.hidden) this.stop();
    else this.start();
  };

  private onContextLost = (e: Event) => {
    e.preventDefault();
    this.stop();
    this.opts.onFail();
  };

  private onPointerDown = (e: PointerEvent) => {
    const t = e.target as Element | null;
    if (t && t.closest && t.closest('a,button,input,textarea,select,label,[role="button"]')) return;
    this.dragging = true;
    this.dragId = e.pointerId;
    this.dragX = e.clientX;
  };

  private onPointerMove = (e: PointerEvent) => {
    if (!this.dragging || e.pointerId !== this.dragId) return;
    const dx = e.clientX - this.dragX;
    this.dragX = e.clientX;
    // Horizontal only; vertical drags stay native scroll.
    this.dragYaw = clamp(this.dragYaw + dx * 0.006, -1.4, 1.4);
  };

  private onPointerUp = (e: PointerEvent) => {
    if (e.pointerId !== this.dragId) return;
    this.dragging = false;
    this.dragId = -1;
  };
}
