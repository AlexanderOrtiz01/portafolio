var w_=Object.defineProperty;var T_=(r,e,t)=>e in r?w_(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var Pe=(r,e,t)=>T_(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();var xf={exports:{}},Ca={},Ef={exports:{}},vt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gm;function A_(){if(Gm)return vt;Gm=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),y=Symbol.iterator;function S(k){return k===null||typeof k!="object"?null:(k=y&&k[y]||k["@@iterator"],typeof k=="function"?k:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,w={};function v(k,ie,Ue){this.props=k,this.context=ie,this.refs=w,this.updater=Ue||M}v.prototype.isReactComponent={},v.prototype.setState=function(k,ie){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,ie,"setState")},v.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function m(){}m.prototype=v.prototype;function R(k,ie,Ue){this.props=k,this.context=ie,this.refs=w,this.updater=Ue||M}var L=R.prototype=new m;L.constructor=R,x(L,v.prototype),L.isPureReactComponent=!0;var A=Array.isArray,B=Object.prototype.hasOwnProperty,I={current:null},D={key:!0,ref:!0,__self:!0,__source:!0};function F(k,ie,Ue){var J,ce={},Ee=null,_e=null;if(ie!=null)for(J in ie.ref!==void 0&&(_e=ie.ref),ie.key!==void 0&&(Ee=""+ie.key),ie)B.call(ie,J)&&!D.hasOwnProperty(J)&&(ce[J]=ie[J]);var Ae=arguments.length-2;if(Ae===1)ce.children=Ue;else if(1<Ae){for(var Fe=Array(Ae),Je=0;Je<Ae;Je++)Fe[Je]=arguments[Je+2];ce.children=Fe}if(k&&k.defaultProps)for(J in Ae=k.defaultProps,Ae)ce[J]===void 0&&(ce[J]=Ae[J]);return{$$typeof:r,type:k,key:Ee,ref:_e,props:ce,_owner:I.current}}function b(k,ie){return{$$typeof:r,type:k.type,key:ie,ref:k.ref,props:k.props,_owner:k._owner}}function C(k){return typeof k=="object"&&k!==null&&k.$$typeof===r}function O(k){var ie={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(Ue){return ie[Ue]})}var $=/\/+/g;function X(k,ie){return typeof k=="object"&&k!==null&&k.key!=null?O(""+k.key):ie.toString(36)}function se(k,ie,Ue,J,ce){var Ee=typeof k;(Ee==="undefined"||Ee==="boolean")&&(k=null);var _e=!1;if(k===null)_e=!0;else switch(Ee){case"string":case"number":_e=!0;break;case"object":switch(k.$$typeof){case r:case e:_e=!0}}if(_e)return _e=k,ce=ce(_e),k=J===""?"."+X(_e,0):J,A(ce)?(Ue="",k!=null&&(Ue=k.replace($,"$&/")+"/"),se(ce,ie,Ue,"",function(Je){return Je})):ce!=null&&(C(ce)&&(ce=b(ce,Ue+(!ce.key||_e&&_e.key===ce.key?"":(""+ce.key).replace($,"$&/")+"/")+k)),ie.push(ce)),1;if(_e=0,J=J===""?".":J+":",A(k))for(var Ae=0;Ae<k.length;Ae++){Ee=k[Ae];var Fe=J+X(Ee,Ae);_e+=se(Ee,ie,Ue,Fe,ce)}else if(Fe=S(k),typeof Fe=="function")for(k=Fe.call(k),Ae=0;!(Ee=k.next()).done;)Ee=Ee.value,Fe=J+X(Ee,Ae++),_e+=se(Ee,ie,Ue,Fe,ce);else if(Ee==="object")throw ie=String(k),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.");return _e}function de(k,ie,Ue){if(k==null)return k;var J=[],ce=0;return se(k,J,"","",function(Ee){return ie.call(Ue,Ee,ce++)}),J}function re(k){if(k._status===-1){var ie=k._result;ie=ie(),ie.then(function(Ue){(k._status===0||k._status===-1)&&(k._status=1,k._result=Ue)},function(Ue){(k._status===0||k._status===-1)&&(k._status=2,k._result=Ue)}),k._status===-1&&(k._status=0,k._result=ie)}if(k._status===1)return k._result.default;throw k._result}var pe={current:null},H={transition:null},le={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:H,ReactCurrentOwner:I};function ae(){throw Error("act(...) is not supported in production builds of React.")}return vt.Children={map:de,forEach:function(k,ie,Ue){de(k,function(){ie.apply(this,arguments)},Ue)},count:function(k){var ie=0;return de(k,function(){ie++}),ie},toArray:function(k){return de(k,function(ie){return ie})||[]},only:function(k){if(!C(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},vt.Component=v,vt.Fragment=t,vt.Profiler=a,vt.PureComponent=R,vt.StrictMode=s,vt.Suspense=h,vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,vt.act=ae,vt.cloneElement=function(k,ie,Ue){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var J=x({},k.props),ce=k.key,Ee=k.ref,_e=k._owner;if(ie!=null){if(ie.ref!==void 0&&(Ee=ie.ref,_e=I.current),ie.key!==void 0&&(ce=""+ie.key),k.type&&k.type.defaultProps)var Ae=k.type.defaultProps;for(Fe in ie)B.call(ie,Fe)&&!D.hasOwnProperty(Fe)&&(J[Fe]=ie[Fe]===void 0&&Ae!==void 0?Ae[Fe]:ie[Fe])}var Fe=arguments.length-2;if(Fe===1)J.children=Ue;else if(1<Fe){Ae=Array(Fe);for(var Je=0;Je<Fe;Je++)Ae[Je]=arguments[Je+2];J.children=Ae}return{$$typeof:r,type:k.type,key:ce,ref:Ee,props:J,_owner:_e}},vt.createContext=function(k){return k={$$typeof:u,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:l,_context:k},k.Consumer=k},vt.createElement=F,vt.createFactory=function(k){var ie=F.bind(null,k);return ie.type=k,ie},vt.createRef=function(){return{current:null}},vt.forwardRef=function(k){return{$$typeof:f,render:k}},vt.isValidElement=C,vt.lazy=function(k){return{$$typeof:g,_payload:{_status:-1,_result:k},_init:re}},vt.memo=function(k,ie){return{$$typeof:p,type:k,compare:ie===void 0?null:ie}},vt.startTransition=function(k){var ie=H.transition;H.transition={};try{k()}finally{H.transition=ie}},vt.unstable_act=ae,vt.useCallback=function(k,ie){return pe.current.useCallback(k,ie)},vt.useContext=function(k){return pe.current.useContext(k)},vt.useDebugValue=function(){},vt.useDeferredValue=function(k){return pe.current.useDeferredValue(k)},vt.useEffect=function(k,ie){return pe.current.useEffect(k,ie)},vt.useId=function(){return pe.current.useId()},vt.useImperativeHandle=function(k,ie,Ue){return pe.current.useImperativeHandle(k,ie,Ue)},vt.useInsertionEffect=function(k,ie){return pe.current.useInsertionEffect(k,ie)},vt.useLayoutEffect=function(k,ie){return pe.current.useLayoutEffect(k,ie)},vt.useMemo=function(k,ie){return pe.current.useMemo(k,ie)},vt.useReducer=function(k,ie,Ue){return pe.current.useReducer(k,ie,Ue)},vt.useRef=function(k){return pe.current.useRef(k)},vt.useState=function(k){return pe.current.useState(k)},vt.useSyncExternalStore=function(k,ie,Ue){return pe.current.useSyncExternalStore(k,ie,Ue)},vt.useTransition=function(){return pe.current.useTransition()},vt.version="18.3.1",vt}var Wm;function Zd(){return Wm||(Wm=1,Ef.exports=A_()),Ef.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xm;function C_(){if(Xm)return Ca;Xm=1;var r=Zd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,h,p){var g,y={},S=null,M=null;p!==void 0&&(S=""+p),h.key!==void 0&&(S=""+h.key),h.ref!==void 0&&(M=h.ref);for(g in h)s.call(h,g)&&!l.hasOwnProperty(g)&&(y[g]=h[g]);if(f&&f.defaultProps)for(g in h=f.defaultProps,h)y[g]===void 0&&(y[g]=h[g]);return{$$typeof:e,type:f,key:S,ref:M,props:y,_owner:a.current}}return Ca.Fragment=t,Ca.jsx=u,Ca.jsxs=u,Ca}var jm;function R_(){return jm||(jm=1,xf.exports=C_()),xf.exports}var Ne=R_(),nc={},wf={exports:{}},ei={},Tf={exports:{}},Af={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ym;function b_(){return Ym||(Ym=1,(function(r){function e(H,le){var ae=H.length;H.push(le);e:for(;0<ae;){var k=ae-1>>>1,ie=H[k];if(0<a(ie,le))H[k]=le,H[ae]=ie,ae=k;else break e}}function t(H){return H.length===0?null:H[0]}function s(H){if(H.length===0)return null;var le=H[0],ae=H.pop();if(ae!==le){H[0]=ae;e:for(var k=0,ie=H.length,Ue=ie>>>1;k<Ue;){var J=2*(k+1)-1,ce=H[J],Ee=J+1,_e=H[Ee];if(0>a(ce,ae))Ee<ie&&0>a(_e,ce)?(H[k]=_e,H[Ee]=ae,k=Ee):(H[k]=ce,H[J]=ae,k=J);else if(Ee<ie&&0>a(_e,ae))H[k]=_e,H[Ee]=ae,k=Ee;else break e}}return le}function a(H,le){var ae=H.sortIndex-le.sortIndex;return ae!==0?ae:H.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();r.unstable_now=function(){return u.now()-f}}var h=[],p=[],g=1,y=null,S=3,M=!1,x=!1,w=!1,v=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(H){for(var le=t(p);le!==null;){if(le.callback===null)s(p);else if(le.startTime<=H)s(p),le.sortIndex=le.expirationTime,e(h,le);else break;le=t(p)}}function A(H){if(w=!1,L(H),!x)if(t(h)!==null)x=!0,re(B);else{var le=t(p);le!==null&&pe(A,le.startTime-H)}}function B(H,le){x=!1,w&&(w=!1,m(F),F=-1),M=!0;var ae=S;try{for(L(le),y=t(h);y!==null&&(!(y.expirationTime>le)||H&&!O());){var k=y.callback;if(typeof k=="function"){y.callback=null,S=y.priorityLevel;var ie=k(y.expirationTime<=le);le=r.unstable_now(),typeof ie=="function"?y.callback=ie:y===t(h)&&s(h),L(le)}else s(h);y=t(h)}if(y!==null)var Ue=!0;else{var J=t(p);J!==null&&pe(A,J.startTime-le),Ue=!1}return Ue}finally{y=null,S=ae,M=!1}}var I=!1,D=null,F=-1,b=5,C=-1;function O(){return!(r.unstable_now()-C<b)}function $(){if(D!==null){var H=r.unstable_now();C=H;var le=!0;try{le=D(!0,H)}finally{le?X():(I=!1,D=null)}}else I=!1}var X;if(typeof R=="function")X=function(){R($)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,de=se.port2;se.port1.onmessage=$,X=function(){de.postMessage(null)}}else X=function(){v($,0)};function re(H){D=H,I||(I=!0,X())}function pe(H,le){F=v(function(){H(r.unstable_now())},le)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(H){H.callback=null},r.unstable_continueExecution=function(){x||M||(x=!0,re(B))},r.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<H?Math.floor(1e3/H):5},r.unstable_getCurrentPriorityLevel=function(){return S},r.unstable_getFirstCallbackNode=function(){return t(h)},r.unstable_next=function(H){switch(S){case 1:case 2:case 3:var le=3;break;default:le=S}var ae=S;S=le;try{return H()}finally{S=ae}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(H,le){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var ae=S;S=H;try{return le()}finally{S=ae}},r.unstable_scheduleCallback=function(H,le,ae){var k=r.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?k+ae:k):ae=k,H){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=ae+ie,H={id:g++,callback:le,priorityLevel:H,startTime:ae,expirationTime:ie,sortIndex:-1},ae>k?(H.sortIndex=ae,e(p,H),t(h)===null&&H===t(p)&&(w?(m(F),F=-1):w=!0,pe(A,ae-k))):(H.sortIndex=ie,e(h,H),x||M||(x=!0,re(B))),H},r.unstable_shouldYield=O,r.unstable_wrapCallback=function(H){var le=S;return function(){var ae=S;S=le;try{return H.apply(this,arguments)}finally{S=ae}}}})(Af)),Af}var qm;function P_(){return qm||(qm=1,Tf.exports=b_()),Tf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $m;function L_(){if($m)return ei;$m=1;var r=Zd(),e=P_();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,a={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(a[n]=i,n=0;n<i.length;n++)s.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},y={};function S(n){return h.call(y,n)?!0:h.call(g,n)?!1:p.test(n)?y[n]=!0:(g[n]=!0,!1)}function M(n,i,o,c){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function x(n,i,o,c){if(i===null||typeof i>"u"||M(n,i,o,c))return!0;if(c)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function w(n,i,o,c,d,_,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=_,this.removeEmptyString=E}var v={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){v[n]=new w(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];v[i]=new w(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){v[n]=new w(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){v[n]=new w(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){v[n]=new w(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){v[n]=new w(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){v[n]=new w(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){v[n]=new w(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){v[n]=new w(n,5,!1,n.toLowerCase(),null,!1,!1)});var m=/[\-:]([a-z])/g;function R(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(m,R);v[i]=new w(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(m,R);v[i]=new w(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(m,R);v[i]=new w(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){v[n]=new w(n,1,!1,n.toLowerCase(),null,!1,!1)}),v.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){v[n]=new w(n,1,!1,n.toLowerCase(),null,!0,!0)});function L(n,i,o,c){var d=v.hasOwnProperty(i)?v[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(x(i,o,d,c)&&(o=null),c||d===null?S(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):d.mustUseProperty?n[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,c=d.attributeNamespace,o===null?n.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,c?n.setAttributeNS(c,i,o):n.setAttribute(i,o))))}var A=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,B=Symbol.for("react.element"),I=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),F=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),O=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),se=Symbol.for("react.suspense_list"),de=Symbol.for("react.memo"),re=Symbol.for("react.lazy"),pe=Symbol.for("react.offscreen"),H=Symbol.iterator;function le(n){return n===null||typeof n!="object"?null:(n=H&&n[H]||n["@@iterator"],typeof n=="function"?n:null)}var ae=Object.assign,k;function ie(n){if(k===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);k=i&&i[1]||""}return`
`+k+n}var Ue=!1;function J(n,i){if(!n||Ue)return"";Ue=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ee){var c=ee}Reflect.construct(n,[],i)}else{try{i.call()}catch(ee){c=ee}n.call(i.prototype)}else{try{throw Error()}catch(ee){c=ee}n()}}catch(ee){if(ee&&c&&typeof ee.stack=="string"){for(var d=ee.stack.split(`
`),_=c.stack.split(`
`),E=d.length-1,U=_.length-1;1<=E&&0<=U&&d[E]!==_[U];)U--;for(;1<=E&&0<=U;E--,U--)if(d[E]!==_[U]){if(E!==1||U!==1)do if(E--,U--,0>U||d[E]!==_[U]){var z=`
`+d[E].replace(" at new "," at ");return n.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",n.displayName)),z}while(1<=E&&0<=U);break}}}finally{Ue=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?ie(n):""}function ce(n){switch(n.tag){case 5:return ie(n.type);case 16:return ie("Lazy");case 13:return ie("Suspense");case 19:return ie("SuspenseList");case 0:case 2:case 15:return n=J(n.type,!1),n;case 11:return n=J(n.type.render,!1),n;case 1:return n=J(n.type,!0),n;default:return""}}function Ee(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case D:return"Fragment";case I:return"Portal";case b:return"Profiler";case F:return"StrictMode";case X:return"Suspense";case se:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case O:return(n.displayName||"Context")+".Consumer";case C:return(n._context.displayName||"Context")+".Provider";case $:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case de:return i=n.displayName||null,i!==null?i:Ee(n.type)||"Memo";case re:i=n._payload,n=n._init;try{return Ee(n(i))}catch{}}return null}function _e(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ee(i);case 8:return i===F?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ae(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Fe(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Je(n){var i=Fe(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,_=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(E){c=""+E,_.call(this,E)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(E){c=""+E},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Nt(n){n._valueTracker||(n._valueTracker=Je(n))}function yt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),c="";return n&&(c=Fe(n)?n.checked?"true":"false":n.value),n=c,n!==o?(i.setValue(n),!0):!1}function Bt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Y(n,i){var o=i.checked;return ae({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function kn(n,i){var o=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;o=Ae(i.value!=null?i.value:o),n._wrapperState={initialChecked:c,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function _t(n,i){i=i.checked,i!=null&&L(n,"checked",i,!1)}function mt(n,i){_t(n,i);var o=Ae(i.value),c=i.type;if(o!=null)c==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Lt(n,i.type,o):i.hasOwnProperty("defaultValue")&&Lt(n,i.type,Ae(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Ke(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function Lt(n,i,o){(i!=="number"||Bt(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var $e=Array.isArray;function N(n,i,o,c){if(n=n.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<n.length;o++)d=i.hasOwnProperty("$"+n[o].value),n[o].selected!==d&&(n[o].selected=d),d&&c&&(n[o].defaultSelected=!0)}else{for(o=""+Ae(o),i=null,d=0;d<n.length;d++){if(n[d].value===o){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function T(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ae({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Z(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if($e(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:Ae(o)}}function he(n,i){var o=Ae(i.value),c=Ae(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),c!=null&&(n.defaultValue=""+c)}function ge(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function ue(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function We(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?ue(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ce,ke=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,o,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Ce=Ce||document.createElement("div"),Ce.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ce.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function ht(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ze=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(n){ze.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Me[i]=Me[n]})});function et(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Me.hasOwnProperty(n)&&Me[n]?(""+i).trim():i+"px"}function nt(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var c=o.indexOf("--")===0,d=et(o,i[o],c);o==="float"&&(o="cssFloat"),c?n.setProperty(o,d):n[o]=d}}var Be=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gt(n,i){if(i){if(Be[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function ot(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pt=null;function G(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Re=null,oe=null,fe=null;function Ie(n){if(n=da(n)){if(typeof Re!="function")throw Error(t(280));var i=n.stateNode;i&&(i=vl(i),Re(n.stateNode,n.type,i))}}function Le(n){oe?fe?fe.push(n):fe=[n]:oe=n}function at(){if(oe){var n=oe,i=fe;if(fe=oe=null,Ie(n),i)for(n=0;n<i.length;n++)Ie(i[n])}}function Vt(n,i){return n(i)}function fn(){}var xt=!1;function Yn(n,i,o){if(xt)return n(i,o);xt=!0;try{return Vt(n,i,o)}finally{xt=!1,(oe!==null||fe!==null)&&(fn(),at())}}function On(n,i){var o=n.stateNode;if(o===null)return null;var c=vl(o);if(c===null)return null;o=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var Hs=!1;if(f)try{var Er={};Object.defineProperty(Er,"passive",{get:function(){Hs=!0}}),window.addEventListener("test",Er,Er),window.removeEventListener("test",Er,Er)}catch{Hs=!1}function Ji(n,i,o,c,d,_,E,U,z){var ee=Array.prototype.slice.call(arguments,3);try{i.apply(o,ee)}catch(ve){this.onError(ve)}}var er=!1,os=null,as=!1,wr=null,Qa={onError:function(n){er=!0,os=n}};function Vs(n,i,o,c,d,_,E,U,z){er=!1,os=null,Ji.apply(Qa,arguments)}function Za(n,i,o,c,d,_,E,U,z){if(Vs.apply(this,arguments),er){if(er){var ee=os;er=!1,os=null}else throw Error(t(198));as||(as=!0,wr=ee)}}function Gi(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function Ja(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function el(n){if(Gi(n)!==n)throw Error(t(188))}function Gc(n){var i=n.alternate;if(!i){if(i=Gi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,c=i;;){var d=o.return;if(d===null)break;var _=d.alternate;if(_===null){if(c=d.return,c!==null){o=c;continue}break}if(d.child===_.child){for(_=d.child;_;){if(_===o)return el(d),n;if(_===c)return el(d),i;_=_.sibling}throw Error(t(188))}if(o.return!==c.return)o=d,c=_;else{for(var E=!1,U=d.child;U;){if(U===o){E=!0,o=d,c=_;break}if(U===c){E=!0,c=d,o=_;break}U=U.sibling}if(!E){for(U=_.child;U;){if(U===o){E=!0,o=_,c=d;break}if(U===c){E=!0,c=_,o=d;break}U=U.sibling}if(!E)throw Error(t(189))}}if(o.alternate!==c)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function P(n){return n=Gc(n),n!==null?W(n):null}function W(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=W(n);if(i!==null)return i;n=n.sibling}return null}var te=e.unstable_scheduleCallback,ne=e.unstable_cancelCallback,j=e.unstable_shouldYield,Te=e.unstable_requestPaint,xe=e.unstable_now,Xe=e.unstable_getCurrentPriorityLevel,Ve=e.unstable_ImmediatePriority,it=e.unstable_UserBlockingPriority,st=e.unstable_NormalPriority,je=e.unstable_LowPriority,Mt=e.unstable_IdlePriority,Rt=null,St=null;function Cn(n){if(St&&typeof St.onCommitFiberRoot=="function")try{St.onCommitFiberRoot(Rt,n,void 0,(n.current.flags&128)===128)}catch{}}var ct=Math.clz32?Math.clz32:At,qe=Math.log,Ei=Math.LN2;function At(n){return n>>>=0,n===0?32:31-(qe(n)/Ei|0)|0}var Rn=64,wi=4194304;function dn(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Wi(n,i){var o=n.pendingLanes;if(o===0)return 0;var c=0,d=n.suspendedLanes,_=n.pingedLanes,E=o&268435455;if(E!==0){var U=E&~d;U!==0?c=dn(U):(_&=E,_!==0&&(c=dn(_)))}else E=o&~d,E!==0?c=dn(E):_!==0&&(c=dn(_));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,_=i&-i,d>=_||d===16&&(_&4194240)!==0))return i;if((c&4)!==0&&(c|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)o=31-ct(i),d=1<<o,c|=n[o],i&=~d;return c}function kt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function di(n,i){for(var o=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,_=n.pendingLanes;0<_;){var E=31-ct(_),U=1<<E,z=d[E];z===-1?((U&o)===0||(U&c)!==0)&&(d[E]=kt(U,i)):z<=i&&(n.expiredLanes|=U),_&=~U}}function tr(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function zn(){var n=Rn;return Rn<<=1,(Rn&4194240)===0&&(Rn=64),n}function hi(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function qn(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-ct(i),n[i]=o}function tl(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<o;){var d=31-ct(o),_=1<<d;i[d]=0,c[d]=-1,n[d]=-1,o&=~_}}function Wc(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var c=31-ct(o),d=1<<c;d&i|n[c]&i&&(n[c]|=i),o&=~d}}var It=0;function Mh(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var xh,Xc,Eh,wh,Th,jc=!1,nl=[],Tr=null,Ar=null,Cr=null,Ko=new Map,Qo=new Map,Rr=[],j0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ah(n,i){switch(n){case"focusin":case"focusout":Tr=null;break;case"dragenter":case"dragleave":Ar=null;break;case"mouseover":case"mouseout":Cr=null;break;case"pointerover":case"pointerout":Ko.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qo.delete(i.pointerId)}}function Zo(n,i,o,c,d,_){return n===null||n.nativeEvent!==_?(n={blockedOn:i,domEventName:o,eventSystemFlags:c,nativeEvent:_,targetContainers:[d]},i!==null&&(i=da(i),i!==null&&Xc(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function Y0(n,i,o,c,d){switch(i){case"focusin":return Tr=Zo(Tr,n,i,o,c,d),!0;case"dragenter":return Ar=Zo(Ar,n,i,o,c,d),!0;case"mouseover":return Cr=Zo(Cr,n,i,o,c,d),!0;case"pointerover":var _=d.pointerId;return Ko.set(_,Zo(Ko.get(_)||null,n,i,o,c,d)),!0;case"gotpointercapture":return _=d.pointerId,Qo.set(_,Zo(Qo.get(_)||null,n,i,o,c,d)),!0}return!1}function Ch(n){var i=ls(n.target);if(i!==null){var o=Gi(i);if(o!==null){if(i=o.tag,i===13){if(i=Ja(o),i!==null){n.blockedOn=i,Th(n.priority,function(){Eh(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function il(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=qc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var c=new o.constructor(o.type,o);Pt=c,o.target.dispatchEvent(c),Pt=null}else return i=da(o),i!==null&&Xc(i),n.blockedOn=o,!1;i.shift()}return!0}function Rh(n,i,o){il(n)&&o.delete(i)}function q0(){jc=!1,Tr!==null&&il(Tr)&&(Tr=null),Ar!==null&&il(Ar)&&(Ar=null),Cr!==null&&il(Cr)&&(Cr=null),Ko.forEach(Rh),Qo.forEach(Rh)}function Jo(n,i){n.blockedOn===i&&(n.blockedOn=null,jc||(jc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,q0)))}function ea(n){function i(d){return Jo(d,n)}if(0<nl.length){Jo(nl[0],n);for(var o=1;o<nl.length;o++){var c=nl[o];c.blockedOn===n&&(c.blockedOn=null)}}for(Tr!==null&&Jo(Tr,n),Ar!==null&&Jo(Ar,n),Cr!==null&&Jo(Cr,n),Ko.forEach(i),Qo.forEach(i),o=0;o<Rr.length;o++)c=Rr[o],c.blockedOn===n&&(c.blockedOn=null);for(;0<Rr.length&&(o=Rr[0],o.blockedOn===null);)Ch(o),o.blockedOn===null&&Rr.shift()}var Gs=A.ReactCurrentBatchConfig,rl=!0;function $0(n,i,o,c){var d=It,_=Gs.transition;Gs.transition=null;try{It=1,Yc(n,i,o,c)}finally{It=d,Gs.transition=_}}function K0(n,i,o,c){var d=It,_=Gs.transition;Gs.transition=null;try{It=4,Yc(n,i,o,c)}finally{It=d,Gs.transition=_}}function Yc(n,i,o,c){if(rl){var d=qc(n,i,o,c);if(d===null)fu(n,i,c,sl,o),Ah(n,c);else if(Y0(d,n,i,o,c))c.stopPropagation();else if(Ah(n,c),i&4&&-1<j0.indexOf(n)){for(;d!==null;){var _=da(d);if(_!==null&&xh(_),_=qc(n,i,o,c),_===null&&fu(n,i,c,sl,o),_===d)break;d=_}d!==null&&c.stopPropagation()}else fu(n,i,c,null,o)}}var sl=null;function qc(n,i,o,c){if(sl=null,n=G(c),n=ls(n),n!==null)if(i=Gi(n),i===null)n=null;else if(o=i.tag,o===13){if(n=Ja(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return sl=n,null}function bh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xe()){case Ve:return 1;case it:return 4;case st:case je:return 16;case Mt:return 536870912;default:return 16}default:return 16}}var br=null,$c=null,ol=null;function Ph(){if(ol)return ol;var n,i=$c,o=i.length,c,d="value"in br?br.value:br.textContent,_=d.length;for(n=0;n<o&&i[n]===d[n];n++);var E=o-n;for(c=1;c<=E&&i[o-c]===d[_-c];c++);return ol=d.slice(n,1<c?1-c:void 0)}function al(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function ll(){return!0}function Lh(){return!1}function ii(n){function i(o,c,d,_,E){this._reactName=o,this._targetInst=d,this.type=c,this.nativeEvent=_,this.target=E,this.currentTarget=null;for(var U in n)n.hasOwnProperty(U)&&(o=n[U],this[U]=o?o(_):_[U]);return this.isDefaultPrevented=(_.defaultPrevented!=null?_.defaultPrevented:_.returnValue===!1)?ll:Lh,this.isPropagationStopped=Lh,this}return ae(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ll)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ll)},persist:function(){},isPersistent:ll}),i}var Ws={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kc=ii(Ws),ta=ae({},Ws,{view:0,detail:0}),Q0=ii(ta),Qc,Zc,na,cl=ae({},ta,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:eu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==na&&(na&&n.type==="mousemove"?(Qc=n.screenX-na.screenX,Zc=n.screenY-na.screenY):Zc=Qc=0,na=n),Qc)},movementY:function(n){return"movementY"in n?n.movementY:Zc}}),Ih=ii(cl),Z0=ae({},cl,{dataTransfer:0}),J0=ii(Z0),ev=ae({},ta,{relatedTarget:0}),Jc=ii(ev),tv=ae({},Ws,{animationName:0,elapsedTime:0,pseudoElement:0}),nv=ii(tv),iv=ae({},Ws,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),rv=ii(iv),sv=ae({},Ws,{data:0}),Dh=ii(sv),ov={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},av={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cv(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=lv[n])?!!i[n]:!1}function eu(){return cv}var uv=ae({},ta,{key:function(n){if(n.key){var i=ov[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=al(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?av[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:eu,charCode:function(n){return n.type==="keypress"?al(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?al(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),fv=ii(uv),dv=ae({},cl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nh=ii(dv),hv=ae({},ta,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:eu}),pv=ii(hv),mv=ae({},Ws,{propertyName:0,elapsedTime:0,pseudoElement:0}),gv=ii(mv),vv=ae({},cl,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),_v=ii(vv),yv=[9,13,27,32],tu=f&&"CompositionEvent"in window,ia=null;f&&"documentMode"in document&&(ia=document.documentMode);var Sv=f&&"TextEvent"in window&&!ia,Uh=f&&(!tu||ia&&8<ia&&11>=ia),Fh=" ",kh=!1;function Oh(n,i){switch(n){case"keyup":return yv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Xs=!1;function Mv(n,i){switch(n){case"compositionend":return zh(i);case"keypress":return i.which!==32?null:(kh=!0,Fh);case"textInput":return n=i.data,n===Fh&&kh?null:n;default:return null}}function xv(n,i){if(Xs)return n==="compositionend"||!tu&&Oh(n,i)?(n=Ph(),ol=$c=br=null,Xs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Uh&&i.locale!=="ko"?null:i.data;default:return null}}var Ev={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Ev[n.type]:i==="textarea"}function Hh(n,i,o,c){Le(c),i=pl(i,"onChange"),0<i.length&&(o=new Kc("onChange","change",null,o,c),n.push({event:o,listeners:i}))}var ra=null,sa=null;function wv(n){sp(n,0)}function ul(n){var i=Ks(n);if(yt(i))return n}function Tv(n,i){if(n==="change")return i}var Vh=!1;if(f){var nu;if(f){var iu="oninput"in document;if(!iu){var Gh=document.createElement("div");Gh.setAttribute("oninput","return;"),iu=typeof Gh.oninput=="function"}nu=iu}else nu=!1;Vh=nu&&(!document.documentMode||9<document.documentMode)}function Wh(){ra&&(ra.detachEvent("onpropertychange",Xh),sa=ra=null)}function Xh(n){if(n.propertyName==="value"&&ul(sa)){var i=[];Hh(i,sa,n,G(n)),Yn(wv,i)}}function Av(n,i,o){n==="focusin"?(Wh(),ra=i,sa=o,ra.attachEvent("onpropertychange",Xh)):n==="focusout"&&Wh()}function Cv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ul(sa)}function Rv(n,i){if(n==="click")return ul(i)}function bv(n,i){if(n==="input"||n==="change")return ul(i)}function Pv(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Ti=typeof Object.is=="function"?Object.is:Pv;function oa(n,i){if(Ti(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),c=Object.keys(i);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var d=o[c];if(!h.call(i,d)||!Ti(n[d],i[d]))return!1}return!0}function jh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Yh(n,i){var o=jh(n);n=0;for(var c;o;){if(o.nodeType===3){if(c=n+o.textContent.length,n<=i&&c>=i)return{node:o,offset:i-n};n=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=jh(o)}}function qh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?qh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function $h(){for(var n=window,i=Bt();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=Bt(n.document)}return i}function ru(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Lv(n){var i=$h(),o=n.focusedElem,c=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&qh(o.ownerDocument.documentElement,o)){if(c!==null&&ru(o)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=o.textContent.length,_=Math.min(c.start,d);c=c.end===void 0?_:Math.min(c.end,d),!n.extend&&_>c&&(d=c,c=_,_=d),d=Yh(o,_);var E=Yh(o,c);d&&E&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==E.node||n.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),_>c?(n.addRange(i),n.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Iv=f&&"documentMode"in document&&11>=document.documentMode,js=null,su=null,aa=null,ou=!1;function Kh(n,i,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;ou||js==null||js!==Bt(c)||(c=js,"selectionStart"in c&&ru(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),aa&&oa(aa,c)||(aa=c,c=pl(su,"onSelect"),0<c.length&&(i=new Kc("onSelect","select",null,i,o),n.push({event:i,listeners:c}),i.target=js)))}function fl(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var Ys={animationend:fl("Animation","AnimationEnd"),animationiteration:fl("Animation","AnimationIteration"),animationstart:fl("Animation","AnimationStart"),transitionend:fl("Transition","TransitionEnd")},au={},Qh={};f&&(Qh=document.createElement("div").style,"AnimationEvent"in window||(delete Ys.animationend.animation,delete Ys.animationiteration.animation,delete Ys.animationstart.animation),"TransitionEvent"in window||delete Ys.transitionend.transition);function dl(n){if(au[n])return au[n];if(!Ys[n])return n;var i=Ys[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in Qh)return au[n]=i[o];return n}var Zh=dl("animationend"),Jh=dl("animationiteration"),ep=dl("animationstart"),tp=dl("transitionend"),np=new Map,ip="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pr(n,i){np.set(n,i),l(i,[n])}for(var lu=0;lu<ip.length;lu++){var cu=ip[lu],Dv=cu.toLowerCase(),Nv=cu[0].toUpperCase()+cu.slice(1);Pr(Dv,"on"+Nv)}Pr(Zh,"onAnimationEnd"),Pr(Jh,"onAnimationIteration"),Pr(ep,"onAnimationStart"),Pr("dblclick","onDoubleClick"),Pr("focusin","onFocus"),Pr("focusout","onBlur"),Pr(tp,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var la="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Uv=new Set("cancel close invalid load scroll toggle".split(" ").concat(la));function rp(n,i,o){var c=n.type||"unknown-event";n.currentTarget=o,Za(c,i,void 0,n),n.currentTarget=null}function sp(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var c=n[o],d=c.event;c=c.listeners;e:{var _=void 0;if(i)for(var E=c.length-1;0<=E;E--){var U=c[E],z=U.instance,ee=U.currentTarget;if(U=U.listener,z!==_&&d.isPropagationStopped())break e;rp(d,U,ee),_=z}else for(E=0;E<c.length;E++){if(U=c[E],z=U.instance,ee=U.currentTarget,U=U.listener,z!==_&&d.isPropagationStopped())break e;rp(d,U,ee),_=z}}}if(as)throw n=wr,as=!1,wr=null,n}function Gt(n,i){var o=i[vu];o===void 0&&(o=i[vu]=new Set);var c=n+"__bubble";o.has(c)||(op(i,n,2,!1),o.add(c))}function uu(n,i,o){var c=0;i&&(c|=4),op(o,n,c,i)}var hl="_reactListening"+Math.random().toString(36).slice(2);function ca(n){if(!n[hl]){n[hl]=!0,s.forEach(function(o){o!=="selectionchange"&&(Uv.has(o)||uu(o,!1,n),uu(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[hl]||(i[hl]=!0,uu("selectionchange",!1,i))}}function op(n,i,o,c){switch(bh(i)){case 1:var d=$0;break;case 4:d=K0;break;default:d=Yc}o=d.bind(null,i,o,n),d=void 0,!Hs||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,o,{capture:!0,passive:d}):n.addEventListener(i,o,!0):d!==void 0?n.addEventListener(i,o,{passive:d}):n.addEventListener(i,o,!1)}function fu(n,i,o,c,d){var _=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var E=c.tag;if(E===3||E===4){var U=c.stateNode.containerInfo;if(U===d||U.nodeType===8&&U.parentNode===d)break;if(E===4)for(E=c.return;E!==null;){var z=E.tag;if((z===3||z===4)&&(z=E.stateNode.containerInfo,z===d||z.nodeType===8&&z.parentNode===d))return;E=E.return}for(;U!==null;){if(E=ls(U),E===null)return;if(z=E.tag,z===5||z===6){c=_=E;continue e}U=U.parentNode}}c=c.return}Yn(function(){var ee=_,ve=G(o),ye=[];e:{var me=np.get(n);if(me!==void 0){var De=Kc,He=n;switch(n){case"keypress":if(al(o)===0)break e;case"keydown":case"keyup":De=fv;break;case"focusin":He="focus",De=Jc;break;case"focusout":He="blur",De=Jc;break;case"beforeblur":case"afterblur":De=Jc;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":De=Ih;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":De=J0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":De=pv;break;case Zh:case Jh:case ep:De=nv;break;case tp:De=gv;break;case"scroll":De=Q0;break;case"wheel":De=_v;break;case"copy":case"cut":case"paste":De=rv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":De=Nh}var Ge=(i&4)!==0,sn=!Ge&&n==="scroll",q=Ge?me!==null?me+"Capture":null:me;Ge=[];for(var V=ee,K;V!==null;){K=V;var we=K.stateNode;if(K.tag===5&&we!==null&&(K=we,q!==null&&(we=On(V,q),we!=null&&Ge.push(ua(V,we,K)))),sn)break;V=V.return}0<Ge.length&&(me=new De(me,He,null,o,ve),ye.push({event:me,listeners:Ge}))}}if((i&7)===0){e:{if(me=n==="mouseover"||n==="pointerover",De=n==="mouseout"||n==="pointerout",me&&o!==Pt&&(He=o.relatedTarget||o.fromElement)&&(ls(He)||He[nr]))break e;if((De||me)&&(me=ve.window===ve?ve:(me=ve.ownerDocument)?me.defaultView||me.parentWindow:window,De?(He=o.relatedTarget||o.toElement,De=ee,He=He?ls(He):null,He!==null&&(sn=Gi(He),He!==sn||He.tag!==5&&He.tag!==6)&&(He=null)):(De=null,He=ee),De!==He)){if(Ge=Ih,we="onMouseLeave",q="onMouseEnter",V="mouse",(n==="pointerout"||n==="pointerover")&&(Ge=Nh,we="onPointerLeave",q="onPointerEnter",V="pointer"),sn=De==null?me:Ks(De),K=He==null?me:Ks(He),me=new Ge(we,V+"leave",De,o,ve),me.target=sn,me.relatedTarget=K,we=null,ls(ve)===ee&&(Ge=new Ge(q,V+"enter",He,o,ve),Ge.target=K,Ge.relatedTarget=sn,we=Ge),sn=we,De&&He)t:{for(Ge=De,q=He,V=0,K=Ge;K;K=qs(K))V++;for(K=0,we=q;we;we=qs(we))K++;for(;0<V-K;)Ge=qs(Ge),V--;for(;0<K-V;)q=qs(q),K--;for(;V--;){if(Ge===q||q!==null&&Ge===q.alternate)break t;Ge=qs(Ge),q=qs(q)}Ge=null}else Ge=null;De!==null&&ap(ye,me,De,Ge,!1),He!==null&&sn!==null&&ap(ye,sn,He,Ge,!0)}}e:{if(me=ee?Ks(ee):window,De=me.nodeName&&me.nodeName.toLowerCase(),De==="select"||De==="input"&&me.type==="file")var Ye=Tv;else if(Bh(me))if(Vh)Ye=bv;else{Ye=Cv;var Qe=Av}else(De=me.nodeName)&&De.toLowerCase()==="input"&&(me.type==="checkbox"||me.type==="radio")&&(Ye=Rv);if(Ye&&(Ye=Ye(n,ee))){Hh(ye,Ye,o,ve);break e}Qe&&Qe(n,me,ee),n==="focusout"&&(Qe=me._wrapperState)&&Qe.controlled&&me.type==="number"&&Lt(me,"number",me.value)}switch(Qe=ee?Ks(ee):window,n){case"focusin":(Bh(Qe)||Qe.contentEditable==="true")&&(js=Qe,su=ee,aa=null);break;case"focusout":aa=su=js=null;break;case"mousedown":ou=!0;break;case"contextmenu":case"mouseup":case"dragend":ou=!1,Kh(ye,o,ve);break;case"selectionchange":if(Iv)break;case"keydown":case"keyup":Kh(ye,o,ve)}var Ze;if(tu)e:{switch(n){case"compositionstart":var rt="onCompositionStart";break e;case"compositionend":rt="onCompositionEnd";break e;case"compositionupdate":rt="onCompositionUpdate";break e}rt=void 0}else Xs?Oh(n,o)&&(rt="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(rt="onCompositionStart");rt&&(Uh&&o.locale!=="ko"&&(Xs||rt!=="onCompositionStart"?rt==="onCompositionEnd"&&Xs&&(Ze=Ph()):(br=ve,$c="value"in br?br.value:br.textContent,Xs=!0)),Qe=pl(ee,rt),0<Qe.length&&(rt=new Dh(rt,n,null,o,ve),ye.push({event:rt,listeners:Qe}),Ze?rt.data=Ze:(Ze=zh(o),Ze!==null&&(rt.data=Ze)))),(Ze=Sv?Mv(n,o):xv(n,o))&&(ee=pl(ee,"onBeforeInput"),0<ee.length&&(ve=new Dh("onBeforeInput","beforeinput",null,o,ve),ye.push({event:ve,listeners:ee}),ve.data=Ze))}sp(ye,i)})}function ua(n,i,o){return{instance:n,listener:i,currentTarget:o}}function pl(n,i){for(var o=i+"Capture",c=[];n!==null;){var d=n,_=d.stateNode;d.tag===5&&_!==null&&(d=_,_=On(n,o),_!=null&&c.unshift(ua(n,_,d)),_=On(n,i),_!=null&&c.push(ua(n,_,d))),n=n.return}return c}function qs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function ap(n,i,o,c,d){for(var _=i._reactName,E=[];o!==null&&o!==c;){var U=o,z=U.alternate,ee=U.stateNode;if(z!==null&&z===c)break;U.tag===5&&ee!==null&&(U=ee,d?(z=On(o,_),z!=null&&E.unshift(ua(o,z,U))):d||(z=On(o,_),z!=null&&E.push(ua(o,z,U)))),o=o.return}E.length!==0&&n.push({event:i,listeners:E})}var Fv=/\r\n?/g,kv=/\u0000|\uFFFD/g;function lp(n){return(typeof n=="string"?n:""+n).replace(Fv,`
`).replace(kv,"")}function ml(n,i,o){if(i=lp(i),lp(n)!==i&&o)throw Error(t(425))}function gl(){}var du=null,hu=null;function pu(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var mu=typeof setTimeout=="function"?setTimeout:void 0,Ov=typeof clearTimeout=="function"?clearTimeout:void 0,cp=typeof Promise=="function"?Promise:void 0,zv=typeof queueMicrotask=="function"?queueMicrotask:typeof cp<"u"?function(n){return cp.resolve(null).then(n).catch(Bv)}:mu;function Bv(n){setTimeout(function(){throw n})}function gu(n,i){var o=i,c=0;do{var d=o.nextSibling;if(n.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(c===0){n.removeChild(d),ea(i);return}c--}else o!=="$"&&o!=="$?"&&o!=="$!"||c++;o=d}while(o);ea(i)}function Lr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function up(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var $s=Math.random().toString(36).slice(2),Xi="__reactFiber$"+$s,fa="__reactProps$"+$s,nr="__reactContainer$"+$s,vu="__reactEvents$"+$s,Hv="__reactListeners$"+$s,Vv="__reactHandles$"+$s;function ls(n){var i=n[Xi];if(i)return i;for(var o=n.parentNode;o;){if(i=o[nr]||o[Xi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=up(n);n!==null;){if(o=n[Xi])return o;n=up(n)}return i}n=o,o=n.parentNode}return null}function da(n){return n=n[Xi]||n[nr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ks(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function vl(n){return n[fa]||null}var _u=[],Qs=-1;function Ir(n){return{current:n}}function Wt(n){0>Qs||(n.current=_u[Qs],_u[Qs]=null,Qs--)}function Ht(n,i){Qs++,_u[Qs]=n.current,n.current=i}var Dr={},bn=Ir(Dr),$n=Ir(!1),cs=Dr;function Zs(n,i){var o=n.type.contextTypes;if(!o)return Dr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},_;for(_ in o)d[_]=i[_];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Kn(n){return n=n.childContextTypes,n!=null}function _l(){Wt($n),Wt(bn)}function fp(n,i,o){if(bn.current!==Dr)throw Error(t(168));Ht(bn,i),Ht($n,o)}function dp(n,i,o){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return o;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,_e(n)||"Unknown",d));return ae({},o,c)}function yl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Dr,cs=bn.current,Ht(bn,n),Ht($n,$n.current),!0}function hp(n,i,o){var c=n.stateNode;if(!c)throw Error(t(169));o?(n=dp(n,i,cs),c.__reactInternalMemoizedMergedChildContext=n,Wt($n),Wt(bn),Ht(bn,n)):Wt($n),Ht($n,o)}var ir=null,Sl=!1,yu=!1;function pp(n){ir===null?ir=[n]:ir.push(n)}function Gv(n){Sl=!0,pp(n)}function Nr(){if(!yu&&ir!==null){yu=!0;var n=0,i=It;try{var o=ir;for(It=1;n<o.length;n++){var c=o[n];do c=c(!0);while(c!==null)}ir=null,Sl=!1}catch(d){throw ir!==null&&(ir=ir.slice(n+1)),te(Ve,Nr),d}finally{It=i,yu=!1}}return null}var Js=[],eo=0,Ml=null,xl=0,pi=[],mi=0,us=null,rr=1,sr="";function fs(n,i){Js[eo++]=xl,Js[eo++]=Ml,Ml=n,xl=i}function mp(n,i,o){pi[mi++]=rr,pi[mi++]=sr,pi[mi++]=us,us=n;var c=rr;n=sr;var d=32-ct(c)-1;c&=~(1<<d),o+=1;var _=32-ct(i)+d;if(30<_){var E=d-d%5;_=(c&(1<<E)-1).toString(32),c>>=E,d-=E,rr=1<<32-ct(i)+d|o<<d|c,sr=_+n}else rr=1<<_|o<<d|c,sr=n}function Su(n){n.return!==null&&(fs(n,1),mp(n,1,0))}function Mu(n){for(;n===Ml;)Ml=Js[--eo],Js[eo]=null,xl=Js[--eo],Js[eo]=null;for(;n===us;)us=pi[--mi],pi[mi]=null,sr=pi[--mi],pi[mi]=null,rr=pi[--mi],pi[mi]=null}var ri=null,si=null,qt=!1,Ai=null;function gp(n,i){var o=yi(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function vp(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,ri=n,si=Lr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,ri=n,si=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=us!==null?{id:rr,overflow:sr}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=yi(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,ri=n,si=null,!0):!1;default:return!1}}function xu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Eu(n){if(qt){var i=si;if(i){var o=i;if(!vp(n,i)){if(xu(n))throw Error(t(418));i=Lr(o.nextSibling);var c=ri;i&&vp(n,i)?gp(c,o):(n.flags=n.flags&-4097|2,qt=!1,ri=n)}}else{if(xu(n))throw Error(t(418));n.flags=n.flags&-4097|2,qt=!1,ri=n}}}function _p(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;ri=n}function El(n){if(n!==ri)return!1;if(!qt)return _p(n),qt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!pu(n.type,n.memoizedProps)),i&&(i=si)){if(xu(n))throw yp(),Error(t(418));for(;i;)gp(n,i),i=Lr(i.nextSibling)}if(_p(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){si=Lr(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}si=null}}else si=ri?Lr(n.stateNode.nextSibling):null;return!0}function yp(){for(var n=si;n;)n=Lr(n.nextSibling)}function to(){si=ri=null,qt=!1}function wu(n){Ai===null?Ai=[n]:Ai.push(n)}var Wv=A.ReactCurrentBatchConfig;function ha(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var c=o.stateNode}if(!c)throw Error(t(147,n));var d=c,_=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===_?i.ref:(i=function(E){var U=d.refs;E===null?delete U[_]:U[_]=E},i._stringRef=_,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function wl(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Sp(n){var i=n._init;return i(n._payload)}function Mp(n){function i(q,V){if(n){var K=q.deletions;K===null?(q.deletions=[V],q.flags|=16):K.push(V)}}function o(q,V){if(!n)return null;for(;V!==null;)i(q,V),V=V.sibling;return null}function c(q,V){for(q=new Map;V!==null;)V.key!==null?q.set(V.key,V):q.set(V.index,V),V=V.sibling;return q}function d(q,V){return q=Vr(q,V),q.index=0,q.sibling=null,q}function _(q,V,K){return q.index=K,n?(K=q.alternate,K!==null?(K=K.index,K<V?(q.flags|=2,V):K):(q.flags|=2,V)):(q.flags|=1048576,V)}function E(q){return n&&q.alternate===null&&(q.flags|=2),q}function U(q,V,K,we){return V===null||V.tag!==6?(V=gf(K,q.mode,we),V.return=q,V):(V=d(V,K),V.return=q,V)}function z(q,V,K,we){var Ye=K.type;return Ye===D?ve(q,V,K.props.children,we,K.key):V!==null&&(V.elementType===Ye||typeof Ye=="object"&&Ye!==null&&Ye.$$typeof===re&&Sp(Ye)===V.type)?(we=d(V,K.props),we.ref=ha(q,V,K),we.return=q,we):(we=ql(K.type,K.key,K.props,null,q.mode,we),we.ref=ha(q,V,K),we.return=q,we)}function ee(q,V,K,we){return V===null||V.tag!==4||V.stateNode.containerInfo!==K.containerInfo||V.stateNode.implementation!==K.implementation?(V=vf(K,q.mode,we),V.return=q,V):(V=d(V,K.children||[]),V.return=q,V)}function ve(q,V,K,we,Ye){return V===null||V.tag!==7?(V=ys(K,q.mode,we,Ye),V.return=q,V):(V=d(V,K),V.return=q,V)}function ye(q,V,K){if(typeof V=="string"&&V!==""||typeof V=="number")return V=gf(""+V,q.mode,K),V.return=q,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case B:return K=ql(V.type,V.key,V.props,null,q.mode,K),K.ref=ha(q,null,V),K.return=q,K;case I:return V=vf(V,q.mode,K),V.return=q,V;case re:var we=V._init;return ye(q,we(V._payload),K)}if($e(V)||le(V))return V=ys(V,q.mode,K,null),V.return=q,V;wl(q,V)}return null}function me(q,V,K,we){var Ye=V!==null?V.key:null;if(typeof K=="string"&&K!==""||typeof K=="number")return Ye!==null?null:U(q,V,""+K,we);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case B:return K.key===Ye?z(q,V,K,we):null;case I:return K.key===Ye?ee(q,V,K,we):null;case re:return Ye=K._init,me(q,V,Ye(K._payload),we)}if($e(K)||le(K))return Ye!==null?null:ve(q,V,K,we,null);wl(q,K)}return null}function De(q,V,K,we,Ye){if(typeof we=="string"&&we!==""||typeof we=="number")return q=q.get(K)||null,U(V,q,""+we,Ye);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case B:return q=q.get(we.key===null?K:we.key)||null,z(V,q,we,Ye);case I:return q=q.get(we.key===null?K:we.key)||null,ee(V,q,we,Ye);case re:var Qe=we._init;return De(q,V,K,Qe(we._payload),Ye)}if($e(we)||le(we))return q=q.get(K)||null,ve(V,q,we,Ye,null);wl(V,we)}return null}function He(q,V,K,we){for(var Ye=null,Qe=null,Ze=V,rt=V=0,Sn=null;Ze!==null&&rt<K.length;rt++){Ze.index>rt?(Sn=Ze,Ze=null):Sn=Ze.sibling;var Ct=me(q,Ze,K[rt],we);if(Ct===null){Ze===null&&(Ze=Sn);break}n&&Ze&&Ct.alternate===null&&i(q,Ze),V=_(Ct,V,rt),Qe===null?Ye=Ct:Qe.sibling=Ct,Qe=Ct,Ze=Sn}if(rt===K.length)return o(q,Ze),qt&&fs(q,rt),Ye;if(Ze===null){for(;rt<K.length;rt++)Ze=ye(q,K[rt],we),Ze!==null&&(V=_(Ze,V,rt),Qe===null?Ye=Ze:Qe.sibling=Ze,Qe=Ze);return qt&&fs(q,rt),Ye}for(Ze=c(q,Ze);rt<K.length;rt++)Sn=De(Ze,q,rt,K[rt],we),Sn!==null&&(n&&Sn.alternate!==null&&Ze.delete(Sn.key===null?rt:Sn.key),V=_(Sn,V,rt),Qe===null?Ye=Sn:Qe.sibling=Sn,Qe=Sn);return n&&Ze.forEach(function(Gr){return i(q,Gr)}),qt&&fs(q,rt),Ye}function Ge(q,V,K,we){var Ye=le(K);if(typeof Ye!="function")throw Error(t(150));if(K=Ye.call(K),K==null)throw Error(t(151));for(var Qe=Ye=null,Ze=V,rt=V=0,Sn=null,Ct=K.next();Ze!==null&&!Ct.done;rt++,Ct=K.next()){Ze.index>rt?(Sn=Ze,Ze=null):Sn=Ze.sibling;var Gr=me(q,Ze,Ct.value,we);if(Gr===null){Ze===null&&(Ze=Sn);break}n&&Ze&&Gr.alternate===null&&i(q,Ze),V=_(Gr,V,rt),Qe===null?Ye=Gr:Qe.sibling=Gr,Qe=Gr,Ze=Sn}if(Ct.done)return o(q,Ze),qt&&fs(q,rt),Ye;if(Ze===null){for(;!Ct.done;rt++,Ct=K.next())Ct=ye(q,Ct.value,we),Ct!==null&&(V=_(Ct,V,rt),Qe===null?Ye=Ct:Qe.sibling=Ct,Qe=Ct);return qt&&fs(q,rt),Ye}for(Ze=c(q,Ze);!Ct.done;rt++,Ct=K.next())Ct=De(Ze,q,rt,Ct.value,we),Ct!==null&&(n&&Ct.alternate!==null&&Ze.delete(Ct.key===null?rt:Ct.key),V=_(Ct,V,rt),Qe===null?Ye=Ct:Qe.sibling=Ct,Qe=Ct);return n&&Ze.forEach(function(E_){return i(q,E_)}),qt&&fs(q,rt),Ye}function sn(q,V,K,we){if(typeof K=="object"&&K!==null&&K.type===D&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case B:e:{for(var Ye=K.key,Qe=V;Qe!==null;){if(Qe.key===Ye){if(Ye=K.type,Ye===D){if(Qe.tag===7){o(q,Qe.sibling),V=d(Qe,K.props.children),V.return=q,q=V;break e}}else if(Qe.elementType===Ye||typeof Ye=="object"&&Ye!==null&&Ye.$$typeof===re&&Sp(Ye)===Qe.type){o(q,Qe.sibling),V=d(Qe,K.props),V.ref=ha(q,Qe,K),V.return=q,q=V;break e}o(q,Qe);break}else i(q,Qe);Qe=Qe.sibling}K.type===D?(V=ys(K.props.children,q.mode,we,K.key),V.return=q,q=V):(we=ql(K.type,K.key,K.props,null,q.mode,we),we.ref=ha(q,V,K),we.return=q,q=we)}return E(q);case I:e:{for(Qe=K.key;V!==null;){if(V.key===Qe)if(V.tag===4&&V.stateNode.containerInfo===K.containerInfo&&V.stateNode.implementation===K.implementation){o(q,V.sibling),V=d(V,K.children||[]),V.return=q,q=V;break e}else{o(q,V);break}else i(q,V);V=V.sibling}V=vf(K,q.mode,we),V.return=q,q=V}return E(q);case re:return Qe=K._init,sn(q,V,Qe(K._payload),we)}if($e(K))return He(q,V,K,we);if(le(K))return Ge(q,V,K,we);wl(q,K)}return typeof K=="string"&&K!==""||typeof K=="number"?(K=""+K,V!==null&&V.tag===6?(o(q,V.sibling),V=d(V,K),V.return=q,q=V):(o(q,V),V=gf(K,q.mode,we),V.return=q,q=V),E(q)):o(q,V)}return sn}var no=Mp(!0),xp=Mp(!1),Tl=Ir(null),Al=null,io=null,Tu=null;function Au(){Tu=io=Al=null}function Cu(n){var i=Tl.current;Wt(Tl),n._currentValue=i}function Ru(n,i,o){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===o)break;n=n.return}}function ro(n,i){Al=n,Tu=io=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Qn=!0),n.firstContext=null)}function gi(n){var i=n._currentValue;if(Tu!==n)if(n={context:n,memoizedValue:i,next:null},io===null){if(Al===null)throw Error(t(308));io=n,Al.dependencies={lanes:0,firstContext:n}}else io=io.next=n;return i}var ds=null;function bu(n){ds===null?ds=[n]:ds.push(n)}function Ep(n,i,o,c){var d=i.interleaved;return d===null?(o.next=o,bu(i)):(o.next=d.next,d.next=o),i.interleaved=o,or(n,c)}function or(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var Ur=!1;function Pu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function ar(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Fr(n,i,o){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Et&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,or(n,o)}return d=c.interleaved,d===null?(i.next=i,bu(c)):(i.next=d.next,d.next=i),c.interleaved=i,or(n,o)}function Cl(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,o|=c,i.lanes=o,Wc(n,o)}}function Tp(n,i){var o=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var d=null,_=null;if(o=o.firstBaseUpdate,o!==null){do{var E={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};_===null?d=_=E:_=_.next=E,o=o.next}while(o!==null);_===null?d=_=i:_=_.next=i}else d=_=i;o={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:_,shared:c.shared,effects:c.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function Rl(n,i,o,c){var d=n.updateQueue;Ur=!1;var _=d.firstBaseUpdate,E=d.lastBaseUpdate,U=d.shared.pending;if(U!==null){d.shared.pending=null;var z=U,ee=z.next;z.next=null,E===null?_=ee:E.next=ee,E=z;var ve=n.alternate;ve!==null&&(ve=ve.updateQueue,U=ve.lastBaseUpdate,U!==E&&(U===null?ve.firstBaseUpdate=ee:U.next=ee,ve.lastBaseUpdate=z))}if(_!==null){var ye=d.baseState;E=0,ve=ee=z=null,U=_;do{var me=U.lane,De=U.eventTime;if((c&me)===me){ve!==null&&(ve=ve.next={eventTime:De,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var He=n,Ge=U;switch(me=i,De=o,Ge.tag){case 1:if(He=Ge.payload,typeof He=="function"){ye=He.call(De,ye,me);break e}ye=He;break e;case 3:He.flags=He.flags&-65537|128;case 0:if(He=Ge.payload,me=typeof He=="function"?He.call(De,ye,me):He,me==null)break e;ye=ae({},ye,me);break e;case 2:Ur=!0}}U.callback!==null&&U.lane!==0&&(n.flags|=64,me=d.effects,me===null?d.effects=[U]:me.push(U))}else De={eventTime:De,lane:me,tag:U.tag,payload:U.payload,callback:U.callback,next:null},ve===null?(ee=ve=De,z=ye):ve=ve.next=De,E|=me;if(U=U.next,U===null){if(U=d.shared.pending,U===null)break;me=U,U=me.next,me.next=null,d.lastBaseUpdate=me,d.shared.pending=null}}while(!0);if(ve===null&&(z=ye),d.baseState=z,d.firstBaseUpdate=ee,d.lastBaseUpdate=ve,i=d.shared.interleaved,i!==null){d=i;do E|=d.lane,d=d.next;while(d!==i)}else _===null&&(d.shared.lanes=0);ms|=E,n.lanes=E,n.memoizedState=ye}}function Ap(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=o,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var pa={},ji=Ir(pa),ma=Ir(pa),ga=Ir(pa);function hs(n){if(n===pa)throw Error(t(174));return n}function Lu(n,i){switch(Ht(ga,i),Ht(ma,n),Ht(ji,pa),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:We(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=We(i,n)}Wt(ji),Ht(ji,i)}function so(){Wt(ji),Wt(ma),Wt(ga)}function Cp(n){hs(ga.current);var i=hs(ji.current),o=We(i,n.type);i!==o&&(Ht(ma,n),Ht(ji,o))}function Iu(n){ma.current===n&&(Wt(ji),Wt(ma))}var Qt=Ir(0);function bl(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Du=[];function Nu(){for(var n=0;n<Du.length;n++)Du[n]._workInProgressVersionPrimary=null;Du.length=0}var Pl=A.ReactCurrentDispatcher,Uu=A.ReactCurrentBatchConfig,ps=0,Zt=null,hn=null,_n=null,Ll=!1,va=!1,_a=0,Xv=0;function Pn(){throw Error(t(321))}function Fu(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!Ti(n[o],i[o]))return!1;return!0}function ku(n,i,o,c,d,_){if(ps=_,Zt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Pl.current=n===null||n.memoizedState===null?$v:Kv,n=o(c,d),va){_=0;do{if(va=!1,_a=0,25<=_)throw Error(t(301));_+=1,_n=hn=null,i.updateQueue=null,Pl.current=Qv,n=o(c,d)}while(va)}if(Pl.current=Nl,i=hn!==null&&hn.next!==null,ps=0,_n=hn=Zt=null,Ll=!1,i)throw Error(t(300));return n}function Ou(){var n=_a!==0;return _a=0,n}function Yi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _n===null?Zt.memoizedState=_n=n:_n=_n.next=n,_n}function vi(){if(hn===null){var n=Zt.alternate;n=n!==null?n.memoizedState:null}else n=hn.next;var i=_n===null?Zt.memoizedState:_n.next;if(i!==null)_n=i,hn=n;else{if(n===null)throw Error(t(310));hn=n,n={memoizedState:hn.memoizedState,baseState:hn.baseState,baseQueue:hn.baseQueue,queue:hn.queue,next:null},_n===null?Zt.memoizedState=_n=n:_n=_n.next=n}return _n}function ya(n,i){return typeof i=="function"?i(n):i}function zu(n){var i=vi(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=hn,d=c.baseQueue,_=o.pending;if(_!==null){if(d!==null){var E=d.next;d.next=_.next,_.next=E}c.baseQueue=d=_,o.pending=null}if(d!==null){_=d.next,c=c.baseState;var U=E=null,z=null,ee=_;do{var ve=ee.lane;if((ps&ve)===ve)z!==null&&(z=z.next={lane:0,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),c=ee.hasEagerState?ee.eagerState:n(c,ee.action);else{var ye={lane:ve,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null};z===null?(U=z=ye,E=c):z=z.next=ye,Zt.lanes|=ve,ms|=ve}ee=ee.next}while(ee!==null&&ee!==_);z===null?E=c:z.next=U,Ti(c,i.memoizedState)||(Qn=!0),i.memoizedState=c,i.baseState=E,i.baseQueue=z,o.lastRenderedState=c}if(n=o.interleaved,n!==null){d=n;do _=d.lane,Zt.lanes|=_,ms|=_,d=d.next;while(d!==n)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Bu(n){var i=vi(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=o.dispatch,d=o.pending,_=i.memoizedState;if(d!==null){o.pending=null;var E=d=d.next;do _=n(_,E.action),E=E.next;while(E!==d);Ti(_,i.memoizedState)||(Qn=!0),i.memoizedState=_,i.baseQueue===null&&(i.baseState=_),o.lastRenderedState=_}return[_,c]}function Rp(){}function bp(n,i){var o=Zt,c=vi(),d=i(),_=!Ti(c.memoizedState,d);if(_&&(c.memoizedState=d,Qn=!0),c=c.queue,Hu(Ip.bind(null,o,c,n),[n]),c.getSnapshot!==i||_||_n!==null&&_n.memoizedState.tag&1){if(o.flags|=2048,Sa(9,Lp.bind(null,o,c,d,i),void 0,null),yn===null)throw Error(t(349));(ps&30)!==0||Pp(o,i,d)}return d}function Pp(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=Zt.updateQueue,i===null?(i={lastEffect:null,stores:null},Zt.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function Lp(n,i,o,c){i.value=o,i.getSnapshot=c,Dp(i)&&Np(n)}function Ip(n,i,o){return o(function(){Dp(i)&&Np(n)})}function Dp(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!Ti(n,o)}catch{return!0}}function Np(n){var i=or(n,1);i!==null&&Pi(i,n,1,-1)}function Up(n){var i=Yi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:n},i.queue=n,n=n.dispatch=qv.bind(null,Zt,n),[i.memoizedState,n]}function Sa(n,i,o,c){return n={tag:n,create:i,destroy:o,deps:c,next:null},i=Zt.updateQueue,i===null?(i={lastEffect:null,stores:null},Zt.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(c=o.next,o.next=n,n.next=c,i.lastEffect=n)),n}function Fp(){return vi().memoizedState}function Il(n,i,o,c){var d=Yi();Zt.flags|=n,d.memoizedState=Sa(1|i,o,void 0,c===void 0?null:c)}function Dl(n,i,o,c){var d=vi();c=c===void 0?null:c;var _=void 0;if(hn!==null){var E=hn.memoizedState;if(_=E.destroy,c!==null&&Fu(c,E.deps)){d.memoizedState=Sa(i,o,_,c);return}}Zt.flags|=n,d.memoizedState=Sa(1|i,o,_,c)}function kp(n,i){return Il(8390656,8,n,i)}function Hu(n,i){return Dl(2048,8,n,i)}function Op(n,i){return Dl(4,2,n,i)}function zp(n,i){return Dl(4,4,n,i)}function Bp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Hp(n,i,o){return o=o!=null?o.concat([n]):null,Dl(4,4,Bp.bind(null,i,n),o)}function Vu(){}function Vp(n,i){var o=vi();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&Fu(i,c[1])?c[0]:(o.memoizedState=[n,i],n)}function Gp(n,i){var o=vi();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&Fu(i,c[1])?c[0]:(n=n(),o.memoizedState=[n,i],n)}function Wp(n,i,o){return(ps&21)===0?(n.baseState&&(n.baseState=!1,Qn=!0),n.memoizedState=o):(Ti(o,i)||(o=zn(),Zt.lanes|=o,ms|=o,n.baseState=!0),i)}function jv(n,i){var o=It;It=o!==0&&4>o?o:4,n(!0);var c=Uu.transition;Uu.transition={};try{n(!1),i()}finally{It=o,Uu.transition=c}}function Xp(){return vi().memoizedState}function Yv(n,i,o){var c=Br(n);if(o={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null},jp(n))Yp(i,o);else if(o=Ep(n,i,o,c),o!==null){var d=Hn();Pi(o,n,c,d),qp(o,i,c)}}function qv(n,i,o){var c=Br(n),d={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null};if(jp(n))Yp(i,d);else{var _=n.alternate;if(n.lanes===0&&(_===null||_.lanes===0)&&(_=i.lastRenderedReducer,_!==null))try{var E=i.lastRenderedState,U=_(E,o);if(d.hasEagerState=!0,d.eagerState=U,Ti(U,E)){var z=i.interleaved;z===null?(d.next=d,bu(i)):(d.next=z.next,z.next=d),i.interleaved=d;return}}catch{}finally{}o=Ep(n,i,d,c),o!==null&&(d=Hn(),Pi(o,n,c,d),qp(o,i,c))}}function jp(n){var i=n.alternate;return n===Zt||i!==null&&i===Zt}function Yp(n,i){va=Ll=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function qp(n,i,o){if((o&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,o|=c,i.lanes=o,Wc(n,o)}}var Nl={readContext:gi,useCallback:Pn,useContext:Pn,useEffect:Pn,useImperativeHandle:Pn,useInsertionEffect:Pn,useLayoutEffect:Pn,useMemo:Pn,useReducer:Pn,useRef:Pn,useState:Pn,useDebugValue:Pn,useDeferredValue:Pn,useTransition:Pn,useMutableSource:Pn,useSyncExternalStore:Pn,useId:Pn,unstable_isNewReconciler:!1},$v={readContext:gi,useCallback:function(n,i){return Yi().memoizedState=[n,i===void 0?null:i],n},useContext:gi,useEffect:kp,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,Il(4194308,4,Bp.bind(null,i,n),o)},useLayoutEffect:function(n,i){return Il(4194308,4,n,i)},useInsertionEffect:function(n,i){return Il(4,2,n,i)},useMemo:function(n,i){var o=Yi();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var c=Yi();return i=o!==void 0?o(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=Yv.bind(null,Zt,n),[c.memoizedState,n]},useRef:function(n){var i=Yi();return n={current:n},i.memoizedState=n},useState:Up,useDebugValue:Vu,useDeferredValue:function(n){return Yi().memoizedState=n},useTransition:function(){var n=Up(!1),i=n[0];return n=jv.bind(null,n[1]),Yi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var c=Zt,d=Yi();if(qt){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),yn===null)throw Error(t(349));(ps&30)!==0||Pp(c,i,o)}d.memoizedState=o;var _={value:o,getSnapshot:i};return d.queue=_,kp(Ip.bind(null,c,_,n),[n]),c.flags|=2048,Sa(9,Lp.bind(null,c,_,o,i),void 0,null),o},useId:function(){var n=Yi(),i=yn.identifierPrefix;if(qt){var o=sr,c=rr;o=(c&~(1<<32-ct(c)-1)).toString(32)+o,i=":"+i+"R"+o,o=_a++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=Xv++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Kv={readContext:gi,useCallback:Vp,useContext:gi,useEffect:Hu,useImperativeHandle:Hp,useInsertionEffect:Op,useLayoutEffect:zp,useMemo:Gp,useReducer:zu,useRef:Fp,useState:function(){return zu(ya)},useDebugValue:Vu,useDeferredValue:function(n){var i=vi();return Wp(i,hn.memoizedState,n)},useTransition:function(){var n=zu(ya)[0],i=vi().memoizedState;return[n,i]},useMutableSource:Rp,useSyncExternalStore:bp,useId:Xp,unstable_isNewReconciler:!1},Qv={readContext:gi,useCallback:Vp,useContext:gi,useEffect:Hu,useImperativeHandle:Hp,useInsertionEffect:Op,useLayoutEffect:zp,useMemo:Gp,useReducer:Bu,useRef:Fp,useState:function(){return Bu(ya)},useDebugValue:Vu,useDeferredValue:function(n){var i=vi();return hn===null?i.memoizedState=n:Wp(i,hn.memoizedState,n)},useTransition:function(){var n=Bu(ya)[0],i=vi().memoizedState;return[n,i]},useMutableSource:Rp,useSyncExternalStore:bp,useId:Xp,unstable_isNewReconciler:!1};function Ci(n,i){if(n&&n.defaultProps){i=ae({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function Gu(n,i,o,c){i=n.memoizedState,o=o(c,i),o=o==null?i:ae({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var Ul={isMounted:function(n){return(n=n._reactInternals)?Gi(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var c=Hn(),d=Br(n),_=ar(c,d);_.payload=i,o!=null&&(_.callback=o),i=Fr(n,_,d),i!==null&&(Pi(i,n,d,c),Cl(i,n,d))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var c=Hn(),d=Br(n),_=ar(c,d);_.tag=1,_.payload=i,o!=null&&(_.callback=o),i=Fr(n,_,d),i!==null&&(Pi(i,n,d,c),Cl(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=Hn(),c=Br(n),d=ar(o,c);d.tag=2,i!=null&&(d.callback=i),i=Fr(n,d,c),i!==null&&(Pi(i,n,c,o),Cl(i,n,c))}};function $p(n,i,o,c,d,_,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,_,E):i.prototype&&i.prototype.isPureReactComponent?!oa(o,c)||!oa(d,_):!0}function Kp(n,i,o){var c=!1,d=Dr,_=i.contextType;return typeof _=="object"&&_!==null?_=gi(_):(d=Kn(i)?cs:bn.current,c=i.contextTypes,_=(c=c!=null)?Zs(n,d):Dr),i=new i(o,_),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ul,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=_),i}function Qp(n,i,o,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,c),i.state!==n&&Ul.enqueueReplaceState(i,i.state,null)}function Wu(n,i,o,c){var d=n.stateNode;d.props=o,d.state=n.memoizedState,d.refs={},Pu(n);var _=i.contextType;typeof _=="object"&&_!==null?d.context=gi(_):(_=Kn(i)?cs:bn.current,d.context=Zs(n,_)),d.state=n.memoizedState,_=i.getDerivedStateFromProps,typeof _=="function"&&(Gu(n,i,_,o),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Ul.enqueueReplaceState(d,d.state,null),Rl(n,o,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function oo(n,i){try{var o="",c=i;do o+=ce(c),c=c.return;while(c);var d=o}catch(_){d=`
Error generating stack: `+_.message+`
`+_.stack}return{value:n,source:i,stack:d,digest:null}}function Xu(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function ju(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var Zv=typeof WeakMap=="function"?WeakMap:Map;function Zp(n,i,o){o=ar(-1,o),o.tag=3,o.payload={element:null};var c=i.value;return o.callback=function(){Vl||(Vl=!0,lf=c),ju(n,i)},o}function Jp(n,i,o){o=ar(-1,o),o.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;o.payload=function(){return c(d)},o.callback=function(){ju(n,i)}}var _=n.stateNode;return _!==null&&typeof _.componentDidCatch=="function"&&(o.callback=function(){ju(n,i),typeof c!="function"&&(Or===null?Or=new Set([this]):Or.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),o}function em(n,i,o){var c=n.pingCache;if(c===null){c=n.pingCache=new Zv;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(o)||(d.add(o),n=d_.bind(null,n,i,o),i.then(n,n))}function tm(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function nm(n,i,o,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=ar(-1,1),i.tag=2,Fr(o,i,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var Jv=A.ReactCurrentOwner,Qn=!1;function Bn(n,i,o,c){i.child=n===null?xp(i,null,o,c):no(i,n.child,o,c)}function im(n,i,o,c,d){o=o.render;var _=i.ref;return ro(i,d),c=ku(n,i,o,c,_,d),o=Ou(),n!==null&&!Qn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,lr(n,i,d)):(qt&&o&&Su(i),i.flags|=1,Bn(n,i,c,d),i.child)}function rm(n,i,o,c,d){if(n===null){var _=o.type;return typeof _=="function"&&!mf(_)&&_.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=_,sm(n,i,_,c,d)):(n=ql(o.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(_=n.child,(n.lanes&d)===0){var E=_.memoizedProps;if(o=o.compare,o=o!==null?o:oa,o(E,c)&&n.ref===i.ref)return lr(n,i,d)}return i.flags|=1,n=Vr(_,c),n.ref=i.ref,n.return=i,i.child=n}function sm(n,i,o,c,d){if(n!==null){var _=n.memoizedProps;if(oa(_,c)&&n.ref===i.ref)if(Qn=!1,i.pendingProps=c=_,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Qn=!0);else return i.lanes=n.lanes,lr(n,i,d)}return Yu(n,i,o,c,d)}function om(n,i,o){var c=i.pendingProps,d=c.children,_=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ht(lo,oi),oi|=o;else{if((o&1073741824)===0)return n=_!==null?_.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Ht(lo,oi),oi|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=_!==null?_.baseLanes:o,Ht(lo,oi),oi|=c}else _!==null?(c=_.baseLanes|o,i.memoizedState=null):c=o,Ht(lo,oi),oi|=c;return Bn(n,i,d,o),i.child}function am(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Yu(n,i,o,c,d){var _=Kn(o)?cs:bn.current;return _=Zs(i,_),ro(i,d),o=ku(n,i,o,c,_,d),c=Ou(),n!==null&&!Qn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,lr(n,i,d)):(qt&&c&&Su(i),i.flags|=1,Bn(n,i,o,d),i.child)}function lm(n,i,o,c,d){if(Kn(o)){var _=!0;yl(i)}else _=!1;if(ro(i,d),i.stateNode===null)kl(n,i),Kp(i,o,c),Wu(i,o,c,d),c=!0;else if(n===null){var E=i.stateNode,U=i.memoizedProps;E.props=U;var z=E.context,ee=o.contextType;typeof ee=="object"&&ee!==null?ee=gi(ee):(ee=Kn(o)?cs:bn.current,ee=Zs(i,ee));var ve=o.getDerivedStateFromProps,ye=typeof ve=="function"||typeof E.getSnapshotBeforeUpdate=="function";ye||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(U!==c||z!==ee)&&Qp(i,E,c,ee),Ur=!1;var me=i.memoizedState;E.state=me,Rl(i,c,E,d),z=i.memoizedState,U!==c||me!==z||$n.current||Ur?(typeof ve=="function"&&(Gu(i,o,ve,c),z=i.memoizedState),(U=Ur||$p(i,o,U,c,me,z,ee))?(ye||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=z),E.props=c,E.state=z,E.context=ee,c=U):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{E=i.stateNode,wp(n,i),U=i.memoizedProps,ee=i.type===i.elementType?U:Ci(i.type,U),E.props=ee,ye=i.pendingProps,me=E.context,z=o.contextType,typeof z=="object"&&z!==null?z=gi(z):(z=Kn(o)?cs:bn.current,z=Zs(i,z));var De=o.getDerivedStateFromProps;(ve=typeof De=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(U!==ye||me!==z)&&Qp(i,E,c,z),Ur=!1,me=i.memoizedState,E.state=me,Rl(i,c,E,d);var He=i.memoizedState;U!==ye||me!==He||$n.current||Ur?(typeof De=="function"&&(Gu(i,o,De,c),He=i.memoizedState),(ee=Ur||$p(i,o,ee,c,me,He,z)||!1)?(ve||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(c,He,z),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(c,He,z)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||U===n.memoizedProps&&me===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&me===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=He),E.props=c,E.state=He,E.context=z,c=ee):(typeof E.componentDidUpdate!="function"||U===n.memoizedProps&&me===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&me===n.memoizedState||(i.flags|=1024),c=!1)}return qu(n,i,o,c,_,d)}function qu(n,i,o,c,d,_){am(n,i);var E=(i.flags&128)!==0;if(!c&&!E)return d&&hp(i,o,!1),lr(n,i,_);c=i.stateNode,Jv.current=i;var U=E&&typeof o.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&E?(i.child=no(i,n.child,null,_),i.child=no(i,null,U,_)):Bn(n,i,U,_),i.memoizedState=c.state,d&&hp(i,o,!0),i.child}function cm(n){var i=n.stateNode;i.pendingContext?fp(n,i.pendingContext,i.pendingContext!==i.context):i.context&&fp(n,i.context,!1),Lu(n,i.containerInfo)}function um(n,i,o,c,d){return to(),wu(d),i.flags|=256,Bn(n,i,o,c),i.child}var $u={dehydrated:null,treeContext:null,retryLane:0};function Ku(n){return{baseLanes:n,cachePool:null,transitions:null}}function fm(n,i,o){var c=i.pendingProps,d=Qt.current,_=!1,E=(i.flags&128)!==0,U;if((U=E)||(U=n!==null&&n.memoizedState===null?!1:(d&2)!==0),U?(_=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Ht(Qt,d&1),n===null)return Eu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=c.children,n=c.fallback,_?(c=i.mode,_=i.child,E={mode:"hidden",children:E},(c&1)===0&&_!==null?(_.childLanes=0,_.pendingProps=E):_=$l(E,c,0,null),n=ys(n,c,o,null),_.return=i,n.return=i,_.sibling=n,i.child=_,i.child.memoizedState=Ku(o),i.memoizedState=$u,n):Qu(i,E));if(d=n.memoizedState,d!==null&&(U=d.dehydrated,U!==null))return e_(n,i,E,c,U,d,o);if(_){_=c.fallback,E=i.mode,d=n.child,U=d.sibling;var z={mode:"hidden",children:c.children};return(E&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=z,i.deletions=null):(c=Vr(d,z),c.subtreeFlags=d.subtreeFlags&14680064),U!==null?_=Vr(U,_):(_=ys(_,E,o,null),_.flags|=2),_.return=i,c.return=i,c.sibling=_,i.child=c,c=_,_=i.child,E=n.child.memoizedState,E=E===null?Ku(o):{baseLanes:E.baseLanes|o,cachePool:null,transitions:E.transitions},_.memoizedState=E,_.childLanes=n.childLanes&~o,i.memoizedState=$u,c}return _=n.child,n=_.sibling,c=Vr(_,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=o),c.return=i,c.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=c,i.memoizedState=null,c}function Qu(n,i){return i=$l({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Fl(n,i,o,c){return c!==null&&wu(c),no(i,n.child,null,o),n=Qu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function e_(n,i,o,c,d,_,E){if(o)return i.flags&256?(i.flags&=-257,c=Xu(Error(t(422))),Fl(n,i,E,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(_=c.fallback,d=i.mode,c=$l({mode:"visible",children:c.children},d,0,null),_=ys(_,d,E,null),_.flags|=2,c.return=i,_.return=i,c.sibling=_,i.child=c,(i.mode&1)!==0&&no(i,n.child,null,E),i.child.memoizedState=Ku(E),i.memoizedState=$u,_);if((i.mode&1)===0)return Fl(n,i,E,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var U=c.dgst;return c=U,_=Error(t(419)),c=Xu(_,c,void 0),Fl(n,i,E,c)}if(U=(E&n.childLanes)!==0,Qn||U){if(c=yn,c!==null){switch(E&-E){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|E))!==0?0:d,d!==0&&d!==_.retryLane&&(_.retryLane=d,or(n,d),Pi(c,n,d,-1))}return pf(),c=Xu(Error(t(421))),Fl(n,i,E,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=h_.bind(null,n),d._reactRetry=i,null):(n=_.treeContext,si=Lr(d.nextSibling),ri=i,qt=!0,Ai=null,n!==null&&(pi[mi++]=rr,pi[mi++]=sr,pi[mi++]=us,rr=n.id,sr=n.overflow,us=i),i=Qu(i,c.children),i.flags|=4096,i)}function dm(n,i,o){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Ru(n.return,i,o)}function Zu(n,i,o,c,d){var _=n.memoizedState;_===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:d}:(_.isBackwards=i,_.rendering=null,_.renderingStartTime=0,_.last=c,_.tail=o,_.tailMode=d)}function hm(n,i,o){var c=i.pendingProps,d=c.revealOrder,_=c.tail;if(Bn(n,i,c.children,o),c=Qt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&dm(n,o,i);else if(n.tag===19)dm(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Ht(Qt,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)n=o.alternate,n!==null&&bl(n)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),Zu(i,!1,d,o,_);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&bl(n)===null){i.child=d;break}n=d.sibling,d.sibling=o,o=d,d=n}Zu(i,!0,o,null,_);break;case"together":Zu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function kl(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function lr(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),ms|=i.lanes,(o&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=Vr(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=Vr(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function t_(n,i,o){switch(i.tag){case 3:cm(i),to();break;case 5:Cp(i);break;case 1:Kn(i.type)&&yl(i);break;case 4:Lu(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;Ht(Tl,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Ht(Qt,Qt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?fm(n,i,o):(Ht(Qt,Qt.current&1),n=lr(n,i,o),n!==null?n.sibling:null);Ht(Qt,Qt.current&1);break;case 19:if(c=(o&i.childLanes)!==0,(n.flags&128)!==0){if(c)return hm(n,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Ht(Qt,Qt.current),c)break;return null;case 22:case 23:return i.lanes=0,om(n,i,o)}return lr(n,i,o)}var pm,Ju,mm,gm;pm=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Ju=function(){},mm=function(n,i,o,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,hs(ji.current);var _=null;switch(o){case"input":d=Y(n,d),c=Y(n,c),_=[];break;case"select":d=ae({},d,{value:void 0}),c=ae({},c,{value:void 0}),_=[];break;case"textarea":d=T(n,d),c=T(n,c),_=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=gl)}gt(o,c);var E;o=null;for(ee in d)if(!c.hasOwnProperty(ee)&&d.hasOwnProperty(ee)&&d[ee]!=null)if(ee==="style"){var U=d[ee];for(E in U)U.hasOwnProperty(E)&&(o||(o={}),o[E]="")}else ee!=="dangerouslySetInnerHTML"&&ee!=="children"&&ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&ee!=="autoFocus"&&(a.hasOwnProperty(ee)?_||(_=[]):(_=_||[]).push(ee,null));for(ee in c){var z=c[ee];if(U=d!=null?d[ee]:void 0,c.hasOwnProperty(ee)&&z!==U&&(z!=null||U!=null))if(ee==="style")if(U){for(E in U)!U.hasOwnProperty(E)||z&&z.hasOwnProperty(E)||(o||(o={}),o[E]="");for(E in z)z.hasOwnProperty(E)&&U[E]!==z[E]&&(o||(o={}),o[E]=z[E])}else o||(_||(_=[]),_.push(ee,o)),o=z;else ee==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,U=U?U.__html:void 0,z!=null&&U!==z&&(_=_||[]).push(ee,z)):ee==="children"?typeof z!="string"&&typeof z!="number"||(_=_||[]).push(ee,""+z):ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&(a.hasOwnProperty(ee)?(z!=null&&ee==="onScroll"&&Gt("scroll",n),_||U===z||(_=[])):(_=_||[]).push(ee,z))}o&&(_=_||[]).push("style",o);var ee=_;(i.updateQueue=ee)&&(i.flags|=4)}},gm=function(n,i,o,c){o!==c&&(i.flags|=4)};function Ma(n,i){if(!qt)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Ln(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,c=0;if(i)for(var d=n.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=o,i}function n_(n,i,o){var c=i.pendingProps;switch(Mu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ln(i),null;case 1:return Kn(i.type)&&_l(),Ln(i),null;case 3:return c=i.stateNode,so(),Wt($n),Wt(bn),Nu(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(El(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Ai!==null&&(ff(Ai),Ai=null))),Ju(n,i),Ln(i),null;case 5:Iu(i);var d=hs(ga.current);if(o=i.type,n!==null&&i.stateNode!=null)mm(n,i,o,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Ln(i),null}if(n=hs(ji.current),El(i)){c=i.stateNode,o=i.type;var _=i.memoizedProps;switch(c[Xi]=i,c[fa]=_,n=(i.mode&1)!==0,o){case"dialog":Gt("cancel",c),Gt("close",c);break;case"iframe":case"object":case"embed":Gt("load",c);break;case"video":case"audio":for(d=0;d<la.length;d++)Gt(la[d],c);break;case"source":Gt("error",c);break;case"img":case"image":case"link":Gt("error",c),Gt("load",c);break;case"details":Gt("toggle",c);break;case"input":kn(c,_),Gt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!_.multiple},Gt("invalid",c);break;case"textarea":Z(c,_),Gt("invalid",c)}gt(o,_),d=null;for(var E in _)if(_.hasOwnProperty(E)){var U=_[E];E==="children"?typeof U=="string"?c.textContent!==U&&(_.suppressHydrationWarning!==!0&&ml(c.textContent,U,n),d=["children",U]):typeof U=="number"&&c.textContent!==""+U&&(_.suppressHydrationWarning!==!0&&ml(c.textContent,U,n),d=["children",""+U]):a.hasOwnProperty(E)&&U!=null&&E==="onScroll"&&Gt("scroll",c)}switch(o){case"input":Nt(c),Ke(c,_,!0);break;case"textarea":Nt(c),ge(c);break;case"select":case"option":break;default:typeof _.onClick=="function"&&(c.onclick=gl)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{E=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ue(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=E.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=E.createElement(o,{is:c.is}):(n=E.createElement(o),o==="select"&&(E=n,c.multiple?E.multiple=!0:c.size&&(E.size=c.size))):n=E.createElementNS(n,o),n[Xi]=i,n[fa]=c,pm(n,i,!1,!1),i.stateNode=n;e:{switch(E=ot(o,c),o){case"dialog":Gt("cancel",n),Gt("close",n),d=c;break;case"iframe":case"object":case"embed":Gt("load",n),d=c;break;case"video":case"audio":for(d=0;d<la.length;d++)Gt(la[d],n);d=c;break;case"source":Gt("error",n),d=c;break;case"img":case"image":case"link":Gt("error",n),Gt("load",n),d=c;break;case"details":Gt("toggle",n),d=c;break;case"input":kn(n,c),d=Y(n,c),Gt("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ae({},c,{value:void 0}),Gt("invalid",n);break;case"textarea":Z(n,c),d=T(n,c),Gt("invalid",n);break;default:d=c}gt(o,d),U=d;for(_ in U)if(U.hasOwnProperty(_)){var z=U[_];_==="style"?nt(n,z):_==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&ke(n,z)):_==="children"?typeof z=="string"?(o!=="textarea"||z!=="")&&ht(n,z):typeof z=="number"&&ht(n,""+z):_!=="suppressContentEditableWarning"&&_!=="suppressHydrationWarning"&&_!=="autoFocus"&&(a.hasOwnProperty(_)?z!=null&&_==="onScroll"&&Gt("scroll",n):z!=null&&L(n,_,z,E))}switch(o){case"input":Nt(n),Ke(n,c,!1);break;case"textarea":Nt(n),ge(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Ae(c.value));break;case"select":n.multiple=!!c.multiple,_=c.value,_!=null?N(n,!!c.multiple,_,!1):c.defaultValue!=null&&N(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=gl)}switch(o){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Ln(i),null;case 6:if(n&&i.stateNode!=null)gm(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(o=hs(ga.current),hs(ji.current),El(i)){if(c=i.stateNode,o=i.memoizedProps,c[Xi]=i,(_=c.nodeValue!==o)&&(n=ri,n!==null))switch(n.tag){case 3:ml(c.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&ml(c.nodeValue,o,(n.mode&1)!==0)}_&&(i.flags|=4)}else c=(o.nodeType===9?o:o.ownerDocument).createTextNode(c),c[Xi]=i,i.stateNode=c}return Ln(i),null;case 13:if(Wt(Qt),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(qt&&si!==null&&(i.mode&1)!==0&&(i.flags&128)===0)yp(),to(),i.flags|=98560,_=!1;else if(_=El(i),c!==null&&c.dehydrated!==null){if(n===null){if(!_)throw Error(t(318));if(_=i.memoizedState,_=_!==null?_.dehydrated:null,!_)throw Error(t(317));_[Xi]=i}else to(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Ln(i),_=!1}else Ai!==null&&(ff(Ai),Ai=null),_=!0;if(!_)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Qt.current&1)!==0?pn===0&&(pn=3):pf())),i.updateQueue!==null&&(i.flags|=4),Ln(i),null);case 4:return so(),Ju(n,i),n===null&&ca(i.stateNode.containerInfo),Ln(i),null;case 10:return Cu(i.type._context),Ln(i),null;case 17:return Kn(i.type)&&_l(),Ln(i),null;case 19:if(Wt(Qt),_=i.memoizedState,_===null)return Ln(i),null;if(c=(i.flags&128)!==0,E=_.rendering,E===null)if(c)Ma(_,!1);else{if(pn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(E=bl(n),E!==null){for(i.flags|=128,Ma(_,!1),c=E.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=o,o=i.child;o!==null;)_=o,n=c,_.flags&=14680066,E=_.alternate,E===null?(_.childLanes=0,_.lanes=n,_.child=null,_.subtreeFlags=0,_.memoizedProps=null,_.memoizedState=null,_.updateQueue=null,_.dependencies=null,_.stateNode=null):(_.childLanes=E.childLanes,_.lanes=E.lanes,_.child=E.child,_.subtreeFlags=0,_.deletions=null,_.memoizedProps=E.memoizedProps,_.memoizedState=E.memoizedState,_.updateQueue=E.updateQueue,_.type=E.type,n=E.dependencies,_.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return Ht(Qt,Qt.current&1|2),i.child}n=n.sibling}_.tail!==null&&xe()>co&&(i.flags|=128,c=!0,Ma(_,!1),i.lanes=4194304)}else{if(!c)if(n=bl(E),n!==null){if(i.flags|=128,c=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Ma(_,!0),_.tail===null&&_.tailMode==="hidden"&&!E.alternate&&!qt)return Ln(i),null}else 2*xe()-_.renderingStartTime>co&&o!==1073741824&&(i.flags|=128,c=!0,Ma(_,!1),i.lanes=4194304);_.isBackwards?(E.sibling=i.child,i.child=E):(o=_.last,o!==null?o.sibling=E:i.child=E,_.last=E)}return _.tail!==null?(i=_.tail,_.rendering=i,_.tail=i.sibling,_.renderingStartTime=xe(),i.sibling=null,o=Qt.current,Ht(Qt,c?o&1|2:o&1),i):(Ln(i),null);case 22:case 23:return hf(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(oi&1073741824)!==0&&(Ln(i),i.subtreeFlags&6&&(i.flags|=8192)):Ln(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function i_(n,i){switch(Mu(i),i.tag){case 1:return Kn(i.type)&&_l(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return so(),Wt($n),Wt(bn),Nu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Iu(i),null;case 13:if(Wt(Qt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));to()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Wt(Qt),null;case 4:return so(),null;case 10:return Cu(i.type._context),null;case 22:case 23:return hf(),null;case 24:return null;default:return null}}var Ol=!1,In=!1,r_=typeof WeakSet=="function"?WeakSet:Set,Oe=null;function ao(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(c){Jt(n,i,c)}else o.current=null}function ef(n,i,o){try{o()}catch(c){Jt(n,i,c)}}var vm=!1;function s_(n,i){if(du=rl,n=$h(),ru(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var d=c.anchorOffset,_=c.focusNode;c=c.focusOffset;try{o.nodeType,_.nodeType}catch{o=null;break e}var E=0,U=-1,z=-1,ee=0,ve=0,ye=n,me=null;t:for(;;){for(var De;ye!==o||d!==0&&ye.nodeType!==3||(U=E+d),ye!==_||c!==0&&ye.nodeType!==3||(z=E+c),ye.nodeType===3&&(E+=ye.nodeValue.length),(De=ye.firstChild)!==null;)me=ye,ye=De;for(;;){if(ye===n)break t;if(me===o&&++ee===d&&(U=E),me===_&&++ve===c&&(z=E),(De=ye.nextSibling)!==null)break;ye=me,me=ye.parentNode}ye=De}o=U===-1||z===-1?null:{start:U,end:z}}else o=null}o=o||{start:0,end:0}}else o=null;for(hu={focusedElem:n,selectionRange:o},rl=!1,Oe=i;Oe!==null;)if(i=Oe,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Oe=n;else for(;Oe!==null;){i=Oe;try{var He=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(He!==null){var Ge=He.memoizedProps,sn=He.memoizedState,q=i.stateNode,V=q.getSnapshotBeforeUpdate(i.elementType===i.type?Ge:Ci(i.type,Ge),sn);q.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var K=i.stateNode.containerInfo;K.nodeType===1?K.textContent="":K.nodeType===9&&K.documentElement&&K.removeChild(K.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(we){Jt(i,i.return,we)}if(n=i.sibling,n!==null){n.return=i.return,Oe=n;break}Oe=i.return}return He=vm,vm=!1,He}function xa(n,i,o){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var _=d.destroy;d.destroy=void 0,_!==void 0&&ef(i,o,_)}d=d.next}while(d!==c)}}function zl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var c=o.create;o.destroy=c()}o=o.next}while(o!==i)}}function tf(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function _m(n){var i=n.alternate;i!==null&&(n.alternate=null,_m(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Xi],delete i[fa],delete i[vu],delete i[Hv],delete i[Vv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function ym(n){return n.tag===5||n.tag===3||n.tag===4}function Sm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||ym(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function nf(n,i,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=gl));else if(c!==4&&(n=n.child,n!==null))for(nf(n,i,o),n=n.sibling;n!==null;)nf(n,i,o),n=n.sibling}function rf(n,i,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(rf(n,i,o),n=n.sibling;n!==null;)rf(n,i,o),n=n.sibling}var xn=null,Ri=!1;function kr(n,i,o){for(o=o.child;o!==null;)Mm(n,i,o),o=o.sibling}function Mm(n,i,o){if(St&&typeof St.onCommitFiberUnmount=="function")try{St.onCommitFiberUnmount(Rt,o)}catch{}switch(o.tag){case 5:In||ao(o,i);case 6:var c=xn,d=Ri;xn=null,kr(n,i,o),xn=c,Ri=d,xn!==null&&(Ri?(n=xn,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):xn.removeChild(o.stateNode));break;case 18:xn!==null&&(Ri?(n=xn,o=o.stateNode,n.nodeType===8?gu(n.parentNode,o):n.nodeType===1&&gu(n,o),ea(n)):gu(xn,o.stateNode));break;case 4:c=xn,d=Ri,xn=o.stateNode.containerInfo,Ri=!0,kr(n,i,o),xn=c,Ri=d;break;case 0:case 11:case 14:case 15:if(!In&&(c=o.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var _=d,E=_.destroy;_=_.tag,E!==void 0&&((_&2)!==0||(_&4)!==0)&&ef(o,i,E),d=d.next}while(d!==c)}kr(n,i,o);break;case 1:if(!In&&(ao(o,i),c=o.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=o.memoizedProps,c.state=o.memoizedState,c.componentWillUnmount()}catch(U){Jt(o,i,U)}kr(n,i,o);break;case 21:kr(n,i,o);break;case 22:o.mode&1?(In=(c=In)||o.memoizedState!==null,kr(n,i,o),In=c):kr(n,i,o);break;default:kr(n,i,o)}}function xm(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new r_),i.forEach(function(c){var d=p_.bind(null,n,c);o.has(c)||(o.add(c),c.then(d,d))})}}function bi(n,i){var o=i.deletions;if(o!==null)for(var c=0;c<o.length;c++){var d=o[c];try{var _=n,E=i,U=E;e:for(;U!==null;){switch(U.tag){case 5:xn=U.stateNode,Ri=!1;break e;case 3:xn=U.stateNode.containerInfo,Ri=!0;break e;case 4:xn=U.stateNode.containerInfo,Ri=!0;break e}U=U.return}if(xn===null)throw Error(t(160));Mm(_,E,d),xn=null,Ri=!1;var z=d.alternate;z!==null&&(z.return=null),d.return=null}catch(ee){Jt(d,i,ee)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Em(i,n),i=i.sibling}function Em(n,i){var o=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(bi(i,n),qi(n),c&4){try{xa(3,n,n.return),zl(3,n)}catch(Ge){Jt(n,n.return,Ge)}try{xa(5,n,n.return)}catch(Ge){Jt(n,n.return,Ge)}}break;case 1:bi(i,n),qi(n),c&512&&o!==null&&ao(o,o.return);break;case 5:if(bi(i,n),qi(n),c&512&&o!==null&&ao(o,o.return),n.flags&32){var d=n.stateNode;try{ht(d,"")}catch(Ge){Jt(n,n.return,Ge)}}if(c&4&&(d=n.stateNode,d!=null)){var _=n.memoizedProps,E=o!==null?o.memoizedProps:_,U=n.type,z=n.updateQueue;if(n.updateQueue=null,z!==null)try{U==="input"&&_.type==="radio"&&_.name!=null&&_t(d,_),ot(U,E);var ee=ot(U,_);for(E=0;E<z.length;E+=2){var ve=z[E],ye=z[E+1];ve==="style"?nt(d,ye):ve==="dangerouslySetInnerHTML"?ke(d,ye):ve==="children"?ht(d,ye):L(d,ve,ye,ee)}switch(U){case"input":mt(d,_);break;case"textarea":he(d,_);break;case"select":var me=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!_.multiple;var De=_.value;De!=null?N(d,!!_.multiple,De,!1):me!==!!_.multiple&&(_.defaultValue!=null?N(d,!!_.multiple,_.defaultValue,!0):N(d,!!_.multiple,_.multiple?[]:"",!1))}d[fa]=_}catch(Ge){Jt(n,n.return,Ge)}}break;case 6:if(bi(i,n),qi(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,_=n.memoizedProps;try{d.nodeValue=_}catch(Ge){Jt(n,n.return,Ge)}}break;case 3:if(bi(i,n),qi(n),c&4&&o!==null&&o.memoizedState.isDehydrated)try{ea(i.containerInfo)}catch(Ge){Jt(n,n.return,Ge)}break;case 4:bi(i,n),qi(n);break;case 13:bi(i,n),qi(n),d=n.child,d.flags&8192&&(_=d.memoizedState!==null,d.stateNode.isHidden=_,!_||d.alternate!==null&&d.alternate.memoizedState!==null||(af=xe())),c&4&&xm(n);break;case 22:if(ve=o!==null&&o.memoizedState!==null,n.mode&1?(In=(ee=In)||ve,bi(i,n),In=ee):bi(i,n),qi(n),c&8192){if(ee=n.memoizedState!==null,(n.stateNode.isHidden=ee)&&!ve&&(n.mode&1)!==0)for(Oe=n,ve=n.child;ve!==null;){for(ye=Oe=ve;Oe!==null;){switch(me=Oe,De=me.child,me.tag){case 0:case 11:case 14:case 15:xa(4,me,me.return);break;case 1:ao(me,me.return);var He=me.stateNode;if(typeof He.componentWillUnmount=="function"){c=me,o=me.return;try{i=c,He.props=i.memoizedProps,He.state=i.memoizedState,He.componentWillUnmount()}catch(Ge){Jt(c,o,Ge)}}break;case 5:ao(me,me.return);break;case 22:if(me.memoizedState!==null){Am(ye);continue}}De!==null?(De.return=me,Oe=De):Am(ye)}ve=ve.sibling}e:for(ve=null,ye=n;;){if(ye.tag===5){if(ve===null){ve=ye;try{d=ye.stateNode,ee?(_=d.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none"):(U=ye.stateNode,z=ye.memoizedProps.style,E=z!=null&&z.hasOwnProperty("display")?z.display:null,U.style.display=et("display",E))}catch(Ge){Jt(n,n.return,Ge)}}}else if(ye.tag===6){if(ve===null)try{ye.stateNode.nodeValue=ee?"":ye.memoizedProps}catch(Ge){Jt(n,n.return,Ge)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===n)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===n)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===n)break e;ve===ye&&(ve=null),ye=ye.return}ve===ye&&(ve=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:bi(i,n),qi(n),c&4&&xm(n);break;case 21:break;default:bi(i,n),qi(n)}}function qi(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(ym(o)){var c=o;break e}o=o.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(ht(d,""),c.flags&=-33);var _=Sm(n);rf(n,_,d);break;case 3:case 4:var E=c.stateNode.containerInfo,U=Sm(n);nf(n,U,E);break;default:throw Error(t(161))}}catch(z){Jt(n,n.return,z)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function o_(n,i,o){Oe=n,wm(n)}function wm(n,i,o){for(var c=(n.mode&1)!==0;Oe!==null;){var d=Oe,_=d.child;if(d.tag===22&&c){var E=d.memoizedState!==null||Ol;if(!E){var U=d.alternate,z=U!==null&&U.memoizedState!==null||In;U=Ol;var ee=In;if(Ol=E,(In=z)&&!ee)for(Oe=d;Oe!==null;)E=Oe,z=E.child,E.tag===22&&E.memoizedState!==null?Cm(d):z!==null?(z.return=E,Oe=z):Cm(d);for(;_!==null;)Oe=_,wm(_),_=_.sibling;Oe=d,Ol=U,In=ee}Tm(n)}else(d.subtreeFlags&8772)!==0&&_!==null?(_.return=d,Oe=_):Tm(n)}}function Tm(n){for(;Oe!==null;){var i=Oe;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:In||zl(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!In)if(o===null)c.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:Ci(i.type,o.memoizedProps);c.componentDidUpdate(d,o.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var _=i.updateQueue;_!==null&&Ap(i,_,c);break;case 3:var E=i.updateQueue;if(E!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Ap(i,E,o)}break;case 5:var U=i.stateNode;if(o===null&&i.flags&4){o=U;var z=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&o.focus();break;case"img":z.src&&(o.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ee=i.alternate;if(ee!==null){var ve=ee.memoizedState;if(ve!==null){var ye=ve.dehydrated;ye!==null&&ea(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}In||i.flags&512&&tf(i)}catch(me){Jt(i,i.return,me)}}if(i===n){Oe=null;break}if(o=i.sibling,o!==null){o.return=i.return,Oe=o;break}Oe=i.return}}function Am(n){for(;Oe!==null;){var i=Oe;if(i===n){Oe=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Oe=o;break}Oe=i.return}}function Cm(n){for(;Oe!==null;){var i=Oe;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{zl(4,i)}catch(z){Jt(i,o,z)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(z){Jt(i,d,z)}}var _=i.return;try{tf(i)}catch(z){Jt(i,_,z)}break;case 5:var E=i.return;try{tf(i)}catch(z){Jt(i,E,z)}}}catch(z){Jt(i,i.return,z)}if(i===n){Oe=null;break}var U=i.sibling;if(U!==null){U.return=i.return,Oe=U;break}Oe=i.return}}var a_=Math.ceil,Bl=A.ReactCurrentDispatcher,sf=A.ReactCurrentOwner,_i=A.ReactCurrentBatchConfig,Et=0,yn=null,ln=null,En=0,oi=0,lo=Ir(0),pn=0,Ea=null,ms=0,Hl=0,of=0,wa=null,Zn=null,af=0,co=1/0,cr=null,Vl=!1,lf=null,Or=null,Gl=!1,zr=null,Wl=0,Ta=0,cf=null,Xl=-1,jl=0;function Hn(){return(Et&6)!==0?xe():Xl!==-1?Xl:Xl=xe()}function Br(n){return(n.mode&1)===0?1:(Et&2)!==0&&En!==0?En&-En:Wv.transition!==null?(jl===0&&(jl=zn()),jl):(n=It,n!==0||(n=window.event,n=n===void 0?16:bh(n.type)),n)}function Pi(n,i,o,c){if(50<Ta)throw Ta=0,cf=null,Error(t(185));qn(n,o,c),((Et&2)===0||n!==yn)&&(n===yn&&((Et&2)===0&&(Hl|=o),pn===4&&Hr(n,En)),Jn(n,c),o===1&&Et===0&&(i.mode&1)===0&&(co=xe()+500,Sl&&Nr()))}function Jn(n,i){var o=n.callbackNode;di(n,i);var c=Wi(n,n===yn?En:0);if(c===0)o!==null&&ne(o),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(o!=null&&ne(o),i===1)n.tag===0?Gv(bm.bind(null,n)):pp(bm.bind(null,n)),zv(function(){(Et&6)===0&&Nr()}),o=null;else{switch(Mh(c)){case 1:o=Ve;break;case 4:o=it;break;case 16:o=st;break;case 536870912:o=Mt;break;default:o=st}o=km(o,Rm.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function Rm(n,i){if(Xl=-1,jl=0,(Et&6)!==0)throw Error(t(327));var o=n.callbackNode;if(uo()&&n.callbackNode!==o)return null;var c=Wi(n,n===yn?En:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=Yl(n,c);else{i=c;var d=Et;Et|=2;var _=Lm();(yn!==n||En!==i)&&(cr=null,co=xe()+500,vs(n,i));do try{u_();break}catch(U){Pm(n,U)}while(!0);Au(),Bl.current=_,Et=d,ln!==null?i=0:(yn=null,En=0,i=pn)}if(i!==0){if(i===2&&(d=tr(n),d!==0&&(c=d,i=uf(n,d))),i===1)throw o=Ea,vs(n,0),Hr(n,c),Jn(n,xe()),o;if(i===6)Hr(n,c);else{if(d=n.current.alternate,(c&30)===0&&!l_(d)&&(i=Yl(n,c),i===2&&(_=tr(n),_!==0&&(c=_,i=uf(n,_))),i===1))throw o=Ea,vs(n,0),Hr(n,c),Jn(n,xe()),o;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:_s(n,Zn,cr);break;case 3:if(Hr(n,c),(c&130023424)===c&&(i=af+500-xe(),10<i)){if(Wi(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Hn(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=mu(_s.bind(null,n,Zn,cr),i);break}_s(n,Zn,cr);break;case 4:if(Hr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var E=31-ct(c);_=1<<E,E=i[E],E>d&&(d=E),c&=~_}if(c=d,c=xe()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*a_(c/1960))-c,10<c){n.timeoutHandle=mu(_s.bind(null,n,Zn,cr),c);break}_s(n,Zn,cr);break;case 5:_s(n,Zn,cr);break;default:throw Error(t(329))}}}return Jn(n,xe()),n.callbackNode===o?Rm.bind(null,n):null}function uf(n,i){var o=wa;return n.current.memoizedState.isDehydrated&&(vs(n,i).flags|=256),n=Yl(n,i),n!==2&&(i=Zn,Zn=o,i!==null&&ff(i)),n}function ff(n){Zn===null?Zn=n:Zn.push.apply(Zn,n)}function l_(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var c=0;c<o.length;c++){var d=o[c],_=d.getSnapshot;d=d.value;try{if(!Ti(_(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Hr(n,i){for(i&=~of,i&=~Hl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-ct(i),c=1<<o;n[o]=-1,i&=~c}}function bm(n){if((Et&6)!==0)throw Error(t(327));uo();var i=Wi(n,0);if((i&1)===0)return Jn(n,xe()),null;var o=Yl(n,i);if(n.tag!==0&&o===2){var c=tr(n);c!==0&&(i=c,o=uf(n,c))}if(o===1)throw o=Ea,vs(n,0),Hr(n,i),Jn(n,xe()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,_s(n,Zn,cr),Jn(n,xe()),null}function df(n,i){var o=Et;Et|=1;try{return n(i)}finally{Et=o,Et===0&&(co=xe()+500,Sl&&Nr())}}function gs(n){zr!==null&&zr.tag===0&&(Et&6)===0&&uo();var i=Et;Et|=1;var o=_i.transition,c=It;try{if(_i.transition=null,It=1,n)return n()}finally{It=c,_i.transition=o,Et=i,(Et&6)===0&&Nr()}}function hf(){oi=lo.current,Wt(lo)}function vs(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,Ov(o)),ln!==null)for(o=ln.return;o!==null;){var c=o;switch(Mu(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&_l();break;case 3:so(),Wt($n),Wt(bn),Nu();break;case 5:Iu(c);break;case 4:so();break;case 13:Wt(Qt);break;case 19:Wt(Qt);break;case 10:Cu(c.type._context);break;case 22:case 23:hf()}o=o.return}if(yn=n,ln=n=Vr(n.current,null),En=oi=i,pn=0,Ea=null,of=Hl=ms=0,Zn=wa=null,ds!==null){for(i=0;i<ds.length;i++)if(o=ds[i],c=o.interleaved,c!==null){o.interleaved=null;var d=c.next,_=o.pending;if(_!==null){var E=_.next;_.next=d,c.next=E}o.pending=c}ds=null}return n}function Pm(n,i){do{var o=ln;try{if(Au(),Pl.current=Nl,Ll){for(var c=Zt.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Ll=!1}if(ps=0,_n=hn=Zt=null,va=!1,_a=0,sf.current=null,o===null||o.return===null){pn=1,Ea=i,ln=null;break}e:{var _=n,E=o.return,U=o,z=i;if(i=En,U.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var ee=z,ve=U,ye=ve.tag;if((ve.mode&1)===0&&(ye===0||ye===11||ye===15)){var me=ve.alternate;me?(ve.updateQueue=me.updateQueue,ve.memoizedState=me.memoizedState,ve.lanes=me.lanes):(ve.updateQueue=null,ve.memoizedState=null)}var De=tm(E);if(De!==null){De.flags&=-257,nm(De,E,U,_,i),De.mode&1&&em(_,ee,i),i=De,z=ee;var He=i.updateQueue;if(He===null){var Ge=new Set;Ge.add(z),i.updateQueue=Ge}else He.add(z);break e}else{if((i&1)===0){em(_,ee,i),pf();break e}z=Error(t(426))}}else if(qt&&U.mode&1){var sn=tm(E);if(sn!==null){(sn.flags&65536)===0&&(sn.flags|=256),nm(sn,E,U,_,i),wu(oo(z,U));break e}}_=z=oo(z,U),pn!==4&&(pn=2),wa===null?wa=[_]:wa.push(_),_=E;do{switch(_.tag){case 3:_.flags|=65536,i&=-i,_.lanes|=i;var q=Zp(_,z,i);Tp(_,q);break e;case 1:U=z;var V=_.type,K=_.stateNode;if((_.flags&128)===0&&(typeof V.getDerivedStateFromError=="function"||K!==null&&typeof K.componentDidCatch=="function"&&(Or===null||!Or.has(K)))){_.flags|=65536,i&=-i,_.lanes|=i;var we=Jp(_,U,i);Tp(_,we);break e}}_=_.return}while(_!==null)}Dm(o)}catch(Ye){i=Ye,ln===o&&o!==null&&(ln=o=o.return);continue}break}while(!0)}function Lm(){var n=Bl.current;return Bl.current=Nl,n===null?Nl:n}function pf(){(pn===0||pn===3||pn===2)&&(pn=4),yn===null||(ms&268435455)===0&&(Hl&268435455)===0||Hr(yn,En)}function Yl(n,i){var o=Et;Et|=2;var c=Lm();(yn!==n||En!==i)&&(cr=null,vs(n,i));do try{c_();break}catch(d){Pm(n,d)}while(!0);if(Au(),Et=o,Bl.current=c,ln!==null)throw Error(t(261));return yn=null,En=0,pn}function c_(){for(;ln!==null;)Im(ln)}function u_(){for(;ln!==null&&!j();)Im(ln)}function Im(n){var i=Fm(n.alternate,n,oi);n.memoizedProps=n.pendingProps,i===null?Dm(n):ln=i,sf.current=null}function Dm(n){var i=n;do{var o=i.alternate;if(n=i.return,(i.flags&32768)===0){if(o=n_(o,i,oi),o!==null){ln=o;return}}else{if(o=i_(o,i),o!==null){o.flags&=32767,ln=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{pn=6,ln=null;return}}if(i=i.sibling,i!==null){ln=i;return}ln=i=n}while(i!==null);pn===0&&(pn=5)}function _s(n,i,o){var c=It,d=_i.transition;try{_i.transition=null,It=1,f_(n,i,o,c)}finally{_i.transition=d,It=c}return null}function f_(n,i,o,c){do uo();while(zr!==null);if((Et&6)!==0)throw Error(t(327));o=n.finishedWork;var d=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var _=o.lanes|o.childLanes;if(tl(n,_),n===yn&&(ln=yn=null,En=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Gl||(Gl=!0,km(st,function(){return uo(),null})),_=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||_){_=_i.transition,_i.transition=null;var E=It;It=1;var U=Et;Et|=4,sf.current=null,s_(n,o),Em(o,n),Lv(hu),rl=!!du,hu=du=null,n.current=o,o_(o),Te(),Et=U,It=E,_i.transition=_}else n.current=o;if(Gl&&(Gl=!1,zr=n,Wl=d),_=n.pendingLanes,_===0&&(Or=null),Cn(o.stateNode),Jn(n,xe()),i!==null)for(c=n.onRecoverableError,o=0;o<i.length;o++)d=i[o],c(d.value,{componentStack:d.stack,digest:d.digest});if(Vl)throw Vl=!1,n=lf,lf=null,n;return(Wl&1)!==0&&n.tag!==0&&uo(),_=n.pendingLanes,(_&1)!==0?n===cf?Ta++:(Ta=0,cf=n):Ta=0,Nr(),null}function uo(){if(zr!==null){var n=Mh(Wl),i=_i.transition,o=It;try{if(_i.transition=null,It=16>n?16:n,zr===null)var c=!1;else{if(n=zr,zr=null,Wl=0,(Et&6)!==0)throw Error(t(331));var d=Et;for(Et|=4,Oe=n.current;Oe!==null;){var _=Oe,E=_.child;if((Oe.flags&16)!==0){var U=_.deletions;if(U!==null){for(var z=0;z<U.length;z++){var ee=U[z];for(Oe=ee;Oe!==null;){var ve=Oe;switch(ve.tag){case 0:case 11:case 15:xa(8,ve,_)}var ye=ve.child;if(ye!==null)ye.return=ve,Oe=ye;else for(;Oe!==null;){ve=Oe;var me=ve.sibling,De=ve.return;if(_m(ve),ve===ee){Oe=null;break}if(me!==null){me.return=De,Oe=me;break}Oe=De}}}var He=_.alternate;if(He!==null){var Ge=He.child;if(Ge!==null){He.child=null;do{var sn=Ge.sibling;Ge.sibling=null,Ge=sn}while(Ge!==null)}}Oe=_}}if((_.subtreeFlags&2064)!==0&&E!==null)E.return=_,Oe=E;else e:for(;Oe!==null;){if(_=Oe,(_.flags&2048)!==0)switch(_.tag){case 0:case 11:case 15:xa(9,_,_.return)}var q=_.sibling;if(q!==null){q.return=_.return,Oe=q;break e}Oe=_.return}}var V=n.current;for(Oe=V;Oe!==null;){E=Oe;var K=E.child;if((E.subtreeFlags&2064)!==0&&K!==null)K.return=E,Oe=K;else e:for(E=V;Oe!==null;){if(U=Oe,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:zl(9,U)}}catch(Ye){Jt(U,U.return,Ye)}if(U===E){Oe=null;break e}var we=U.sibling;if(we!==null){we.return=U.return,Oe=we;break e}Oe=U.return}}if(Et=d,Nr(),St&&typeof St.onPostCommitFiberRoot=="function")try{St.onPostCommitFiberRoot(Rt,n)}catch{}c=!0}return c}finally{It=o,_i.transition=i}}return!1}function Nm(n,i,o){i=oo(o,i),i=Zp(n,i,1),n=Fr(n,i,1),i=Hn(),n!==null&&(qn(n,1,i),Jn(n,i))}function Jt(n,i,o){if(n.tag===3)Nm(n,n,o);else for(;i!==null;){if(i.tag===3){Nm(i,n,o);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Or===null||!Or.has(c))){n=oo(o,n),n=Jp(i,n,1),i=Fr(i,n,1),n=Hn(),i!==null&&(qn(i,1,n),Jn(i,n));break}}i=i.return}}function d_(n,i,o){var c=n.pingCache;c!==null&&c.delete(i),i=Hn(),n.pingedLanes|=n.suspendedLanes&o,yn===n&&(En&o)===o&&(pn===4||pn===3&&(En&130023424)===En&&500>xe()-af?vs(n,0):of|=o),Jn(n,i)}function Um(n,i){i===0&&((n.mode&1)===0?i=1:(i=wi,wi<<=1,(wi&130023424)===0&&(wi=4194304)));var o=Hn();n=or(n,i),n!==null&&(qn(n,i,o),Jn(n,o))}function h_(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),Um(n,o)}function p_(n,i){var o=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(o=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Um(n,o)}var Fm;Fm=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||$n.current)Qn=!0;else{if((n.lanes&o)===0&&(i.flags&128)===0)return Qn=!1,t_(n,i,o);Qn=(n.flags&131072)!==0}else Qn=!1,qt&&(i.flags&1048576)!==0&&mp(i,xl,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;kl(n,i),n=i.pendingProps;var d=Zs(i,bn.current);ro(i,o),d=ku(null,i,c,n,d,o);var _=Ou();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Kn(c)?(_=!0,yl(i)):_=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Pu(i),d.updater=Ul,i.stateNode=d,d._reactInternals=i,Wu(i,c,n,o),i=qu(null,i,c,!0,_,o)):(i.tag=0,qt&&_&&Su(i),Bn(null,i,d,o),i=i.child),i;case 16:c=i.elementType;e:{switch(kl(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=g_(c),n=Ci(c,n),d){case 0:i=Yu(null,i,c,n,o);break e;case 1:i=lm(null,i,c,n,o);break e;case 11:i=im(null,i,c,n,o);break e;case 14:i=rm(null,i,c,Ci(c.type,n),o);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Ci(c,d),Yu(n,i,c,d,o);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Ci(c,d),lm(n,i,c,d,o);case 3:e:{if(cm(i),n===null)throw Error(t(387));c=i.pendingProps,_=i.memoizedState,d=_.element,wp(n,i),Rl(i,c,null,o);var E=i.memoizedState;if(c=E.element,_.isDehydrated)if(_={element:c,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=_,i.memoizedState=_,i.flags&256){d=oo(Error(t(423)),i),i=um(n,i,c,o,d);break e}else if(c!==d){d=oo(Error(t(424)),i),i=um(n,i,c,o,d);break e}else for(si=Lr(i.stateNode.containerInfo.firstChild),ri=i,qt=!0,Ai=null,o=xp(i,null,c,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(to(),c===d){i=lr(n,i,o);break e}Bn(n,i,c,o)}i=i.child}return i;case 5:return Cp(i),n===null&&Eu(i),c=i.type,d=i.pendingProps,_=n!==null?n.memoizedProps:null,E=d.children,pu(c,d)?E=null:_!==null&&pu(c,_)&&(i.flags|=32),am(n,i),Bn(n,i,E,o),i.child;case 6:return n===null&&Eu(i),null;case 13:return fm(n,i,o);case 4:return Lu(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=no(i,null,c,o):Bn(n,i,c,o),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Ci(c,d),im(n,i,c,d,o);case 7:return Bn(n,i,i.pendingProps,o),i.child;case 8:return Bn(n,i,i.pendingProps.children,o),i.child;case 12:return Bn(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,_=i.memoizedProps,E=d.value,Ht(Tl,c._currentValue),c._currentValue=E,_!==null)if(Ti(_.value,E)){if(_.children===d.children&&!$n.current){i=lr(n,i,o);break e}}else for(_=i.child,_!==null&&(_.return=i);_!==null;){var U=_.dependencies;if(U!==null){E=_.child;for(var z=U.firstContext;z!==null;){if(z.context===c){if(_.tag===1){z=ar(-1,o&-o),z.tag=2;var ee=_.updateQueue;if(ee!==null){ee=ee.shared;var ve=ee.pending;ve===null?z.next=z:(z.next=ve.next,ve.next=z),ee.pending=z}}_.lanes|=o,z=_.alternate,z!==null&&(z.lanes|=o),Ru(_.return,o,i),U.lanes|=o;break}z=z.next}}else if(_.tag===10)E=_.type===i.type?null:_.child;else if(_.tag===18){if(E=_.return,E===null)throw Error(t(341));E.lanes|=o,U=E.alternate,U!==null&&(U.lanes|=o),Ru(E,o,i),E=_.sibling}else E=_.child;if(E!==null)E.return=_;else for(E=_;E!==null;){if(E===i){E=null;break}if(_=E.sibling,_!==null){_.return=E.return,E=_;break}E=E.return}_=E}Bn(n,i,d.children,o),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,ro(i,o),d=gi(d),c=c(d),i.flags|=1,Bn(n,i,c,o),i.child;case 14:return c=i.type,d=Ci(c,i.pendingProps),d=Ci(c.type,d),rm(n,i,c,d,o);case 15:return sm(n,i,i.type,i.pendingProps,o);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Ci(c,d),kl(n,i),i.tag=1,Kn(c)?(n=!0,yl(i)):n=!1,ro(i,o),Kp(i,c,d),Wu(i,c,d,o),qu(null,i,c,!0,n,o);case 19:return hm(n,i,o);case 22:return om(n,i,o)}throw Error(t(156,i.tag))};function km(n,i){return te(n,i)}function m_(n,i,o,c){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yi(n,i,o,c){return new m_(n,i,o,c)}function mf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function g_(n){if(typeof n=="function")return mf(n)?1:0;if(n!=null){if(n=n.$$typeof,n===$)return 11;if(n===de)return 14}return 2}function Vr(n,i){var o=n.alternate;return o===null?(o=yi(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function ql(n,i,o,c,d,_){var E=2;if(c=n,typeof n=="function")mf(n)&&(E=1);else if(typeof n=="string")E=5;else e:switch(n){case D:return ys(o.children,d,_,i);case F:E=8,d|=8;break;case b:return n=yi(12,o,i,d|2),n.elementType=b,n.lanes=_,n;case X:return n=yi(13,o,i,d),n.elementType=X,n.lanes=_,n;case se:return n=yi(19,o,i,d),n.elementType=se,n.lanes=_,n;case pe:return $l(o,d,_,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case C:E=10;break e;case O:E=9;break e;case $:E=11;break e;case de:E=14;break e;case re:E=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=yi(E,o,i,d),i.elementType=n,i.type=c,i.lanes=_,i}function ys(n,i,o,c){return n=yi(7,n,c,i),n.lanes=o,n}function $l(n,i,o,c){return n=yi(22,n,c,i),n.elementType=pe,n.lanes=o,n.stateNode={isHidden:!1},n}function gf(n,i,o){return n=yi(6,n,null,i),n.lanes=o,n}function vf(n,i,o){return i=yi(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function v_(n,i,o,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hi(0),this.expirationTimes=hi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hi(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function _f(n,i,o,c,d,_,E,U,z){return n=new v_(n,i,o,U,z),i===1?(i=1,_===!0&&(i|=8)):i=0,_=yi(3,null,null,i),n.current=_,_.stateNode=n,_.memoizedState={element:c,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Pu(_),n}function __(n,i,o){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:c==null?null:""+c,children:n,containerInfo:i,implementation:o}}function Om(n){if(!n)return Dr;n=n._reactInternals;e:{if(Gi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Kn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(Kn(o))return dp(n,o,i)}return i}function zm(n,i,o,c,d,_,E,U,z){return n=_f(o,c,!0,n,d,_,E,U,z),n.context=Om(null),o=n.current,c=Hn(),d=Br(o),_=ar(c,d),_.callback=i??null,Fr(o,_,d),n.current.lanes=d,qn(n,d,c),Jn(n,c),n}function Kl(n,i,o,c){var d=i.current,_=Hn(),E=Br(d);return o=Om(o),i.context===null?i.context=o:i.pendingContext=o,i=ar(_,E),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Fr(d,i,E),n!==null&&(Pi(n,d,E,_),Cl(n,d,E)),E}function Ql(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Bm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function yf(n,i){Bm(n,i),(n=n.alternate)&&Bm(n,i)}function y_(){return null}var Hm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Sf(n){this._internalRoot=n}Zl.prototype.render=Sf.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Kl(n,i,null,null)},Zl.prototype.unmount=Sf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;gs(function(){Kl(null,n,null,null)}),i[nr]=null}};function Zl(n){this._internalRoot=n}Zl.prototype.unstable_scheduleHydration=function(n){if(n){var i=wh();n={blockedOn:null,target:n,priority:i};for(var o=0;o<Rr.length&&i!==0&&i<Rr[o].priority;o++);Rr.splice(o,0,n),o===0&&Ch(n)}};function Mf(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Jl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Vm(){}function S_(n,i,o,c,d){if(d){if(typeof c=="function"){var _=c;c=function(){var ee=Ql(E);_.call(ee)}}var E=zm(i,c,n,0,null,!1,!1,"",Vm);return n._reactRootContainer=E,n[nr]=E.current,ca(n.nodeType===8?n.parentNode:n),gs(),E}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var U=c;c=function(){var ee=Ql(z);U.call(ee)}}var z=_f(n,0,!1,null,null,!1,!1,"",Vm);return n._reactRootContainer=z,n[nr]=z.current,ca(n.nodeType===8?n.parentNode:n),gs(function(){Kl(i,z,o,c)}),z}function ec(n,i,o,c,d){var _=o._reactRootContainer;if(_){var E=_;if(typeof d=="function"){var U=d;d=function(){var z=Ql(E);U.call(z)}}Kl(i,E,n,d)}else E=S_(o,i,n,d,c);return Ql(E)}xh=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=dn(i.pendingLanes);o!==0&&(Wc(i,o|1),Jn(i,xe()),(Et&6)===0&&(co=xe()+500,Nr()))}break;case 13:gs(function(){var c=or(n,1);if(c!==null){var d=Hn();Pi(c,n,1,d)}}),yf(n,1)}},Xc=function(n){if(n.tag===13){var i=or(n,134217728);if(i!==null){var o=Hn();Pi(i,n,134217728,o)}yf(n,134217728)}},Eh=function(n){if(n.tag===13){var i=Br(n),o=or(n,i);if(o!==null){var c=Hn();Pi(o,n,i,c)}yf(n,i)}},wh=function(){return It},Th=function(n,i){var o=It;try{return It=n,i()}finally{It=o}},Re=function(n,i,o){switch(i){case"input":if(mt(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var c=o[i];if(c!==n&&c.form===n.form){var d=vl(c);if(!d)throw Error(t(90));yt(c),mt(c,d)}}}break;case"textarea":he(n,o);break;case"select":i=o.value,i!=null&&N(n,!!o.multiple,i,!1)}},Vt=df,fn=gs;var M_={usingClientEntryPoint:!1,Events:[da,Ks,vl,Le,at,df]},Aa={findFiberByHostInstance:ls,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},x_={bundleType:Aa.bundleType,version:Aa.version,rendererPackageName:Aa.rendererPackageName,rendererConfig:Aa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:A.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=P(n),n===null?null:n.stateNode},findFiberByHostInstance:Aa.findFiberByHostInstance||y_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var tc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tc.isDisabled&&tc.supportsFiber)try{Rt=tc.inject(x_),St=tc}catch{}}return ei.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M_,ei.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mf(i))throw Error(t(200));return __(n,i,null,o)},ei.createRoot=function(n,i){if(!Mf(n))throw Error(t(299));var o=!1,c="",d=Hm;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=_f(n,1,!1,null,null,o,!1,c,d),n[nr]=i.current,ca(n.nodeType===8?n.parentNode:n),new Sf(i)},ei.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=P(i),n=n===null?null:n.stateNode,n},ei.flushSync=function(n){return gs(n)},ei.hydrate=function(n,i,o){if(!Jl(i))throw Error(t(200));return ec(null,n,i,!0,o)},ei.hydrateRoot=function(n,i,o){if(!Mf(n))throw Error(t(405));var c=o!=null&&o.hydratedSources||null,d=!1,_="",E=Hm;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(_=o.identifierPrefix),o.onRecoverableError!==void 0&&(E=o.onRecoverableError)),i=zm(i,null,n,1,o??null,d,!1,_,E),n[nr]=i.current,ca(n),c)for(n=0;n<c.length;n++)o=c[n],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new Zl(i)},ei.render=function(n,i,o){if(!Jl(i))throw Error(t(200));return ec(null,n,i,!1,o)},ei.unmountComponentAtNode=function(n){if(!Jl(n))throw Error(t(40));return n._reactRootContainer?(gs(function(){ec(null,null,n,!1,function(){n._reactRootContainer=null,n[nr]=null})}),!0):!1},ei.unstable_batchedUpdates=df,ei.unstable_renderSubtreeIntoContainer=function(n,i,o,c){if(!Jl(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return ec(n,i,o,!1,c)},ei.version="18.3.1-next-f1338f8080-20240426",ei}var Km;function I_(){if(Km)return wf.exports;Km=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),wf.exports=L_(),wf.exports}var Qm;function D_(){if(Qm)return nc;Qm=1;var r=I_();return nc.createRoot=r.createRoot,nc.hydrateRoot=r.hydrateRoot,nc}var N_=D_(),Xt=Zd();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jd="170",U_=0,Zm=1,F_=2,eh=1,k_=2,mr=3,Mr=0,Xn=1,Fi=2,es=0,Lo=1,Jm=2,eg=3,tg=4,O_=5,Is=100,z_=101,B_=102,H_=103,V_=104,G_=200,W_=201,X_=202,j_=203,rd=204,sd=205,Y_=206,q_=207,$_=208,K_=209,Q_=210,Z_=211,J_=212,ey=213,ty=214,od=0,ad=1,ld=2,Uo=3,cd=4,ud=5,fd=6,dd=7,th=0,ny=1,iy=2,ts=0,ry=1,sy=2,oy=3,c0=4,ay=5,ly=6,cy=7,u0=300,Fo=301,ko=302,hd=303,pd=304,Fc=306,Ga=1e3,Us=1001,md=1002,Hi=1003,uy=1004,ic=1005,Qi=1006,Cf=1007,Fs=1008,xr=1009,f0=1010,d0=1011,Wa=1012,nh=1013,Os=1014,gr=1015,ja=1016,ih=1017,rh=1018,Oo=1020,h0=35902,p0=1021,m0=1022,Oi=1023,g0=1024,v0=1025,Io=1026,zo=1027,_0=1028,sh=1029,y0=1030,oh=1031,ah=1033,Tc=33776,Ac=33777,Cc=33778,Rc=33779,gd=35840,vd=35841,_d=35842,yd=35843,Sd=36196,Md=37492,xd=37496,Ed=37808,wd=37809,Td=37810,Ad=37811,Cd=37812,Rd=37813,bd=37814,Pd=37815,Ld=37816,Id=37817,Dd=37818,Nd=37819,Ud=37820,Fd=37821,bc=36492,kd=36494,Od=36495,S0=36283,zd=36284,Bd=36285,Hd=36286,fy=3200,dy=3201,lh=0,hy=1,Qr="",ti="srgb",Vo="srgb-linear",kc="linear",Ut="srgb",fo=7680,ng=519,py=512,my=513,gy=514,M0=515,vy=516,_y=517,yy=518,Sy=519,ig=35044,rg="300 es",vr=2e3,Lc=2001;class Go{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const s=this._listeners;return s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const s=this._listeners[e.type];if(s!==void 0){e.target=this;const a=s.slice(0);for(let l=0,u=a.length;l<u;l++)a[l].call(this,e);e.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let sg=1234567;const za=Math.PI/180,Bo=180/Math.PI;function Wo(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Dn[r&255]+Dn[r>>8&255]+Dn[r>>16&255]+Dn[r>>24&255]+"-"+Dn[e&255]+Dn[e>>8&255]+"-"+Dn[e>>16&15|64]+Dn[e>>24&255]+"-"+Dn[t&63|128]+Dn[t>>8&255]+"-"+Dn[t>>16&255]+Dn[t>>24&255]+Dn[s&255]+Dn[s>>8&255]+Dn[s>>16&255]+Dn[s>>24&255]).toLowerCase()}function Tn(r,e,t){return Math.max(e,Math.min(t,r))}function ch(r,e){return(r%e+e)%e}function My(r,e,t,s,a){return s+(r-e)*(a-s)/(t-e)}function xy(r,e,t){return r!==e?(t-r)/(e-r):0}function Ba(r,e,t){return(1-t)*r+t*e}function Ey(r,e,t,s){return Ba(r,e,1-Math.exp(-t*s))}function wy(r,e=1){return e-Math.abs(ch(r,e*2)-e)}function Ty(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Ay(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Cy(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Ry(r,e){return r+Math.random()*(e-r)}function by(r){return r*(.5-Math.random())}function Py(r){r!==void 0&&(sg=r);let e=sg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ly(r){return r*za}function Iy(r){return r*Bo}function Dy(r){return(r&r-1)===0&&r!==0}function Ny(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Uy(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Fy(r,e,t,s,a){const l=Math.cos,u=Math.sin,f=l(t/2),h=u(t/2),p=l((e+s)/2),g=u((e+s)/2),y=l((e-s)/2),S=u((e-s)/2),M=l((s-e)/2),x=u((s-e)/2);switch(a){case"XYX":r.set(f*g,h*y,h*S,f*p);break;case"YZY":r.set(h*S,f*g,h*y,f*p);break;case"ZXZ":r.set(h*y,h*S,f*g,f*p);break;case"XZX":r.set(f*g,h*x,h*M,f*p);break;case"YXY":r.set(h*M,f*g,h*x,f*p);break;case"ZYZ":r.set(h*x,h*M,f*g,f*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function Ro(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Vn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Ra={DEG2RAD:za,RAD2DEG:Bo,generateUUID:Wo,clamp:Tn,euclideanModulo:ch,mapLinear:My,inverseLerp:xy,lerp:Ba,damp:Ey,pingpong:wy,smoothstep:Ty,smootherstep:Ay,randInt:Cy,randFloat:Ry,randFloatSpread:by,seededRandom:Py,degToRad:Ly,radToDeg:Iy,isPowerOfTwo:Dy,ceilPowerOfTwo:Ny,floorPowerOfTwo:Uy,setQuaternionFromProperEuler:Fy,normalize:Vn,denormalize:Ro};class ut{constructor(e=0,t=0){ut.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,a=e.elements;return this.x=a[0]*t+a[3]*s+a[6],this.y=a[1]*t+a[4]*s+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(Tn(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),a=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*s-u*a+e.x,this.y=l*a+u*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ft{constructor(e,t,s,a,l,u,f,h,p){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,a,l,u,f,h,p)}set(e,t,s,a,l,u,f,h,p){const g=this.elements;return g[0]=e,g[1]=a,g[2]=f,g[3]=t,g[4]=l,g[5]=h,g[6]=s,g[7]=u,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,a=t.elements,l=this.elements,u=s[0],f=s[3],h=s[6],p=s[1],g=s[4],y=s[7],S=s[2],M=s[5],x=s[8],w=a[0],v=a[3],m=a[6],R=a[1],L=a[4],A=a[7],B=a[2],I=a[5],D=a[8];return l[0]=u*w+f*R+h*B,l[3]=u*v+f*L+h*I,l[6]=u*m+f*A+h*D,l[1]=p*w+g*R+y*B,l[4]=p*v+g*L+y*I,l[7]=p*m+g*A+y*D,l[2]=S*w+M*R+x*B,l[5]=S*v+M*L+x*I,l[8]=S*m+M*A+x*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],g=e[8];return t*u*g-t*f*p-s*l*g+s*f*h+a*l*p-a*u*h}invert(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],g=e[8],y=g*u-f*p,S=f*h-g*l,M=p*l-u*h,x=t*y+s*S+a*M;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/x;return e[0]=y*w,e[1]=(a*p-g*s)*w,e[2]=(f*s-a*u)*w,e[3]=S*w,e[4]=(g*t-a*h)*w,e[5]=(a*l-f*t)*w,e[6]=M*w,e[7]=(s*h-p*t)*w,e[8]=(u*t-s*l)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,a,l,u,f){const h=Math.cos(l),p=Math.sin(l);return this.set(s*h,s*p,-s*(h*u+p*f)+u+e,-a*p,a*h,-a*(-p*u+h*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(Rf.makeScale(e,t)),this}rotate(e){return this.premultiply(Rf.makeRotation(-e)),this}translate(e,t){return this.premultiply(Rf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let a=0;a<9;a++)if(t[a]!==s[a])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Rf=new ft;function x0(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ic(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function ky(){const r=Ic("canvas");return r.style.display="block",r}const og={};function Fa(r){r in og||(og[r]=!0,console.warn(r))}function Oy(r,e,t){return new Promise(function(s,a){function l(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:a();break;case r.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:s()}}setTimeout(l,t)})}function zy(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function By(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const wt={enabled:!0,workingColorSpace:Vo,spaces:{},convert:function(r,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Ut&&(r.r=yr(r.r),r.g=yr(r.g),r.b=yr(r.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(r.applyMatrix3(this.spaces[e].toXYZ),r.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Ut&&(r.r=Do(r.r),r.g=Do(r.g),r.b=Do(r.b))),r},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Qr?kc:this.spaces[r].transfer},getLuminanceCoefficients:function(r,e=this.workingColorSpace){return r.fromArray(this.spaces[e].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,e,t){return r.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function yr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Do(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const ag=[.64,.33,.3,.6,.15,.06],lg=[.2126,.7152,.0722],cg=[.3127,.329],ug=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fg=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);wt.define({[Vo]:{primaries:ag,whitePoint:cg,transfer:kc,toXYZ:ug,fromXYZ:fg,luminanceCoefficients:lg,workingColorSpaceConfig:{unpackColorSpace:ti},outputColorSpaceConfig:{drawingBufferColorSpace:ti}},[ti]:{primaries:ag,whitePoint:cg,transfer:Ut,toXYZ:ug,fromXYZ:fg,luminanceCoefficients:lg,outputColorSpaceConfig:{drawingBufferColorSpace:ti}}});let ho;class Hy{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ho===void 0&&(ho=Ic("canvas")),ho.width=e.width,ho.height=e.height;const s=ho.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),t=ho}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ic("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const a=s.getImageData(0,0,e.width,e.height),l=a.data;for(let u=0;u<l.length;u++)l[u]=yr(l[u]/255)*255;return s.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(yr(t[s]/255)*255):t[s]=yr(t[s]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Vy=0;class E0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vy++}),this.uuid=Wo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let u=0,f=a.length;u<f;u++)a[u].isDataTexture?l.push(bf(a[u].image)):l.push(bf(a[u]))}else l=bf(a);s.url=l}return t||(e.images[this.uuid]=s),s}}function bf(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Hy.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Gy=0;class jn extends Go{constructor(e=jn.DEFAULT_IMAGE,t=jn.DEFAULT_MAPPING,s=Us,a=Us,l=Qi,u=Fs,f=Oi,h=xr,p=jn.DEFAULT_ANISOTROPY,g=Qr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gy++}),this.uuid=Wo(),this.name="",this.source=new E0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=a,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=h,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==u0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ga:e.x=e.x-Math.floor(e.x);break;case Us:e.x=e.x<0?0:1;break;case md:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ga:e.y=e.y-Math.floor(e.y);break;case Us:e.y=e.y<0?0:1;break;case md:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}jn.DEFAULT_IMAGE=null;jn.DEFAULT_MAPPING=u0;jn.DEFAULT_ANISOTROPY=1;class nn{constructor(e=0,t=0,s=0,a=1){nn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=s,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,a){return this.x=e,this.y=t,this.z=s,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,a=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*s+u[8]*a+u[12]*l,this.y=u[1]*t+u[5]*s+u[9]*a+u[13]*l,this.z=u[2]*t+u[6]*s+u[10]*a+u[14]*l,this.w=u[3]*t+u[7]*s+u[11]*a+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,a,l;const h=e.elements,p=h[0],g=h[4],y=h[8],S=h[1],M=h[5],x=h[9],w=h[2],v=h[6],m=h[10];if(Math.abs(g-S)<.01&&Math.abs(y-w)<.01&&Math.abs(x-v)<.01){if(Math.abs(g+S)<.1&&Math.abs(y+w)<.1&&Math.abs(x+v)<.1&&Math.abs(p+M+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(p+1)/2,A=(M+1)/2,B=(m+1)/2,I=(g+S)/4,D=(y+w)/4,F=(x+v)/4;return L>A&&L>B?L<.01?(s=0,a=.707106781,l=.707106781):(s=Math.sqrt(L),a=I/s,l=D/s):A>B?A<.01?(s=.707106781,a=0,l=.707106781):(a=Math.sqrt(A),s=I/a,l=F/a):B<.01?(s=.707106781,a=.707106781,l=0):(l=Math.sqrt(B),s=D/l,a=F/l),this.set(s,a,l,t),this}let R=Math.sqrt((v-x)*(v-x)+(y-w)*(y-w)+(S-g)*(S-g));return Math.abs(R)<.001&&(R=1),this.x=(v-x)/R,this.y=(y-w)/R,this.z=(S-g)/R,this.w=Math.acos((p+M+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Wy extends Go{constructor(e=1,t=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nn(0,0,e,t),this.scissorTest=!1,this.viewport=new nn(0,0,e,t);const a={width:e,height:t,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const l=new jn(a,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);l.flipY=!1,l.generateMipmaps=s.generateMipmaps,l.internalFormat=s.internalFormat,this.textures=[];const u=s.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=s;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let s=0,a=e.textures.length;s<a;s++)this.textures[s]=e.textures[s].clone(),this.textures[s].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new E0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zs extends Wy{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class w0 extends jn{constructor(e=null,t=1,s=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:a},this.magFilter=Hi,this.minFilter=Hi,this.wrapR=Us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Xy extends jn{constructor(e=null,t=1,s=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:a},this.magFilter=Hi,this.minFilter=Hi,this.wrapR=Us,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ya{constructor(e=0,t=0,s=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=a}static slerpFlat(e,t,s,a,l,u,f){let h=s[a+0],p=s[a+1],g=s[a+2],y=s[a+3];const S=l[u+0],M=l[u+1],x=l[u+2],w=l[u+3];if(f===0){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=y;return}if(f===1){e[t+0]=S,e[t+1]=M,e[t+2]=x,e[t+3]=w;return}if(y!==w||h!==S||p!==M||g!==x){let v=1-f;const m=h*S+p*M+g*x+y*w,R=m>=0?1:-1,L=1-m*m;if(L>Number.EPSILON){const B=Math.sqrt(L),I=Math.atan2(B,m*R);v=Math.sin(v*I)/B,f=Math.sin(f*I)/B}const A=f*R;if(h=h*v+S*A,p=p*v+M*A,g=g*v+x*A,y=y*v+w*A,v===1-f){const B=1/Math.sqrt(h*h+p*p+g*g+y*y);h*=B,p*=B,g*=B,y*=B}}e[t]=h,e[t+1]=p,e[t+2]=g,e[t+3]=y}static multiplyQuaternionsFlat(e,t,s,a,l,u){const f=s[a],h=s[a+1],p=s[a+2],g=s[a+3],y=l[u],S=l[u+1],M=l[u+2],x=l[u+3];return e[t]=f*x+g*y+h*M-p*S,e[t+1]=h*x+g*S+p*y-f*M,e[t+2]=p*x+g*M+f*S-h*y,e[t+3]=g*x-f*y-h*S-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,a){return this._x=e,this._y=t,this._z=s,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,a=e._y,l=e._z,u=e._order,f=Math.cos,h=Math.sin,p=f(s/2),g=f(a/2),y=f(l/2),S=h(s/2),M=h(a/2),x=h(l/2);switch(u){case"XYZ":this._x=S*g*y+p*M*x,this._y=p*M*y-S*g*x,this._z=p*g*x+S*M*y,this._w=p*g*y-S*M*x;break;case"YXZ":this._x=S*g*y+p*M*x,this._y=p*M*y-S*g*x,this._z=p*g*x-S*M*y,this._w=p*g*y+S*M*x;break;case"ZXY":this._x=S*g*y-p*M*x,this._y=p*M*y+S*g*x,this._z=p*g*x+S*M*y,this._w=p*g*y-S*M*x;break;case"ZYX":this._x=S*g*y-p*M*x,this._y=p*M*y+S*g*x,this._z=p*g*x-S*M*y,this._w=p*g*y+S*M*x;break;case"YZX":this._x=S*g*y+p*M*x,this._y=p*M*y+S*g*x,this._z=p*g*x-S*M*y,this._w=p*g*y-S*M*x;break;case"XZY":this._x=S*g*y-p*M*x,this._y=p*M*y-S*g*x,this._z=p*g*x+S*M*y,this._w=p*g*y+S*M*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,a=Math.sin(s);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],a=t[4],l=t[8],u=t[1],f=t[5],h=t[9],p=t[2],g=t[6],y=t[10],S=s+f+y;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(g-h)*M,this._y=(l-p)*M,this._z=(u-a)*M}else if(s>f&&s>y){const M=2*Math.sqrt(1+s-f-y);this._w=(g-h)/M,this._x=.25*M,this._y=(a+u)/M,this._z=(l+p)/M}else if(f>y){const M=2*Math.sqrt(1+f-s-y);this._w=(l-p)/M,this._x=(a+u)/M,this._y=.25*M,this._z=(h+g)/M}else{const M=2*Math.sqrt(1+y-s-f);this._w=(u-a)/M,this._x=(l+p)/M,this._y=(h+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tn(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const a=Math.min(1,t/s);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,a=e._y,l=e._z,u=e._w,f=t._x,h=t._y,p=t._z,g=t._w;return this._x=s*g+u*f+a*p-l*h,this._y=a*g+u*h+l*f-s*p,this._z=l*g+u*p+s*h-a*f,this._w=u*g-s*f-a*h-l*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const s=this._x,a=this._y,l=this._z,u=this._w;let f=u*e._w+s*e._x+a*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=u,this._x=s,this._y=a,this._z=l,this;const h=1-f*f;if(h<=Number.EPSILON){const M=1-t;return this._w=M*u+t*this._w,this._x=M*s+t*this._x,this._y=M*a+t*this._y,this._z=M*l+t*this._z,this.normalize(),this}const p=Math.sqrt(h),g=Math.atan2(p,f),y=Math.sin((1-t)*g)/p,S=Math.sin(t*g)/p;return this._w=u*y+this._w*S,this._x=s*y+this._x*S,this._y=a*y+this._y*S,this._z=l*y+this._z*S,this._onChangeCallback(),this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),a=Math.sqrt(1-s),l=Math.sqrt(s);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(e=0,t=0,s=0){Q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(dg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(dg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*a,this.y=l[1]*t+l[4]*s+l[7]*a,this.z=l[2]*t+l[5]*s+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,a=this.z,l=e.elements,u=1/(l[3]*t+l[7]*s+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*a+l[12])*u,this.y=(l[1]*t+l[5]*s+l[9]*a+l[13])*u,this.z=(l[2]*t+l[6]*s+l[10]*a+l[14])*u,this}applyQuaternion(e){const t=this.x,s=this.y,a=this.z,l=e.x,u=e.y,f=e.z,h=e.w,p=2*(u*a-f*s),g=2*(f*t-l*a),y=2*(l*s-u*t);return this.x=t+h*p+u*y-f*g,this.y=s+h*g+f*p-l*y,this.z=a+h*y+l*g-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*a,this.y=l[1]*t+l[5]*s+l[9]*a,this.z=l[2]*t+l[6]*s+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,a=e.y,l=e.z,u=t.x,f=t.y,h=t.z;return this.x=a*h-l*f,this.y=l*u-s*h,this.z=s*f-a*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Pf.copy(this).projectOnVector(e),this.sub(Pf)}reflect(e){return this.sub(Pf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(Tn(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,a=this.z-e.z;return t*t+s*s+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const a=Math.sin(t)*e;return this.x=a*Math.sin(s),this.y=Math.cos(t)*e,this.z=a*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pf=new Q,dg=new Ya;class qa{constructor(e=new Q(1/0,1/0,1/0),t=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(Li.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(Li.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=Li.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,Li):Li.fromBufferAttribute(l,u),Li.applyMatrix4(e.matrixWorld),this.expandByPoint(Li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),rc.copy(s.boundingBox)),rc.applyMatrix4(e.matrixWorld),this.union(rc)}const a=e.children;for(let l=0,u=a.length;l<u;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Li),Li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ba),sc.subVectors(this.max,ba),po.subVectors(e.a,ba),mo.subVectors(e.b,ba),go.subVectors(e.c,ba),Wr.subVectors(mo,po),Xr.subVectors(go,mo),Ss.subVectors(po,go);let t=[0,-Wr.z,Wr.y,0,-Xr.z,Xr.y,0,-Ss.z,Ss.y,Wr.z,0,-Wr.x,Xr.z,0,-Xr.x,Ss.z,0,-Ss.x,-Wr.y,Wr.x,0,-Xr.y,Xr.x,0,-Ss.y,Ss.x,0];return!Lf(t,po,mo,go,sc)||(t=[1,0,0,0,1,0,0,0,1],!Lf(t,po,mo,go,sc))?!1:(oc.crossVectors(Wr,Xr),t=[oc.x,oc.y,oc.z],Lf(t,po,mo,go,sc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ur[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ur[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ur[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ur[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ur[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ur[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ur[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ur[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ur),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ur=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],Li=new Q,rc=new qa,po=new Q,mo=new Q,go=new Q,Wr=new Q,Xr=new Q,Ss=new Q,ba=new Q,sc=new Q,oc=new Q,Ms=new Q;function Lf(r,e,t,s,a){for(let l=0,u=r.length-3;l<=u;l+=3){Ms.fromArray(r,l);const f=a.x*Math.abs(Ms.x)+a.y*Math.abs(Ms.y)+a.z*Math.abs(Ms.z),h=e.dot(Ms),p=t.dot(Ms),g=s.dot(Ms);if(Math.max(-Math.max(h,p,g),Math.min(h,p,g))>f)return!1}return!0}const jy=new qa,Pa=new Q,If=new Q;class uh{constructor(e=new Q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):jy.setFromPoints(e).getCenter(s);let a=0;for(let l=0,u=e.length;l<u;l++)a=Math.max(a,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pa.subVectors(e,this.center);const t=Pa.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),a=(s-this.radius)*.5;this.center.addScaledVector(Pa,a/s),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(If.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pa.copy(e.center).add(If)),this.expandByPoint(Pa.copy(e.center).sub(If))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fr=new Q,Df=new Q,ac=new Q,jr=new Q,Nf=new Q,lc=new Q,Uf=new Q;class fh{constructor(e=new Q,t=new Q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=fr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fr.copy(this.origin).addScaledVector(this.direction,t),fr.distanceToSquared(e))}distanceSqToSegment(e,t,s,a){Df.copy(e).add(t).multiplyScalar(.5),ac.copy(t).sub(e).normalize(),jr.copy(this.origin).sub(Df);const l=e.distanceTo(t)*.5,u=-this.direction.dot(ac),f=jr.dot(this.direction),h=-jr.dot(ac),p=jr.lengthSq(),g=Math.abs(1-u*u);let y,S,M,x;if(g>0)if(y=u*h-f,S=u*f-h,x=l*g,y>=0)if(S>=-x)if(S<=x){const w=1/g;y*=w,S*=w,M=y*(y+u*S+2*f)+S*(u*y+S+2*h)+p}else S=l,y=Math.max(0,-(u*S+f)),M=-y*y+S*(S+2*h)+p;else S=-l,y=Math.max(0,-(u*S+f)),M=-y*y+S*(S+2*h)+p;else S<=-x?(y=Math.max(0,-(-u*l+f)),S=y>0?-l:Math.min(Math.max(-l,-h),l),M=-y*y+S*(S+2*h)+p):S<=x?(y=0,S=Math.min(Math.max(-l,-h),l),M=S*(S+2*h)+p):(y=Math.max(0,-(u*l+f)),S=y>0?l:Math.min(Math.max(-l,-h),l),M=-y*y+S*(S+2*h)+p);else S=u>0?-l:l,y=Math.max(0,-(u*S+f)),M=-y*y+S*(S+2*h)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,y),a&&a.copy(Df).addScaledVector(ac,S),M}intersectSphere(e,t){fr.subVectors(e.center,this.origin);const s=fr.dot(this.direction),a=fr.dot(fr)-s*s,l=e.radius*e.radius;if(a>l)return null;const u=Math.sqrt(l-a),f=s-u,h=s+u;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,a,l,u,f,h;const p=1/this.direction.x,g=1/this.direction.y,y=1/this.direction.z,S=this.origin;return p>=0?(s=(e.min.x-S.x)*p,a=(e.max.x-S.x)*p):(s=(e.max.x-S.x)*p,a=(e.min.x-S.x)*p),g>=0?(l=(e.min.y-S.y)*g,u=(e.max.y-S.y)*g):(l=(e.max.y-S.y)*g,u=(e.min.y-S.y)*g),s>u||l>a||((l>s||isNaN(s))&&(s=l),(u<a||isNaN(a))&&(a=u),y>=0?(f=(e.min.z-S.z)*y,h=(e.max.z-S.z)*y):(f=(e.max.z-S.z)*y,h=(e.min.z-S.z)*y),s>h||f>a)||((f>s||s!==s)&&(s=f),(h<a||a!==a)&&(a=h),a<0)?null:this.at(s>=0?s:a,t)}intersectsBox(e){return this.intersectBox(e,fr)!==null}intersectTriangle(e,t,s,a,l){Nf.subVectors(t,e),lc.subVectors(s,e),Uf.crossVectors(Nf,lc);let u=this.direction.dot(Uf),f;if(u>0){if(a)return null;f=1}else if(u<0)f=-1,u=-u;else return null;jr.subVectors(this.origin,e);const h=f*this.direction.dot(lc.crossVectors(jr,lc));if(h<0)return null;const p=f*this.direction.dot(Nf.cross(jr));if(p<0||h+p>u)return null;const g=-f*jr.dot(Uf);return g<0?null:this.at(g/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Kt{constructor(e,t,s,a,l,u,f,h,p,g,y,S,M,x,w,v){Kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,a,l,u,f,h,p,g,y,S,M,x,w,v)}set(e,t,s,a,l,u,f,h,p,g,y,S,M,x,w,v){const m=this.elements;return m[0]=e,m[4]=t,m[8]=s,m[12]=a,m[1]=l,m[5]=u,m[9]=f,m[13]=h,m[2]=p,m[6]=g,m[10]=y,m[14]=S,m[3]=M,m[7]=x,m[11]=w,m[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kt().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,s=e.elements,a=1/vo.setFromMatrixColumn(e,0).length(),l=1/vo.setFromMatrixColumn(e,1).length(),u=1/vo.setFromMatrixColumn(e,2).length();return t[0]=s[0]*a,t[1]=s[1]*a,t[2]=s[2]*a,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*u,t[9]=s[9]*u,t[10]=s[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,a=e.y,l=e.z,u=Math.cos(s),f=Math.sin(s),h=Math.cos(a),p=Math.sin(a),g=Math.cos(l),y=Math.sin(l);if(e.order==="XYZ"){const S=u*g,M=u*y,x=f*g,w=f*y;t[0]=h*g,t[4]=-h*y,t[8]=p,t[1]=M+x*p,t[5]=S-w*p,t[9]=-f*h,t[2]=w-S*p,t[6]=x+M*p,t[10]=u*h}else if(e.order==="YXZ"){const S=h*g,M=h*y,x=p*g,w=p*y;t[0]=S+w*f,t[4]=x*f-M,t[8]=u*p,t[1]=u*y,t[5]=u*g,t[9]=-f,t[2]=M*f-x,t[6]=w+S*f,t[10]=u*h}else if(e.order==="ZXY"){const S=h*g,M=h*y,x=p*g,w=p*y;t[0]=S-w*f,t[4]=-u*y,t[8]=x+M*f,t[1]=M+x*f,t[5]=u*g,t[9]=w-S*f,t[2]=-u*p,t[6]=f,t[10]=u*h}else if(e.order==="ZYX"){const S=u*g,M=u*y,x=f*g,w=f*y;t[0]=h*g,t[4]=x*p-M,t[8]=S*p+w,t[1]=h*y,t[5]=w*p+S,t[9]=M*p-x,t[2]=-p,t[6]=f*h,t[10]=u*h}else if(e.order==="YZX"){const S=u*h,M=u*p,x=f*h,w=f*p;t[0]=h*g,t[4]=w-S*y,t[8]=x*y+M,t[1]=y,t[5]=u*g,t[9]=-f*g,t[2]=-p*g,t[6]=M*y+x,t[10]=S-w*y}else if(e.order==="XZY"){const S=u*h,M=u*p,x=f*h,w=f*p;t[0]=h*g,t[4]=-y,t[8]=p*g,t[1]=S*y+w,t[5]=u*g,t[9]=M*y-x,t[2]=x*y-M,t[6]=f*g,t[10]=w*y+S}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Yy,e,qy)}lookAt(e,t,s){const a=this.elements;return ai.subVectors(e,t),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),Yr.crossVectors(s,ai),Yr.lengthSq()===0&&(Math.abs(s.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),Yr.crossVectors(s,ai)),Yr.normalize(),cc.crossVectors(ai,Yr),a[0]=Yr.x,a[4]=cc.x,a[8]=ai.x,a[1]=Yr.y,a[5]=cc.y,a[9]=ai.y,a[2]=Yr.z,a[6]=cc.z,a[10]=ai.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,a=t.elements,l=this.elements,u=s[0],f=s[4],h=s[8],p=s[12],g=s[1],y=s[5],S=s[9],M=s[13],x=s[2],w=s[6],v=s[10],m=s[14],R=s[3],L=s[7],A=s[11],B=s[15],I=a[0],D=a[4],F=a[8],b=a[12],C=a[1],O=a[5],$=a[9],X=a[13],se=a[2],de=a[6],re=a[10],pe=a[14],H=a[3],le=a[7],ae=a[11],k=a[15];return l[0]=u*I+f*C+h*se+p*H,l[4]=u*D+f*O+h*de+p*le,l[8]=u*F+f*$+h*re+p*ae,l[12]=u*b+f*X+h*pe+p*k,l[1]=g*I+y*C+S*se+M*H,l[5]=g*D+y*O+S*de+M*le,l[9]=g*F+y*$+S*re+M*ae,l[13]=g*b+y*X+S*pe+M*k,l[2]=x*I+w*C+v*se+m*H,l[6]=x*D+w*O+v*de+m*le,l[10]=x*F+w*$+v*re+m*ae,l[14]=x*b+w*X+v*pe+m*k,l[3]=R*I+L*C+A*se+B*H,l[7]=R*D+L*O+A*de+B*le,l[11]=R*F+L*$+A*re+B*ae,l[15]=R*b+L*X+A*pe+B*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],a=e[8],l=e[12],u=e[1],f=e[5],h=e[9],p=e[13],g=e[2],y=e[6],S=e[10],M=e[14],x=e[3],w=e[7],v=e[11],m=e[15];return x*(+l*h*y-a*p*y-l*f*S+s*p*S+a*f*M-s*h*M)+w*(+t*h*M-t*p*S+l*u*S-a*u*M+a*p*g-l*h*g)+v*(+t*p*y-t*f*M-l*u*y+s*u*M+l*f*g-s*p*g)+m*(-a*f*g-t*h*y+t*f*S+a*u*y-s*u*S+s*h*g)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],g=e[8],y=e[9],S=e[10],M=e[11],x=e[12],w=e[13],v=e[14],m=e[15],R=y*v*p-w*S*p+w*h*M-f*v*M-y*h*m+f*S*m,L=x*S*p-g*v*p-x*h*M+u*v*M+g*h*m-u*S*m,A=g*w*p-x*y*p+x*f*M-u*w*M-g*f*m+u*y*m,B=x*y*h-g*w*h-x*f*S+u*w*S+g*f*v-u*y*v,I=t*R+s*L+a*A+l*B;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/I;return e[0]=R*D,e[1]=(w*S*l-y*v*l-w*a*M+s*v*M+y*a*m-s*S*m)*D,e[2]=(f*v*l-w*h*l+w*a*p-s*v*p-f*a*m+s*h*m)*D,e[3]=(y*h*l-f*S*l-y*a*p+s*S*p+f*a*M-s*h*M)*D,e[4]=L*D,e[5]=(g*v*l-x*S*l+x*a*M-t*v*M-g*a*m+t*S*m)*D,e[6]=(x*h*l-u*v*l-x*a*p+t*v*p+u*a*m-t*h*m)*D,e[7]=(u*S*l-g*h*l+g*a*p-t*S*p-u*a*M+t*h*M)*D,e[8]=A*D,e[9]=(x*y*l-g*w*l-x*s*M+t*w*M+g*s*m-t*y*m)*D,e[10]=(u*w*l-x*f*l+x*s*p-t*w*p-u*s*m+t*f*m)*D,e[11]=(g*f*l-u*y*l-g*s*p+t*y*p+u*s*M-t*f*M)*D,e[12]=B*D,e[13]=(g*w*a-x*y*a+x*s*S-t*w*S-g*s*v+t*y*v)*D,e[14]=(x*f*a-u*w*a-x*s*h+t*w*h+u*s*v-t*f*v)*D,e[15]=(u*y*a-g*f*a+g*s*h-t*y*h-u*s*S+t*f*S)*D,this}scale(e){const t=this.elements,s=e.x,a=e.y,l=e.z;return t[0]*=s,t[4]*=a,t[8]*=l,t[1]*=s,t[5]*=a,t[9]*=l,t[2]*=s,t[6]*=a,t[10]*=l,t[3]*=s,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,a))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),a=Math.sin(t),l=1-s,u=e.x,f=e.y,h=e.z,p=l*u,g=l*f;return this.set(p*u+s,p*f-a*h,p*h+a*f,0,p*f+a*h,g*f+s,g*h-a*u,0,p*h-a*f,g*h+a*u,l*h*h+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,a,l,u){return this.set(1,s,l,0,e,1,u,0,t,a,1,0,0,0,0,1),this}compose(e,t,s){const a=this.elements,l=t._x,u=t._y,f=t._z,h=t._w,p=l+l,g=u+u,y=f+f,S=l*p,M=l*g,x=l*y,w=u*g,v=u*y,m=f*y,R=h*p,L=h*g,A=h*y,B=s.x,I=s.y,D=s.z;return a[0]=(1-(w+m))*B,a[1]=(M+A)*B,a[2]=(x-L)*B,a[3]=0,a[4]=(M-A)*I,a[5]=(1-(S+m))*I,a[6]=(v+R)*I,a[7]=0,a[8]=(x+L)*D,a[9]=(v-R)*D,a[10]=(1-(S+w))*D,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,s){const a=this.elements;let l=vo.set(a[0],a[1],a[2]).length();const u=vo.set(a[4],a[5],a[6]).length(),f=vo.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],Ii.copy(this);const p=1/l,g=1/u,y=1/f;return Ii.elements[0]*=p,Ii.elements[1]*=p,Ii.elements[2]*=p,Ii.elements[4]*=g,Ii.elements[5]*=g,Ii.elements[6]*=g,Ii.elements[8]*=y,Ii.elements[9]*=y,Ii.elements[10]*=y,t.setFromRotationMatrix(Ii),s.x=l,s.y=u,s.z=f,this}makePerspective(e,t,s,a,l,u,f=vr){const h=this.elements,p=2*l/(t-e),g=2*l/(s-a),y=(t+e)/(t-e),S=(s+a)/(s-a);let M,x;if(f===vr)M=-(u+l)/(u-l),x=-2*u*l/(u-l);else if(f===Lc)M=-u/(u-l),x=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=p,h[4]=0,h[8]=y,h[12]=0,h[1]=0,h[5]=g,h[9]=S,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=x,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,s,a,l,u,f=vr){const h=this.elements,p=1/(t-e),g=1/(s-a),y=1/(u-l),S=(t+e)*p,M=(s+a)*g;let x,w;if(f===vr)x=(u+l)*y,w=-2*y;else if(f===Lc)x=l*y,w=-1*y;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=2*p,h[4]=0,h[8]=0,h[12]=-S,h[1]=0,h[5]=2*g,h[9]=0,h[13]=-M,h[2]=0,h[6]=0,h[10]=w,h[14]=-x,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let a=0;a<16;a++)if(t[a]!==s[a])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}}const vo=new Q,Ii=new Kt,Yy=new Q(0,0,0),qy=new Q(1,1,1),Yr=new Q,cc=new Q,ai=new Q,hg=new Kt,pg=new Ya;class Vi{constructor(e=0,t=0,s=0,a=Vi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,a=this._order){return this._x=e,this._y=t,this._z=s,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const a=e.elements,l=a[0],u=a[4],f=a[8],h=a[1],p=a[5],g=a[9],y=a[2],S=a[6],M=a[10];switch(t){case"XYZ":this._y=Math.asin(Tn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Tn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,M),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-y,l),this._z=0);break;case"ZXY":this._x=Math.asin(Tn(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-y,M),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-Tn(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Tn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-y,l)):(this._x=0,this._y=Math.atan2(f,M));break;case"XZY":this._z=Math.asin(-Tn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return hg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hg,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pg.setFromEuler(this),this.setFromQuaternion(pg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vi.DEFAULT_ORDER="XYZ";class dh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $y=0;const mg=new Q,_o=new Ya,dr=new Kt,uc=new Q,La=new Q,Ky=new Q,Qy=new Ya,gg=new Q(1,0,0),vg=new Q(0,1,0),_g=new Q(0,0,1),yg={type:"added"},Zy={type:"removed"},yo={type:"childadded",child:null},Ff={type:"childremoved",child:null};class An extends Go{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$y++}),this.uuid=Wo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=An.DEFAULT_UP.clone();const e=new Q,t=new Vi,s=new Ya,a=new Q(1,1,1);function l(){s.setFromEuler(t,!1)}function u(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Kt},normalMatrix:{value:new ft}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=An.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _o.setFromAxisAngle(e,t),this.quaternion.multiply(_o),this}rotateOnWorldAxis(e,t){return _o.setFromAxisAngle(e,t),this.quaternion.premultiply(_o),this}rotateX(e){return this.rotateOnAxis(gg,e)}rotateY(e){return this.rotateOnAxis(vg,e)}rotateZ(e){return this.rotateOnAxis(_g,e)}translateOnAxis(e,t){return mg.copy(e).applyQuaternion(this.quaternion),this.position.add(mg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gg,e)}translateY(e){return this.translateOnAxis(vg,e)}translateZ(e){return this.translateOnAxis(_g,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(dr.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?uc.copy(e):uc.set(e,t,s);const a=this.parent;this.updateWorldMatrix(!0,!1),La.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dr.lookAt(La,uc,this.up):dr.lookAt(uc,La,this.up),this.quaternion.setFromRotationMatrix(dr),a&&(dr.extractRotation(a.matrixWorld),_o.setFromRotationMatrix(dr),this.quaternion.premultiply(_o.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yg),yo.child=e,this.dispatchEvent(yo),yo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zy),Ff.child=e,this.dispatchEvent(Ff),Ff.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),dr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),dr.multiply(e.parent.matrixWorld)),e.applyMatrix4(dr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yg),yo.child=e,this.dispatchEvent(yo),yo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,a=this.children.length;s<a;s++){const u=this.children[s].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const a=this.children;for(let l=0,u=a.length;l<u;l++)a[l].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(La,e,Ky),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(La,Qy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].updateMatrixWorld(e)}updateWorldMatrix(e,t){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let l=0,u=a.length;l<u;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let p=0,g=h.length;p<g;p++){const y=h[p];l(e.shapes,y)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,p=this.material.length;h<p;h++)f.push(l(e.materials,this.material[h]));a.material=f}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];a.animations.push(l(e.animations,h))}}if(t){const f=u(e.geometries),h=u(e.materials),p=u(e.textures),g=u(e.images),y=u(e.shapes),S=u(e.skeletons),M=u(e.animations),x=u(e.nodes);f.length>0&&(s.geometries=f),h.length>0&&(s.materials=h),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),y.length>0&&(s.shapes=y),S.length>0&&(s.skeletons=S),M.length>0&&(s.animations=M),x.length>0&&(s.nodes=x)}return s.object=a,s;function u(f){const h=[];for(const p in f){const g=f[p];delete g.metadata,h.push(g)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const a=e.children[s];this.add(a.clone())}return this}}An.DEFAULT_UP=new Q(0,1,0);An.DEFAULT_MATRIX_AUTO_UPDATE=!0;An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Di=new Q,hr=new Q,kf=new Q,pr=new Q,So=new Q,Mo=new Q,Sg=new Q,Of=new Q,zf=new Q,Bf=new Q,Hf=new nn,Vf=new nn,Gf=new nn;class ki{constructor(e=new Q,t=new Q,s=new Q){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,a){a.subVectors(s,t),Di.subVectors(e,t),a.cross(Di);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,s,a,l){Di.subVectors(a,t),hr.subVectors(s,t),kf.subVectors(e,t);const u=Di.dot(Di),f=Di.dot(hr),h=Di.dot(kf),p=hr.dot(hr),g=hr.dot(kf),y=u*p-f*f;if(y===0)return l.set(0,0,0),null;const S=1/y,M=(p*h-f*g)*S,x=(u*g-f*h)*S;return l.set(1-M-x,x,M)}static containsPoint(e,t,s,a){return this.getBarycoord(e,t,s,a,pr)===null?!1:pr.x>=0&&pr.y>=0&&pr.x+pr.y<=1}static getInterpolation(e,t,s,a,l,u,f,h){return this.getBarycoord(e,t,s,a,pr)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,pr.x),h.addScaledVector(u,pr.y),h.addScaledVector(f,pr.z),h)}static getInterpolatedAttribute(e,t,s,a,l,u){return Hf.setScalar(0),Vf.setScalar(0),Gf.setScalar(0),Hf.fromBufferAttribute(e,t),Vf.fromBufferAttribute(e,s),Gf.fromBufferAttribute(e,a),u.setScalar(0),u.addScaledVector(Hf,l.x),u.addScaledVector(Vf,l.y),u.addScaledVector(Gf,l.z),u}static isFrontFacing(e,t,s,a){return Di.subVectors(s,t),hr.subVectors(e,t),Di.cross(hr).dot(a)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,a){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,s,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Di.subVectors(this.c,this.b),hr.subVectors(this.a,this.b),Di.cross(hr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ki.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ki.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,a,l){return ki.getInterpolation(e,this.a,this.b,this.c,t,s,a,l)}containsPoint(e){return ki.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ki.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,a=this.b,l=this.c;let u,f;So.subVectors(a,s),Mo.subVectors(l,s),Of.subVectors(e,s);const h=So.dot(Of),p=Mo.dot(Of);if(h<=0&&p<=0)return t.copy(s);zf.subVectors(e,a);const g=So.dot(zf),y=Mo.dot(zf);if(g>=0&&y<=g)return t.copy(a);const S=h*y-g*p;if(S<=0&&h>=0&&g<=0)return u=h/(h-g),t.copy(s).addScaledVector(So,u);Bf.subVectors(e,l);const M=So.dot(Bf),x=Mo.dot(Bf);if(x>=0&&M<=x)return t.copy(l);const w=M*p-h*x;if(w<=0&&p>=0&&x<=0)return f=p/(p-x),t.copy(s).addScaledVector(Mo,f);const v=g*x-M*y;if(v<=0&&y-g>=0&&M-x>=0)return Sg.subVectors(l,a),f=(y-g)/(y-g+(M-x)),t.copy(a).addScaledVector(Sg,f);const m=1/(v+w+S);return u=w*m,f=S*m,t.copy(s).addScaledVector(So,u).addScaledVector(Mo,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const T0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qr={h:0,s:0,l:0},fc={h:0,s:0,l:0};function Wf(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class lt{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ti){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.toWorkingColorSpace(this,t),this}setRGB(e,t,s,a=wt.workingColorSpace){return this.r=e,this.g=t,this.b=s,wt.toWorkingColorSpace(this,a),this}setHSL(e,t,s,a=wt.workingColorSpace){if(e=ch(e,1),t=Tn(t,0,1),s=Tn(s,0,1),t===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+t):s+t-s*t,u=2*s-l;this.r=Wf(u,l,e+1/3),this.g=Wf(u,l,e),this.b=Wf(u,l,e-1/3)}return wt.toWorkingColorSpace(this,a),this}setStyle(e,t=ti){function s(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=a[1],f=a[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ti){const s=T0[e.toLowerCase()];return s!==void 0?this.setHex(s,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yr(e.r),this.g=yr(e.g),this.b=yr(e.b),this}copyLinearToSRGB(e){return this.r=Do(e.r),this.g=Do(e.g),this.b=Do(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ti){return wt.fromWorkingColorSpace(Nn.copy(this),e),Math.round(Tn(Nn.r*255,0,255))*65536+Math.round(Tn(Nn.g*255,0,255))*256+Math.round(Tn(Nn.b*255,0,255))}getHexString(e=ti){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=wt.workingColorSpace){wt.fromWorkingColorSpace(Nn.copy(this),t);const s=Nn.r,a=Nn.g,l=Nn.b,u=Math.max(s,a,l),f=Math.min(s,a,l);let h,p;const g=(f+u)/2;if(f===u)h=0,p=0;else{const y=u-f;switch(p=g<=.5?y/(u+f):y/(2-u-f),u){case s:h=(a-l)/y+(a<l?6:0);break;case a:h=(l-s)/y+2;break;case l:h=(s-a)/y+4;break}h/=6}return e.h=h,e.s=p,e.l=g,e}getRGB(e,t=wt.workingColorSpace){return wt.fromWorkingColorSpace(Nn.copy(this),t),e.r=Nn.r,e.g=Nn.g,e.b=Nn.b,e}getStyle(e=ti){wt.fromWorkingColorSpace(Nn.copy(this),e);const t=Nn.r,s=Nn.g,a=Nn.b;return e!==ti?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(a*255)})`}offsetHSL(e,t,s){return this.getHSL(qr),this.setHSL(qr.h+e,qr.s+t,qr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(qr),e.getHSL(fc);const s=Ba(qr.h,fc.h,t),a=Ba(qr.s,fc.s,t),l=Ba(qr.l,fc.l,t);return this.setHSL(s,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*a,this.g=l[1]*t+l[4]*s+l[7]*a,this.b=l[2]*t+l[5]*s+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new lt;lt.NAMES=T0;let Jy=0;class Xo extends Go{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jy++}),this.uuid=Wo(),this.name="",this.blending=Lo,this.side=Mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rd,this.blendDst=sd,this.blendEquation=Is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new lt(0,0,0),this.blendAlpha=0,this.depthFunc=Uo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ng,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fo,this.stencilZFail=fo,this.stencilZPass=fo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(s):a&&a.isVector3&&s&&s.isVector3?a.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Lo&&(s.blending=this.blending),this.side!==Mr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==rd&&(s.blendSrc=this.blendSrc),this.blendDst!==sd&&(s.blendDst=this.blendDst),this.blendEquation!==Is&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Uo&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ng&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fo&&(s.stencilFail=this.stencilFail),this.stencilZFail!==fo&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==fo&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function a(l){const u=[];for(const f in l){const h=l[f];delete h.metadata,u.push(h)}return u}if(t){const l=a(e.textures),u=a(e.images);l.length>0&&(s.textures=l),u.length>0&&(s.images=u)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const a=t.length;s=new Array(a);for(let l=0;l!==a;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class hh extends Xo{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=th,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const cn=new Q,dc=new ut;class xi{constructor(e,t,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=ig,this.updateRanges=[],this.gpuType=gr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[s+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)dc.fromBufferAttribute(this,t),dc.applyMatrix3(e),this.setXY(t,dc.x,dc.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix3(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix4(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)cn.fromBufferAttribute(this,t),cn.applyNormalMatrix(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)cn.fromBufferAttribute(this,t),cn.transformDirection(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=Ro(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=Vn(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ro(t,this.array)),t}setX(e,t){return this.normalized&&(t=Vn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ro(t,this.array)),t}setY(e,t){return this.normalized&&(t=Vn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ro(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Vn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ro(t,this.array)),t}setW(e,t){return this.normalized&&(t=Vn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=Vn(t,this.array),s=Vn(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,a){return e*=this.itemSize,this.normalized&&(t=Vn(t,this.array),s=Vn(s,this.array),a=Vn(a,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=a,this}setXYZW(e,t,s,a,l){return e*=this.itemSize,this.normalized&&(t=Vn(t,this.array),s=Vn(s,this.array),a=Vn(a,this.array),l=Vn(l,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ig&&(e.usage=this.usage),e}}class A0 extends xi{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class C0 extends xi{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class rn extends xi{constructor(e,t,s){super(new Float32Array(e),t,s)}}let eS=0;const Si=new Kt,Xf=new An,xo=new Q,li=new qa,Ia=new qa,Mn=new Q;class fi extends Go{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:eS++}),this.uuid=Wo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(x0(e)?C0:A0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new ft().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Si.makeRotationFromQuaternion(e),this.applyMatrix4(Si),this}rotateX(e){return Si.makeRotationX(e),this.applyMatrix4(Si),this}rotateY(e){return Si.makeRotationY(e),this.applyMatrix4(Si),this}rotateZ(e){return Si.makeRotationZ(e),this.applyMatrix4(Si),this}translate(e,t,s){return Si.makeTranslation(e,t,s),this.applyMatrix4(Si),this}scale(e,t,s){return Si.makeScale(e,t,s),this.applyMatrix4(Si),this}lookAt(e){return Xf.lookAt(e),Xf.updateMatrix(),this.applyMatrix4(Xf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xo).negate(),this.translate(xo.x,xo.y,xo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const s=[];for(let a=0,l=e.length;a<l;a++){const u=e[a];s.push(u.x,u.y,u.z||0)}this.setAttribute("position",new rn(s,3))}else{for(let s=0,a=t.count;s<a;s++){const l=e[s];t.setXYZ(s,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const l=t[s];li.setFromBufferAttribute(l),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new uh);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const s=this.boundingSphere.center;if(li.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const f=t[l];Ia.setFromBufferAttribute(f),this.morphTargetsRelative?(Mn.addVectors(li.min,Ia.min),li.expandByPoint(Mn),Mn.addVectors(li.max,Ia.max),li.expandByPoint(Mn)):(li.expandByPoint(Ia.min),li.expandByPoint(Ia.max))}li.getCenter(s);let a=0;for(let l=0,u=e.count;l<u;l++)Mn.fromBufferAttribute(e,l),a=Math.max(a,s.distanceToSquared(Mn));if(t)for(let l=0,u=t.length;l<u;l++){const f=t[l],h=this.morphTargetsRelative;for(let p=0,g=f.count;p<g;p++)Mn.fromBufferAttribute(f,p),h&&(xo.fromBufferAttribute(e,p),Mn.add(xo)),a=Math.max(a,s.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.position,a=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xi(new Float32Array(4*s.count),4));const u=this.getAttribute("tangent"),f=[],h=[];for(let F=0;F<s.count;F++)f[F]=new Q,h[F]=new Q;const p=new Q,g=new Q,y=new Q,S=new ut,M=new ut,x=new ut,w=new Q,v=new Q;function m(F,b,C){p.fromBufferAttribute(s,F),g.fromBufferAttribute(s,b),y.fromBufferAttribute(s,C),S.fromBufferAttribute(l,F),M.fromBufferAttribute(l,b),x.fromBufferAttribute(l,C),g.sub(p),y.sub(p),M.sub(S),x.sub(S);const O=1/(M.x*x.y-x.x*M.y);isFinite(O)&&(w.copy(g).multiplyScalar(x.y).addScaledVector(y,-M.y).multiplyScalar(O),v.copy(y).multiplyScalar(M.x).addScaledVector(g,-x.x).multiplyScalar(O),f[F].add(w),f[b].add(w),f[C].add(w),h[F].add(v),h[b].add(v),h[C].add(v))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let F=0,b=R.length;F<b;++F){const C=R[F],O=C.start,$=C.count;for(let X=O,se=O+$;X<se;X+=3)m(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const L=new Q,A=new Q,B=new Q,I=new Q;function D(F){B.fromBufferAttribute(a,F),I.copy(B);const b=f[F];L.copy(b),L.sub(B.multiplyScalar(B.dot(b))).normalize(),A.crossVectors(I,b);const O=A.dot(h[F])<0?-1:1;u.setXYZW(F,L.x,L.y,L.z,O)}for(let F=0,b=R.length;F<b;++F){const C=R[F],O=C.start,$=C.count;for(let X=O,se=O+$;X<se;X+=3)D(e.getX(X+0)),D(e.getX(X+1)),D(e.getX(X+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new xi(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let S=0,M=s.count;S<M;S++)s.setXYZ(S,0,0,0);const a=new Q,l=new Q,u=new Q,f=new Q,h=new Q,p=new Q,g=new Q,y=new Q;if(e)for(let S=0,M=e.count;S<M;S+=3){const x=e.getX(S+0),w=e.getX(S+1),v=e.getX(S+2);a.fromBufferAttribute(t,x),l.fromBufferAttribute(t,w),u.fromBufferAttribute(t,v),g.subVectors(u,l),y.subVectors(a,l),g.cross(y),f.fromBufferAttribute(s,x),h.fromBufferAttribute(s,w),p.fromBufferAttribute(s,v),f.add(g),h.add(g),p.add(g),s.setXYZ(x,f.x,f.y,f.z),s.setXYZ(w,h.x,h.y,h.z),s.setXYZ(v,p.x,p.y,p.z)}else for(let S=0,M=t.count;S<M;S+=3)a.fromBufferAttribute(t,S+0),l.fromBufferAttribute(t,S+1),u.fromBufferAttribute(t,S+2),g.subVectors(u,l),y.subVectors(a,l),g.cross(y),s.setXYZ(S+0,g.x,g.y,g.z),s.setXYZ(S+1,g.x,g.y,g.z),s.setXYZ(S+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)Mn.fromBufferAttribute(e,t),Mn.normalize(),e.setXYZ(t,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function e(f,h){const p=f.array,g=f.itemSize,y=f.normalized,S=new p.constructor(h.length*g);let M=0,x=0;for(let w=0,v=h.length;w<v;w++){f.isInterleavedBufferAttribute?M=h[w]*f.data.stride+f.offset:M=h[w]*g;for(let m=0;m<g;m++)S[x++]=p[M++]}return new xi(S,g,y)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new fi,s=this.index.array,a=this.attributes;for(const f in a){const h=a[f],p=e(h,s);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const h=[],p=l[f];for(let g=0,y=p.length;g<y;g++){const S=p[g],M=e(S,s);h.push(M)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,h=u.length;f<h;f++){const p=u[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const h in s){const p=s[h];e.data.attributes[h]=p.toJSON(e.data)}const a={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],g=[];for(let y=0,S=p.length;y<S;y++){const M=p[y];g.push(M.toJSON(e.data))}g.length>0&&(a[h]=g,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(t));const a=e.attributes;for(const p in a){const g=a[p];this.setAttribute(p,g.clone(t))}const l=e.morphAttributes;for(const p in l){const g=[],y=l[p];for(let S=0,M=y.length;S<M;S++)g.push(y[S].clone(t));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,g=u.length;p<g;p++){const y=u[p];this.addGroup(y.start,y.count,y.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Mg=new Kt,xs=new fh,hc=new uh,xg=new Q,pc=new Q,mc=new Q,gc=new Q,jf=new Q,vc=new Q,Eg=new Q,_c=new Q;class bt extends An{constructor(e=new fi,t=new hh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const a=t[s[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const s=this.geometry,a=s.attributes.position,l=s.morphAttributes.position,u=s.morphTargetsRelative;t.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(l&&f){vc.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const g=f[h],y=l[h];g!==0&&(jf.fromBufferAttribute(y,e),u?vc.addScaledVector(jf,g):vc.addScaledVector(jf.sub(t),g))}t.add(vc)}return t}raycast(e,t){const s=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),hc.copy(s.boundingSphere),hc.applyMatrix4(l),xs.copy(e.ray).recast(e.near),!(hc.containsPoint(xs.origin)===!1&&(xs.intersectSphere(hc,xg)===null||xs.origin.distanceToSquared(xg)>(e.far-e.near)**2))&&(Mg.copy(l).invert(),xs.copy(e.ray).applyMatrix4(Mg),!(s.boundingBox!==null&&xs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,xs)))}_computeIntersections(e,t,s){let a;const l=this.geometry,u=this.material,f=l.index,h=l.attributes.position,p=l.attributes.uv,g=l.attributes.uv1,y=l.attributes.normal,S=l.groups,M=l.drawRange;if(f!==null)if(Array.isArray(u))for(let x=0,w=S.length;x<w;x++){const v=S[x],m=u[v.materialIndex],R=Math.max(v.start,M.start),L=Math.min(f.count,Math.min(v.start+v.count,M.start+M.count));for(let A=R,B=L;A<B;A+=3){const I=f.getX(A),D=f.getX(A+1),F=f.getX(A+2);a=yc(this,m,e,s,p,g,y,I,D,F),a&&(a.faceIndex=Math.floor(A/3),a.face.materialIndex=v.materialIndex,t.push(a))}}else{const x=Math.max(0,M.start),w=Math.min(f.count,M.start+M.count);for(let v=x,m=w;v<m;v+=3){const R=f.getX(v),L=f.getX(v+1),A=f.getX(v+2);a=yc(this,u,e,s,p,g,y,R,L,A),a&&(a.faceIndex=Math.floor(v/3),t.push(a))}}else if(h!==void 0)if(Array.isArray(u))for(let x=0,w=S.length;x<w;x++){const v=S[x],m=u[v.materialIndex],R=Math.max(v.start,M.start),L=Math.min(h.count,Math.min(v.start+v.count,M.start+M.count));for(let A=R,B=L;A<B;A+=3){const I=A,D=A+1,F=A+2;a=yc(this,m,e,s,p,g,y,I,D,F),a&&(a.faceIndex=Math.floor(A/3),a.face.materialIndex=v.materialIndex,t.push(a))}}else{const x=Math.max(0,M.start),w=Math.min(h.count,M.start+M.count);for(let v=x,m=w;v<m;v+=3){const R=v,L=v+1,A=v+2;a=yc(this,u,e,s,p,g,y,R,L,A),a&&(a.faceIndex=Math.floor(v/3),t.push(a))}}}}function tS(r,e,t,s,a,l,u,f){let h;if(e.side===Xn?h=s.intersectTriangle(u,l,a,!0,f):h=s.intersectTriangle(a,l,u,e.side===Mr,f),h===null)return null;_c.copy(f),_c.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(_c);return p<t.near||p>t.far?null:{distance:p,point:_c.clone(),object:r}}function yc(r,e,t,s,a,l,u,f,h,p){r.getVertexPosition(f,pc),r.getVertexPosition(h,mc),r.getVertexPosition(p,gc);const g=tS(r,e,t,s,pc,mc,gc,Eg);if(g){const y=new Q;ki.getBarycoord(Eg,pc,mc,gc,y),a&&(g.uv=ki.getInterpolatedAttribute(a,f,h,p,y,new ut)),l&&(g.uv1=ki.getInterpolatedAttribute(l,f,h,p,y,new ut)),u&&(g.normal=ki.getInterpolatedAttribute(u,f,h,p,y,new Q),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const S={a:f,b:h,c:p,normal:new Q,materialIndex:0};ki.getNormal(pc,mc,gc,S.normal),g.face=S,g.barycoord=y}return g}class Zi extends fi{constructor(e=1,t=1,s=1,a=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:a,heightSegments:l,depthSegments:u};const f=this;a=Math.floor(a),l=Math.floor(l),u=Math.floor(u);const h=[],p=[],g=[],y=[];let S=0,M=0;x("z","y","x",-1,-1,s,t,e,u,l,0),x("z","y","x",1,-1,s,t,-e,u,l,1),x("x","z","y",1,1,e,s,t,a,u,2),x("x","z","y",1,-1,e,s,-t,a,u,3),x("x","y","z",1,-1,e,t,s,a,l,4),x("x","y","z",-1,-1,e,t,-s,a,l,5),this.setIndex(h),this.setAttribute("position",new rn(p,3)),this.setAttribute("normal",new rn(g,3)),this.setAttribute("uv",new rn(y,2));function x(w,v,m,R,L,A,B,I,D,F,b){const C=A/D,O=B/F,$=A/2,X=B/2,se=I/2,de=D+1,re=F+1;let pe=0,H=0;const le=new Q;for(let ae=0;ae<re;ae++){const k=ae*O-X;for(let ie=0;ie<de;ie++){const Ue=ie*C-$;le[w]=Ue*R,le[v]=k*L,le[m]=se,p.push(le.x,le.y,le.z),le[w]=0,le[v]=0,le[m]=I>0?1:-1,g.push(le.x,le.y,le.z),y.push(ie/D),y.push(1-ae/F),pe+=1}}for(let ae=0;ae<F;ae++)for(let k=0;k<D;k++){const ie=S+k+de*ae,Ue=S+k+de*(ae+1),J=S+(k+1)+de*(ae+1),ce=S+(k+1)+de*ae;h.push(ie,Ue,ce),h.push(Ue,J,ce),H+=6}f.addGroup(M,H,b),M+=H,S+=pe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ho(r){const e={};for(const t in r){e[t]={};for(const s in r[t]){const a=r[t][s];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=a.clone():Array.isArray(a)?e[t][s]=a.slice():e[t][s]=a}}return e}function Wn(r){const e={};for(let t=0;t<r.length;t++){const s=Ho(r[t]);for(const a in s)e[a]=s[a]}return e}function nS(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function R0(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const iS={clone:Ho,merge:Wn};var rS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rs extends Xo{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rS,this.fragmentShader=sS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ho(e.uniforms),this.uniformsGroups=nS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const u=this.uniforms[a].value;u&&u.isTexture?t.uniforms[a]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[a]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[a]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[a]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[a]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[a]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[a]={type:"m4",value:u.toArray()}:t.uniforms[a]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const a in this.extensions)this.extensions[a]===!0&&(s[a]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}}class b0 extends An{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=vr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $r=new Q,wg=new ut,Tg=new ut;class ci extends b0{constructor(e=50,t=1,s=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Bo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(za*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bo*2*Math.atan(Math.tan(za*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){$r.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($r.x,$r.y).multiplyScalar(-e/$r.z),$r.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set($r.x,$r.y).multiplyScalar(-e/$r.z)}getViewSize(e,t){return this.getViewBounds(e,wg,Tg),t.subVectors(Tg,wg)}setViewOffset(e,t,s,a,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(za*.5*this.fov)/this.zoom,s=2*t,a=this.aspect*s,l=-.5*a;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,p=u.fullHeight;l+=u.offsetX*a/h,t-=u.offsetY*s/p,a*=u.width/h,s*=u.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Eo=-90,wo=1;class oS extends An{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new ci(Eo,wo,e,t);a.layers=this.layers,this.add(a);const l=new ci(Eo,wo,e,t);l.layers=this.layers,this.add(l);const u=new ci(Eo,wo,e,t);u.layers=this.layers,this.add(u);const f=new ci(Eo,wo,e,t);f.layers=this.layers,this.add(f);const h=new ci(Eo,wo,e,t);h.layers=this.layers,this.add(h);const p=new ci(Eo,wo,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,a,l,u,f,h]=t;for(const p of t)this.remove(p);if(e===vr)s.up.set(0,1,0),s.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Lc)s.up.set(0,-1,0),s.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,h,p,g]=this.children,y=e.getRenderTarget(),S=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const w=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,a),e.render(t,l),e.setRenderTarget(s,1,a),e.render(t,u),e.setRenderTarget(s,2,a),e.render(t,f),e.setRenderTarget(s,3,a),e.render(t,h),e.setRenderTarget(s,4,a),e.render(t,p),s.texture.generateMipmaps=w,e.setRenderTarget(s,5,a),e.render(t,g),e.setRenderTarget(y,S,M),e.xr.enabled=x,s.texture.needsPMREMUpdate=!0}}class P0 extends jn{constructor(e,t,s,a,l,u,f,h,p,g){e=e!==void 0?e:[],t=t!==void 0?t:Fo,super(e,t,s,a,l,u,f,h,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class aS extends zs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},a=[s,s,s,s,s,s];this.texture=new P0(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Qi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Zi(5,5,5),l=new rs({name:"CubemapFromEquirect",uniforms:Ho(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Xn,blending:es});l.uniforms.tEquirect.value=t;const u=new bt(a,l),f=t.minFilter;return t.minFilter===Fs&&(t.minFilter=Qi),new oS(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,s,a){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,s,a);e.setRenderTarget(l)}}const Yf=new Q,lS=new Q,cS=new ft;class Ps{constructor(e=new Q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,a){return this.normal.set(e,t,s),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const a=Yf.subVectors(s,t).cross(lS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const s=e.delta(Yf),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:t.copy(e.start).addScaledVector(s,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||cS.getNormalMatrix(e),a=this.coplanarPoint(Yf).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Es=new uh,Sc=new Q;class ph{constructor(e=new Ps,t=new Ps,s=new Ps,a=new Ps,l=new Ps,u=new Ps){this.planes=[e,t,s,a,l,u]}set(e,t,s,a,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(s),f[3].copy(a),f[4].copy(l),f[5].copy(u),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=vr){const s=this.planes,a=e.elements,l=a[0],u=a[1],f=a[2],h=a[3],p=a[4],g=a[5],y=a[6],S=a[7],M=a[8],x=a[9],w=a[10],v=a[11],m=a[12],R=a[13],L=a[14],A=a[15];if(s[0].setComponents(h-l,S-p,v-M,A-m).normalize(),s[1].setComponents(h+l,S+p,v+M,A+m).normalize(),s[2].setComponents(h+u,S+g,v+x,A+R).normalize(),s[3].setComponents(h-u,S-g,v-x,A-R).normalize(),s[4].setComponents(h-f,S-y,v-w,A-L).normalize(),t===vr)s[5].setComponents(h+f,S+y,v+w,A+L).normalize();else if(t===Lc)s[5].setComponents(f,y,w,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Es.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Es)}intersectsSprite(e){return Es.center.set(0,0,0),Es.radius=.7071067811865476,Es.applyMatrix4(e.matrixWorld),this.intersectsSphere(Es)}intersectsSphere(e){const t=this.planes,s=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const a=t[s];if(Sc.x=a.normal.x>0?e.max.x:e.min.x,Sc.y=a.normal.y>0?e.max.y:e.min.y,Sc.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Sc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function L0(){let r=null,e=!1,t=null,s=null;function a(l,u){t(l,u),s=r.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(s=r.requestAnimationFrame(a),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){r=l}}}function uS(r){const e=new WeakMap;function t(f,h){const p=f.array,g=f.usage,y=p.byteLength,S=r.createBuffer();r.bindBuffer(h,S),r.bufferData(h,p,g),f.onUploadCallback();let M;if(p instanceof Float32Array)M=r.FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=r.SHORT;else if(p instanceof Uint32Array)M=r.UNSIGNED_INT;else if(p instanceof Int32Array)M=r.INT;else if(p instanceof Int8Array)M=r.BYTE;else if(p instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:y}}function s(f,h,p){const g=h.array,y=h.updateRanges;if(r.bindBuffer(p,f),y.length===0)r.bufferSubData(p,0,g);else{y.sort((M,x)=>M.start-x.start);let S=0;for(let M=1;M<y.length;M++){const x=y[S],w=y[M];w.start<=x.start+x.count+1?x.count=Math.max(x.count,w.start+w.count-x.start):(++S,y[S]=w)}y.length=S+1;for(let M=0,x=y.length;M<x;M++){const w=y[M];r.bufferSubData(p,w.start*g.BYTES_PER_ELEMENT,g,w.start,w.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(r.deleteBuffer(h.buffer),e.delete(f))}function u(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=e.get(f);(!g||g.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,h));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,f,h),p.version=f.version}}return{get:a,remove:l,update:u}}class Sr extends fi{constructor(e=1,t=1,s=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:a};const l=e/2,u=t/2,f=Math.floor(s),h=Math.floor(a),p=f+1,g=h+1,y=e/f,S=t/h,M=[],x=[],w=[],v=[];for(let m=0;m<g;m++){const R=m*S-u;for(let L=0;L<p;L++){const A=L*y-l;x.push(A,-R,0),w.push(0,0,1),v.push(L/f),v.push(1-m/h)}}for(let m=0;m<h;m++)for(let R=0;R<f;R++){const L=R+p*m,A=R+p*(m+1),B=R+1+p*(m+1),I=R+1+p*m;M.push(L,A,I),M.push(A,B,I)}this.setIndex(M),this.setAttribute("position",new rn(x,3)),this.setAttribute("normal",new rn(w,3)),this.setAttribute("uv",new rn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sr(e.width,e.height,e.widthSegments,e.heightSegments)}}var fS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,hS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_S=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,SS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,MS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ES=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,wS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,TS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,AS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,CS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,RS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,PS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,LS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,IS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,DS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,NS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,US=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,FS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,kS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,OS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,BS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,HS="gl_FragColor = linearToOutputTexel( gl_FragColor );",VS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,GS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,WS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,XS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,jS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,YS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,qS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$S=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,KS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,QS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ZS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,JS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,iM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,rM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,oM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,aM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,cM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,uM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,dM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_M=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,SM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,MM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,EM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,TM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,AM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,CM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,RM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,bM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,PM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,DM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,NM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,UM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,FM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,OM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,BM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,HM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,VM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,GM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,WM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,XM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,YM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,qM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,$M=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,KM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,QM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ZM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,JM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ex=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ix=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,rx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,sx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ox=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ax=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,cx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ux=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,px=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,vx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_x=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,yx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Sx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ex=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Tx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ax=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,bx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Px=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Lx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ix=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ux=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ox=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,zx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,dt={alphahash_fragment:fS,alphahash_pars_fragment:dS,alphamap_fragment:hS,alphamap_pars_fragment:pS,alphatest_fragment:mS,alphatest_pars_fragment:gS,aomap_fragment:vS,aomap_pars_fragment:_S,batching_pars_vertex:yS,batching_vertex:SS,begin_vertex:MS,beginnormal_vertex:xS,bsdfs:ES,iridescence_fragment:wS,bumpmap_pars_fragment:TS,clipping_planes_fragment:AS,clipping_planes_pars_fragment:CS,clipping_planes_pars_vertex:RS,clipping_planes_vertex:bS,color_fragment:PS,color_pars_fragment:LS,color_pars_vertex:IS,color_vertex:DS,common:NS,cube_uv_reflection_fragment:US,defaultnormal_vertex:FS,displacementmap_pars_vertex:kS,displacementmap_vertex:OS,emissivemap_fragment:zS,emissivemap_pars_fragment:BS,colorspace_fragment:HS,colorspace_pars_fragment:VS,envmap_fragment:GS,envmap_common_pars_fragment:WS,envmap_pars_fragment:XS,envmap_pars_vertex:jS,envmap_physical_pars_fragment:iM,envmap_vertex:YS,fog_vertex:qS,fog_pars_vertex:$S,fog_fragment:KS,fog_pars_fragment:QS,gradientmap_pars_fragment:ZS,lightmap_pars_fragment:JS,lights_lambert_fragment:eM,lights_lambert_pars_fragment:tM,lights_pars_begin:nM,lights_toon_fragment:rM,lights_toon_pars_fragment:sM,lights_phong_fragment:oM,lights_phong_pars_fragment:aM,lights_physical_fragment:lM,lights_physical_pars_fragment:cM,lights_fragment_begin:uM,lights_fragment_maps:fM,lights_fragment_end:dM,logdepthbuf_fragment:hM,logdepthbuf_pars_fragment:pM,logdepthbuf_pars_vertex:mM,logdepthbuf_vertex:gM,map_fragment:vM,map_pars_fragment:_M,map_particle_fragment:yM,map_particle_pars_fragment:SM,metalnessmap_fragment:MM,metalnessmap_pars_fragment:xM,morphinstance_vertex:EM,morphcolor_vertex:wM,morphnormal_vertex:TM,morphtarget_pars_vertex:AM,morphtarget_vertex:CM,normal_fragment_begin:RM,normal_fragment_maps:bM,normal_pars_fragment:PM,normal_pars_vertex:LM,normal_vertex:IM,normalmap_pars_fragment:DM,clearcoat_normal_fragment_begin:NM,clearcoat_normal_fragment_maps:UM,clearcoat_pars_fragment:FM,iridescence_pars_fragment:kM,opaque_fragment:OM,packing:zM,premultiplied_alpha_fragment:BM,project_vertex:HM,dithering_fragment:VM,dithering_pars_fragment:GM,roughnessmap_fragment:WM,roughnessmap_pars_fragment:XM,shadowmap_pars_fragment:jM,shadowmap_pars_vertex:YM,shadowmap_vertex:qM,shadowmask_pars_fragment:$M,skinbase_vertex:KM,skinning_pars_vertex:QM,skinning_vertex:ZM,skinnormal_vertex:JM,specularmap_fragment:ex,specularmap_pars_fragment:tx,tonemapping_fragment:nx,tonemapping_pars_fragment:ix,transmission_fragment:rx,transmission_pars_fragment:sx,uv_pars_fragment:ox,uv_pars_vertex:ax,uv_vertex:lx,worldpos_vertex:cx,background_vert:ux,background_frag:fx,backgroundCube_vert:dx,backgroundCube_frag:hx,cube_vert:px,cube_frag:mx,depth_vert:gx,depth_frag:vx,distanceRGBA_vert:_x,distanceRGBA_frag:yx,equirect_vert:Sx,equirect_frag:Mx,linedashed_vert:xx,linedashed_frag:Ex,meshbasic_vert:wx,meshbasic_frag:Tx,meshlambert_vert:Ax,meshlambert_frag:Cx,meshmatcap_vert:Rx,meshmatcap_frag:bx,meshnormal_vert:Px,meshnormal_frag:Lx,meshphong_vert:Ix,meshphong_frag:Dx,meshphysical_vert:Nx,meshphysical_frag:Ux,meshtoon_vert:Fx,meshtoon_frag:kx,points_vert:Ox,points_frag:zx,shadow_vert:Bx,shadow_frag:Hx,sprite_vert:Vx,sprite_frag:Gx},be={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},Ki={basic:{uniforms:Wn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:Wn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new lt(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:Wn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:Wn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:Wn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new lt(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:Wn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:Wn([be.points,be.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:Wn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:Wn([be.common,be.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:Wn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:Wn([be.sprite,be.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distanceRGBA:{uniforms:Wn([be.common,be.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distanceRGBA_vert,fragmentShader:dt.distanceRGBA_frag},shadow:{uniforms:Wn([be.lights,be.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};Ki.physical={uniforms:Wn([Ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const Mc={r:0,b:0,g:0},ws=new Vi,Wx=new Kt;function Xx(r,e,t,s,a,l,u){const f=new lt(0);let h=l===!0?0:1,p,g,y=null,S=0,M=null;function x(R){let L=R.isScene===!0?R.background:null;return L&&L.isTexture&&(L=(R.backgroundBlurriness>0?t:e).get(L)),L}function w(R){let L=!1;const A=x(R);A===null?m(f,h):A&&A.isColor&&(m(A,1),L=!0);const B=r.xr.getEnvironmentBlendMode();B==="additive"?s.buffers.color.setClear(0,0,0,1,u):B==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,u),(r.autoClear||L)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function v(R,L){const A=x(L);A&&(A.isCubeTexture||A.mapping===Fc)?(g===void 0&&(g=new bt(new Zi(1,1,1),new rs({name:"BackgroundCubeMaterial",uniforms:Ho(Ki.backgroundCube.uniforms),vertexShader:Ki.backgroundCube.vertexShader,fragmentShader:Ki.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(B,I,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(g)),ws.copy(L.backgroundRotation),ws.x*=-1,ws.y*=-1,ws.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(ws.y*=-1,ws.z*=-1),g.material.uniforms.envMap.value=A,g.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(Wx.makeRotationFromEuler(ws)),g.material.toneMapped=wt.getTransfer(A.colorSpace)!==Ut,(y!==A||S!==A.version||M!==r.toneMapping)&&(g.material.needsUpdate=!0,y=A,S=A.version,M=r.toneMapping),g.layers.enableAll(),R.unshift(g,g.geometry,g.material,0,0,null)):A&&A.isTexture&&(p===void 0&&(p=new bt(new Sr(2,2),new rs({name:"BackgroundMaterial",uniforms:Ho(Ki.background.uniforms),vertexShader:Ki.background.vertexShader,fragmentShader:Ki.background.fragmentShader,side:Mr,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(p)),p.material.uniforms.t2D.value=A,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.toneMapped=wt.getTransfer(A.colorSpace)!==Ut,A.matrixAutoUpdate===!0&&A.updateMatrix(),p.material.uniforms.uvTransform.value.copy(A.matrix),(y!==A||S!==A.version||M!==r.toneMapping)&&(p.material.needsUpdate=!0,y=A,S=A.version,M=r.toneMapping),p.layers.enableAll(),R.unshift(p,p.geometry,p.material,0,0,null))}function m(R,L){R.getRGB(Mc,R0(r)),s.buffers.color.setClear(Mc.r,Mc.g,Mc.b,L,u)}return{getClearColor:function(){return f},setClearColor:function(R,L=1){f.set(R),h=L,m(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(R){h=R,m(f,h)},render:w,addToRenderList:v}}function jx(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},a=S(null);let l=a,u=!1;function f(C,O,$,X,se){let de=!1;const re=y(X,$,O);l!==re&&(l=re,p(l.object)),de=M(C,X,$,se),de&&x(C,X,$,se),se!==null&&e.update(se,r.ELEMENT_ARRAY_BUFFER),(de||u)&&(u=!1,A(C,O,$,X),se!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(se).buffer))}function h(){return r.createVertexArray()}function p(C){return r.bindVertexArray(C)}function g(C){return r.deleteVertexArray(C)}function y(C,O,$){const X=$.wireframe===!0;let se=s[C.id];se===void 0&&(se={},s[C.id]=se);let de=se[O.id];de===void 0&&(de={},se[O.id]=de);let re=de[X];return re===void 0&&(re=S(h()),de[X]=re),re}function S(C){const O=[],$=[],X=[];for(let se=0;se<t;se++)O[se]=0,$[se]=0,X[se]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:$,attributeDivisors:X,object:C,attributes:{},index:null}}function M(C,O,$,X){const se=l.attributes,de=O.attributes;let re=0;const pe=$.getAttributes();for(const H in pe)if(pe[H].location>=0){const ae=se[H];let k=de[H];if(k===void 0&&(H==="instanceMatrix"&&C.instanceMatrix&&(k=C.instanceMatrix),H==="instanceColor"&&C.instanceColor&&(k=C.instanceColor)),ae===void 0||ae.attribute!==k||k&&ae.data!==k.data)return!0;re++}return l.attributesNum!==re||l.index!==X}function x(C,O,$,X){const se={},de=O.attributes;let re=0;const pe=$.getAttributes();for(const H in pe)if(pe[H].location>=0){let ae=de[H];ae===void 0&&(H==="instanceMatrix"&&C.instanceMatrix&&(ae=C.instanceMatrix),H==="instanceColor"&&C.instanceColor&&(ae=C.instanceColor));const k={};k.attribute=ae,ae&&ae.data&&(k.data=ae.data),se[H]=k,re++}l.attributes=se,l.attributesNum=re,l.index=X}function w(){const C=l.newAttributes;for(let O=0,$=C.length;O<$;O++)C[O]=0}function v(C){m(C,0)}function m(C,O){const $=l.newAttributes,X=l.enabledAttributes,se=l.attributeDivisors;$[C]=1,X[C]===0&&(r.enableVertexAttribArray(C),X[C]=1),se[C]!==O&&(r.vertexAttribDivisor(C,O),se[C]=O)}function R(){const C=l.newAttributes,O=l.enabledAttributes;for(let $=0,X=O.length;$<X;$++)O[$]!==C[$]&&(r.disableVertexAttribArray($),O[$]=0)}function L(C,O,$,X,se,de,re){re===!0?r.vertexAttribIPointer(C,O,$,se,de):r.vertexAttribPointer(C,O,$,X,se,de)}function A(C,O,$,X){w();const se=X.attributes,de=$.getAttributes(),re=O.defaultAttributeValues;for(const pe in de){const H=de[pe];if(H.location>=0){let le=se[pe];if(le===void 0&&(pe==="instanceMatrix"&&C.instanceMatrix&&(le=C.instanceMatrix),pe==="instanceColor"&&C.instanceColor&&(le=C.instanceColor)),le!==void 0){const ae=le.normalized,k=le.itemSize,ie=e.get(le);if(ie===void 0)continue;const Ue=ie.buffer,J=ie.type,ce=ie.bytesPerElement,Ee=J===r.INT||J===r.UNSIGNED_INT||le.gpuType===nh;if(le.isInterleavedBufferAttribute){const _e=le.data,Ae=_e.stride,Fe=le.offset;if(_e.isInstancedInterleavedBuffer){for(let Je=0;Je<H.locationSize;Je++)m(H.location+Je,_e.meshPerAttribute);C.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Je=0;Je<H.locationSize;Je++)v(H.location+Je);r.bindBuffer(r.ARRAY_BUFFER,Ue);for(let Je=0;Je<H.locationSize;Je++)L(H.location+Je,k/H.locationSize,J,ae,Ae*ce,(Fe+k/H.locationSize*Je)*ce,Ee)}else{if(le.isInstancedBufferAttribute){for(let _e=0;_e<H.locationSize;_e++)m(H.location+_e,le.meshPerAttribute);C.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let _e=0;_e<H.locationSize;_e++)v(H.location+_e);r.bindBuffer(r.ARRAY_BUFFER,Ue);for(let _e=0;_e<H.locationSize;_e++)L(H.location+_e,k/H.locationSize,J,ae,k*ce,k/H.locationSize*_e*ce,Ee)}}else if(re!==void 0){const ae=re[pe];if(ae!==void 0)switch(ae.length){case 2:r.vertexAttrib2fv(H.location,ae);break;case 3:r.vertexAttrib3fv(H.location,ae);break;case 4:r.vertexAttrib4fv(H.location,ae);break;default:r.vertexAttrib1fv(H.location,ae)}}}}R()}function B(){F();for(const C in s){const O=s[C];for(const $ in O){const X=O[$];for(const se in X)g(X[se].object),delete X[se];delete O[$]}delete s[C]}}function I(C){if(s[C.id]===void 0)return;const O=s[C.id];for(const $ in O){const X=O[$];for(const se in X)g(X[se].object),delete X[se];delete O[$]}delete s[C.id]}function D(C){for(const O in s){const $=s[O];if($[C.id]===void 0)continue;const X=$[C.id];for(const se in X)g(X[se].object),delete X[se];delete $[C.id]}}function F(){b(),u=!0,l!==a&&(l=a,p(l.object))}function b(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:F,resetDefaultState:b,dispose:B,releaseStatesOfGeometry:I,releaseStatesOfProgram:D,initAttributes:w,enableAttribute:v,disableUnusedAttributes:R}}function Yx(r,e,t){let s;function a(p){s=p}function l(p,g){r.drawArrays(s,p,g),t.update(g,s,1)}function u(p,g,y){y!==0&&(r.drawArraysInstanced(s,p,g,y),t.update(g,s,y))}function f(p,g,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,y);let M=0;for(let x=0;x<y;x++)M+=g[x];t.update(M,s,1)}function h(p,g,y,S){if(y===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let x=0;x<p.length;x++)u(p[x],g[x],S[x]);else{M.multiDrawArraysInstancedWEBGL(s,p,0,g,0,S,0,y);let x=0;for(let w=0;w<y;w++)x+=g[w]*S[w];t.update(x,s,1)}}this.setMode=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function qx(r,e,t,s){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");a=r.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function u(D){return!(D!==Oi&&s.convert(D)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(D){const F=D===ja&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==xr&&s.convert(D)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==gr&&!F)}function h(D){if(D==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const g=h(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const y=t.logarithmicDepthBuffer===!0,S=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_TEXTURE_SIZE),v=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),R=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),A=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),B=x>0,I=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:y,reverseDepthBuffer:S,maxTextures:M,maxVertexTextures:x,maxTextureSize:w,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:R,maxVaryings:L,maxFragmentUniforms:A,vertexTextures:B,maxSamples:I}}function $x(r){const e=this;let t=null,s=0,a=!1,l=!1;const u=new Ps,f=new ft,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(y,S){const M=y.length!==0||S||s!==0||a;return a=S,s=y.length,M},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(y,S){t=g(y,S,0)},this.setState=function(y,S,M){const x=y.clippingPlanes,w=y.clipIntersection,v=y.clipShadows,m=r.get(y);if(!a||x===null||x.length===0||l&&!v)l?g(null):p();else{const R=l?0:s,L=R*4;let A=m.clippingState||null;h.value=A,A=g(x,S,L,M);for(let B=0;B!==L;++B)A[B]=t[B];m.clippingState=A,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=R}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function g(y,S,M,x){const w=y!==null?y.length:0;let v=null;if(w!==0){if(v=h.value,x!==!0||v===null){const m=M+w*4,R=S.matrixWorldInverse;f.getNormalMatrix(R),(v===null||v.length<m)&&(v=new Float32Array(m));for(let L=0,A=M;L!==w;++L,A+=4)u.copy(y[L]).applyMatrix4(R,f),u.normal.toArray(v,A),v[A+3]=u.constant}h.value=v,h.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,v}}function Kx(r){let e=new WeakMap;function t(u,f){return f===hd?u.mapping=Fo:f===pd&&(u.mapping=ko),u}function s(u){if(u&&u.isTexture){const f=u.mapping;if(f===hd||f===pd)if(e.has(u)){const h=e.get(u).texture;return t(h,u.mapping)}else{const h=u.image;if(h&&h.height>0){const p=new aS(h.height);return p.fromEquirectangularTexture(r,u),e.set(u,p),u.addEventListener("dispose",a),t(p.texture,u.mapping)}else return null}}return u}function a(u){const f=u.target;f.removeEventListener("dispose",a);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function l(){e=new WeakMap}return{get:s,dispose:l}}class Qx extends b0{constructor(e=-1,t=1,s=1,a=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=a,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,a,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=s-e,u=s+e,f=a+t,h=a-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,f-=g*this.view.offsetY,h=f-g*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const bo=4,Ag=[.125,.215,.35,.446,.526,.582],Ds=20,qf=new Qx,Cg=new lt;let $f=null,Kf=0,Qf=0,Zf=!1;const Ls=(1+Math.sqrt(5))/2,To=1/Ls,Rg=[new Q(-Ls,To,0),new Q(Ls,To,0),new Q(-To,0,Ls),new Q(To,0,Ls),new Q(0,Ls,-To),new Q(0,Ls,To),new Q(-1,1,-1),new Q(1,1,-1),new Q(-1,1,1),new Q(1,1,1)];class Vd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,s=.1,a=100){$f=this._renderer.getRenderTarget(),Kf=this._renderer.getActiveCubeFace(),Qf=this._renderer.getActiveMipmapLevel(),Zf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,s,a,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($f,Kf,Qf),this._renderer.xr.enabled=Zf,e.scissorTest=!1,xc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fo||e.mapping===ko?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$f=this._renderer.getRenderTarget(),Kf=this._renderer.getActiveCubeFace(),Qf=this._renderer.getActiveMipmapLevel(),Zf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:Qi,minFilter:Qi,generateMipmaps:!1,type:ja,format:Oi,colorSpace:Vo,depthBuffer:!1},a=bg(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bg(e,t,s);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Zx(l)),this._blurMaterial=Jx(l,e,t)}return a}_compileMaterial(e){const t=new bt(this._lodPlanes[0],e);this._renderer.compile(t,qf)}_sceneToCubeUV(e,t,s,a){const f=new ci(90,1,t,s),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,y=g.autoClear,S=g.toneMapping;g.getClearColor(Cg),g.toneMapping=ts,g.autoClear=!1;const M=new hh({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1}),x=new bt(new Zi,M);let w=!1;const v=e.background;v?v.isColor&&(M.color.copy(v),e.background=null,w=!0):(M.color.copy(Cg),w=!0);for(let m=0;m<6;m++){const R=m%3;R===0?(f.up.set(0,h[m],0),f.lookAt(p[m],0,0)):R===1?(f.up.set(0,0,h[m]),f.lookAt(0,p[m],0)):(f.up.set(0,h[m],0),f.lookAt(0,0,p[m]));const L=this._cubeSize;xc(a,R*L,m>2?L:0,L,L),g.setRenderTarget(a),w&&g.render(x,f),g.render(e,f)}x.geometry.dispose(),x.material.dispose(),g.toneMapping=S,g.autoClear=y,e.background=v}_textureToCubeUV(e,t){const s=this._renderer,a=e.mapping===Fo||e.mapping===ko;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pg());const l=a?this._cubemapMaterial:this._equirectMaterial,u=new bt(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;xc(t,0,0,3*h,2*h),s.setRenderTarget(t),s.render(u,qf)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let l=1;l<a;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=Rg[(a-l-1)%Rg.length];this._blur(e,l-1,l,u,f)}t.autoClear=s}_blur(e,t,s,a,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,s,a,"latitudinal",l),this._halfBlur(u,e,s,s,a,"longitudinal",l)}_halfBlur(e,t,s,a,l,u,f){const h=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,y=new bt(this._lodPlanes[a],p),S=p.uniforms,M=this._sizeLods[s]-1,x=isFinite(l)?Math.PI/(2*M):2*Math.PI/(2*Ds-1),w=l/x,v=isFinite(l)?1+Math.floor(g*w):Ds;v>Ds&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${Ds}`);const m=[];let R=0;for(let D=0;D<Ds;++D){const F=D/w,b=Math.exp(-F*F/2);m.push(b),D===0?R+=b:D<v&&(R+=2*b)}for(let D=0;D<m.length;D++)m[D]=m[D]/R;S.envMap.value=e.texture,S.samples.value=v,S.weights.value=m,S.latitudinal.value=u==="latitudinal",f&&(S.poleAxis.value=f);const{_lodMax:L}=this;S.dTheta.value=x,S.mipInt.value=L-s;const A=this._sizeLods[a],B=3*A*(a>L-bo?a-L+bo:0),I=4*(this._cubeSize-A);xc(t,B,I,3*A,2*A),h.setRenderTarget(t),h.render(y,qf)}}function Zx(r){const e=[],t=[],s=[];let a=r;const l=r-bo+1+Ag.length;for(let u=0;u<l;u++){const f=Math.pow(2,a);t.push(f);let h=1/f;u>r-bo?h=Ag[u-r+bo-1]:u===0&&(h=0),s.push(h);const p=1/(f-2),g=-p,y=1+p,S=[g,g,y,g,y,y,g,g,y,y,g,y],M=6,x=6,w=3,v=2,m=1,R=new Float32Array(w*x*M),L=new Float32Array(v*x*M),A=new Float32Array(m*x*M);for(let I=0;I<M;I++){const D=I%3*2/3-1,F=I>2?0:-1,b=[D,F,0,D+2/3,F,0,D+2/3,F+1,0,D,F,0,D+2/3,F+1,0,D,F+1,0];R.set(b,w*x*I),L.set(S,v*x*I);const C=[I,I,I,I,I,I];A.set(C,m*x*I)}const B=new fi;B.setAttribute("position",new xi(R,w)),B.setAttribute("uv",new xi(L,v)),B.setAttribute("faceIndex",new xi(A,m)),e.push(B),a>bo&&a--}return{lodPlanes:e,sizeLods:t,sigmas:s}}function bg(r,e,t){const s=new zs(r,e,t);return s.texture.mapping=Fc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function xc(r,e,t,s,a){r.viewport.set(e,t,s,a),r.scissor.set(e,t,s,a)}function Jx(r,e,t){const s=new Float32Array(Ds),a=new Q(0,1,0);return new rs({name:"SphericalGaussianBlur",defines:{n:Ds,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:es,depthTest:!1,depthWrite:!1})}function Pg(){return new rs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:es,depthTest:!1,depthWrite:!1})}function Lg(){return new rs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:es,depthTest:!1,depthWrite:!1})}function mh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function eE(r){let e=new WeakMap,t=null;function s(f){if(f&&f.isTexture){const h=f.mapping,p=h===hd||h===pd,g=h===Fo||h===ko;if(p||g){let y=e.get(f);const S=y!==void 0?y.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==S)return t===null&&(t=new Vd(r)),y=p?t.fromEquirectangular(f,y):t.fromCubemap(f,y),y.texture.pmremVersion=f.pmremVersion,e.set(f,y),y.texture;if(y!==void 0)return y.texture;{const M=f.image;return p&&M&&M.height>0||g&&M&&a(M)?(t===null&&(t=new Vd(r)),y=p?t.fromEquirectangular(f):t.fromCubemap(f),y.texture.pmremVersion=f.pmremVersion,e.set(f,y),f.addEventListener("dispose",l),y.texture):null}}}return f}function a(f){let h=0;const p=6;for(let g=0;g<p;g++)f[g]!==void 0&&h++;return h===p}function l(f){const h=f.target;h.removeEventListener("dispose",l);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:s,dispose:u}}function tE(r){const e={};function t(s){if(e[s]!==void 0)return e[s];let a;switch(s){case"WEBGL_depth_texture":a=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=r.getExtension(s)}return e[s]=a,a}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){const a=t(s);return a===null&&Fa("THREE.WebGLRenderer: "+s+" extension not supported."),a}}}function nE(r,e,t,s){const a={},l=new WeakMap;function u(y){const S=y.target;S.index!==null&&e.remove(S.index);for(const x in S.attributes)e.remove(S.attributes[x]);for(const x in S.morphAttributes){const w=S.morphAttributes[x];for(let v=0,m=w.length;v<m;v++)e.remove(w[v])}S.removeEventListener("dispose",u),delete a[S.id];const M=l.get(S);M&&(e.remove(M),l.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,t.memory.geometries--}function f(y,S){return a[S.id]===!0||(S.addEventListener("dispose",u),a[S.id]=!0,t.memory.geometries++),S}function h(y){const S=y.attributes;for(const x in S)e.update(S[x],r.ARRAY_BUFFER);const M=y.morphAttributes;for(const x in M){const w=M[x];for(let v=0,m=w.length;v<m;v++)e.update(w[v],r.ARRAY_BUFFER)}}function p(y){const S=[],M=y.index,x=y.attributes.position;let w=0;if(M!==null){const R=M.array;w=M.version;for(let L=0,A=R.length;L<A;L+=3){const B=R[L+0],I=R[L+1],D=R[L+2];S.push(B,I,I,D,D,B)}}else if(x!==void 0){const R=x.array;w=x.version;for(let L=0,A=R.length/3-1;L<A;L+=3){const B=L+0,I=L+1,D=L+2;S.push(B,I,I,D,D,B)}}else return;const v=new(x0(S)?C0:A0)(S,1);v.version=w;const m=l.get(y);m&&e.remove(m),l.set(y,v)}function g(y){const S=l.get(y);if(S){const M=y.index;M!==null&&S.version<M.version&&p(y)}else p(y);return l.get(y)}return{get:f,update:h,getWireframeAttribute:g}}function iE(r,e,t){let s;function a(S){s=S}let l,u;function f(S){l=S.type,u=S.bytesPerElement}function h(S,M){r.drawElements(s,M,l,S*u),t.update(M,s,1)}function p(S,M,x){x!==0&&(r.drawElementsInstanced(s,M,l,S*u,x),t.update(M,s,x))}function g(S,M,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,l,S,0,x);let v=0;for(let m=0;m<x;m++)v+=M[m];t.update(v,s,1)}function y(S,M,x,w){if(x===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let m=0;m<S.length;m++)p(S[m]/u,M[m],w[m]);else{v.multiDrawElementsInstancedWEBGL(s,M,0,l,S,0,w,0,x);let m=0;for(let R=0;R<x;R++)m+=M[R]*w[R];t.update(m,s,1)}}this.setMode=a,this.setIndex=f,this.render=h,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=y}function rE(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,u,f){switch(t.calls++,u){case r.TRIANGLES:t.triangles+=f*(l/3);break;case r.LINES:t.lines+=f*(l/2);break;case r.LINE_STRIP:t.lines+=f*(l-1);break;case r.LINE_LOOP:t.lines+=f*l;break;case r.POINTS:t.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:s}}function sE(r,e,t){const s=new WeakMap,a=new nn;function l(u,f,h){const p=u.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,y=g!==void 0?g.length:0;let S=s.get(f);if(S===void 0||S.count!==y){let b=function(){D.dispose(),s.delete(f),f.removeEventListener("dispose",b)};S!==void 0&&S.texture.dispose();const M=f.morphAttributes.position!==void 0,x=f.morphAttributes.normal!==void 0,w=f.morphAttributes.color!==void 0,v=f.morphAttributes.position||[],m=f.morphAttributes.normal||[],R=f.morphAttributes.color||[];let L=0;M===!0&&(L=1),x===!0&&(L=2),w===!0&&(L=3);let A=f.attributes.position.count*L,B=1;A>e.maxTextureSize&&(B=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const I=new Float32Array(A*B*4*y),D=new w0(I,A,B,y);D.type=gr,D.needsUpdate=!0;const F=L*4;for(let C=0;C<y;C++){const O=v[C],$=m[C],X=R[C],se=A*B*4*C;for(let de=0;de<O.count;de++){const re=de*F;M===!0&&(a.fromBufferAttribute(O,de),I[se+re+0]=a.x,I[se+re+1]=a.y,I[se+re+2]=a.z,I[se+re+3]=0),x===!0&&(a.fromBufferAttribute($,de),I[se+re+4]=a.x,I[se+re+5]=a.y,I[se+re+6]=a.z,I[se+re+7]=0),w===!0&&(a.fromBufferAttribute(X,de),I[se+re+8]=a.x,I[se+re+9]=a.y,I[se+re+10]=a.z,I[se+re+11]=X.itemSize===4?a.w:1)}}S={count:y,texture:D,size:new ut(A,B)},s.set(f,S),f.addEventListener("dispose",b)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(r,"morphTexture",u.morphTexture,t);else{let M=0;for(let w=0;w<p.length;w++)M+=p[w];const x=f.morphTargetsRelative?1:1-M;h.getUniforms().setValue(r,"morphTargetBaseInfluence",x),h.getUniforms().setValue(r,"morphTargetInfluences",p)}h.getUniforms().setValue(r,"morphTargetsTexture",S.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",S.size)}return{update:l}}function oE(r,e,t,s){let a=new WeakMap;function l(h){const p=s.render.frame,g=h.geometry,y=e.get(h,g);if(a.get(y)!==p&&(e.update(y),a.set(y,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),a.get(h)!==p&&(t.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,r.ARRAY_BUFFER),a.set(h,p))),h.isSkinnedMesh){const S=h.skeleton;a.get(S)!==p&&(S.update(),a.set(S,p))}return y}function u(){a=new WeakMap}function f(h){const p=h.target;p.removeEventListener("dispose",f),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:u}}class I0 extends jn{constructor(e,t,s,a,l,u,f,h,p,g=Io){if(g!==Io&&g!==zo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&g===Io&&(s=Os),s===void 0&&g===zo&&(s=Oo),super(null,a,l,u,f,h,g,s,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=f!==void 0?f:Hi,this.minFilter=h!==void 0?h:Hi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const D0=new jn,Ig=new I0(1,1),N0=new w0,U0=new Xy,F0=new P0,Dg=[],Ng=[],Ug=new Float32Array(16),Fg=new Float32Array(9),kg=new Float32Array(4);function jo(r,e,t){const s=r[0];if(s<=0||s>0)return r;const a=e*t;let l=Dg[a];if(l===void 0&&(l=new Float32Array(a),Dg[a]=l),e!==0){s.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=t,r[u].toArray(l,f)}return l}function gn(r,e){if(r.length!==e.length)return!1;for(let t=0,s=r.length;t<s;t++)if(r[t]!==e[t])return!1;return!0}function vn(r,e){for(let t=0,s=e.length;t<s;t++)r[t]=e[t]}function Oc(r,e){let t=Ng[e];t===void 0&&(t=new Int32Array(e),Ng[e]=t);for(let s=0;s!==e;++s)t[s]=r.allocateTextureUnit();return t}function aE(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function lE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gn(t,e))return;r.uniform2fv(this.addr,e),vn(t,e)}}function cE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gn(t,e))return;r.uniform3fv(this.addr,e),vn(t,e)}}function uE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gn(t,e))return;r.uniform4fv(this.addr,e),vn(t,e)}}function fE(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(gn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),vn(t,e)}else{if(gn(t,s))return;kg.set(s),r.uniformMatrix2fv(this.addr,!1,kg),vn(t,s)}}function dE(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(gn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),vn(t,e)}else{if(gn(t,s))return;Fg.set(s),r.uniformMatrix3fv(this.addr,!1,Fg),vn(t,s)}}function hE(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(gn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),vn(t,e)}else{if(gn(t,s))return;Ug.set(s),r.uniformMatrix4fv(this.addr,!1,Ug),vn(t,s)}}function pE(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function mE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gn(t,e))return;r.uniform2iv(this.addr,e),vn(t,e)}}function gE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gn(t,e))return;r.uniform3iv(this.addr,e),vn(t,e)}}function vE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gn(t,e))return;r.uniform4iv(this.addr,e),vn(t,e)}}function _E(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function yE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gn(t,e))return;r.uniform2uiv(this.addr,e),vn(t,e)}}function SE(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gn(t,e))return;r.uniform3uiv(this.addr,e),vn(t,e)}}function ME(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gn(t,e))return;r.uniform4uiv(this.addr,e),vn(t,e)}}function xE(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a);let l;this.type===r.SAMPLER_2D_SHADOW?(Ig.compareFunction=M0,l=Ig):l=D0,t.setTexture2D(e||l,a)}function EE(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),t.setTexture3D(e||U0,a)}function wE(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),t.setTextureCube(e||F0,a)}function TE(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),t.setTexture2DArray(e||N0,a)}function AE(r){switch(r){case 5126:return aE;case 35664:return lE;case 35665:return cE;case 35666:return uE;case 35674:return fE;case 35675:return dE;case 35676:return hE;case 5124:case 35670:return pE;case 35667:case 35671:return mE;case 35668:case 35672:return gE;case 35669:case 35673:return vE;case 5125:return _E;case 36294:return yE;case 36295:return SE;case 36296:return ME;case 35678:case 36198:case 36298:case 36306:case 35682:return xE;case 35679:case 36299:case 36307:return EE;case 35680:case 36300:case 36308:case 36293:return wE;case 36289:case 36303:case 36311:case 36292:return TE}}function CE(r,e){r.uniform1fv(this.addr,e)}function RE(r,e){const t=jo(e,this.size,2);r.uniform2fv(this.addr,t)}function bE(r,e){const t=jo(e,this.size,3);r.uniform3fv(this.addr,t)}function PE(r,e){const t=jo(e,this.size,4);r.uniform4fv(this.addr,t)}function LE(r,e){const t=jo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function IE(r,e){const t=jo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function DE(r,e){const t=jo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function NE(r,e){r.uniform1iv(this.addr,e)}function UE(r,e){r.uniform2iv(this.addr,e)}function FE(r,e){r.uniform3iv(this.addr,e)}function kE(r,e){r.uniform4iv(this.addr,e)}function OE(r,e){r.uniform1uiv(this.addr,e)}function zE(r,e){r.uniform2uiv(this.addr,e)}function BE(r,e){r.uniform3uiv(this.addr,e)}function HE(r,e){r.uniform4uiv(this.addr,e)}function VE(r,e,t){const s=this.cache,a=e.length,l=Oc(t,a);gn(s,l)||(r.uniform1iv(this.addr,l),vn(s,l));for(let u=0;u!==a;++u)t.setTexture2D(e[u]||D0,l[u])}function GE(r,e,t){const s=this.cache,a=e.length,l=Oc(t,a);gn(s,l)||(r.uniform1iv(this.addr,l),vn(s,l));for(let u=0;u!==a;++u)t.setTexture3D(e[u]||U0,l[u])}function WE(r,e,t){const s=this.cache,a=e.length,l=Oc(t,a);gn(s,l)||(r.uniform1iv(this.addr,l),vn(s,l));for(let u=0;u!==a;++u)t.setTextureCube(e[u]||F0,l[u])}function XE(r,e,t){const s=this.cache,a=e.length,l=Oc(t,a);gn(s,l)||(r.uniform1iv(this.addr,l),vn(s,l));for(let u=0;u!==a;++u)t.setTexture2DArray(e[u]||N0,l[u])}function jE(r){switch(r){case 5126:return CE;case 35664:return RE;case 35665:return bE;case 35666:return PE;case 35674:return LE;case 35675:return IE;case 35676:return DE;case 5124:case 35670:return NE;case 35667:case 35671:return UE;case 35668:case 35672:return FE;case 35669:case 35673:return kE;case 5125:return OE;case 36294:return zE;case 36295:return BE;case 36296:return HE;case 35678:case 36198:case 36298:case 36306:case 35682:return VE;case 35679:case 36299:case 36307:return GE;case 35680:case 36300:case 36308:case 36293:return WE;case 36289:case 36303:case 36311:case 36292:return XE}}class YE{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=AE(t.type)}}class qE{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=jE(t.type)}}class $E{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const a=this.seq;for(let l=0,u=a.length;l!==u;++l){const f=a[l];f.setValue(e,t[f.id],s)}}}const Jf=/(\w+)(\])?(\[|\.)?/g;function Og(r,e){r.seq.push(e),r.map[e.id]=e}function KE(r,e,t){const s=r.name,a=s.length;for(Jf.lastIndex=0;;){const l=Jf.exec(s),u=Jf.lastIndex;let f=l[1];const h=l[2]==="]",p=l[3];if(h&&(f=f|0),p===void 0||p==="["&&u+2===a){Og(t,p===void 0?new YE(f,r,e):new qE(f,r,e));break}else{let y=t.map[f];y===void 0&&(y=new $E(f),Og(t,y)),t=y}}}class Pc{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<s;++a){const l=e.getActiveUniform(t,a),u=e.getUniformLocation(t,l.name);KE(l,u,this)}}setValue(e,t,s,a){const l=this.map[t];l!==void 0&&l.setValue(e,s,a)}setOptional(e,t,s){const a=t[s];a!==void 0&&this.setValue(e,s,a)}static upload(e,t,s,a){for(let l=0,u=t.length;l!==u;++l){const f=t[l],h=s[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,a)}}static seqWithValue(e,t){const s=[];for(let a=0,l=e.length;a!==l;++a){const u=e[a];u.id in t&&s.push(u)}return s}}function zg(r,e,t){const s=r.createShader(e);return r.shaderSource(s,t),r.compileShader(s),s}const QE=37297;let ZE=0;function JE(r,e){const t=r.split(`
`),s=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=a;u<l;u++){const f=u+1;s.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return s.join(`
`)}const Bg=new ft;function e1(r){wt._getMatrix(Bg,wt.workingColorSpace,r);const e=`mat3( ${Bg.elements.map(t=>t.toFixed(4))} )`;switch(wt.getTransfer(r)){case kc:return[e,"LinearTransferOETF"];case Ut:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Hg(r,e,t){const s=r.getShaderParameter(e,r.COMPILE_STATUS),a=r.getShaderInfoLog(e).trim();if(s&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const u=parseInt(l[1]);return t.toUpperCase()+`

`+a+`

`+JE(r.getShaderSource(e),u)}else return a}function t1(r,e){const t=e1(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function n1(r,e){let t;switch(e){case ry:t="Linear";break;case sy:t="Reinhard";break;case oy:t="Cineon";break;case c0:t="ACESFilmic";break;case ly:t="AgX";break;case cy:t="Neutral";break;case ay:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ec=new Q;function i1(){wt.getLuminanceCoefficients(Ec);const r=Ec.x.toFixed(4),e=Ec.y.toFixed(4),t=Ec.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function r1(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ka).join(`
`)}function s1(r){const e=[];for(const t in r){const s=r[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function o1(r,e){const t={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let a=0;a<s;a++){const l=r.getActiveAttrib(e,a),u=l.name;let f=1;l.type===r.FLOAT_MAT2&&(f=2),l.type===r.FLOAT_MAT3&&(f=3),l.type===r.FLOAT_MAT4&&(f=4),t[u]={type:l.type,location:r.getAttribLocation(e,u),locationSize:f}}return t}function ka(r){return r!==""}function Vg(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gg(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const a1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gd(r){return r.replace(a1,c1)}const l1=new Map;function c1(r,e){let t=dt[e];if(t===void 0){const s=l1.get(e);if(s!==void 0)t=dt[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Gd(t)}const u1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wg(r){return r.replace(u1,f1)}function f1(r,e,t,s){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function Xg(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function d1(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===eh?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===k_?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===mr&&(e="SHADOWMAP_TYPE_VSM"),e}function h1(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Fo:case ko:e="ENVMAP_TYPE_CUBE";break;case Fc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function p1(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ko:e="ENVMAP_MODE_REFRACTION";break}return e}function m1(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case th:e="ENVMAP_BLENDING_MULTIPLY";break;case ny:e="ENVMAP_BLENDING_MIX";break;case iy:e="ENVMAP_BLENDING_ADD";break}return e}function g1(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:s,maxMip:t}}function v1(r,e,t,s){const a=r.getContext(),l=t.defines;let u=t.vertexShader,f=t.fragmentShader;const h=d1(t),p=h1(t),g=p1(t),y=m1(t),S=g1(t),M=r1(t),x=s1(l),w=a.createProgram();let v,m,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(ka).join(`
`),v.length>0&&(v+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(ka).join(`
`),m.length>0&&(m+=`
`)):(v=[Xg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ka).join(`
`),m=[Xg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",t.envMap?"#define "+y:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ts?"#define TONE_MAPPING":"",t.toneMapping!==ts?dt.tonemapping_pars_fragment:"",t.toneMapping!==ts?n1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,t1("linearToOutputTexel",t.outputColorSpace),i1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ka).join(`
`)),u=Gd(u),u=Vg(u,t),u=Gg(u,t),f=Gd(f),f=Vg(f,t),f=Gg(f,t),u=Wg(u),f=Wg(f),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,v=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,m=["#define varying in",t.glslVersion===rg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===rg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const L=R+v+u,A=R+m+f,B=zg(a,a.VERTEX_SHADER,L),I=zg(a,a.FRAGMENT_SHADER,A);a.attachShader(w,B),a.attachShader(w,I),t.index0AttributeName!==void 0?a.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(w,0,"position"),a.linkProgram(w);function D(O){if(r.debug.checkShaderErrors){const $=a.getProgramInfoLog(w).trim(),X=a.getShaderInfoLog(B).trim(),se=a.getShaderInfoLog(I).trim();let de=!0,re=!0;if(a.getProgramParameter(w,a.LINK_STATUS)===!1)if(de=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(a,w,B,I);else{const pe=Hg(a,B,"vertex"),H=Hg(a,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(w,a.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+$+`
`+pe+`
`+H)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(X===""||se==="")&&(re=!1);re&&(O.diagnostics={runnable:de,programLog:$,vertexShader:{log:X,prefix:v},fragmentShader:{log:se,prefix:m}})}a.deleteShader(B),a.deleteShader(I),F=new Pc(a,w),b=o1(a,w)}let F;this.getUniforms=function(){return F===void 0&&D(this),F};let b;this.getAttributes=function(){return b===void 0&&D(this),b};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=a.getProgramParameter(w,QE)),C},this.destroy=function(){s.releaseStatesOfProgram(this),a.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ZE++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=B,this.fragmentShader=I,this}let _1=0;class y1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,s=e.fragmentShader,a=this._getShaderStage(t),l=this._getShaderStage(s),u=this._getShaderCacheForMaterial(e);return u.has(a)===!1&&(u.add(a),a.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new S1(e),t.set(e,s)),s}}class S1{constructor(e){this.id=_1++,this.code=e,this.usedTimes=0}}function M1(r,e,t,s,a,l,u){const f=new dh,h=new y1,p=new Set,g=[],y=a.logarithmicDepthBuffer,S=a.vertexTextures;let M=a.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(b){return p.add(b),b===0?"uv":`uv${b}`}function v(b,C,O,$,X){const se=$.fog,de=X.geometry,re=b.isMeshStandardMaterial?$.environment:null,pe=(b.isMeshStandardMaterial?t:e).get(b.envMap||re),H=pe&&pe.mapping===Fc?pe.image.height:null,le=x[b.type];b.precision!==null&&(M=a.getMaxPrecision(b.precision),M!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",M,"instead."));const ae=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,k=ae!==void 0?ae.length:0;let ie=0;de.morphAttributes.position!==void 0&&(ie=1),de.morphAttributes.normal!==void 0&&(ie=2),de.morphAttributes.color!==void 0&&(ie=3);let Ue,J,ce,Ee;if(le){const xt=Ki[le];Ue=xt.vertexShader,J=xt.fragmentShader}else Ue=b.vertexShader,J=b.fragmentShader,h.update(b),ce=h.getVertexShaderID(b),Ee=h.getFragmentShaderID(b);const _e=r.getRenderTarget(),Ae=r.state.buffers.depth.getReversed(),Fe=X.isInstancedMesh===!0,Je=X.isBatchedMesh===!0,Nt=!!b.map,yt=!!b.matcap,Bt=!!pe,Y=!!b.aoMap,kn=!!b.lightMap,_t=!!b.bumpMap,mt=!!b.normalMap,Ke=!!b.displacementMap,Lt=!!b.emissiveMap,$e=!!b.metalnessMap,N=!!b.roughnessMap,T=b.anisotropy>0,Z=b.clearcoat>0,he=b.dispersion>0,ge=b.iridescence>0,ue=b.sheen>0,We=b.transmission>0,Ce=T&&!!b.anisotropyMap,ke=Z&&!!b.clearcoatMap,ht=Z&&!!b.clearcoatNormalMap,Me=Z&&!!b.clearcoatRoughnessMap,ze=ge&&!!b.iridescenceMap,et=ge&&!!b.iridescenceThicknessMap,nt=ue&&!!b.sheenColorMap,Be=ue&&!!b.sheenRoughnessMap,gt=!!b.specularMap,ot=!!b.specularColorMap,Pt=!!b.specularIntensityMap,G=We&&!!b.transmissionMap,Re=We&&!!b.thicknessMap,oe=!!b.gradientMap,fe=!!b.alphaMap,Ie=b.alphaTest>0,Le=!!b.alphaHash,at=!!b.extensions;let Vt=ts;b.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(Vt=r.toneMapping);const fn={shaderID:le,shaderType:b.type,shaderName:b.name,vertexShader:Ue,fragmentShader:J,defines:b.defines,customVertexShaderID:ce,customFragmentShaderID:Ee,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:M,batching:Je,batchingColor:Je&&X._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&X.instanceColor!==null,instancingMorph:Fe&&X.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:_e===null?r.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:Vo,alphaToCoverage:!!b.alphaToCoverage,map:Nt,matcap:yt,envMap:Bt,envMapMode:Bt&&pe.mapping,envMapCubeUVHeight:H,aoMap:Y,lightMap:kn,bumpMap:_t,normalMap:mt,displacementMap:S&&Ke,emissiveMap:Lt,normalMapObjectSpace:mt&&b.normalMapType===hy,normalMapTangentSpace:mt&&b.normalMapType===lh,metalnessMap:$e,roughnessMap:N,anisotropy:T,anisotropyMap:Ce,clearcoat:Z,clearcoatMap:ke,clearcoatNormalMap:ht,clearcoatRoughnessMap:Me,dispersion:he,iridescence:ge,iridescenceMap:ze,iridescenceThicknessMap:et,sheen:ue,sheenColorMap:nt,sheenRoughnessMap:Be,specularMap:gt,specularColorMap:ot,specularIntensityMap:Pt,transmission:We,transmissionMap:G,thicknessMap:Re,gradientMap:oe,opaque:b.transparent===!1&&b.blending===Lo&&b.alphaToCoverage===!1,alphaMap:fe,alphaTest:Ie,alphaHash:Le,combine:b.combine,mapUv:Nt&&w(b.map.channel),aoMapUv:Y&&w(b.aoMap.channel),lightMapUv:kn&&w(b.lightMap.channel),bumpMapUv:_t&&w(b.bumpMap.channel),normalMapUv:mt&&w(b.normalMap.channel),displacementMapUv:Ke&&w(b.displacementMap.channel),emissiveMapUv:Lt&&w(b.emissiveMap.channel),metalnessMapUv:$e&&w(b.metalnessMap.channel),roughnessMapUv:N&&w(b.roughnessMap.channel),anisotropyMapUv:Ce&&w(b.anisotropyMap.channel),clearcoatMapUv:ke&&w(b.clearcoatMap.channel),clearcoatNormalMapUv:ht&&w(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&w(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&w(b.iridescenceMap.channel),iridescenceThicknessMapUv:et&&w(b.iridescenceThicknessMap.channel),sheenColorMapUv:nt&&w(b.sheenColorMap.channel),sheenRoughnessMapUv:Be&&w(b.sheenRoughnessMap.channel),specularMapUv:gt&&w(b.specularMap.channel),specularColorMapUv:ot&&w(b.specularColorMap.channel),specularIntensityMapUv:Pt&&w(b.specularIntensityMap.channel),transmissionMapUv:G&&w(b.transmissionMap.channel),thicknessMapUv:Re&&w(b.thicknessMap.channel),alphaMapUv:fe&&w(b.alphaMap.channel),vertexTangents:!!de.attributes.tangent&&(mt||T),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!de.attributes.uv&&(Nt||fe),fog:!!se,useFog:b.fog===!0,fogExp2:!!se&&se.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:y,reverseDepthBuffer:Ae,skinning:X.isSkinnedMesh===!0,morphTargets:de.morphAttributes.position!==void 0,morphNormals:de.morphAttributes.normal!==void 0,morphColors:de.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:ie,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&O.length>0,shadowMapType:r.shadowMap.type,toneMapping:Vt,decodeVideoTexture:Nt&&b.map.isVideoTexture===!0&&wt.getTransfer(b.map.colorSpace)===Ut,decodeVideoTextureEmissive:Lt&&b.emissiveMap.isVideoTexture===!0&&wt.getTransfer(b.emissiveMap.colorSpace)===Ut,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Fi,flipSided:b.side===Xn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:at&&b.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&b.extensions.multiDraw===!0||Je)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return fn.vertexUv1s=p.has(1),fn.vertexUv2s=p.has(2),fn.vertexUv3s=p.has(3),p.clear(),fn}function m(b){const C=[];if(b.shaderID?C.push(b.shaderID):(C.push(b.customVertexShaderID),C.push(b.customFragmentShaderID)),b.defines!==void 0)for(const O in b.defines)C.push(O),C.push(b.defines[O]);return b.isRawShaderMaterial===!1&&(R(C,b),L(C,b),C.push(r.outputColorSpace)),C.push(b.customProgramCacheKey),C.join()}function R(b,C){b.push(C.precision),b.push(C.outputColorSpace),b.push(C.envMapMode),b.push(C.envMapCubeUVHeight),b.push(C.mapUv),b.push(C.alphaMapUv),b.push(C.lightMapUv),b.push(C.aoMapUv),b.push(C.bumpMapUv),b.push(C.normalMapUv),b.push(C.displacementMapUv),b.push(C.emissiveMapUv),b.push(C.metalnessMapUv),b.push(C.roughnessMapUv),b.push(C.anisotropyMapUv),b.push(C.clearcoatMapUv),b.push(C.clearcoatNormalMapUv),b.push(C.clearcoatRoughnessMapUv),b.push(C.iridescenceMapUv),b.push(C.iridescenceThicknessMapUv),b.push(C.sheenColorMapUv),b.push(C.sheenRoughnessMapUv),b.push(C.specularMapUv),b.push(C.specularColorMapUv),b.push(C.specularIntensityMapUv),b.push(C.transmissionMapUv),b.push(C.thicknessMapUv),b.push(C.combine),b.push(C.fogExp2),b.push(C.sizeAttenuation),b.push(C.morphTargetsCount),b.push(C.morphAttributeCount),b.push(C.numDirLights),b.push(C.numPointLights),b.push(C.numSpotLights),b.push(C.numSpotLightMaps),b.push(C.numHemiLights),b.push(C.numRectAreaLights),b.push(C.numDirLightShadows),b.push(C.numPointLightShadows),b.push(C.numSpotLightShadows),b.push(C.numSpotLightShadowsWithMaps),b.push(C.numLightProbes),b.push(C.shadowMapType),b.push(C.toneMapping),b.push(C.numClippingPlanes),b.push(C.numClipIntersection),b.push(C.depthPacking)}function L(b,C){f.disableAll(),C.supportsVertexTextures&&f.enable(0),C.instancing&&f.enable(1),C.instancingColor&&f.enable(2),C.instancingMorph&&f.enable(3),C.matcap&&f.enable(4),C.envMap&&f.enable(5),C.normalMapObjectSpace&&f.enable(6),C.normalMapTangentSpace&&f.enable(7),C.clearcoat&&f.enable(8),C.iridescence&&f.enable(9),C.alphaTest&&f.enable(10),C.vertexColors&&f.enable(11),C.vertexAlphas&&f.enable(12),C.vertexUv1s&&f.enable(13),C.vertexUv2s&&f.enable(14),C.vertexUv3s&&f.enable(15),C.vertexTangents&&f.enable(16),C.anisotropy&&f.enable(17),C.alphaHash&&f.enable(18),C.batching&&f.enable(19),C.dispersion&&f.enable(20),C.batchingColor&&f.enable(21),b.push(f.mask),f.disableAll(),C.fog&&f.enable(0),C.useFog&&f.enable(1),C.flatShading&&f.enable(2),C.logarithmicDepthBuffer&&f.enable(3),C.reverseDepthBuffer&&f.enable(4),C.skinning&&f.enable(5),C.morphTargets&&f.enable(6),C.morphNormals&&f.enable(7),C.morphColors&&f.enable(8),C.premultipliedAlpha&&f.enable(9),C.shadowMapEnabled&&f.enable(10),C.doubleSided&&f.enable(11),C.flipSided&&f.enable(12),C.useDepthPacking&&f.enable(13),C.dithering&&f.enable(14),C.transmission&&f.enable(15),C.sheen&&f.enable(16),C.opaque&&f.enable(17),C.pointsUvs&&f.enable(18),C.decodeVideoTexture&&f.enable(19),C.decodeVideoTextureEmissive&&f.enable(20),C.alphaToCoverage&&f.enable(21),b.push(f.mask)}function A(b){const C=x[b.type];let O;if(C){const $=Ki[C];O=iS.clone($.uniforms)}else O=b.uniforms;return O}function B(b,C){let O;for(let $=0,X=g.length;$<X;$++){const se=g[$];if(se.cacheKey===C){O=se,++O.usedTimes;break}}return O===void 0&&(O=new v1(r,C,b,l),g.push(O)),O}function I(b){if(--b.usedTimes===0){const C=g.indexOf(b);g[C]=g[g.length-1],g.pop(),b.destroy()}}function D(b){h.remove(b)}function F(){h.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:A,acquireProgram:B,releaseProgram:I,releaseShaderCache:D,programs:g,dispose:F}}function x1(){let r=new WeakMap;function e(u){return r.has(u)}function t(u){let f=r.get(u);return f===void 0&&(f={},r.set(u,f)),f}function s(u){r.delete(u)}function a(u,f,h){r.get(u)[f]=h}function l(){r=new WeakMap}return{has:e,get:t,remove:s,update:a,dispose:l}}function E1(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function jg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Yg(){const r=[];let e=0;const t=[],s=[],a=[];function l(){e=0,t.length=0,s.length=0,a.length=0}function u(y,S,M,x,w,v){let m=r[e];return m===void 0?(m={id:y.id,object:y,geometry:S,material:M,groupOrder:x,renderOrder:y.renderOrder,z:w,group:v},r[e]=m):(m.id=y.id,m.object=y,m.geometry=S,m.material=M,m.groupOrder=x,m.renderOrder=y.renderOrder,m.z=w,m.group=v),e++,m}function f(y,S,M,x,w,v){const m=u(y,S,M,x,w,v);M.transmission>0?s.push(m):M.transparent===!0?a.push(m):t.push(m)}function h(y,S,M,x,w,v){const m=u(y,S,M,x,w,v);M.transmission>0?s.unshift(m):M.transparent===!0?a.unshift(m):t.unshift(m)}function p(y,S){t.length>1&&t.sort(y||E1),s.length>1&&s.sort(S||jg),a.length>1&&a.sort(S||jg)}function g(){for(let y=e,S=r.length;y<S;y++){const M=r[y];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:s,transparent:a,init:l,push:f,unshift:h,finish:g,sort:p}}function w1(){let r=new WeakMap;function e(s,a){const l=r.get(s);let u;return l===void 0?(u=new Yg,r.set(s,[u])):a>=l.length?(u=new Yg,l.push(u)):u=l[a],u}function t(){r=new WeakMap}return{get:e,dispose:t}}function T1(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Q,color:new lt};break;case"SpotLight":t={position:new Q,direction:new Q,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Q,color:new lt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Q,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":t={color:new lt,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return r[e.id]=t,t}}}function A1(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let C1=0;function R1(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function b1(r){const e=new T1,t=A1(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new Q);const a=new Q,l=new Kt,u=new Kt;function f(p){let g=0,y=0,S=0;for(let b=0;b<9;b++)s.probe[b].set(0,0,0);let M=0,x=0,w=0,v=0,m=0,R=0,L=0,A=0,B=0,I=0,D=0;p.sort(R1);for(let b=0,C=p.length;b<C;b++){const O=p[b],$=O.color,X=O.intensity,se=O.distance,de=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)g+=$.r*X,y+=$.g*X,S+=$.b*X;else if(O.isLightProbe){for(let re=0;re<9;re++)s.probe[re].addScaledVector(O.sh.coefficients[re],X);D++}else if(O.isDirectionalLight){const re=e.get(O);if(re.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const pe=O.shadow,H=t.get(O);H.shadowIntensity=pe.intensity,H.shadowBias=pe.bias,H.shadowNormalBias=pe.normalBias,H.shadowRadius=pe.radius,H.shadowMapSize=pe.mapSize,s.directionalShadow[M]=H,s.directionalShadowMap[M]=de,s.directionalShadowMatrix[M]=O.shadow.matrix,R++}s.directional[M]=re,M++}else if(O.isSpotLight){const re=e.get(O);re.position.setFromMatrixPosition(O.matrixWorld),re.color.copy($).multiplyScalar(X),re.distance=se,re.coneCos=Math.cos(O.angle),re.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),re.decay=O.decay,s.spot[w]=re;const pe=O.shadow;if(O.map&&(s.spotLightMap[B]=O.map,B++,pe.updateMatrices(O),O.castShadow&&I++),s.spotLightMatrix[w]=pe.matrix,O.castShadow){const H=t.get(O);H.shadowIntensity=pe.intensity,H.shadowBias=pe.bias,H.shadowNormalBias=pe.normalBias,H.shadowRadius=pe.radius,H.shadowMapSize=pe.mapSize,s.spotShadow[w]=H,s.spotShadowMap[w]=de,A++}w++}else if(O.isRectAreaLight){const re=e.get(O);re.color.copy($).multiplyScalar(X),re.halfWidth.set(O.width*.5,0,0),re.halfHeight.set(0,O.height*.5,0),s.rectArea[v]=re,v++}else if(O.isPointLight){const re=e.get(O);if(re.color.copy(O.color).multiplyScalar(O.intensity),re.distance=O.distance,re.decay=O.decay,O.castShadow){const pe=O.shadow,H=t.get(O);H.shadowIntensity=pe.intensity,H.shadowBias=pe.bias,H.shadowNormalBias=pe.normalBias,H.shadowRadius=pe.radius,H.shadowMapSize=pe.mapSize,H.shadowCameraNear=pe.camera.near,H.shadowCameraFar=pe.camera.far,s.pointShadow[x]=H,s.pointShadowMap[x]=de,s.pointShadowMatrix[x]=O.shadow.matrix,L++}s.point[x]=re,x++}else if(O.isHemisphereLight){const re=e.get(O);re.skyColor.copy(O.color).multiplyScalar(X),re.groundColor.copy(O.groundColor).multiplyScalar(X),s.hemi[m]=re,m++}}v>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=be.LTC_FLOAT_1,s.rectAreaLTC2=be.LTC_FLOAT_2):(s.rectAreaLTC1=be.LTC_HALF_1,s.rectAreaLTC2=be.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=y,s.ambient[2]=S;const F=s.hash;(F.directionalLength!==M||F.pointLength!==x||F.spotLength!==w||F.rectAreaLength!==v||F.hemiLength!==m||F.numDirectionalShadows!==R||F.numPointShadows!==L||F.numSpotShadows!==A||F.numSpotMaps!==B||F.numLightProbes!==D)&&(s.directional.length=M,s.spot.length=w,s.rectArea.length=v,s.point.length=x,s.hemi.length=m,s.directionalShadow.length=R,s.directionalShadowMap.length=R,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=A,s.spotShadowMap.length=A,s.directionalShadowMatrix.length=R,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=A+B-I,s.spotLightMap.length=B,s.numSpotLightShadowsWithMaps=I,s.numLightProbes=D,F.directionalLength=M,F.pointLength=x,F.spotLength=w,F.rectAreaLength=v,F.hemiLength=m,F.numDirectionalShadows=R,F.numPointShadows=L,F.numSpotShadows=A,F.numSpotMaps=B,F.numLightProbes=D,s.version=C1++)}function h(p,g){let y=0,S=0,M=0,x=0,w=0;const v=g.matrixWorldInverse;for(let m=0,R=p.length;m<R;m++){const L=p[m];if(L.isDirectionalLight){const A=s.directional[y];A.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),A.direction.sub(a),A.direction.transformDirection(v),y++}else if(L.isSpotLight){const A=s.spot[M];A.position.setFromMatrixPosition(L.matrixWorld),A.position.applyMatrix4(v),A.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),A.direction.sub(a),A.direction.transformDirection(v),M++}else if(L.isRectAreaLight){const A=s.rectArea[x];A.position.setFromMatrixPosition(L.matrixWorld),A.position.applyMatrix4(v),u.identity(),l.copy(L.matrixWorld),l.premultiply(v),u.extractRotation(l),A.halfWidth.set(L.width*.5,0,0),A.halfHeight.set(0,L.height*.5,0),A.halfWidth.applyMatrix4(u),A.halfHeight.applyMatrix4(u),x++}else if(L.isPointLight){const A=s.point[S];A.position.setFromMatrixPosition(L.matrixWorld),A.position.applyMatrix4(v),S++}else if(L.isHemisphereLight){const A=s.hemi[w];A.direction.setFromMatrixPosition(L.matrixWorld),A.direction.transformDirection(v),w++}}}return{setup:f,setupView:h,state:s}}function qg(r){const e=new b1(r),t=[],s=[];function a(g){p.camera=g,t.length=0,s.length=0}function l(g){t.push(g)}function u(g){s.push(g)}function f(){e.setup(t)}function h(g){e.setupView(t,g)}const p={lightsArray:t,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:p,setupLights:f,setupLightsView:h,pushLight:l,pushShadow:u}}function P1(r){let e=new WeakMap;function t(a,l=0){const u=e.get(a);let f;return u===void 0?(f=new qg(r),e.set(a,[f])):l>=u.length?(f=new qg(r),u.push(f)):f=u[l],f}function s(){e=new WeakMap}return{get:t,dispose:s}}class L1 extends Xo{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=fy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class I1 extends Xo{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const D1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,N1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function U1(r,e,t){let s=new ph;const a=new ut,l=new ut,u=new nn,f=new L1({depthPacking:dy}),h=new I1,p={},g=t.maxTextureSize,y={[Mr]:Xn,[Xn]:Mr,[Fi]:Fi},S=new rs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:D1,fragmentShader:N1}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const x=new fi;x.setAttribute("position",new xi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new bt(x,S),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=eh;let m=this.type;this.render=function(I,D,F){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||I.length===0)return;const b=r.getRenderTarget(),C=r.getActiveCubeFace(),O=r.getActiveMipmapLevel(),$=r.state;$.setBlending(es),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const X=m!==mr&&this.type===mr,se=m===mr&&this.type!==mr;for(let de=0,re=I.length;de<re;de++){const pe=I[de],H=pe.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",pe,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;a.copy(H.mapSize);const le=H.getFrameExtents();if(a.multiply(le),l.copy(H.mapSize),(a.x>g||a.y>g)&&(a.x>g&&(l.x=Math.floor(g/le.x),a.x=l.x*le.x,H.mapSize.x=l.x),a.y>g&&(l.y=Math.floor(g/le.y),a.y=l.y*le.y,H.mapSize.y=l.y)),H.map===null||X===!0||se===!0){const k=this.type!==mr?{minFilter:Hi,magFilter:Hi}:{};H.map!==null&&H.map.dispose(),H.map=new zs(a.x,a.y,k),H.map.texture.name=pe.name+".shadowMap",H.camera.updateProjectionMatrix()}r.setRenderTarget(H.map),r.clear();const ae=H.getViewportCount();for(let k=0;k<ae;k++){const ie=H.getViewport(k);u.set(l.x*ie.x,l.y*ie.y,l.x*ie.z,l.y*ie.w),$.viewport(u),H.updateMatrices(pe,k),s=H.getFrustum(),A(D,F,H.camera,pe,this.type)}H.isPointLightShadow!==!0&&this.type===mr&&R(H,F),H.needsUpdate=!1}m=this.type,v.needsUpdate=!1,r.setRenderTarget(b,C,O)};function R(I,D){const F=e.update(w);S.defines.VSM_SAMPLES!==I.blurSamples&&(S.defines.VSM_SAMPLES=I.blurSamples,M.defines.VSM_SAMPLES=I.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new zs(a.x,a.y)),S.uniforms.shadow_pass.value=I.map.texture,S.uniforms.resolution.value=I.mapSize,S.uniforms.radius.value=I.radius,r.setRenderTarget(I.mapPass),r.clear(),r.renderBufferDirect(D,null,F,S,w,null),M.uniforms.shadow_pass.value=I.mapPass.texture,M.uniforms.resolution.value=I.mapSize,M.uniforms.radius.value=I.radius,r.setRenderTarget(I.map),r.clear(),r.renderBufferDirect(D,null,F,M,w,null)}function L(I,D,F,b){let C=null;const O=F.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(O!==void 0)C=O;else if(C=F.isPointLight===!0?h:f,r.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const $=C.uuid,X=D.uuid;let se=p[$];se===void 0&&(se={},p[$]=se);let de=se[X];de===void 0&&(de=C.clone(),se[X]=de,D.addEventListener("dispose",B)),C=de}if(C.visible=D.visible,C.wireframe=D.wireframe,b===mr?C.side=D.shadowSide!==null?D.shadowSide:D.side:C.side=D.shadowSide!==null?D.shadowSide:y[D.side],C.alphaMap=D.alphaMap,C.alphaTest=D.alphaTest,C.map=D.map,C.clipShadows=D.clipShadows,C.clippingPlanes=D.clippingPlanes,C.clipIntersection=D.clipIntersection,C.displacementMap=D.displacementMap,C.displacementScale=D.displacementScale,C.displacementBias=D.displacementBias,C.wireframeLinewidth=D.wireframeLinewidth,C.linewidth=D.linewidth,F.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const $=r.properties.get(C);$.light=F}return C}function A(I,D,F,b,C){if(I.visible===!1)return;if(I.layers.test(D.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&C===mr)&&(!I.frustumCulled||s.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,I.matrixWorld);const X=e.update(I),se=I.material;if(Array.isArray(se)){const de=X.groups;for(let re=0,pe=de.length;re<pe;re++){const H=de[re],le=se[H.materialIndex];if(le&&le.visible){const ae=L(I,le,b,C);I.onBeforeShadow(r,I,D,F,X,ae,H),r.renderBufferDirect(F,null,X,ae,I,H),I.onAfterShadow(r,I,D,F,X,ae,H)}}}else if(se.visible){const de=L(I,se,b,C);I.onBeforeShadow(r,I,D,F,X,de,null),r.renderBufferDirect(F,null,X,de,I,null),I.onAfterShadow(r,I,D,F,X,de,null)}}const $=I.children;for(let X=0,se=$.length;X<se;X++)A($[X],D,F,b,C)}function B(I){I.target.removeEventListener("dispose",B);for(const F in p){const b=p[F],C=I.target.uuid;C in b&&(b[C].dispose(),delete b[C])}}}const F1={[od]:ad,[ld]:fd,[cd]:dd,[Uo]:ud,[ad]:od,[fd]:ld,[dd]:cd,[ud]:Uo};function k1(r,e){function t(){let G=!1;const Re=new nn;let oe=null;const fe=new nn(0,0,0,0);return{setMask:function(Ie){oe!==Ie&&!G&&(r.colorMask(Ie,Ie,Ie,Ie),oe=Ie)},setLocked:function(Ie){G=Ie},setClear:function(Ie,Le,at,Vt,fn){fn===!0&&(Ie*=Vt,Le*=Vt,at*=Vt),Re.set(Ie,Le,at,Vt),fe.equals(Re)===!1&&(r.clearColor(Ie,Le,at,Vt),fe.copy(Re))},reset:function(){G=!1,oe=null,fe.set(-1,0,0,0)}}}function s(){let G=!1,Re=!1,oe=null,fe=null,Ie=null;return{setReversed:function(Le){if(Re!==Le){const at=e.get("EXT_clip_control");Re?at.clipControlEXT(at.LOWER_LEFT_EXT,at.ZERO_TO_ONE_EXT):at.clipControlEXT(at.LOWER_LEFT_EXT,at.NEGATIVE_ONE_TO_ONE_EXT);const Vt=Ie;Ie=null,this.setClear(Vt)}Re=Le},getReversed:function(){return Re},setTest:function(Le){Le?_e(r.DEPTH_TEST):Ae(r.DEPTH_TEST)},setMask:function(Le){oe!==Le&&!G&&(r.depthMask(Le),oe=Le)},setFunc:function(Le){if(Re&&(Le=F1[Le]),fe!==Le){switch(Le){case od:r.depthFunc(r.NEVER);break;case ad:r.depthFunc(r.ALWAYS);break;case ld:r.depthFunc(r.LESS);break;case Uo:r.depthFunc(r.LEQUAL);break;case cd:r.depthFunc(r.EQUAL);break;case ud:r.depthFunc(r.GEQUAL);break;case fd:r.depthFunc(r.GREATER);break;case dd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}fe=Le}},setLocked:function(Le){G=Le},setClear:function(Le){Ie!==Le&&(Re&&(Le=1-Le),r.clearDepth(Le),Ie=Le)},reset:function(){G=!1,oe=null,fe=null,Ie=null,Re=!1}}}function a(){let G=!1,Re=null,oe=null,fe=null,Ie=null,Le=null,at=null,Vt=null,fn=null;return{setTest:function(xt){G||(xt?_e(r.STENCIL_TEST):Ae(r.STENCIL_TEST))},setMask:function(xt){Re!==xt&&!G&&(r.stencilMask(xt),Re=xt)},setFunc:function(xt,Yn,On){(oe!==xt||fe!==Yn||Ie!==On)&&(r.stencilFunc(xt,Yn,On),oe=xt,fe=Yn,Ie=On)},setOp:function(xt,Yn,On){(Le!==xt||at!==Yn||Vt!==On)&&(r.stencilOp(xt,Yn,On),Le=xt,at=Yn,Vt=On)},setLocked:function(xt){G=xt},setClear:function(xt){fn!==xt&&(r.clearStencil(xt),fn=xt)},reset:function(){G=!1,Re=null,oe=null,fe=null,Ie=null,Le=null,at=null,Vt=null,fn=null}}}const l=new t,u=new s,f=new a,h=new WeakMap,p=new WeakMap;let g={},y={},S=new WeakMap,M=[],x=null,w=!1,v=null,m=null,R=null,L=null,A=null,B=null,I=null,D=new lt(0,0,0),F=0,b=!1,C=null,O=null,$=null,X=null,se=null;const de=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let re=!1,pe=0;const H=r.getParameter(r.VERSION);H.indexOf("WebGL")!==-1?(pe=parseFloat(/^WebGL (\d)/.exec(H)[1]),re=pe>=1):H.indexOf("OpenGL ES")!==-1&&(pe=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),re=pe>=2);let le=null,ae={};const k=r.getParameter(r.SCISSOR_BOX),ie=r.getParameter(r.VIEWPORT),Ue=new nn().fromArray(k),J=new nn().fromArray(ie);function ce(G,Re,oe,fe){const Ie=new Uint8Array(4),Le=r.createTexture();r.bindTexture(G,Le),r.texParameteri(G,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(G,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let at=0;at<oe;at++)G===r.TEXTURE_3D||G===r.TEXTURE_2D_ARRAY?r.texImage3D(Re,0,r.RGBA,1,1,fe,0,r.RGBA,r.UNSIGNED_BYTE,Ie):r.texImage2D(Re+at,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ie);return Le}const Ee={};Ee[r.TEXTURE_2D]=ce(r.TEXTURE_2D,r.TEXTURE_2D,1),Ee[r.TEXTURE_CUBE_MAP]=ce(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[r.TEXTURE_2D_ARRAY]=ce(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Ee[r.TEXTURE_3D]=ce(r.TEXTURE_3D,r.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),_e(r.DEPTH_TEST),u.setFunc(Uo),_t(!1),mt(Zm),_e(r.CULL_FACE),Y(es);function _e(G){g[G]!==!0&&(r.enable(G),g[G]=!0)}function Ae(G){g[G]!==!1&&(r.disable(G),g[G]=!1)}function Fe(G,Re){return y[G]!==Re?(r.bindFramebuffer(G,Re),y[G]=Re,G===r.DRAW_FRAMEBUFFER&&(y[r.FRAMEBUFFER]=Re),G===r.FRAMEBUFFER&&(y[r.DRAW_FRAMEBUFFER]=Re),!0):!1}function Je(G,Re){let oe=M,fe=!1;if(G){oe=S.get(Re),oe===void 0&&(oe=[],S.set(Re,oe));const Ie=G.textures;if(oe.length!==Ie.length||oe[0]!==r.COLOR_ATTACHMENT0){for(let Le=0,at=Ie.length;Le<at;Le++)oe[Le]=r.COLOR_ATTACHMENT0+Le;oe.length=Ie.length,fe=!0}}else oe[0]!==r.BACK&&(oe[0]=r.BACK,fe=!0);fe&&r.drawBuffers(oe)}function Nt(G){return x!==G?(r.useProgram(G),x=G,!0):!1}const yt={[Is]:r.FUNC_ADD,[z_]:r.FUNC_SUBTRACT,[B_]:r.FUNC_REVERSE_SUBTRACT};yt[H_]=r.MIN,yt[V_]=r.MAX;const Bt={[G_]:r.ZERO,[W_]:r.ONE,[X_]:r.SRC_COLOR,[rd]:r.SRC_ALPHA,[Q_]:r.SRC_ALPHA_SATURATE,[$_]:r.DST_COLOR,[Y_]:r.DST_ALPHA,[j_]:r.ONE_MINUS_SRC_COLOR,[sd]:r.ONE_MINUS_SRC_ALPHA,[K_]:r.ONE_MINUS_DST_COLOR,[q_]:r.ONE_MINUS_DST_ALPHA,[Z_]:r.CONSTANT_COLOR,[J_]:r.ONE_MINUS_CONSTANT_COLOR,[ey]:r.CONSTANT_ALPHA,[ty]:r.ONE_MINUS_CONSTANT_ALPHA};function Y(G,Re,oe,fe,Ie,Le,at,Vt,fn,xt){if(G===es){w===!0&&(Ae(r.BLEND),w=!1);return}if(w===!1&&(_e(r.BLEND),w=!0),G!==O_){if(G!==v||xt!==b){if((m!==Is||A!==Is)&&(r.blendEquation(r.FUNC_ADD),m=Is,A=Is),xt)switch(G){case Lo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Jm:r.blendFunc(r.ONE,r.ONE);break;case eg:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case tg:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Lo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Jm:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case eg:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case tg:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}R=null,L=null,B=null,I=null,D.set(0,0,0),F=0,v=G,b=xt}return}Ie=Ie||Re,Le=Le||oe,at=at||fe,(Re!==m||Ie!==A)&&(r.blendEquationSeparate(yt[Re],yt[Ie]),m=Re,A=Ie),(oe!==R||fe!==L||Le!==B||at!==I)&&(r.blendFuncSeparate(Bt[oe],Bt[fe],Bt[Le],Bt[at]),R=oe,L=fe,B=Le,I=at),(Vt.equals(D)===!1||fn!==F)&&(r.blendColor(Vt.r,Vt.g,Vt.b,fn),D.copy(Vt),F=fn),v=G,b=!1}function kn(G,Re){G.side===Fi?Ae(r.CULL_FACE):_e(r.CULL_FACE);let oe=G.side===Xn;Re&&(oe=!oe),_t(oe),G.blending===Lo&&G.transparent===!1?Y(es):Y(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),u.setFunc(G.depthFunc),u.setTest(G.depthTest),u.setMask(G.depthWrite),l.setMask(G.colorWrite);const fe=G.stencilWrite;f.setTest(fe),fe&&(f.setMask(G.stencilWriteMask),f.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),f.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Lt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?_e(r.SAMPLE_ALPHA_TO_COVERAGE):Ae(r.SAMPLE_ALPHA_TO_COVERAGE)}function _t(G){C!==G&&(G?r.frontFace(r.CW):r.frontFace(r.CCW),C=G)}function mt(G){G!==U_?(_e(r.CULL_FACE),G!==O&&(G===Zm?r.cullFace(r.BACK):G===F_?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ae(r.CULL_FACE),O=G}function Ke(G){G!==$&&(re&&r.lineWidth(G),$=G)}function Lt(G,Re,oe){G?(_e(r.POLYGON_OFFSET_FILL),(X!==Re||se!==oe)&&(r.polygonOffset(Re,oe),X=Re,se=oe)):Ae(r.POLYGON_OFFSET_FILL)}function $e(G){G?_e(r.SCISSOR_TEST):Ae(r.SCISSOR_TEST)}function N(G){G===void 0&&(G=r.TEXTURE0+de-1),le!==G&&(r.activeTexture(G),le=G)}function T(G,Re,oe){oe===void 0&&(le===null?oe=r.TEXTURE0+de-1:oe=le);let fe=ae[oe];fe===void 0&&(fe={type:void 0,texture:void 0},ae[oe]=fe),(fe.type!==G||fe.texture!==Re)&&(le!==oe&&(r.activeTexture(oe),le=oe),r.bindTexture(G,Re||Ee[G]),fe.type=G,fe.texture=Re)}function Z(){const G=ae[le];G!==void 0&&G.type!==void 0&&(r.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function he(){try{r.compressedTexImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ge(){try{r.compressedTexImage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ue(){try{r.texSubImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function We(){try{r.texSubImage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ce(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ke(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ht(){try{r.texStorage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Me(){try{r.texStorage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ze(){try{r.texImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function et(){try{r.texImage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function nt(G){Ue.equals(G)===!1&&(r.scissor(G.x,G.y,G.z,G.w),Ue.copy(G))}function Be(G){J.equals(G)===!1&&(r.viewport(G.x,G.y,G.z,G.w),J.copy(G))}function gt(G,Re){let oe=p.get(Re);oe===void 0&&(oe=new WeakMap,p.set(Re,oe));let fe=oe.get(G);fe===void 0&&(fe=r.getUniformBlockIndex(Re,G.name),oe.set(G,fe))}function ot(G,Re){const fe=p.get(Re).get(G);h.get(Re)!==fe&&(r.uniformBlockBinding(Re,fe,G.__bindingPointIndex),h.set(Re,fe))}function Pt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},le=null,ae={},y={},S=new WeakMap,M=[],x=null,w=!1,v=null,m=null,R=null,L=null,A=null,B=null,I=null,D=new lt(0,0,0),F=0,b=!1,C=null,O=null,$=null,X=null,se=null,Ue.set(0,0,r.canvas.width,r.canvas.height),J.set(0,0,r.canvas.width,r.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:_e,disable:Ae,bindFramebuffer:Fe,drawBuffers:Je,useProgram:Nt,setBlending:Y,setMaterial:kn,setFlipSided:_t,setCullFace:mt,setLineWidth:Ke,setPolygonOffset:Lt,setScissorTest:$e,activeTexture:N,bindTexture:T,unbindTexture:Z,compressedTexImage2D:he,compressedTexImage3D:ge,texImage2D:ze,texImage3D:et,updateUBOMapping:gt,uniformBlockBinding:ot,texStorage2D:ht,texStorage3D:Me,texSubImage2D:ue,texSubImage3D:We,compressedTexSubImage2D:Ce,compressedTexSubImage3D:ke,scissor:nt,viewport:Be,reset:Pt}}function $g(r,e,t,s){const a=O1(s);switch(t){case p0:return r*e;case g0:return r*e;case v0:return r*e*2;case _0:return r*e/a.components*a.byteLength;case sh:return r*e/a.components*a.byteLength;case y0:return r*e*2/a.components*a.byteLength;case oh:return r*e*2/a.components*a.byteLength;case m0:return r*e*3/a.components*a.byteLength;case Oi:return r*e*4/a.components*a.byteLength;case ah:return r*e*4/a.components*a.byteLength;case Tc:case Ac:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Cc:case Rc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case vd:case yd:return Math.max(r,16)*Math.max(e,8)/4;case gd:case _d:return Math.max(r,8)*Math.max(e,8)/2;case Sd:case Md:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case xd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ed:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case wd:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Td:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Ad:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Cd:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Rd:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case bd:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Pd:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Ld:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Id:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Dd:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Nd:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Ud:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Fd:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case bc:case kd:case Od:return Math.ceil(r/4)*Math.ceil(e/4)*16;case S0:case zd:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Bd:case Hd:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function O1(r){switch(r){case xr:case f0:return{byteLength:1,components:1};case Wa:case d0:case ja:return{byteLength:2,components:1};case ih:case rh:return{byteLength:2,components:4};case Os:case nh:case gr:return{byteLength:4,components:1};case h0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function z1(r,e,t,s,a,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ut,g=new WeakMap;let y;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(N,T){return M?new OffscreenCanvas(N,T):Ic("canvas")}function w(N,T,Z){let he=1;const ge=$e(N);if((ge.width>Z||ge.height>Z)&&(he=Z/Math.max(ge.width,ge.height)),he<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ue=Math.floor(he*ge.width),We=Math.floor(he*ge.height);y===void 0&&(y=x(ue,We));const Ce=T?x(ue,We):y;return Ce.width=ue,Ce.height=We,Ce.getContext("2d").drawImage(N,0,0,ue,We),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+ue+"x"+We+")."),Ce}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),N;return N}function v(N){return N.generateMipmaps}function m(N){r.generateMipmap(N)}function R(N){return N.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?r.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(N,T,Z,he,ge=!1){if(N!==null){if(r[N]!==void 0)return r[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ue=T;if(T===r.RED&&(Z===r.FLOAT&&(ue=r.R32F),Z===r.HALF_FLOAT&&(ue=r.R16F),Z===r.UNSIGNED_BYTE&&(ue=r.R8)),T===r.RED_INTEGER&&(Z===r.UNSIGNED_BYTE&&(ue=r.R8UI),Z===r.UNSIGNED_SHORT&&(ue=r.R16UI),Z===r.UNSIGNED_INT&&(ue=r.R32UI),Z===r.BYTE&&(ue=r.R8I),Z===r.SHORT&&(ue=r.R16I),Z===r.INT&&(ue=r.R32I)),T===r.RG&&(Z===r.FLOAT&&(ue=r.RG32F),Z===r.HALF_FLOAT&&(ue=r.RG16F),Z===r.UNSIGNED_BYTE&&(ue=r.RG8)),T===r.RG_INTEGER&&(Z===r.UNSIGNED_BYTE&&(ue=r.RG8UI),Z===r.UNSIGNED_SHORT&&(ue=r.RG16UI),Z===r.UNSIGNED_INT&&(ue=r.RG32UI),Z===r.BYTE&&(ue=r.RG8I),Z===r.SHORT&&(ue=r.RG16I),Z===r.INT&&(ue=r.RG32I)),T===r.RGB_INTEGER&&(Z===r.UNSIGNED_BYTE&&(ue=r.RGB8UI),Z===r.UNSIGNED_SHORT&&(ue=r.RGB16UI),Z===r.UNSIGNED_INT&&(ue=r.RGB32UI),Z===r.BYTE&&(ue=r.RGB8I),Z===r.SHORT&&(ue=r.RGB16I),Z===r.INT&&(ue=r.RGB32I)),T===r.RGBA_INTEGER&&(Z===r.UNSIGNED_BYTE&&(ue=r.RGBA8UI),Z===r.UNSIGNED_SHORT&&(ue=r.RGBA16UI),Z===r.UNSIGNED_INT&&(ue=r.RGBA32UI),Z===r.BYTE&&(ue=r.RGBA8I),Z===r.SHORT&&(ue=r.RGBA16I),Z===r.INT&&(ue=r.RGBA32I)),T===r.RGB&&Z===r.UNSIGNED_INT_5_9_9_9_REV&&(ue=r.RGB9_E5),T===r.RGBA){const We=ge?kc:wt.getTransfer(he);Z===r.FLOAT&&(ue=r.RGBA32F),Z===r.HALF_FLOAT&&(ue=r.RGBA16F),Z===r.UNSIGNED_BYTE&&(ue=We===Ut?r.SRGB8_ALPHA8:r.RGBA8),Z===r.UNSIGNED_SHORT_4_4_4_4&&(ue=r.RGBA4),Z===r.UNSIGNED_SHORT_5_5_5_1&&(ue=r.RGB5_A1)}return(ue===r.R16F||ue===r.R32F||ue===r.RG16F||ue===r.RG32F||ue===r.RGBA16F||ue===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function A(N,T){let Z;return N?T===null||T===Os||T===Oo?Z=r.DEPTH24_STENCIL8:T===gr?Z=r.DEPTH32F_STENCIL8:T===Wa&&(Z=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Os||T===Oo?Z=r.DEPTH_COMPONENT24:T===gr?Z=r.DEPTH_COMPONENT32F:T===Wa&&(Z=r.DEPTH_COMPONENT16),Z}function B(N,T){return v(N)===!0||N.isFramebufferTexture&&N.minFilter!==Hi&&N.minFilter!==Qi?Math.log2(Math.max(T.width,T.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?T.mipmaps.length:1}function I(N){const T=N.target;T.removeEventListener("dispose",I),F(T),T.isVideoTexture&&g.delete(T)}function D(N){const T=N.target;T.removeEventListener("dispose",D),C(T)}function F(N){const T=s.get(N);if(T.__webglInit===void 0)return;const Z=N.source,he=S.get(Z);if(he){const ge=he[T.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&b(N),Object.keys(he).length===0&&S.delete(Z)}s.remove(N)}function b(N){const T=s.get(N);r.deleteTexture(T.__webglTexture);const Z=N.source,he=S.get(Z);delete he[T.__cacheKey],u.memory.textures--}function C(N){const T=s.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),s.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(T.__webglFramebuffer[he]))for(let ge=0;ge<T.__webglFramebuffer[he].length;ge++)r.deleteFramebuffer(T.__webglFramebuffer[he][ge]);else r.deleteFramebuffer(T.__webglFramebuffer[he]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[he])}else{if(Array.isArray(T.__webglFramebuffer))for(let he=0;he<T.__webglFramebuffer.length;he++)r.deleteFramebuffer(T.__webglFramebuffer[he]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let he=0;he<T.__webglColorRenderbuffer.length;he++)T.__webglColorRenderbuffer[he]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[he]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Z=N.textures;for(let he=0,ge=Z.length;he<ge;he++){const ue=s.get(Z[he]);ue.__webglTexture&&(r.deleteTexture(ue.__webglTexture),u.memory.textures--),s.remove(Z[he])}s.remove(N)}let O=0;function $(){O=0}function X(){const N=O;return N>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+a.maxTextures),O+=1,N}function se(N){const T=[];return T.push(N.wrapS),T.push(N.wrapT),T.push(N.wrapR||0),T.push(N.magFilter),T.push(N.minFilter),T.push(N.anisotropy),T.push(N.internalFormat),T.push(N.format),T.push(N.type),T.push(N.generateMipmaps),T.push(N.premultiplyAlpha),T.push(N.flipY),T.push(N.unpackAlignment),T.push(N.colorSpace),T.join()}function de(N,T){const Z=s.get(N);if(N.isVideoTexture&&Ke(N),N.isRenderTargetTexture===!1&&N.version>0&&Z.__version!==N.version){const he=N.image;if(he===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(Z,N,T);return}}t.bindTexture(r.TEXTURE_2D,Z.__webglTexture,r.TEXTURE0+T)}function re(N,T){const Z=s.get(N);if(N.version>0&&Z.__version!==N.version){J(Z,N,T);return}t.bindTexture(r.TEXTURE_2D_ARRAY,Z.__webglTexture,r.TEXTURE0+T)}function pe(N,T){const Z=s.get(N);if(N.version>0&&Z.__version!==N.version){J(Z,N,T);return}t.bindTexture(r.TEXTURE_3D,Z.__webglTexture,r.TEXTURE0+T)}function H(N,T){const Z=s.get(N);if(N.version>0&&Z.__version!==N.version){ce(Z,N,T);return}t.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture,r.TEXTURE0+T)}const le={[Ga]:r.REPEAT,[Us]:r.CLAMP_TO_EDGE,[md]:r.MIRRORED_REPEAT},ae={[Hi]:r.NEAREST,[uy]:r.NEAREST_MIPMAP_NEAREST,[ic]:r.NEAREST_MIPMAP_LINEAR,[Qi]:r.LINEAR,[Cf]:r.LINEAR_MIPMAP_NEAREST,[Fs]:r.LINEAR_MIPMAP_LINEAR},k={[py]:r.NEVER,[Sy]:r.ALWAYS,[my]:r.LESS,[M0]:r.LEQUAL,[gy]:r.EQUAL,[yy]:r.GEQUAL,[vy]:r.GREATER,[_y]:r.NOTEQUAL};function ie(N,T){if(T.type===gr&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Qi||T.magFilter===Cf||T.magFilter===ic||T.magFilter===Fs||T.minFilter===Qi||T.minFilter===Cf||T.minFilter===ic||T.minFilter===Fs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(N,r.TEXTURE_WRAP_S,le[T.wrapS]),r.texParameteri(N,r.TEXTURE_WRAP_T,le[T.wrapT]),(N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY)&&r.texParameteri(N,r.TEXTURE_WRAP_R,le[T.wrapR]),r.texParameteri(N,r.TEXTURE_MAG_FILTER,ae[T.magFilter]),r.texParameteri(N,r.TEXTURE_MIN_FILTER,ae[T.minFilter]),T.compareFunction&&(r.texParameteri(N,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(N,r.TEXTURE_COMPARE_FUNC,k[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Hi||T.minFilter!==ic&&T.minFilter!==Fs||T.type===gr&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");r.texParameterf(N,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,a.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function Ue(N,T){let Z=!1;N.__webglInit===void 0&&(N.__webglInit=!0,T.addEventListener("dispose",I));const he=T.source;let ge=S.get(he);ge===void 0&&(ge={},S.set(he,ge));const ue=se(T);if(ue!==N.__cacheKey){ge[ue]===void 0&&(ge[ue]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,Z=!0),ge[ue].usedTimes++;const We=ge[N.__cacheKey];We!==void 0&&(ge[N.__cacheKey].usedTimes--,We.usedTimes===0&&b(T)),N.__cacheKey=ue,N.__webglTexture=ge[ue].texture}return Z}function J(N,T,Z){let he=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(he=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(he=r.TEXTURE_3D);const ge=Ue(N,T),ue=T.source;t.bindTexture(he,N.__webglTexture,r.TEXTURE0+Z);const We=s.get(ue);if(ue.version!==We.__version||ge===!0){t.activeTexture(r.TEXTURE0+Z);const Ce=wt.getPrimaries(wt.workingColorSpace),ke=T.colorSpace===Qr?null:wt.getPrimaries(T.colorSpace),ht=T.colorSpace===Qr||Ce===ke?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);let Me=w(T.image,!1,a.maxTextureSize);Me=Lt(T,Me);const ze=l.convert(T.format,T.colorSpace),et=l.convert(T.type);let nt=L(T.internalFormat,ze,et,T.colorSpace,T.isVideoTexture);ie(he,T);let Be;const gt=T.mipmaps,ot=T.isVideoTexture!==!0,Pt=We.__version===void 0||ge===!0,G=ue.dataReady,Re=B(T,Me);if(T.isDepthTexture)nt=A(T.format===zo,T.type),Pt&&(ot?t.texStorage2D(r.TEXTURE_2D,1,nt,Me.width,Me.height):t.texImage2D(r.TEXTURE_2D,0,nt,Me.width,Me.height,0,ze,et,null));else if(T.isDataTexture)if(gt.length>0){ot&&Pt&&t.texStorage2D(r.TEXTURE_2D,Re,nt,gt[0].width,gt[0].height);for(let oe=0,fe=gt.length;oe<fe;oe++)Be=gt[oe],ot?G&&t.texSubImage2D(r.TEXTURE_2D,oe,0,0,Be.width,Be.height,ze,et,Be.data):t.texImage2D(r.TEXTURE_2D,oe,nt,Be.width,Be.height,0,ze,et,Be.data);T.generateMipmaps=!1}else ot?(Pt&&t.texStorage2D(r.TEXTURE_2D,Re,nt,Me.width,Me.height),G&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Me.width,Me.height,ze,et,Me.data)):t.texImage2D(r.TEXTURE_2D,0,nt,Me.width,Me.height,0,ze,et,Me.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ot&&Pt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Re,nt,gt[0].width,gt[0].height,Me.depth);for(let oe=0,fe=gt.length;oe<fe;oe++)if(Be=gt[oe],T.format!==Oi)if(ze!==null)if(ot){if(G)if(T.layerUpdates.size>0){const Ie=$g(Be.width,Be.height,T.format,T.type);for(const Le of T.layerUpdates){const at=Be.data.subarray(Le*Ie/Be.data.BYTES_PER_ELEMENT,(Le+1)*Ie/Be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,oe,0,0,Le,Be.width,Be.height,1,ze,at)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,oe,0,0,0,Be.width,Be.height,Me.depth,ze,Be.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,oe,nt,Be.width,Be.height,Me.depth,0,Be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ot?G&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,oe,0,0,0,Be.width,Be.height,Me.depth,ze,et,Be.data):t.texImage3D(r.TEXTURE_2D_ARRAY,oe,nt,Be.width,Be.height,Me.depth,0,ze,et,Be.data)}else{ot&&Pt&&t.texStorage2D(r.TEXTURE_2D,Re,nt,gt[0].width,gt[0].height);for(let oe=0,fe=gt.length;oe<fe;oe++)Be=gt[oe],T.format!==Oi?ze!==null?ot?G&&t.compressedTexSubImage2D(r.TEXTURE_2D,oe,0,0,Be.width,Be.height,ze,Be.data):t.compressedTexImage2D(r.TEXTURE_2D,oe,nt,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?G&&t.texSubImage2D(r.TEXTURE_2D,oe,0,0,Be.width,Be.height,ze,et,Be.data):t.texImage2D(r.TEXTURE_2D,oe,nt,Be.width,Be.height,0,ze,et,Be.data)}else if(T.isDataArrayTexture)if(ot){if(Pt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Re,nt,Me.width,Me.height,Me.depth),G)if(T.layerUpdates.size>0){const oe=$g(Me.width,Me.height,T.format,T.type);for(const fe of T.layerUpdates){const Ie=Me.data.subarray(fe*oe/Me.data.BYTES_PER_ELEMENT,(fe+1)*oe/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,fe,Me.width,Me.height,1,ze,et,Ie)}T.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,ze,et,Me.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,nt,Me.width,Me.height,Me.depth,0,ze,et,Me.data);else if(T.isData3DTexture)ot?(Pt&&t.texStorage3D(r.TEXTURE_3D,Re,nt,Me.width,Me.height,Me.depth),G&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,ze,et,Me.data)):t.texImage3D(r.TEXTURE_3D,0,nt,Me.width,Me.height,Me.depth,0,ze,et,Me.data);else if(T.isFramebufferTexture){if(Pt)if(ot)t.texStorage2D(r.TEXTURE_2D,Re,nt,Me.width,Me.height);else{let oe=Me.width,fe=Me.height;for(let Ie=0;Ie<Re;Ie++)t.texImage2D(r.TEXTURE_2D,Ie,nt,oe,fe,0,ze,et,null),oe>>=1,fe>>=1}}else if(gt.length>0){if(ot&&Pt){const oe=$e(gt[0]);t.texStorage2D(r.TEXTURE_2D,Re,nt,oe.width,oe.height)}for(let oe=0,fe=gt.length;oe<fe;oe++)Be=gt[oe],ot?G&&t.texSubImage2D(r.TEXTURE_2D,oe,0,0,ze,et,Be):t.texImage2D(r.TEXTURE_2D,oe,nt,ze,et,Be);T.generateMipmaps=!1}else if(ot){if(Pt){const oe=$e(Me);t.texStorage2D(r.TEXTURE_2D,Re,nt,oe.width,oe.height)}G&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ze,et,Me)}else t.texImage2D(r.TEXTURE_2D,0,nt,ze,et,Me);v(T)&&m(he),We.__version=ue.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function ce(N,T,Z){if(T.image.length!==6)return;const he=Ue(N,T),ge=T.source;t.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+Z);const ue=s.get(ge);if(ge.version!==ue.__version||he===!0){t.activeTexture(r.TEXTURE0+Z);const We=wt.getPrimaries(wt.workingColorSpace),Ce=T.colorSpace===Qr?null:wt.getPrimaries(T.colorSpace),ke=T.colorSpace===Qr||We===Ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);const ht=T.isCompressedTexture||T.image[0].isCompressedTexture,Me=T.image[0]&&T.image[0].isDataTexture,ze=[];for(let fe=0;fe<6;fe++)!ht&&!Me?ze[fe]=w(T.image[fe],!0,a.maxCubemapSize):ze[fe]=Me?T.image[fe].image:T.image[fe],ze[fe]=Lt(T,ze[fe]);const et=ze[0],nt=l.convert(T.format,T.colorSpace),Be=l.convert(T.type),gt=L(T.internalFormat,nt,Be,T.colorSpace),ot=T.isVideoTexture!==!0,Pt=ue.__version===void 0||he===!0,G=ge.dataReady;let Re=B(T,et);ie(r.TEXTURE_CUBE_MAP,T);let oe;if(ht){ot&&Pt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Re,gt,et.width,et.height);for(let fe=0;fe<6;fe++){oe=ze[fe].mipmaps;for(let Ie=0;Ie<oe.length;Ie++){const Le=oe[Ie];T.format!==Oi?nt!==null?ot?G&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ie,0,0,Le.width,Le.height,nt,Le.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ie,gt,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ot?G&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ie,0,0,Le.width,Le.height,nt,Be,Le.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ie,gt,Le.width,Le.height,0,nt,Be,Le.data)}}}else{if(oe=T.mipmaps,ot&&Pt){oe.length>0&&Re++;const fe=$e(ze[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Re,gt,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(Me){ot?G&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,ze[fe].width,ze[fe].height,nt,Be,ze[fe].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,gt,ze[fe].width,ze[fe].height,0,nt,Be,ze[fe].data);for(let Ie=0;Ie<oe.length;Ie++){const at=oe[Ie].image[fe].image;ot?G&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ie+1,0,0,at.width,at.height,nt,Be,at.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ie+1,gt,at.width,at.height,0,nt,Be,at.data)}}else{ot?G&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,nt,Be,ze[fe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,gt,nt,Be,ze[fe]);for(let Ie=0;Ie<oe.length;Ie++){const Le=oe[Ie];ot?G&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ie+1,0,0,nt,Be,Le.image[fe]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ie+1,gt,nt,Be,Le.image[fe])}}}v(T)&&m(r.TEXTURE_CUBE_MAP),ue.__version=ge.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function Ee(N,T,Z,he,ge,ue){const We=l.convert(Z.format,Z.colorSpace),Ce=l.convert(Z.type),ke=L(Z.internalFormat,We,Ce,Z.colorSpace),ht=s.get(T),Me=s.get(Z);if(Me.__renderTarget=T,!ht.__hasExternalTextures){const ze=Math.max(1,T.width>>ue),et=Math.max(1,T.height>>ue);ge===r.TEXTURE_3D||ge===r.TEXTURE_2D_ARRAY?t.texImage3D(ge,ue,ke,ze,et,T.depth,0,We,Ce,null):t.texImage2D(ge,ue,ke,ze,et,0,We,Ce,null)}t.bindFramebuffer(r.FRAMEBUFFER,N),mt(T)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,he,ge,Me.__webglTexture,0,_t(T)):(ge===r.TEXTURE_2D||ge>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,he,ge,Me.__webglTexture,ue),t.bindFramebuffer(r.FRAMEBUFFER,null)}function _e(N,T,Z){if(r.bindRenderbuffer(r.RENDERBUFFER,N),T.depthBuffer){const he=T.depthTexture,ge=he&&he.isDepthTexture?he.type:null,ue=A(T.stencilBuffer,ge),We=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ce=_t(T);mt(T)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ce,ue,T.width,T.height):Z?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ce,ue,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,ue,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,We,r.RENDERBUFFER,N)}else{const he=T.textures;for(let ge=0;ge<he.length;ge++){const ue=he[ge],We=l.convert(ue.format,ue.colorSpace),Ce=l.convert(ue.type),ke=L(ue.internalFormat,We,Ce,ue.colorSpace),ht=_t(T);Z&&mt(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ht,ke,T.width,T.height):mt(T)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ht,ke,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,ke,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ae(N,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,N),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const he=s.get(T.depthTexture);he.__renderTarget=T,(!he.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),de(T.depthTexture,0);const ge=he.__webglTexture,ue=_t(T);if(T.depthTexture.format===Io)mt(T)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ge,0,ue):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ge,0);else if(T.depthTexture.format===zo)mt(T)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ge,0,ue):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function Fe(N){const T=s.get(N),Z=N.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==N.depthTexture){const he=N.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),he){const ge=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,he.removeEventListener("dispose",ge)};he.addEventListener("dispose",ge),T.__depthDisposeCallback=ge}T.__boundDepthTexture=he}if(N.depthTexture&&!T.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");Ae(T.__webglFramebuffer,N)}else if(Z){T.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[he]),T.__webglDepthbuffer[he]===void 0)T.__webglDepthbuffer[he]=r.createRenderbuffer(),_e(T.__webglDepthbuffer[he],N,!1);else{const ge=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ue=T.__webglDepthbuffer[he];r.bindRenderbuffer(r.RENDERBUFFER,ue),r.framebufferRenderbuffer(r.FRAMEBUFFER,ge,r.RENDERBUFFER,ue)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),_e(T.__webglDepthbuffer,N,!1);else{const he=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ge=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ge),r.framebufferRenderbuffer(r.FRAMEBUFFER,he,r.RENDERBUFFER,ge)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Je(N,T,Z){const he=s.get(N);T!==void 0&&Ee(he.__webglFramebuffer,N,N.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Z!==void 0&&Fe(N)}function Nt(N){const T=N.texture,Z=s.get(N),he=s.get(T);N.addEventListener("dispose",D);const ge=N.textures,ue=N.isWebGLCubeRenderTarget===!0,We=ge.length>1;if(We||(he.__webglTexture===void 0&&(he.__webglTexture=r.createTexture()),he.__version=T.version,u.memory.textures++),ue){Z.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(T.mipmaps&&T.mipmaps.length>0){Z.__webglFramebuffer[Ce]=[];for(let ke=0;ke<T.mipmaps.length;ke++)Z.__webglFramebuffer[Ce][ke]=r.createFramebuffer()}else Z.__webglFramebuffer[Ce]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Ce=0;Ce<T.mipmaps.length;Ce++)Z.__webglFramebuffer[Ce]=r.createFramebuffer()}else Z.__webglFramebuffer=r.createFramebuffer();if(We)for(let Ce=0,ke=ge.length;Ce<ke;Ce++){const ht=s.get(ge[Ce]);ht.__webglTexture===void 0&&(ht.__webglTexture=r.createTexture(),u.memory.textures++)}if(N.samples>0&&mt(N)===!1){Z.__webglMultisampledFramebuffer=r.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Ce=0;Ce<ge.length;Ce++){const ke=ge[Ce];Z.__webglColorRenderbuffer[Ce]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Z.__webglColorRenderbuffer[Ce]);const ht=l.convert(ke.format,ke.colorSpace),Me=l.convert(ke.type),ze=L(ke.internalFormat,ht,Me,ke.colorSpace,N.isXRRenderTarget===!0),et=_t(N);r.renderbufferStorageMultisample(r.RENDERBUFFER,et,ze,N.width,N.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,Z.__webglColorRenderbuffer[Ce])}r.bindRenderbuffer(r.RENDERBUFFER,null),N.depthBuffer&&(Z.__webglDepthRenderbuffer=r.createRenderbuffer(),_e(Z.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ue){t.bindTexture(r.TEXTURE_CUBE_MAP,he.__webglTexture),ie(r.TEXTURE_CUBE_MAP,T);for(let Ce=0;Ce<6;Ce++)if(T.mipmaps&&T.mipmaps.length>0)for(let ke=0;ke<T.mipmaps.length;ke++)Ee(Z.__webglFramebuffer[Ce][ke],N,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,ke);else Ee(Z.__webglFramebuffer[Ce],N,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);v(T)&&m(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(We){for(let Ce=0,ke=ge.length;Ce<ke;Ce++){const ht=ge[Ce],Me=s.get(ht);t.bindTexture(r.TEXTURE_2D,Me.__webglTexture),ie(r.TEXTURE_2D,ht),Ee(Z.__webglFramebuffer,N,ht,r.COLOR_ATTACHMENT0+Ce,r.TEXTURE_2D,0),v(ht)&&m(r.TEXTURE_2D)}t.unbindTexture()}else{let Ce=r.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ce=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Ce,he.__webglTexture),ie(Ce,T),T.mipmaps&&T.mipmaps.length>0)for(let ke=0;ke<T.mipmaps.length;ke++)Ee(Z.__webglFramebuffer[ke],N,T,r.COLOR_ATTACHMENT0,Ce,ke);else Ee(Z.__webglFramebuffer,N,T,r.COLOR_ATTACHMENT0,Ce,0);v(T)&&m(Ce),t.unbindTexture()}N.depthBuffer&&Fe(N)}function yt(N){const T=N.textures;for(let Z=0,he=T.length;Z<he;Z++){const ge=T[Z];if(v(ge)){const ue=R(N),We=s.get(ge).__webglTexture;t.bindTexture(ue,We),m(ue),t.unbindTexture()}}}const Bt=[],Y=[];function kn(N){if(N.samples>0){if(mt(N)===!1){const T=N.textures,Z=N.width,he=N.height;let ge=r.COLOR_BUFFER_BIT;const ue=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,We=s.get(N),Ce=T.length>1;if(Ce)for(let ke=0;ke<T.length;ke++)t.bindFramebuffer(r.FRAMEBUFFER,We.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ke,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,We.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ke,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,We.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,We.__webglFramebuffer);for(let ke=0;ke<T.length;ke++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(ge|=r.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(ge|=r.STENCIL_BUFFER_BIT)),Ce){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,We.__webglColorRenderbuffer[ke]);const ht=s.get(T[ke]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ht,0)}r.blitFramebuffer(0,0,Z,he,0,0,Z,he,ge,r.NEAREST),h===!0&&(Bt.length=0,Y.length=0,Bt.push(r.COLOR_ATTACHMENT0+ke),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Bt.push(ue),Y.push(ue),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Y)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Bt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ce)for(let ke=0;ke<T.length;ke++){t.bindFramebuffer(r.FRAMEBUFFER,We.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ke,r.RENDERBUFFER,We.__webglColorRenderbuffer[ke]);const ht=s.get(T[ke]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,We.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ke,r.TEXTURE_2D,ht,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,We.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&h){const T=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function _t(N){return Math.min(a.maxSamples,N.samples)}function mt(N){const T=s.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ke(N){const T=u.render.frame;g.get(N)!==T&&(g.set(N,T),N.update())}function Lt(N,T){const Z=N.colorSpace,he=N.format,ge=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||Z!==Vo&&Z!==Qr&&(wt.getTransfer(Z)===Ut?(he!==Oi||ge!==xr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),T}function $e(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=X,this.resetTextureUnits=$,this.setTexture2D=de,this.setTexture2DArray=re,this.setTexture3D=pe,this.setTextureCube=H,this.rebindTextures=Je,this.setupRenderTarget=Nt,this.updateRenderTargetMipmap=yt,this.updateMultisampleRenderTarget=kn,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=mt}function B1(r,e){function t(s,a=Qr){let l;const u=wt.getTransfer(a);if(s===xr)return r.UNSIGNED_BYTE;if(s===ih)return r.UNSIGNED_SHORT_4_4_4_4;if(s===rh)return r.UNSIGNED_SHORT_5_5_5_1;if(s===h0)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===f0)return r.BYTE;if(s===d0)return r.SHORT;if(s===Wa)return r.UNSIGNED_SHORT;if(s===nh)return r.INT;if(s===Os)return r.UNSIGNED_INT;if(s===gr)return r.FLOAT;if(s===ja)return r.HALF_FLOAT;if(s===p0)return r.ALPHA;if(s===m0)return r.RGB;if(s===Oi)return r.RGBA;if(s===g0)return r.LUMINANCE;if(s===v0)return r.LUMINANCE_ALPHA;if(s===Io)return r.DEPTH_COMPONENT;if(s===zo)return r.DEPTH_STENCIL;if(s===_0)return r.RED;if(s===sh)return r.RED_INTEGER;if(s===y0)return r.RG;if(s===oh)return r.RG_INTEGER;if(s===ah)return r.RGBA_INTEGER;if(s===Tc||s===Ac||s===Cc||s===Rc)if(u===Ut)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===Tc)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ac)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Cc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Rc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===Tc)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ac)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Cc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Rc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===gd||s===vd||s===_d||s===yd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===gd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===vd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===_d)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===yd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Sd||s===Md||s===xd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===Sd||s===Md)return u===Ut?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===xd)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ed||s===wd||s===Td||s===Ad||s===Cd||s===Rd||s===bd||s===Pd||s===Ld||s===Id||s===Dd||s===Nd||s===Ud||s===Fd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===Ed)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===wd)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Td)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ad)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Cd)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Rd)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===bd)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Pd)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ld)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Id)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Dd)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Nd)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ud)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Fd)return u===Ut?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===bc||s===kd||s===Od)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===bc)return u===Ut?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===kd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Od)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===S0||s===zd||s===Bd||s===Hd)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===bc)return l.COMPRESSED_RED_RGTC1_EXT;if(s===zd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Bd)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Hd)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Oo?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:t}}class H1 extends ci{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ui extends An{constructor(){super(),this.isGroup=!0,this.type="Group"}}const V1={type:"move"};class ed{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ui,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ui,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ui,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let a=null,l=null,u=null;const f=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const w of e.hand.values()){const v=t.getJointPose(w,s),m=this._getHandJoint(p,w);v!==null&&(m.matrix.fromArray(v.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=v.radius),m.visible=v!==null}const g=p.joints["index-finger-tip"],y=p.joints["thumb-tip"],S=g.position.distanceTo(y.position),M=.02,x=.005;p.inputState.pinching&&S>M+x?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&S<=M-x&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));f!==null&&(a=t.getPose(e.targetRaySpace,s),a===null&&l!==null&&(a=l),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(V1)))}return f!==null&&(f.visible=a!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new ui;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}const G1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,W1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class X1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,s){if(this.texture===null){const a=new jn,l=e.properties.get(a);l.__webglTexture=t.texture,(t.depthNear!=s.depthNear||t.depthFar!=s.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,s=new rs({vertexShader:G1,fragmentShader:W1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new bt(new Sr(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class j1 extends Go{constructor(e,t){super();const s=this;let a=null,l=1,u=null,f="local-floor",h=1,p=null,g=null,y=null,S=null,M=null,x=null;const w=new X1,v=t.getContextAttributes();let m=null,R=null;const L=[],A=[],B=new ut;let I=null;const D=new ci;D.viewport=new nn;const F=new ci;F.viewport=new nn;const b=[D,F],C=new H1;let O=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ce=L[J];return ce===void 0&&(ce=new ed,L[J]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(J){let ce=L[J];return ce===void 0&&(ce=new ed,L[J]=ce),ce.getGripSpace()},this.getHand=function(J){let ce=L[J];return ce===void 0&&(ce=new ed,L[J]=ce),ce.getHandSpace()};function X(J){const ce=A.indexOf(J.inputSource);if(ce===-1)return;const Ee=L[ce];Ee!==void 0&&(Ee.update(J.inputSource,J.frame,p||u),Ee.dispatchEvent({type:J.type,data:J.inputSource}))}function se(){a.removeEventListener("select",X),a.removeEventListener("selectstart",X),a.removeEventListener("selectend",X),a.removeEventListener("squeeze",X),a.removeEventListener("squeezestart",X),a.removeEventListener("squeezeend",X),a.removeEventListener("end",se),a.removeEventListener("inputsourceschange",de);for(let J=0;J<L.length;J++){const ce=A[J];ce!==null&&(A[J]=null,L[J].disconnect(ce))}O=null,$=null,w.reset(),e.setRenderTarget(m),M=null,S=null,y=null,a=null,R=null,Ue.stop(),s.isPresenting=!1,e.setPixelRatio(I),e.setSize(B.width,B.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){l=J,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){f=J,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(J){p=J},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return y},this.getFrame=function(){return x},this.getSession=function(){return a},this.setSession=async function(J){if(a=J,a!==null){if(m=e.getRenderTarget(),a.addEventListener("select",X),a.addEventListener("selectstart",X),a.addEventListener("selectend",X),a.addEventListener("squeeze",X),a.addEventListener("squeezestart",X),a.addEventListener("squeezeend",X),a.addEventListener("end",se),a.addEventListener("inputsourceschange",de),v.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(B),a.renderState.layers===void 0){const ce={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(a,t,ce),a.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),R=new zs(M.framebufferWidth,M.framebufferHeight,{format:Oi,type:xr,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let ce=null,Ee=null,_e=null;v.depth&&(_e=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=v.stencil?zo:Io,Ee=v.stencil?Oo:Os);const Ae={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:l};y=new XRWebGLBinding(a,t),S=y.createProjectionLayer(Ae),a.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),R=new zs(S.textureWidth,S.textureHeight,{format:Oi,type:xr,depthTexture:new I0(S.textureWidth,S.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(h),p=null,u=await a.requestReferenceSpace(f),Ue.setContext(a),Ue.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function de(J){for(let ce=0;ce<J.removed.length;ce++){const Ee=J.removed[ce],_e=A.indexOf(Ee);_e>=0&&(A[_e]=null,L[_e].disconnect(Ee))}for(let ce=0;ce<J.added.length;ce++){const Ee=J.added[ce];let _e=A.indexOf(Ee);if(_e===-1){for(let Fe=0;Fe<L.length;Fe++)if(Fe>=A.length){A.push(Ee),_e=Fe;break}else if(A[Fe]===null){A[Fe]=Ee,_e=Fe;break}if(_e===-1)break}const Ae=L[_e];Ae&&Ae.connect(Ee)}}const re=new Q,pe=new Q;function H(J,ce,Ee){re.setFromMatrixPosition(ce.matrixWorld),pe.setFromMatrixPosition(Ee.matrixWorld);const _e=re.distanceTo(pe),Ae=ce.projectionMatrix.elements,Fe=Ee.projectionMatrix.elements,Je=Ae[14]/(Ae[10]-1),Nt=Ae[14]/(Ae[10]+1),yt=(Ae[9]+1)/Ae[5],Bt=(Ae[9]-1)/Ae[5],Y=(Ae[8]-1)/Ae[0],kn=(Fe[8]+1)/Fe[0],_t=Je*Y,mt=Je*kn,Ke=_e/(-Y+kn),Lt=Ke*-Y;if(ce.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Lt),J.translateZ(Ke),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ae[10]===-1)J.projectionMatrix.copy(ce.projectionMatrix),J.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const $e=Je+Ke,N=Nt+Ke,T=_t-Lt,Z=mt+(_e-Lt),he=yt*Nt/N*$e,ge=Bt*Nt/N*$e;J.projectionMatrix.makePerspective(T,Z,he,ge,$e,N),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function le(J,ce){ce===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ce.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(a===null)return;let ce=J.near,Ee=J.far;w.texture!==null&&(w.depthNear>0&&(ce=w.depthNear),w.depthFar>0&&(Ee=w.depthFar)),C.near=F.near=D.near=ce,C.far=F.far=D.far=Ee,(O!==C.near||$!==C.far)&&(a.updateRenderState({depthNear:C.near,depthFar:C.far}),O=C.near,$=C.far),D.layers.mask=J.layers.mask|2,F.layers.mask=J.layers.mask|4,C.layers.mask=D.layers.mask|F.layers.mask;const _e=J.parent,Ae=C.cameras;le(C,_e);for(let Fe=0;Fe<Ae.length;Fe++)le(Ae[Fe],_e);Ae.length===2?H(C,D,F):C.projectionMatrix.copy(D.projectionMatrix),ae(J,C,_e)};function ae(J,ce,Ee){Ee===null?J.matrix.copy(ce.matrixWorld):(J.matrix.copy(Ee.matrixWorld),J.matrix.invert(),J.matrix.multiply(ce.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ce.projectionMatrix),J.projectionMatrixInverse.copy(ce.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Bo*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(S===null&&M===null))return h},this.setFoveation=function(J){h=J,S!==null&&(S.fixedFoveation=J),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=J)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(C)};let k=null;function ie(J,ce){if(g=ce.getViewerPose(p||u),x=ce,g!==null){const Ee=g.views;M!==null&&(e.setRenderTargetFramebuffer(R,M.framebuffer),e.setRenderTarget(R));let _e=!1;Ee.length!==C.cameras.length&&(C.cameras.length=0,_e=!0);for(let Fe=0;Fe<Ee.length;Fe++){const Je=Ee[Fe];let Nt=null;if(M!==null)Nt=M.getViewport(Je);else{const Bt=y.getViewSubImage(S,Je);Nt=Bt.viewport,Fe===0&&(e.setRenderTargetTextures(R,Bt.colorTexture,S.ignoreDepthValues?void 0:Bt.depthStencilTexture),e.setRenderTarget(R))}let yt=b[Fe];yt===void 0&&(yt=new ci,yt.layers.enable(Fe),yt.viewport=new nn,b[Fe]=yt),yt.matrix.fromArray(Je.transform.matrix),yt.matrix.decompose(yt.position,yt.quaternion,yt.scale),yt.projectionMatrix.fromArray(Je.projectionMatrix),yt.projectionMatrixInverse.copy(yt.projectionMatrix).invert(),yt.viewport.set(Nt.x,Nt.y,Nt.width,Nt.height),Fe===0&&(C.matrix.copy(yt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),_e===!0&&C.cameras.push(yt)}const Ae=a.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Fe=y.getDepthInformation(Ee[0]);Fe&&Fe.isValid&&Fe.texture&&w.init(e,Fe,a.renderState)}}for(let Ee=0;Ee<L.length;Ee++){const _e=A[Ee],Ae=L[Ee];_e!==null&&Ae!==void 0&&Ae.update(_e,ce,p||u)}k&&k(J,ce),ce.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ce}),x=null}const Ue=new L0;Ue.setAnimationLoop(ie),this.setAnimationLoop=function(J){k=J},this.dispose=function(){}}}const Ts=new Vi,Y1=new Kt;function q1(r,e){function t(v,m){v.matrixAutoUpdate===!0&&v.updateMatrix(),m.value.copy(v.matrix)}function s(v,m){m.color.getRGB(v.fogColor.value,R0(r)),m.isFog?(v.fogNear.value=m.near,v.fogFar.value=m.far):m.isFogExp2&&(v.fogDensity.value=m.density)}function a(v,m,R,L,A){m.isMeshBasicMaterial||m.isMeshLambertMaterial?l(v,m):m.isMeshToonMaterial?(l(v,m),y(v,m)):m.isMeshPhongMaterial?(l(v,m),g(v,m)):m.isMeshStandardMaterial?(l(v,m),S(v,m),m.isMeshPhysicalMaterial&&M(v,m,A)):m.isMeshMatcapMaterial?(l(v,m),x(v,m)):m.isMeshDepthMaterial?l(v,m):m.isMeshDistanceMaterial?(l(v,m),w(v,m)):m.isMeshNormalMaterial?l(v,m):m.isLineBasicMaterial?(u(v,m),m.isLineDashedMaterial&&f(v,m)):m.isPointsMaterial?h(v,m,R,L):m.isSpriteMaterial?p(v,m):m.isShadowMaterial?(v.color.value.copy(m.color),v.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function l(v,m){v.opacity.value=m.opacity,m.color&&v.diffuse.value.copy(m.color),m.emissive&&v.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(v.map.value=m.map,t(m.map,v.mapTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,t(m.alphaMap,v.alphaMapTransform)),m.bumpMap&&(v.bumpMap.value=m.bumpMap,t(m.bumpMap,v.bumpMapTransform),v.bumpScale.value=m.bumpScale,m.side===Xn&&(v.bumpScale.value*=-1)),m.normalMap&&(v.normalMap.value=m.normalMap,t(m.normalMap,v.normalMapTransform),v.normalScale.value.copy(m.normalScale),m.side===Xn&&v.normalScale.value.negate()),m.displacementMap&&(v.displacementMap.value=m.displacementMap,t(m.displacementMap,v.displacementMapTransform),v.displacementScale.value=m.displacementScale,v.displacementBias.value=m.displacementBias),m.emissiveMap&&(v.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,v.emissiveMapTransform)),m.specularMap&&(v.specularMap.value=m.specularMap,t(m.specularMap,v.specularMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest);const R=e.get(m),L=R.envMap,A=R.envMapRotation;L&&(v.envMap.value=L,Ts.copy(A),Ts.x*=-1,Ts.y*=-1,Ts.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Ts.y*=-1,Ts.z*=-1),v.envMapRotation.value.setFromMatrix4(Y1.makeRotationFromEuler(Ts)),v.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=m.reflectivity,v.ior.value=m.ior,v.refractionRatio.value=m.refractionRatio),m.lightMap&&(v.lightMap.value=m.lightMap,v.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,v.lightMapTransform)),m.aoMap&&(v.aoMap.value=m.aoMap,v.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,v.aoMapTransform))}function u(v,m){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,m.map&&(v.map.value=m.map,t(m.map,v.mapTransform))}function f(v,m){v.dashSize.value=m.dashSize,v.totalSize.value=m.dashSize+m.gapSize,v.scale.value=m.scale}function h(v,m,R,L){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,v.size.value=m.size*R,v.scale.value=L*.5,m.map&&(v.map.value=m.map,t(m.map,v.uvTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,t(m.alphaMap,v.alphaMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest)}function p(v,m){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,v.rotation.value=m.rotation,m.map&&(v.map.value=m.map,t(m.map,v.mapTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,t(m.alphaMap,v.alphaMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest)}function g(v,m){v.specular.value.copy(m.specular),v.shininess.value=Math.max(m.shininess,1e-4)}function y(v,m){m.gradientMap&&(v.gradientMap.value=m.gradientMap)}function S(v,m){v.metalness.value=m.metalness,m.metalnessMap&&(v.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,v.metalnessMapTransform)),v.roughness.value=m.roughness,m.roughnessMap&&(v.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,v.roughnessMapTransform)),m.envMap&&(v.envMapIntensity.value=m.envMapIntensity)}function M(v,m,R){v.ior.value=m.ior,m.sheen>0&&(v.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),v.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(v.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,v.sheenColorMapTransform)),m.sheenRoughnessMap&&(v.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,v.sheenRoughnessMapTransform))),m.clearcoat>0&&(v.clearcoat.value=m.clearcoat,v.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(v.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,v.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(v.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Xn&&v.clearcoatNormalScale.value.negate())),m.dispersion>0&&(v.dispersion.value=m.dispersion),m.iridescence>0&&(v.iridescence.value=m.iridescence,v.iridescenceIOR.value=m.iridescenceIOR,v.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(v.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,v.iridescenceMapTransform)),m.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),m.transmission>0&&(v.transmission.value=m.transmission,v.transmissionSamplerMap.value=R.texture,v.transmissionSamplerSize.value.set(R.width,R.height),m.transmissionMap&&(v.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,v.transmissionMapTransform)),v.thickness.value=m.thickness,m.thicknessMap&&(v.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=m.attenuationDistance,v.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(v.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(v.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=m.specularIntensity,v.specularColor.value.copy(m.specularColor),m.specularColorMap&&(v.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,v.specularColorMapTransform)),m.specularIntensityMap&&(v.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,v.specularIntensityMapTransform))}function x(v,m){m.matcap&&(v.matcap.value=m.matcap)}function w(v,m){const R=e.get(m).light;v.referencePosition.value.setFromMatrixPosition(R.matrixWorld),v.nearDistance.value=R.shadow.camera.near,v.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:a}}function $1(r,e,t,s){let a={},l={},u=[];const f=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function h(R,L){const A=L.program;s.uniformBlockBinding(R,A)}function p(R,L){let A=a[R.id];A===void 0&&(x(R),A=g(R),a[R.id]=A,R.addEventListener("dispose",v));const B=L.program;s.updateUBOMapping(R,B);const I=e.render.frame;l[R.id]!==I&&(S(R),l[R.id]=I)}function g(R){const L=y();R.__bindingPointIndex=L;const A=r.createBuffer(),B=R.__size,I=R.usage;return r.bindBuffer(r.UNIFORM_BUFFER,A),r.bufferData(r.UNIFORM_BUFFER,B,I),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,A),A}function y(){for(let R=0;R<f;R++)if(u.indexOf(R)===-1)return u.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(R){const L=a[R.id],A=R.uniforms,B=R.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let I=0,D=A.length;I<D;I++){const F=Array.isArray(A[I])?A[I]:[A[I]];for(let b=0,C=F.length;b<C;b++){const O=F[b];if(M(O,I,b,B)===!0){const $=O.__offset,X=Array.isArray(O.value)?O.value:[O.value];let se=0;for(let de=0;de<X.length;de++){const re=X[de],pe=w(re);typeof re=="number"||typeof re=="boolean"?(O.__data[0]=re,r.bufferSubData(r.UNIFORM_BUFFER,$+se,O.__data)):re.isMatrix3?(O.__data[0]=re.elements[0],O.__data[1]=re.elements[1],O.__data[2]=re.elements[2],O.__data[3]=0,O.__data[4]=re.elements[3],O.__data[5]=re.elements[4],O.__data[6]=re.elements[5],O.__data[7]=0,O.__data[8]=re.elements[6],O.__data[9]=re.elements[7],O.__data[10]=re.elements[8],O.__data[11]=0):(re.toArray(O.__data,se),se+=pe.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,$,O.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(R,L,A,B){const I=R.value,D=L+"_"+A;if(B[D]===void 0)return typeof I=="number"||typeof I=="boolean"?B[D]=I:B[D]=I.clone(),!0;{const F=B[D];if(typeof I=="number"||typeof I=="boolean"){if(F!==I)return B[D]=I,!0}else if(F.equals(I)===!1)return F.copy(I),!0}return!1}function x(R){const L=R.uniforms;let A=0;const B=16;for(let D=0,F=L.length;D<F;D++){const b=Array.isArray(L[D])?L[D]:[L[D]];for(let C=0,O=b.length;C<O;C++){const $=b[C],X=Array.isArray($.value)?$.value:[$.value];for(let se=0,de=X.length;se<de;se++){const re=X[se],pe=w(re),H=A%B,le=H%pe.boundary,ae=H+le;A+=le,ae!==0&&B-ae<pe.storage&&(A+=B-ae),$.__data=new Float32Array(pe.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=A,A+=pe.storage}}}const I=A%B;return I>0&&(A+=B-I),R.__size=A,R.__cache={},this}function w(R){const L={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(L.boundary=4,L.storage=4):R.isVector2?(L.boundary=8,L.storage=8):R.isVector3||R.isColor?(L.boundary=16,L.storage=12):R.isVector4?(L.boundary=16,L.storage=16):R.isMatrix3?(L.boundary=48,L.storage=48):R.isMatrix4?(L.boundary=64,L.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),L}function v(R){const L=R.target;L.removeEventListener("dispose",v);const A=u.indexOf(L.__bindingPointIndex);u.splice(A,1),r.deleteBuffer(a[L.id]),delete a[L.id],delete l[L.id]}function m(){for(const R in a)r.deleteBuffer(a[R]);u=[],a={},l={}}return{bind:h,update:p,dispose:m}}class K1{constructor(e={}){const{canvas:t=ky(),context:s=null,depth:a=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:y=!1,reverseDepthBuffer:S=!1}=e;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=u;const x=new Uint32Array(4),w=new Int32Array(4);let v=null,m=null;const R=[],L=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ti,this.toneMapping=ts,this.toneMappingExposure=1;const A=this;let B=!1,I=0,D=0,F=null,b=-1,C=null;const O=new nn,$=new nn;let X=null;const se=new lt(0);let de=0,re=t.width,pe=t.height,H=1,le=null,ae=null;const k=new nn(0,0,re,pe),ie=new nn(0,0,re,pe);let Ue=!1;const J=new ph;let ce=!1,Ee=!1;const _e=new Kt,Ae=new Kt,Fe=new Q,Je=new nn,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let yt=!1;function Bt(){return F===null?H:1}let Y=s;function kn(P,W){return t.getContext(P,W)}try{const P={alpha:!0,depth:a,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:y};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Jd}`),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",Ie,!1),t.addEventListener("webglcontextcreationerror",Le,!1),Y===null){const W="webgl2";if(Y=kn(W,P),Y===null)throw kn(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let _t,mt,Ke,Lt,$e,N,T,Z,he,ge,ue,We,Ce,ke,ht,Me,ze,et,nt,Be,gt,ot,Pt,G;function Re(){_t=new tE(Y),_t.init(),ot=new B1(Y,_t),mt=new qx(Y,_t,e,ot),Ke=new k1(Y,_t),mt.reverseDepthBuffer&&S&&Ke.buffers.depth.setReversed(!0),Lt=new rE(Y),$e=new x1,N=new z1(Y,_t,Ke,$e,mt,ot,Lt),T=new Kx(A),Z=new eE(A),he=new uS(Y),Pt=new jx(Y,he),ge=new nE(Y,he,Lt,Pt),ue=new oE(Y,ge,he,Lt),nt=new sE(Y,mt,N),Me=new $x($e),We=new M1(A,T,Z,_t,mt,Pt,Me),Ce=new q1(A,$e),ke=new w1,ht=new P1(_t),et=new Xx(A,T,Z,Ke,ue,M,h),ze=new U1(A,ue,mt),G=new $1(Y,Lt,mt,Ke),Be=new Yx(Y,_t,Lt),gt=new iE(Y,_t,Lt),Lt.programs=We.programs,A.capabilities=mt,A.extensions=_t,A.properties=$e,A.renderLists=ke,A.shadowMap=ze,A.state=Ke,A.info=Lt}Re();const oe=new j1(A,Y);this.xr=oe,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const P=_t.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=_t.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(P){P!==void 0&&(H=P,this.setSize(re,pe,!1))},this.getSize=function(P){return P.set(re,pe)},this.setSize=function(P,W,te=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}re=P,pe=W,t.width=Math.floor(P*H),t.height=Math.floor(W*H),te===!0&&(t.style.width=P+"px",t.style.height=W+"px"),this.setViewport(0,0,P,W)},this.getDrawingBufferSize=function(P){return P.set(re*H,pe*H).floor()},this.setDrawingBufferSize=function(P,W,te){re=P,pe=W,H=te,t.width=Math.floor(P*te),t.height=Math.floor(W*te),this.setViewport(0,0,P,W)},this.getCurrentViewport=function(P){return P.copy(O)},this.getViewport=function(P){return P.copy(k)},this.setViewport=function(P,W,te,ne){P.isVector4?k.set(P.x,P.y,P.z,P.w):k.set(P,W,te,ne),Ke.viewport(O.copy(k).multiplyScalar(H).round())},this.getScissor=function(P){return P.copy(ie)},this.setScissor=function(P,W,te,ne){P.isVector4?ie.set(P.x,P.y,P.z,P.w):ie.set(P,W,te,ne),Ke.scissor($.copy(ie).multiplyScalar(H).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(P){Ke.setScissorTest(Ue=P)},this.setOpaqueSort=function(P){le=P},this.setTransparentSort=function(P){ae=P},this.getClearColor=function(P){return P.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor.apply(et,arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha.apply(et,arguments)},this.clear=function(P=!0,W=!0,te=!0){let ne=0;if(P){let j=!1;if(F!==null){const Te=F.texture.format;j=Te===ah||Te===oh||Te===sh}if(j){const Te=F.texture.type,xe=Te===xr||Te===Os||Te===Wa||Te===Oo||Te===ih||Te===rh,Xe=et.getClearColor(),Ve=et.getClearAlpha(),it=Xe.r,st=Xe.g,je=Xe.b;xe?(x[0]=it,x[1]=st,x[2]=je,x[3]=Ve,Y.clearBufferuiv(Y.COLOR,0,x)):(w[0]=it,w[1]=st,w[2]=je,w[3]=Ve,Y.clearBufferiv(Y.COLOR,0,w))}else ne|=Y.COLOR_BUFFER_BIT}W&&(ne|=Y.DEPTH_BUFFER_BIT),te&&(ne|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",Ie,!1),t.removeEventListener("webglcontextcreationerror",Le,!1),ke.dispose(),ht.dispose(),$e.dispose(),T.dispose(),Z.dispose(),ue.dispose(),Pt.dispose(),G.dispose(),We.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",Hs),oe.removeEventListener("sessionend",Er),Ji.stop()};function fe(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const P=Lt.autoReset,W=ze.enabled,te=ze.autoUpdate,ne=ze.needsUpdate,j=ze.type;Re(),Lt.autoReset=P,ze.enabled=W,ze.autoUpdate=te,ze.needsUpdate=ne,ze.type=j}function Le(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function at(P){const W=P.target;W.removeEventListener("dispose",at),Vt(W)}function Vt(P){fn(P),$e.remove(P)}function fn(P){const W=$e.get(P).programs;W!==void 0&&(W.forEach(function(te){We.releaseProgram(te)}),P.isShaderMaterial&&We.releaseShaderCache(P))}this.renderBufferDirect=function(P,W,te,ne,j,Te){W===null&&(W=Nt);const xe=j.isMesh&&j.matrixWorld.determinant()<0,Xe=Ja(P,W,te,ne,j);Ke.setMaterial(ne,xe);let Ve=te.index,it=1;if(ne.wireframe===!0){if(Ve=ge.getWireframeAttribute(te),Ve===void 0)return;it=2}const st=te.drawRange,je=te.attributes.position;let Mt=st.start*it,Rt=(st.start+st.count)*it;Te!==null&&(Mt=Math.max(Mt,Te.start*it),Rt=Math.min(Rt,(Te.start+Te.count)*it)),Ve!==null?(Mt=Math.max(Mt,0),Rt=Math.min(Rt,Ve.count)):je!=null&&(Mt=Math.max(Mt,0),Rt=Math.min(Rt,je.count));const St=Rt-Mt;if(St<0||St===1/0)return;Pt.setup(j,ne,Xe,te,Ve);let Cn,ct=Be;if(Ve!==null&&(Cn=he.get(Ve),ct=gt,ct.setIndex(Cn)),j.isMesh)ne.wireframe===!0?(Ke.setLineWidth(ne.wireframeLinewidth*Bt()),ct.setMode(Y.LINES)):ct.setMode(Y.TRIANGLES);else if(j.isLine){let qe=ne.linewidth;qe===void 0&&(qe=1),Ke.setLineWidth(qe*Bt()),j.isLineSegments?ct.setMode(Y.LINES):j.isLineLoop?ct.setMode(Y.LINE_LOOP):ct.setMode(Y.LINE_STRIP)}else j.isPoints?ct.setMode(Y.POINTS):j.isSprite&&ct.setMode(Y.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)ct.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(_t.get("WEBGL_multi_draw"))ct.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const qe=j._multiDrawStarts,Ei=j._multiDrawCounts,At=j._multiDrawCount,Rn=Ve?he.get(Ve).bytesPerElement:1,wi=$e.get(ne).currentProgram.getUniforms();for(let dn=0;dn<At;dn++)wi.setValue(Y,"_gl_DrawID",dn),ct.render(qe[dn]/Rn,Ei[dn])}else if(j.isInstancedMesh)ct.renderInstances(Mt,St,j.count);else if(te.isInstancedBufferGeometry){const qe=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Ei=Math.min(te.instanceCount,qe);ct.renderInstances(Mt,St,Ei)}else ct.render(Mt,St)};function xt(P,W,te){P.transparent===!0&&P.side===Fi&&P.forceSinglePass===!1?(P.side=Xn,P.needsUpdate=!0,Vs(P,W,te),P.side=Mr,P.needsUpdate=!0,Vs(P,W,te),P.side=Fi):Vs(P,W,te)}this.compile=function(P,W,te=null){te===null&&(te=P),m=ht.get(te),m.init(W),L.push(m),te.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(m.pushLight(j),j.castShadow&&m.pushShadow(j))}),P!==te&&P.traverseVisible(function(j){j.isLight&&j.layers.test(W.layers)&&(m.pushLight(j),j.castShadow&&m.pushShadow(j))}),m.setupLights();const ne=new Set;return P.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Te=j.material;if(Te)if(Array.isArray(Te))for(let xe=0;xe<Te.length;xe++){const Xe=Te[xe];xt(Xe,te,j),ne.add(Xe)}else xt(Te,te,j),ne.add(Te)}),L.pop(),m=null,ne},this.compileAsync=function(P,W,te=null){const ne=this.compile(P,W,te);return new Promise(j=>{function Te(){if(ne.forEach(function(xe){$e.get(xe).currentProgram.isReady()&&ne.delete(xe)}),ne.size===0){j(P);return}setTimeout(Te,10)}_t.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let Yn=null;function On(P){Yn&&Yn(P)}function Hs(){Ji.stop()}function Er(){Ji.start()}const Ji=new L0;Ji.setAnimationLoop(On),typeof self<"u"&&Ji.setContext(self),this.setAnimationLoop=function(P){Yn=P,oe.setAnimationLoop(P),P===null?Ji.stop():Ji.start()},oe.addEventListener("sessionstart",Hs),oe.addEventListener("sessionend",Er),this.render=function(P,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(W),W=oe.getCamera()),P.isScene===!0&&P.onBeforeRender(A,P,W,F),m=ht.get(P,L.length),m.init(W),L.push(m),Ae.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),J.setFromProjectionMatrix(Ae),Ee=this.localClippingEnabled,ce=Me.init(this.clippingPlanes,Ee),v=ke.get(P,R.length),v.init(),R.push(v),oe.enabled===!0&&oe.isPresenting===!0){const Te=A.xr.getDepthSensingMesh();Te!==null&&er(Te,W,-1/0,A.sortObjects)}er(P,W,0,A.sortObjects),v.finish(),A.sortObjects===!0&&v.sort(le,ae),yt=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,yt&&et.addToRenderList(v,P),this.info.render.frame++,ce===!0&&Me.beginShadows();const te=m.state.shadowsArray;ze.render(te,P,W),ce===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const ne=v.opaque,j=v.transmissive;if(m.setupLights(),W.isArrayCamera){const Te=W.cameras;if(j.length>0)for(let xe=0,Xe=Te.length;xe<Xe;xe++){const Ve=Te[xe];as(ne,j,P,Ve)}yt&&et.render(P);for(let xe=0,Xe=Te.length;xe<Xe;xe++){const Ve=Te[xe];os(v,P,Ve,Ve.viewport)}}else j.length>0&&as(ne,j,P,W),yt&&et.render(P),os(v,P,W);F!==null&&(N.updateMultisampleRenderTarget(F),N.updateRenderTargetMipmap(F)),P.isScene===!0&&P.onAfterRender(A,P,W),Pt.resetDefaultState(),b=-1,C=null,L.pop(),L.length>0?(m=L[L.length-1],ce===!0&&Me.setGlobalState(A.clippingPlanes,m.state.camera)):m=null,R.pop(),R.length>0?v=R[R.length-1]:v=null};function er(P,W,te,ne){if(P.visible===!1)return;if(P.layers.test(W.layers)){if(P.isGroup)te=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(W);else if(P.isLight)m.pushLight(P),P.castShadow&&m.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||J.intersectsSprite(P)){ne&&Je.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Ae);const xe=ue.update(P),Xe=P.material;Xe.visible&&v.push(P,xe,Xe,te,Je.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||J.intersectsObject(P))){const xe=ue.update(P),Xe=P.material;if(ne&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Je.copy(P.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Je.copy(xe.boundingSphere.center)),Je.applyMatrix4(P.matrixWorld).applyMatrix4(Ae)),Array.isArray(Xe)){const Ve=xe.groups;for(let it=0,st=Ve.length;it<st;it++){const je=Ve[it],Mt=Xe[je.materialIndex];Mt&&Mt.visible&&v.push(P,xe,Mt,te,Je.z,je)}}else Xe.visible&&v.push(P,xe,Xe,te,Je.z,null)}}const Te=P.children;for(let xe=0,Xe=Te.length;xe<Xe;xe++)er(Te[xe],W,te,ne)}function os(P,W,te,ne){const j=P.opaque,Te=P.transmissive,xe=P.transparent;m.setupLightsView(te),ce===!0&&Me.setGlobalState(A.clippingPlanes,te),ne&&Ke.viewport(O.copy(ne)),j.length>0&&wr(j,W,te),Te.length>0&&wr(Te,W,te),xe.length>0&&wr(xe,W,te),Ke.buffers.depth.setTest(!0),Ke.buffers.depth.setMask(!0),Ke.buffers.color.setMask(!0),Ke.setPolygonOffset(!1)}function as(P,W,te,ne){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[ne.id]===void 0&&(m.state.transmissionRenderTarget[ne.id]=new zs(1,1,{generateMipmaps:!0,type:_t.has("EXT_color_buffer_half_float")||_t.has("EXT_color_buffer_float")?ja:xr,minFilter:Fs,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace}));const Te=m.state.transmissionRenderTarget[ne.id],xe=ne.viewport||O;Te.setSize(xe.z,xe.w);const Xe=A.getRenderTarget();A.setRenderTarget(Te),A.getClearColor(se),de=A.getClearAlpha(),de<1&&A.setClearColor(16777215,.5),A.clear(),yt&&et.render(te);const Ve=A.toneMapping;A.toneMapping=ts;const it=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),m.setupLightsView(ne),ce===!0&&Me.setGlobalState(A.clippingPlanes,ne),wr(P,te,ne),N.updateMultisampleRenderTarget(Te),N.updateRenderTargetMipmap(Te),_t.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let je=0,Mt=W.length;je<Mt;je++){const Rt=W[je],St=Rt.object,Cn=Rt.geometry,ct=Rt.material,qe=Rt.group;if(ct.side===Fi&&St.layers.test(ne.layers)){const Ei=ct.side;ct.side=Xn,ct.needsUpdate=!0,Qa(St,te,ne,Cn,ct,qe),ct.side=Ei,ct.needsUpdate=!0,st=!0}}st===!0&&(N.updateMultisampleRenderTarget(Te),N.updateRenderTargetMipmap(Te))}A.setRenderTarget(Xe),A.setClearColor(se,de),it!==void 0&&(ne.viewport=it),A.toneMapping=Ve}function wr(P,W,te){const ne=W.isScene===!0?W.overrideMaterial:null;for(let j=0,Te=P.length;j<Te;j++){const xe=P[j],Xe=xe.object,Ve=xe.geometry,it=ne===null?xe.material:ne,st=xe.group;Xe.layers.test(te.layers)&&Qa(Xe,W,te,Ve,it,st)}}function Qa(P,W,te,ne,j,Te){P.onBeforeRender(A,W,te,ne,j,Te),P.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),j.onBeforeRender(A,W,te,ne,P,Te),j.transparent===!0&&j.side===Fi&&j.forceSinglePass===!1?(j.side=Xn,j.needsUpdate=!0,A.renderBufferDirect(te,W,ne,j,P,Te),j.side=Mr,j.needsUpdate=!0,A.renderBufferDirect(te,W,ne,j,P,Te),j.side=Fi):A.renderBufferDirect(te,W,ne,j,P,Te),P.onAfterRender(A,W,te,ne,j,Te)}function Vs(P,W,te){W.isScene!==!0&&(W=Nt);const ne=$e.get(P),j=m.state.lights,Te=m.state.shadowsArray,xe=j.state.version,Xe=We.getParameters(P,j.state,Te,W,te),Ve=We.getProgramCacheKey(Xe);let it=ne.programs;ne.environment=P.isMeshStandardMaterial?W.environment:null,ne.fog=W.fog,ne.envMap=(P.isMeshStandardMaterial?Z:T).get(P.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&P.envMap===null?W.environmentRotation:P.envMapRotation,it===void 0&&(P.addEventListener("dispose",at),it=new Map,ne.programs=it);let st=it.get(Ve);if(st!==void 0){if(ne.currentProgram===st&&ne.lightsStateVersion===xe)return Gi(P,Xe),st}else Xe.uniforms=We.getUniforms(P),P.onBeforeCompile(Xe,A),st=We.acquireProgram(Xe,Ve),it.set(Ve,st),ne.uniforms=Xe.uniforms;const je=ne.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(je.clippingPlanes=Me.uniform),Gi(P,Xe),ne.needsLights=Gc(P),ne.lightsStateVersion=xe,ne.needsLights&&(je.ambientLightColor.value=j.state.ambient,je.lightProbe.value=j.state.probe,je.directionalLights.value=j.state.directional,je.directionalLightShadows.value=j.state.directionalShadow,je.spotLights.value=j.state.spot,je.spotLightShadows.value=j.state.spotShadow,je.rectAreaLights.value=j.state.rectArea,je.ltc_1.value=j.state.rectAreaLTC1,je.ltc_2.value=j.state.rectAreaLTC2,je.pointLights.value=j.state.point,je.pointLightShadows.value=j.state.pointShadow,je.hemisphereLights.value=j.state.hemi,je.directionalShadowMap.value=j.state.directionalShadowMap,je.directionalShadowMatrix.value=j.state.directionalShadowMatrix,je.spotShadowMap.value=j.state.spotShadowMap,je.spotLightMatrix.value=j.state.spotLightMatrix,je.spotLightMap.value=j.state.spotLightMap,je.pointShadowMap.value=j.state.pointShadowMap,je.pointShadowMatrix.value=j.state.pointShadowMatrix),ne.currentProgram=st,ne.uniformsList=null,st}function Za(P){if(P.uniformsList===null){const W=P.currentProgram.getUniforms();P.uniformsList=Pc.seqWithValue(W.seq,P.uniforms)}return P.uniformsList}function Gi(P,W){const te=$e.get(P);te.outputColorSpace=W.outputColorSpace,te.batching=W.batching,te.batchingColor=W.batchingColor,te.instancing=W.instancing,te.instancingColor=W.instancingColor,te.instancingMorph=W.instancingMorph,te.skinning=W.skinning,te.morphTargets=W.morphTargets,te.morphNormals=W.morphNormals,te.morphColors=W.morphColors,te.morphTargetsCount=W.morphTargetsCount,te.numClippingPlanes=W.numClippingPlanes,te.numIntersection=W.numClipIntersection,te.vertexAlphas=W.vertexAlphas,te.vertexTangents=W.vertexTangents,te.toneMapping=W.toneMapping}function Ja(P,W,te,ne,j){W.isScene!==!0&&(W=Nt),N.resetTextureUnits();const Te=W.fog,xe=ne.isMeshStandardMaterial?W.environment:null,Xe=F===null?A.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Vo,Ve=(ne.isMeshStandardMaterial?Z:T).get(ne.envMap||xe),it=ne.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,st=!!te.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),je=!!te.morphAttributes.position,Mt=!!te.morphAttributes.normal,Rt=!!te.morphAttributes.color;let St=ts;ne.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(St=A.toneMapping);const Cn=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,ct=Cn!==void 0?Cn.length:0,qe=$e.get(ne),Ei=m.state.lights;if(ce===!0&&(Ee===!0||P!==C)){const zn=P===C&&ne.id===b;Me.setState(ne,P,zn)}let At=!1;ne.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Ei.state.version||qe.outputColorSpace!==Xe||j.isBatchedMesh&&qe.batching===!1||!j.isBatchedMesh&&qe.batching===!0||j.isBatchedMesh&&qe.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&qe.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&qe.instancing===!1||!j.isInstancedMesh&&qe.instancing===!0||j.isSkinnedMesh&&qe.skinning===!1||!j.isSkinnedMesh&&qe.skinning===!0||j.isInstancedMesh&&qe.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&qe.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&qe.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&qe.instancingMorph===!1&&j.morphTexture!==null||qe.envMap!==Ve||ne.fog===!0&&qe.fog!==Te||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Me.numPlanes||qe.numIntersection!==Me.numIntersection)||qe.vertexAlphas!==it||qe.vertexTangents!==st||qe.morphTargets!==je||qe.morphNormals!==Mt||qe.morphColors!==Rt||qe.toneMapping!==St||qe.morphTargetsCount!==ct)&&(At=!0):(At=!0,qe.__version=ne.version);let Rn=qe.currentProgram;At===!0&&(Rn=Vs(ne,W,j));let wi=!1,dn=!1,Wi=!1;const kt=Rn.getUniforms(),di=qe.uniforms;if(Ke.useProgram(Rn.program)&&(wi=!0,dn=!0,Wi=!0),ne.id!==b&&(b=ne.id,dn=!0),wi||C!==P){Ke.buffers.depth.getReversed()?(_e.copy(P.projectionMatrix),zy(_e),By(_e),kt.setValue(Y,"projectionMatrix",_e)):kt.setValue(Y,"projectionMatrix",P.projectionMatrix),kt.setValue(Y,"viewMatrix",P.matrixWorldInverse);const hi=kt.map.cameraPosition;hi!==void 0&&hi.setValue(Y,Fe.setFromMatrixPosition(P.matrixWorld)),mt.logarithmicDepthBuffer&&kt.setValue(Y,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&kt.setValue(Y,"isOrthographic",P.isOrthographicCamera===!0),C!==P&&(C=P,dn=!0,Wi=!0)}if(j.isSkinnedMesh){kt.setOptional(Y,j,"bindMatrix"),kt.setOptional(Y,j,"bindMatrixInverse");const zn=j.skeleton;zn&&(zn.boneTexture===null&&zn.computeBoneTexture(),kt.setValue(Y,"boneTexture",zn.boneTexture,N))}j.isBatchedMesh&&(kt.setOptional(Y,j,"batchingTexture"),kt.setValue(Y,"batchingTexture",j._matricesTexture,N),kt.setOptional(Y,j,"batchingIdTexture"),kt.setValue(Y,"batchingIdTexture",j._indirectTexture,N),kt.setOptional(Y,j,"batchingColorTexture"),j._colorsTexture!==null&&kt.setValue(Y,"batchingColorTexture",j._colorsTexture,N));const tr=te.morphAttributes;if((tr.position!==void 0||tr.normal!==void 0||tr.color!==void 0)&&nt.update(j,te,Rn),(dn||qe.receiveShadow!==j.receiveShadow)&&(qe.receiveShadow=j.receiveShadow,kt.setValue(Y,"receiveShadow",j.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(di.envMap.value=Ve,di.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&W.environment!==null&&(di.envMapIntensity.value=W.environmentIntensity),dn&&(kt.setValue(Y,"toneMappingExposure",A.toneMappingExposure),qe.needsLights&&el(di,Wi),Te&&ne.fog===!0&&Ce.refreshFogUniforms(di,Te),Ce.refreshMaterialUniforms(di,ne,H,pe,m.state.transmissionRenderTarget[P.id]),Pc.upload(Y,Za(qe),di,N)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Pc.upload(Y,Za(qe),di,N),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&kt.setValue(Y,"center",j.center),kt.setValue(Y,"modelViewMatrix",j.modelViewMatrix),kt.setValue(Y,"normalMatrix",j.normalMatrix),kt.setValue(Y,"modelMatrix",j.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const zn=ne.uniformsGroups;for(let hi=0,qn=zn.length;hi<qn;hi++){const tl=zn[hi];G.update(tl,Rn),G.bind(tl,Rn)}}return Rn}function el(P,W){P.ambientLightColor.needsUpdate=W,P.lightProbe.needsUpdate=W,P.directionalLights.needsUpdate=W,P.directionalLightShadows.needsUpdate=W,P.pointLights.needsUpdate=W,P.pointLightShadows.needsUpdate=W,P.spotLights.needsUpdate=W,P.spotLightShadows.needsUpdate=W,P.rectAreaLights.needsUpdate=W,P.hemisphereLights.needsUpdate=W}function Gc(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(P,W,te){$e.get(P.texture).__webglTexture=W,$e.get(P.depthTexture).__webglTexture=te;const ne=$e.get(P);ne.__hasExternalTextures=!0,ne.__autoAllocateDepthBuffer=te===void 0,ne.__autoAllocateDepthBuffer||_t.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ne.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,W){const te=$e.get(P);te.__webglFramebuffer=W,te.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(P,W=0,te=0){F=P,I=W,D=te;let ne=!0,j=null,Te=!1,xe=!1;if(P){const Ve=$e.get(P);if(Ve.__useDefaultFramebuffer!==void 0)Ke.bindFramebuffer(Y.FRAMEBUFFER,null),ne=!1;else if(Ve.__webglFramebuffer===void 0)N.setupRenderTarget(P);else if(Ve.__hasExternalTextures)N.rebindTextures(P,$e.get(P.texture).__webglTexture,$e.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const je=P.depthTexture;if(Ve.__boundDepthTexture!==je){if(je!==null&&$e.has(je)&&(P.width!==je.image.width||P.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(P)}}const it=P.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(xe=!0);const st=$e.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(st[W])?j=st[W][te]:j=st[W],Te=!0):P.samples>0&&N.useMultisampledRTT(P)===!1?j=$e.get(P).__webglMultisampledFramebuffer:Array.isArray(st)?j=st[te]:j=st,O.copy(P.viewport),$.copy(P.scissor),X=P.scissorTest}else O.copy(k).multiplyScalar(H).floor(),$.copy(ie).multiplyScalar(H).floor(),X=Ue;if(Ke.bindFramebuffer(Y.FRAMEBUFFER,j)&&ne&&Ke.drawBuffers(P,j),Ke.viewport(O),Ke.scissor($),Ke.setScissorTest(X),Te){const Ve=$e.get(P.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ve.__webglTexture,te)}else if(xe){const Ve=$e.get(P.texture),it=W||0;Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Ve.__webglTexture,te||0,it)}b=-1},this.readRenderTargetPixels=function(P,W,te,ne,j,Te,xe){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=$e.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&xe!==void 0&&(Xe=Xe[xe]),Xe){Ke.bindFramebuffer(Y.FRAMEBUFFER,Xe);try{const Ve=P.texture,it=Ve.format,st=Ve.type;if(!mt.textureFormatReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!mt.textureTypeReadable(st)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=P.width-ne&&te>=0&&te<=P.height-j&&Y.readPixels(W,te,ne,j,ot.convert(it),ot.convert(st),Te)}finally{const Ve=F!==null?$e.get(F).__webglFramebuffer:null;Ke.bindFramebuffer(Y.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(P,W,te,ne,j,Te,xe){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=$e.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&xe!==void 0&&(Xe=Xe[xe]),Xe){const Ve=P.texture,it=Ve.format,st=Ve.type;if(!mt.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!mt.textureTypeReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=P.width-ne&&te>=0&&te<=P.height-j){Ke.bindFramebuffer(Y.FRAMEBUFFER,Xe);const je=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,je),Y.bufferData(Y.PIXEL_PACK_BUFFER,Te.byteLength,Y.STREAM_READ),Y.readPixels(W,te,ne,j,ot.convert(it),ot.convert(st),0);const Mt=F!==null?$e.get(F).__webglFramebuffer:null;Ke.bindFramebuffer(Y.FRAMEBUFFER,Mt);const Rt=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await Oy(Y,Rt,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,je),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,Te),Y.deleteBuffer(je),Y.deleteSync(Rt),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,W=null,te=0){P.isTexture!==!0&&(Fa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,P=arguments[1]);const ne=Math.pow(2,-te),j=Math.floor(P.image.width*ne),Te=Math.floor(P.image.height*ne),xe=W!==null?W.x:0,Xe=W!==null?W.y:0;N.setTexture2D(P,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,te,0,0,xe,Xe,j,Te),Ke.unbindTexture()},this.copyTextureToTexture=function(P,W,te=null,ne=null,j=0){P.isTexture!==!0&&(Fa("WebGLRenderer: copyTextureToTexture function signature has changed."),ne=arguments[0]||null,P=arguments[1],W=arguments[2],j=arguments[3]||0,te=null);let Te,xe,Xe,Ve,it,st,je,Mt,Rt;const St=P.isCompressedTexture?P.mipmaps[j]:P.image;te!==null?(Te=te.max.x-te.min.x,xe=te.max.y-te.min.y,Xe=te.isBox3?te.max.z-te.min.z:1,Ve=te.min.x,it=te.min.y,st=te.isBox3?te.min.z:0):(Te=St.width,xe=St.height,Xe=St.depth||1,Ve=0,it=0,st=0),ne!==null?(je=ne.x,Mt=ne.y,Rt=ne.z):(je=0,Mt=0,Rt=0);const Cn=ot.convert(W.format),ct=ot.convert(W.type);let qe;W.isData3DTexture?(N.setTexture3D(W,0),qe=Y.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(N.setTexture2DArray(W,0),qe=Y.TEXTURE_2D_ARRAY):(N.setTexture2D(W,0),qe=Y.TEXTURE_2D),Y.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,W.flipY),Y.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),Y.pixelStorei(Y.UNPACK_ALIGNMENT,W.unpackAlignment);const Ei=Y.getParameter(Y.UNPACK_ROW_LENGTH),At=Y.getParameter(Y.UNPACK_IMAGE_HEIGHT),Rn=Y.getParameter(Y.UNPACK_SKIP_PIXELS),wi=Y.getParameter(Y.UNPACK_SKIP_ROWS),dn=Y.getParameter(Y.UNPACK_SKIP_IMAGES);Y.pixelStorei(Y.UNPACK_ROW_LENGTH,St.width),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,St.height),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,Ve),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,it),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,st);const Wi=P.isDataArrayTexture||P.isData3DTexture,kt=W.isDataArrayTexture||W.isData3DTexture;if(P.isRenderTargetTexture||P.isDepthTexture){const di=$e.get(P),tr=$e.get(W),zn=$e.get(di.__renderTarget),hi=$e.get(tr.__renderTarget);Ke.bindFramebuffer(Y.READ_FRAMEBUFFER,zn.__webglFramebuffer),Ke.bindFramebuffer(Y.DRAW_FRAMEBUFFER,hi.__webglFramebuffer);for(let qn=0;qn<Xe;qn++)Wi&&Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,$e.get(P).__webglTexture,j,st+qn),P.isDepthTexture?(kt&&Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,$e.get(W).__webglTexture,j,Rt+qn),Y.blitFramebuffer(Ve,it,Te,xe,je,Mt,Te,xe,Y.DEPTH_BUFFER_BIT,Y.NEAREST)):kt?Y.copyTexSubImage3D(qe,j,je,Mt,Rt+qn,Ve,it,Te,xe):Y.copyTexSubImage2D(qe,j,je,Mt,Rt+qn,Ve,it,Te,xe);Ke.bindFramebuffer(Y.READ_FRAMEBUFFER,null),Ke.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else kt?P.isDataTexture||P.isData3DTexture?Y.texSubImage3D(qe,j,je,Mt,Rt,Te,xe,Xe,Cn,ct,St.data):W.isCompressedArrayTexture?Y.compressedTexSubImage3D(qe,j,je,Mt,Rt,Te,xe,Xe,Cn,St.data):Y.texSubImage3D(qe,j,je,Mt,Rt,Te,xe,Xe,Cn,ct,St):P.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,j,je,Mt,Te,xe,Cn,ct,St.data):P.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,j,je,Mt,St.width,St.height,Cn,St.data):Y.texSubImage2D(Y.TEXTURE_2D,j,je,Mt,Te,xe,Cn,ct,St);Y.pixelStorei(Y.UNPACK_ROW_LENGTH,Ei),Y.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,At),Y.pixelStorei(Y.UNPACK_SKIP_PIXELS,Rn),Y.pixelStorei(Y.UNPACK_SKIP_ROWS,wi),Y.pixelStorei(Y.UNPACK_SKIP_IMAGES,dn),j===0&&W.generateMipmaps&&Y.generateMipmap(qe),Ke.unbindTexture()},this.copyTextureToTexture3D=function(P,W,te=null,ne=null,j=0){return P.isTexture!==!0&&(Fa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),te=arguments[0]||null,ne=arguments[1]||null,P=arguments[2],W=arguments[3],j=arguments[4]||0),Fa('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,W,te,ne,j)},this.initRenderTarget=function(P){$e.get(P).__webglFramebuffer===void 0&&N.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?N.setTextureCube(P,0):P.isData3DTexture?N.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?N.setTexture2DArray(P,0):N.setTexture2D(P,0),Ke.unbindTexture()},this.resetState=function(){I=0,D=0,F=null,Ke.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=wt._getDrawingBufferColorSpace(e),t.unpackColorSpace=wt._getUnpackColorSpace()}}class Kg extends An{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vi,this.environmentIntensity=1,this.environmentRotation=new Vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class k0 extends jn{constructor(e,t,s,a,l,u,f,h,p){super(e,t,s,a,l,u,f,h,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class gh extends fi{constructor(e=[new ut(0,-.5),new ut(.5,0),new ut(0,.5)],t=12,s=0,a=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:s,phiLength:a},t=Math.floor(t),a=Tn(a,0,Math.PI*2);const l=[],u=[],f=[],h=[],p=[],g=1/t,y=new Q,S=new ut,M=new Q,x=new Q,w=new Q;let v=0,m=0;for(let R=0;R<=e.length-1;R++)switch(R){case 0:v=e[R+1].x-e[R].x,m=e[R+1].y-e[R].y,M.x=m*1,M.y=-v,M.z=m*0,w.copy(M),M.normalize(),h.push(M.x,M.y,M.z);break;case e.length-1:h.push(w.x,w.y,w.z);break;default:v=e[R+1].x-e[R].x,m=e[R+1].y-e[R].y,M.x=m*1,M.y=-v,M.z=m*0,x.copy(M),M.x+=w.x,M.y+=w.y,M.z+=w.z,M.normalize(),h.push(M.x,M.y,M.z),w.copy(x)}for(let R=0;R<=t;R++){const L=s+R*g*a,A=Math.sin(L),B=Math.cos(L);for(let I=0;I<=e.length-1;I++){y.x=e[I].x*A,y.y=e[I].y,y.z=e[I].x*B,u.push(y.x,y.y,y.z),S.x=R/t,S.y=I/(e.length-1),f.push(S.x,S.y);const D=h[3*I+0]*A,F=h[3*I+1],b=h[3*I+0]*B;p.push(D,F,b)}}for(let R=0;R<t;R++)for(let L=0;L<e.length-1;L++){const A=L+R*e.length,B=A,I=A+e.length,D=A+e.length+1,F=A+1;l.push(B,I,F),l.push(D,F,I)}this.setIndex(l),this.setAttribute("position",new rn(u,3)),this.setAttribute("uv",new rn(f,2)),this.setAttribute("normal",new rn(p,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gh(e.points,e.segments,e.phiStart,e.phiLength)}}class zc extends fi{constructor(e=1,t=32,s=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:s,thetaLength:a},t=Math.max(3,t);const l=[],u=[],f=[],h=[],p=new Q,g=new ut;u.push(0,0,0),f.push(0,0,1),h.push(.5,.5);for(let y=0,S=3;y<=t;y++,S+=3){const M=s+y/t*a;p.x=e*Math.cos(M),p.y=e*Math.sin(M),u.push(p.x,p.y,p.z),f.push(0,0,1),g.x=(u[S]/e+1)/2,g.y=(u[S+1]/e+1)/2,h.push(g.x,g.y)}for(let y=1;y<=t;y++)l.push(y,y+1,0);this.setIndex(l),this.setAttribute("position",new rn(u,3)),this.setAttribute("normal",new rn(f,3)),this.setAttribute("uv",new rn(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ns extends fi{constructor(e=1,t=1,s=1,a=32,l=1,u=!1,f=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:s,radialSegments:a,heightSegments:l,openEnded:u,thetaStart:f,thetaLength:h};const p=this;a=Math.floor(a),l=Math.floor(l);const g=[],y=[],S=[],M=[];let x=0;const w=[],v=s/2;let m=0;R(),u===!1&&(e>0&&L(!0),t>0&&L(!1)),this.setIndex(g),this.setAttribute("position",new rn(y,3)),this.setAttribute("normal",new rn(S,3)),this.setAttribute("uv",new rn(M,2));function R(){const A=new Q,B=new Q;let I=0;const D=(t-e)/s;for(let F=0;F<=l;F++){const b=[],C=F/l,O=C*(t-e)+e;for(let $=0;$<=a;$++){const X=$/a,se=X*h+f,de=Math.sin(se),re=Math.cos(se);B.x=O*de,B.y=-C*s+v,B.z=O*re,y.push(B.x,B.y,B.z),A.set(de,D,re).normalize(),S.push(A.x,A.y,A.z),M.push(X,1-C),b.push(x++)}w.push(b)}for(let F=0;F<a;F++)for(let b=0;b<l;b++){const C=w[b][F],O=w[b+1][F],$=w[b+1][F+1],X=w[b][F+1];(e>0||b!==0)&&(g.push(C,O,X),I+=3),(t>0||b!==l-1)&&(g.push(O,$,X),I+=3)}p.addGroup(m,I,0),m+=I}function L(A){const B=x,I=new ut,D=new Q;let F=0;const b=A===!0?e:t,C=A===!0?1:-1;for(let $=1;$<=a;$++)y.push(0,v*C,0),S.push(0,C,0),M.push(.5,.5),x++;const O=x;for(let $=0;$<=a;$++){const se=$/a*h+f,de=Math.cos(se),re=Math.sin(se);D.x=b*re,D.y=v*C,D.z=b*de,y.push(D.x,D.y,D.z),S.push(0,C,0),I.x=de*.5+.5,I.y=re*.5*C+.5,M.push(I.x,I.y),x++}for(let $=0;$<a;$++){const X=B+$,se=O+$;A===!0?g.push(se,se+1,X):g.push(se+1,se,X),F+=3}p.addGroup(m,F,A===!0?1:2),m+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ns(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class vh extends fi{constructor(e=1,t=32,s=16,a=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:s,phiStart:a,phiLength:l,thetaStart:u,thetaLength:f},t=Math.max(3,Math.floor(t)),s=Math.max(2,Math.floor(s));const h=Math.min(u+f,Math.PI);let p=0;const g=[],y=new Q,S=new Q,M=[],x=[],w=[],v=[];for(let m=0;m<=s;m++){const R=[],L=m/s;let A=0;m===0&&u===0?A=.5/t:m===s&&h===Math.PI&&(A=-.5/t);for(let B=0;B<=t;B++){const I=B/t;y.x=-e*Math.cos(a+I*l)*Math.sin(u+L*f),y.y=e*Math.cos(u+L*f),y.z=e*Math.sin(a+I*l)*Math.sin(u+L*f),x.push(y.x,y.y,y.z),S.copy(y).normalize(),w.push(S.x,S.y,S.z),v.push(I+A,1-L),R.push(p++)}g.push(R)}for(let m=0;m<s;m++)for(let R=0;R<t;R++){const L=g[m][R+1],A=g[m][R],B=g[m+1][R],I=g[m+1][R+1];(m!==0||u>0)&&M.push(L,A,I),(m!==s-1||h<Math.PI)&&M.push(A,B,I)}this.setIndex(M),this.setAttribute("position",new rn(x,3)),this.setAttribute("normal",new rn(w,3)),this.setAttribute("uv",new rn(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class _h extends fi{constructor(e=1,t=.4,s=12,a=48,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:s,tubularSegments:a,arc:l},s=Math.floor(s),a=Math.floor(a);const u=[],f=[],h=[],p=[],g=new Q,y=new Q,S=new Q;for(let M=0;M<=s;M++)for(let x=0;x<=a;x++){const w=x/a*l,v=M/s*Math.PI*2;y.x=(e+t*Math.cos(v))*Math.cos(w),y.y=(e+t*Math.cos(v))*Math.sin(w),y.z=t*Math.sin(v),f.push(y.x,y.y,y.z),g.x=e*Math.cos(w),g.y=e*Math.sin(w),S.subVectors(y,g).normalize(),h.push(S.x,S.y,S.z),p.push(x/a),p.push(M/s)}for(let M=1;M<=s;M++)for(let x=1;x<=a;x++){const w=(a+1)*M+x-1,v=(a+1)*(M-1)+x-1,m=(a+1)*(M-1)+x,R=(a+1)*M+x;u.push(w,v,R),u.push(v,m,R)}this.setIndex(u),this.setAttribute("position",new rn(f,3)),this.setAttribute("normal",new rn(h,3)),this.setAttribute("uv",new rn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _h(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Fn extends Xo{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lh,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class O0 extends Fn{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ut(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Tn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new lt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new lt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new lt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Qg extends Xo{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lh,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=th,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class z0 extends An{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new lt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Q1 extends z0{constructor(e,t,s){super(e,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.groundColor=new lt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const td=new Kt,Zg=new Q,Jg=new Q;class Z1{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.map=null,this.mapPass=null,this.matrix=new Kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ph,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new nn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,s=this.matrix;Zg.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zg),Jg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Jg),t.updateMatrixWorld(),td.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(td),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(td)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class J1 extends Z1{constructor(){super(new ci(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,s=Bo*2*e.angle*this.focus,a=this.mapSize.width/this.mapSize.height,l=e.distance||t.far;(s!==t.fov||a!==t.aspect||l!==t.far)&&(t.fov=s,t.aspect=a,t.far=l,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class ew extends z0{constructor(e,t,s=0,a=Math.PI/3,l=0,u=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(An.DEFAULT_UP),this.updateMatrix(),this.target=new An,this.distance=s,this.angle=a,this.penumbra=l,this.decay=u,this.map=null,this.shadow=new J1}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class tw{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=e0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=e0();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function e0(){return performance.now()}const t0=new Kt;class nw{constructor(e,t,s=0,a=1/0){this.ray=new fh(e,t),this.near=s,this.far=a,this.camera=null,this.layers=new dh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return t0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(t0),this}intersectObject(e,t=!0,s=[]){return Wd(e,this,s,t),s.sort(n0),s}intersectObjects(e,t=!0,s=[]){for(let a=0,l=e.length;a<l;a++)Wd(e[a],this,s,t);return s.sort(n0),s}}function n0(r,e){return r.distance-e.distance}function Wd(r,e,t,s){let a=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(a=!1),a===!0&&s===!0){const l=r.children;for(let u=0,f=l.length;u<f;u++)Wd(l[u],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jd);const Bc="#F3F2EE",un="#111111",on="rgba(17,17,17,0.56)",zi="rgba(17,17,17,0.16)",Tt="#F3F2EE",$t="rgba(243,242,238,0.5)",tn="rgba(243,242,238,0.15)",Ft="#E8A45C",Da="#E5674F",No='"Inter Tight", Inter, system-ui, sans-serif',Ha="Inter, system-ui, sans-serif",Xa='"JetBrains Mono", ui-monospace, monospace',an=(r,e=0,t=1)=>Math.min(t,Math.max(e,r)),ns=(r,e,t)=>r+(e-r)*t,ni=(r,e,t)=>{const s=an((t-r)/(e-r));return s*s*(3-2*s)},Zr=r=>r<.5?4*r*r*r:1-Math.pow(-2*r+2,3)/2,is=r=>1-Math.pow(1-r,3);function Yo(r){let e=r>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function Dt(r,e,t,s,a,l){const u=Math.min(l,s/2,a/2);r.beginPath(),r.moveTo(e+u,t),r.arcTo(e+s,t,e+s,t+a,u),r.arcTo(e+s,t+a,e,t+a,u),r.arcTo(e,t+a,e,t,u),r.arcTo(e,t,e+s,t,u),r.closePath()}function Se(r,e,t,s,a){r.font=a.font,r.fillStyle=a.color??un,r.textAlign=a.align??"left",r.textBaseline=a.baseline??"alphabetic",r.letterSpacing=`${a.spacing??0}px`,r.fillText(e,t,s)}function $a(r,e,t,s=0){return r.font=t,r.letterSpacing=`${s}px`,r.measureText(e).width}function B0(r,e,t,s,a=0){const l=e.split(" "),u=[];let f="";for(const h of l){const p=f?`${f} ${h}`:h;f&&$a(r,p,t,a)>s?(u.push(f),f=h):f=p}return f&&u.push(f),u}function Bs(r,e,t,s,a,l,u){for(const f of B0(r,e,u.font,a,u.spacing))Se(r,f,t,s,u),s+=l;return s}function jt(r,e,t,s,a,l,u=1){r.strokeStyle=l,r.lineWidth=u,r.beginPath(),r.moveTo(e,t),r.lineTo(s,a),r.stroke()}function yh(r,e,t,s,a,l=3){r.strokeStyle=a,r.lineWidth=l,r.lineCap="round",r.lineJoin="round",r.beginPath(),r.moveTo(e-s*.5,t),r.lineTo(e-s*.12,t+s*.36),r.lineTo(e+s*.52,t-s*.38),r.stroke()}function iw(r,e,t,s,a,l=3){r.strokeStyle=a,r.lineWidth=l,r.lineCap="round",r.beginPath(),r.moveTo(e-s*.4,t-s*.4),r.lineTo(e+s*.4,t+s*.4),r.moveTo(e+s*.4,t-s*.4),r.lineTo(e-s*.4,t+s*.4),r.stroke()}function Xd(r,e,t){const s=an(t);return`rgb(${Math.round(ns(r[0],e[0],s))},${Math.round(ns(r[1],e[1],s))},${Math.round(ns(r[2],e[2],s))})`}const jd=[243,242,238],Yd=[232,164,92];function Dc(r,e,t,s=!0){const a=document.createElement("canvas");a.width=r,a.height=e,t(a.getContext("2d"));const l=new k0(a);return s&&(l.colorSpace=ti),l}const Hc=r=>(r.traverse(e=>{e.castShadow=!0,e.receiveShadow=!0}),r);function qd(r,e,t){const s=Yo(11);r.fillStyle=t?"#808080":"#2e241a",r.fillRect(0,0,e,e);for(let a=0;a<5200;a++){const l=s()*e,u=s()*e,f=180+s()*1100,h=.02+s()*.06,p=s()>.45;r.strokeStyle=t?`rgba(${p?255:0},${p?255:0},${p?255:0},${h*1.4})`:p?`rgba(176,132,86,${h})`:`rgba(0,0,0,${h*5})`,r.lineWidth=.6+s()*2.4;const g=s()*6.28;for(const y of[0,-e]){r.beginPath();let S=l;for(let M=0;M<=f;M+=22)S+=Math.sin((u+M)*.011+g)*.55,M===0?r.moveTo(u+M+y,S):r.lineTo(u+M+y,S);r.stroke()}}for(let a=0;a<26e3;a++){const l=s()*e,u=s()*e;r.fillStyle=t?`rgba(0,0,0,${.12+s()*.3})`:`rgba(0,0,0,${.25+s()*.4})`,r.fillRect(l,u,6+s()*30,1+s())}}function rw(r){const t=Dc(2048,2048,u=>qd(u,2048,!1)),s=Dc(2048/2,2048/2,u=>(u.scale(.5,.5),qd(u,2048,!0)),!1);for(const u of[t,s])u.wrapS=u.wrapT=Ga,u.repeat.set(7,12),u.anisotropy=r;const a=new Fn({map:t,bumpMap:s,bumpScale:.18,roughness:.3,envMapIntensity:.55}),l=new bt(new Sr(44,44).rotateX(-Math.PI/2),a);return l.renderOrder=10,l.receiveShadow=!0,l}const $d=(r,e=64)=>new gh(r.map(([t,s])=>new ut(t,s)),e);function sw(){const r=new ui,e=new O0({color:15921128,roughness:.28,clearcoat:.7,clearcoatRoughness:.2}),t=new bt($d([[0,0],[.11,0],[.15,.003],[.28,.044],[.332,.06],[.34,.056],[.335,.05],[.29,.034],[.15,.012],[.13,.016],[0,.016]]),e),s=new bt($d([[0,.012],[.1,.012],[.115,.02],[.165,.1],[.196,.18],[.206,.225],[.202,.232],[.194,.226],[.184,.18],[.152,.1],[.1,.04],[0,.036]]),e);s.position.y=.016;const a=new bt(new _h(.066,.015,14,28,Math.PI*1.15),e);a.position.set(.19,.135,0),a.rotation.z=-Math.PI*.575;const l=Dc(256,256,f=>{const h=f.createRadialGradient(128,128,20,128,128,128);h.addColorStop(0,"#c99562"),h.addColorStop(.75,"#a9713f"),h.addColorStop(.93,"#7b4a25"),h.addColorStop(1,"#55321a"),f.fillStyle=h,f.fillRect(0,0,256,256),f.fillStyle="#f3e7d3",f.shadowColor="#f3e7d3",f.shadowBlur=8;const p=(g,y,S)=>{f.beginPath(),f.moveTo(g,y+S*.9),f.bezierCurveTo(g-S*1.5,y-S*.1,g-S*.7,y-S*1.1,g,y-S*.35),f.bezierCurveTo(g+S*.7,y-S*1.1,g+S*1.5,y-S*.1,g,y+S*.9),f.fill()};p(128,92,46),p(128,140,36),p(128,178,25),f.fillRect(126,150,4,62)}),u=new bt(new zc(.189,48).rotateX(-Math.PI/2),new Fn({map:l,roughness:.55}));return u.position.y=.016+.2,r.add(t,s,a,u),Hc(r),u.castShadow=!1,r}function ow(){const r=new ui,e=.019,t=(a,l,u)=>{const f=new bt(a.rotateZ(-Math.PI/2),l);f.position.x=u,r.add(f)};t(new Ns(e,e,.78,6),new O0({color:15526111,roughness:.35,clearcoat:.6,flatShading:!0}),0),t(new Ns(.0045,e*.96,.075,24),new Fn({color:13214330,roughness:.8}),.4275),t(new Ns(4e-4,.0045,.02,16),new Fn({color:1842204,roughness:.4}),.475),t(new Ns(e*1.03,e*1.03,.055,24),new Fn({color:12434099,roughness:.3,metalness:1}),-.4175),t(new Ns(e*.95,e*.95,.045,24),new Fn({color:2828841,roughness:.9}),-.4675),r.position.y=e*Math.cos(Math.PI/6);const s=new ui;return s.add(r),Hc(s)}function aw(r){return Dc(640,370,e=>{e.fillStyle=r?"#121212":"#F3F2EE",e.fillRect(0,0,640,370);const t=r?"#F3F2EE":"#111111";e.fillStyle=t,e.font=`600 54px ${No}`,e.fillText("Edwin Villalta",44,96),e.font=`500 21px ${Xa}`,e.globalAlpha=.7,e.fillText("SOFTWARE DEVELOPER · QA",46,318),e.globalAlpha=1,e.fillStyle="#E8A45C",e.beginPath(),e.arc(586,78,12,0,Math.PI*2),e.fill()})}function lw(){const r=new ui,e=.45,t=.26,s=.0045,a=new Zi(e,s,t),l=new Fn({color:15328990,roughness:.9}),u=y=>new Fn({map:aw(y),roughness:.85}),f=u(!1),h=Yo(4);for(let y=0;y<6;y++){const S=new bt(a,[l,l,y===5?f:l,l,l,l]);S.position.set((h()-.5)*.02,s/2+y*s,(h()-.5)*.02),S.rotation.y=(h()-.5)*.09,r.add(S)}const p=new Fn({color:1315860,roughness:.9}),g=new bt(a,[p,p,u(!0),p,p,p]);return g.position.set(.3,s/2,.2),g.rotation.y=-.42,r.add(g),Hc(r)}function cw(){const r=new vh(.5,16,12),e=r.attributes.position;for(let t=0;t<e.count;t++){const s=e.getZ(t)+.5,a=s<.68?.42+.58*Math.sin(s/.68*Math.PI*.5):Math.pow(1-(s-.68)/.32,.75),l=e.getY(t);e.setXYZ(t,e.getX(t)*a,(l>0?l*.55:l)*a+s*s*.12,s)}return r.computeVertexNormals(),r}function uw(){const r=new ui,e=new bt($d([[0,0],[.15,0],[.166,.016],[.205,.25],[.212,.262],[.2,.266],[.19,.25],[.185,.2],[0,.2]]),new Fn({color:14276044,roughness:.9})),t=new bt(new zc(.19,40).rotateX(-Math.PI/2),new Fn({color:1906194,roughness:1}));t.position.y=.232,r.add(e,t);const s=cw(),a=new lt(8364166),l=new lt(12768944),u=[[9,.1,.215,.1,.03],[8,.36,.19,.094,.024],[7,.66,.155,.082,.018],[6,.95,.118,.066,.012],[5,1.2,.082,.048,.006],[3,1.42,.05,.032,0]],f=Yo(8);return u.forEach(([h,p,g,y,S],M)=>{const x=new Fn({color:a.clone().lerp(l,M/(u.length-1)),roughness:.62});for(let w=0;w<h;w++){const v=new ui;v.rotation.y=w/h*Math.PI*2+M*.7+(f()-.5)*.12,v.position.y=.236+M*.012;const m=new bt(s,x);m.scale.set(y,y*.5,g*(.94+f()*.12)),m.position.z=S,m.rotation.x=-p-(f()-.5)*.08,v.add(m),r.add(v)}}),Hc(r)}const fw=""+new URL("devlync-B8HpI9RZ.png",import.meta.url).href,dw=""+new URL("direct-english-8H0faA5W.png",import.meta.url).href,hw=""+new URL("electrodte-CpdL2mgj.png",import.meta.url).href,pw=""+new URL("evaapp-AISUDQ3Q.png",import.meta.url).href,mw=""+new URL("magnetohr-BCBku-hs.png",import.meta.url).href,gw=""+new URL("mineducyt-DGL_ez_f.png",import.meta.url).href,vw=""+new URL("qr-suite-ByOSwy0A.png",import.meta.url).href,_w=""+new URL("ugb-CiG9sqqC.png",import.meta.url).href;function yw(){var t;const r=new URLSearchParams(location.search).get("lang");return r==="es"||r==="en"?r:((t=navigator.languages)!=null&&t.length?navigator.languages:[navigator.language||"en"])[0].toLowerCase().startsWith("es")?"es":"en"}const Va="alexvillalta0108@gmail.com",Kd="https://www.linkedin.com/in/edwinalexandervillaltaortiz0108",Sw="linkedin.com/in/edwinalexandervillaltaortiz0108",Mw={ui:{role:"Desarrollador de Software · QA Analyst",kicker:"Portafolio · 2026",headline:["Software,","hecho y probado."],lede:"Soy Edwin Villalta, desarrollador de software y QA Analyst en El Salvador. Abre el libro para ver mi trabajo.",open:"Abrir el libro",close:"Cerrar",hintClosed:"Haz clic en el libro para abrirlo",hintOpen:"Clic en una mitad o arrastra el borde de la página · teclas ← →",prev:"Página anterior",next:"Página siguiente",contents:"Contenido",email:"Correo",location:"El Salvador",langLabel:"Idioma",canvasLabel:"Libro 3D interactivo con el portafolio de Edwin Villalta",flatNote:"Clic en una mitad para pasar la página · teclas ← →"},cover:{top:"EDWIN VILLALTA",title:"Portafolio",bottom:"Desarrollo de Software & QA",year:"2026"},endpaper:{line1:"Este libro pertenece a",line2:"Edwin Villalta",nav:["Clic en una mitad para pasar la página","Arrastra el borde para hojear","Teclas ← → · Esc para cerrar"]},contents:{title:"Contenido",label:"ÍNDICE",note:"Elige una entrada para saltar a esa página."},play:{idle:"EN PAUSA",playing:"REPRODUCIENDO"},profile:{name:"Perfil",kind:"Sobre mí",kicker:"PERFIL",when:"EL SALVADOR",title:"Construyo software y lo pruebo antes de que falle.",sub:"Desarrollador de Software · QA Analyst · Ingeniería en Sistemas (5.º año)",body:"Hoy desarrollo, en equipo, una aplicación web institucional para el MINEDUCYT, desde el análisis de requerimientos hasta la puesta en producción. Mi paso previo por QA me permite entregar software mantenible, probado y alineado con los criterios de aceptación.",items:[],facts:[["Ahora","MINEDUCYT · Desarrollo de Software"],["Antes","QA en Devlync y Roots"],["Estudios","Universidad Gerardo Barrios"],["Idiomas","Español nativo · Inglés B1"]],stack:[],fig:"Perfil en una terminal",platforms:"PLATAFORMAS"},cases:[{name:"Códigos QR dinámicos",logo:["mineducyt","qr-suite"],kind:"MINEDUCYT · Web",kicker:"MINEDUCYT",when:"DESDE JUL. 2026",title:"Códigos QR dinámicos",sub:"Desarrollador de Software y QA Analyst · Ministerio de Educación, Ciencia y Tecnología",body:"Aplicación web institucional para generar, personalizar y administrar códigos QR dinámicos con acortador de URL bajo dominio del Ministerio, para el material educativo impreso.",items:[{text:"Principal contribuidor del repositorio: más del 70 % de los commits."},{text:"Acceso con Google (Firebase Auth) y Firestore con reglas de seguridad y roles."},{text:"Creación paso a paso, personalización, importación, exportación y estadísticas con Recharts."},{text:"CI con GitHub Actions (lint, Vitest y build), Dependabot y despliegue en Vercel."}],stack:["React 19","Vite","Tailwind CSS","Firebase","Vitest","Vercel"],fig:"Del enlace al QR, y del QR a las estadísticas"},{name:"ElectroDTE",logo:"electrodte",kind:"Proyecto · Escritorio / Web",kicker:"PROYECTO",when:"ESCRITORIO / WEB",title:"ElectroDTE",sub:"Inventario y facturación electrónica para El Salvador",body:"Sistema de inventario y facturación electrónica (DTE) para El Salvador, integrado con el Ministerio de Hacienda.",items:[{text:"Inventario y facturación en un mismo sistema."},{text:"Documentos Tributarios Electrónicos transmitidos a Hacienda."},{text:"Disponible como aplicación de escritorio y web."}],stack:["React","Node.js","PostgreSQL"],fig:"De la venta al documento tributario"},{name:"Direct English",logo:"direct-english",kind:"Proyecto · App móvil",kicker:"PROYECTO",when:"APP MÓVIL",title:"Direct English",sub:"Aprender inglés desde cualquier lugar",body:"Aplicación móvil para aprender inglés desde cualquier lugar. Forma parte del curso de inglés en línea n.º 1 de América Latina.",items:[{text:"Acceso a lecciones desde el teléfono."},{text:"Recursos de estudio siempre a mano."},{text:"Seguimiento del progreso del estudiante."}],stack:["App móvil","E-learning"],fig:"Lecciones, recursos y progreso"},{name:"MagnetoHR",logo:"magnetohr",kind:"Proyecto · Web",kicker:"PROYECTO",when:"WEB",title:"MagnetoHR",sub:"Reclutamiento descentralizado con IA y blockchain",body:"Plataforma de reclutamiento descentralizada que usa IA y blockchain para innovar y agilizar el proceso de contratación.",items:[{text:"IA para agilizar la selección de candidatos."},{text:"Blockchain como base de una plataforma descentralizada."},{head:"Mi paso por Magneto HR",text:"Soporte técnico y empresarial, de enero a mayo de 2026."}],stack:["IA","Blockchain","Plataforma web"],fig:"Candidatos, coincidencias y bloques"},{name:"EvaApp",logo:"evaapp",kind:"Proyecto · App / Web",kicker:"PROYECTO",when:"APP / WEB",title:"EvaApp",sub:"Cuidadores locales para perros y gatos",body:"Plataforma que conecta a dueños de mascotas con cuidadores locales para perros y gatos.",items:[{text:"Hospedaje y guardería."},{text:"Paseos con cuidadores de la zona."},{text:"Visitas a domicilio."}],stack:["App móvil","Web","Marketplace"],fig:"Un paseo, de la reserva a la ruta"},{name:"Calidad de software",kind:"Experiencia · QA",kicker:"EXPERIENCIA",when:"2024 A 2026",title:"Calidad, de punta a punta.",sub:"QA manual y automatizado bajo Scrum",body:"Pruebas funcionales, de integración, de regresión y de estrés; APIs REST validadas con Postman y defectos gestionados en Jira.",items:[{head:"QA Analyst · Devlync Tech Company",logo:"devlync",meta:"ABR. A MAY. 2026",text:"Lideré el ciclo completo de QA: diseño de pruebas, ambientes, ejecución y cierre de defectos."},{head:"QA Analyst · Tecnologías Informáticas Roots",logo:"roots",meta:"ENE. 2025 A MAR. 2026",text:"Estrategias de pruebas manuales, funcionales, de integración y automatizadas."},{head:"Instructor de Programación · UGB",meta:"ABR. A JUN. 2024",text:"Enseñanza de lógica de programación y desarrollo de software."}],stack:["Selenium","Playwright","Cypress","JMeter","Postman","Jira"],fig:"Una corrida de pruebas, con su defecto"}],skills:{name:"Habilidades y formación",title:"Habilidades",kicker:"CAJA DE HERRAMIENTAS",groups:[{head:"Desarrollo",text:"React, Vite, Tailwind CSS, Node.js, Firebase (Auth y Firestore)"},{head:"Calidad (QA)",text:"Pruebas funcionales, de integración, de regresión, unitarias y de estrés"},{head:"Automatización",text:"Selenium, Playwright, Cypress, Vitest"},{head:"APIs y datos",text:"Postman para APIs REST, PostgreSQL (SQL), Firestore"},{head:"Flujo de trabajo",text:"Git, GitHub Actions, Vercel, Jira, Azure DevOps, Chrome DevTools"},{head:"Lenguajes y métodos",text:"JavaScript, Python, PHP · Scrum, Kanban, cascada"}]},education:{title:"Formación",kicker:"ESTUDIOS Y CERTIFICACIONES",studies:[{head:"Ingeniería en Sistemas Informáticos y Redes",meta:"5.º AÑO · EN CURSO",text:"Universidad Gerardo Barrios"},{head:"Aseguramiento de la Calidad de Software y Automatización de Pruebas",meta:"2025",text:"Escuela Superior de Innovación y Tecnología"}],certsLabel:"CERTIFICACIONES",certs:[{meta:"MAY. 2025",text:"QA Testing: Metodologías para la Gestión del Aseguramiento de la Calidad de Software"},{meta:"DIC. 2024",text:"Capacitación en Desarrollo Web: HTML y CSS"}],langsLabel:"IDIOMAS",langs:[{head:"Español",text:"Nativo"},{head:"Inglés",text:"B1 · Academia Europea"}]},contact:{name:"Contacto",kicker:"CONTACTO",title:"Hablemos.",body:"Disponible para proyectos de desarrollo de software y aseguramiento de calidad.",emailLabel:"CORREO",linkedinLabel:"LINKEDIN",locationLabel:"UBICACIÓN",location:"El Salvador"},back:{thanks:["¿Construimos algo","y lo probamos?"],sign:"ESCRÍBEME Y LO HABLAMOS"},terminal:[["whoami","edwin villalta · desarrollador de software y qa analyst"],["cat ahora.txt","app web institucional para el MINEDUCYT"],["stack --top","react · node.js · firebase · postgresql"],["qa --tools","selenium · playwright · cypress · jmeter · postman"],["estudios","ing. en sistemas informáticos y redes · 5.º año"]],viz:{scan:"ESCANÉAME",shortLink:"ENLACE CORTO",scans:"ESCANEOS",week:"ÚLTIMAS 12 SEMANAS",invoice:"FACTURA",item:"PRODUCTO",qty:"CANT.",amount:"IMPORTE",subtotal:"Subtotal",tax:"IVA 13 %",total:"Total",sent:"TRANSMITIDO",stock:"INVENTARIO",p1:"Cable HDMI 2 m",p2:"Teclado mecánico",p3:'Monitor 24"',p4:"Mouse inalámbrico",lesson:"LECCIÓN 12",progress:"PROGRESO",streak:"RACHA SEMANAL",tap:"toca para voltear",candidates:"CANDIDATOS",match:"COINCIDENCIA",chain:"CADENA DE BLOQUES",ai:"IA",walk:"Paseo en curso",walker:"con un cuidador de la zona",s1:"Hospedaje",s2:"Paseos",s3:"Guardería",s4:"Visitas",suite:"suite de regresión",passed:"APROBADAS",bug:"defecto reportado en Jira",fixed:"corregido · reejecutando",t1:"inicio de sesión con Google",t2:"crear QR paso a paso",t3:"personalizar marco y logotipo",t4:"API · POST /enlaces",t5:"exportar a PNG y SVG",t6:"control de acceso por roles",t7:"panel de estadísticas"}},xw={ui:{role:"Software Developer · QA Analyst",kicker:"Portfolio · 2026",headline:["Software,","built and tested."],lede:"I'm Edwin Villalta, a software developer and QA analyst in El Salvador. Open the book to see my work.",open:"Open the book",close:"Close",hintClosed:"Click the book to open it",hintOpen:"Click either half or drag a page by its edge · ← → keys",prev:"Previous page",next:"Next page",contents:"Contents",email:"Email",location:"El Salvador",langLabel:"Language",canvasLabel:"Interactive 3D book holding Edwin Villalta's portfolio",flatNote:"Click either half to turn the page · ← → keys"},cover:{top:"EDWIN VILLALTA",title:"Portfolio",bottom:"Software Development & QA",year:"2026"},endpaper:{line1:"This book belongs to",line2:"Edwin Villalta",nav:["Click either half to turn the page","Drag a page by its edge to leaf through","← → keys · Esc to close"]},contents:{title:"Contents",label:"INDEX",note:"Pick an entry to jump to that page."},play:{idle:"PAUSED",playing:"PLAYING"},profile:{name:"Profile",kind:"About me",kicker:"PROFILE",when:"EL SALVADOR",title:"I build software and test it before it breaks.",sub:"Software Developer · QA Analyst · Systems Engineering (5th year)",body:"Today I build, as part of a team, an institutional web app for MINEDUCYT, from requirements analysis through to production. My earlier years in QA let me ship software that is maintainable, tested and true to its acceptance criteria.",items:[],facts:[["Now","MINEDUCYT · Software Development"],["Before","QA at Devlync and Roots"],["Studies","Universidad Gerardo Barrios"],["Languages","Spanish native · English B1"]],stack:[],fig:"A profile in a terminal",platforms:"PLATFORMS"},cases:[{name:"Dynamic QR codes",logo:["mineducyt","qr-suite"],kind:"MINEDUCYT · Web",kicker:"MINEDUCYT",when:"SINCE JUL 2026",title:"Dynamic QR codes",sub:"Software Developer & QA Analyst · El Salvador's Ministry of Education, Science and Technology",body:"Institutional web app to generate, customise and manage dynamic QR codes, with a URL shortener on the Ministry's own domain, for printed educational material.",items:[{text:"Lead contributor to the repository: over 70% of the commits."},{text:"Google sign-in (Firebase Auth) and Firestore with security rules and roles."},{text:"Step-by-step creation, customisation, import, export and a Recharts stats panel."},{text:"CI on GitHub Actions (lint, Vitest and build), Dependabot and Vercel deploys."}],stack:["React 19","Vite","Tailwind CSS","Firebase","Vitest","Vercel"],fig:"From link to QR, and from QR to stats"},{name:"ElectroDTE",logo:"electrodte",kind:"Project · Desktop / Web",kicker:"PROJECT",when:"DESKTOP / WEB",title:"ElectroDTE",sub:"Inventory and e-invoicing for El Salvador",body:"Inventory and electronic invoicing (DTE) system for El Salvador, integrated with the Ministry of Finance.",items:[{text:"Inventory and invoicing in a single system."},{text:"Electronic tax documents sent to the tax authority."},{text:"Available as a desktop and a web application."}],stack:["React","Node.js","PostgreSQL"],fig:"From a sale to its tax document"},{name:"Direct English",logo:"direct-english",kind:"Project · Mobile app",kicker:"PROJECT",when:"MOBILE APP",title:"Direct English",sub:"Learning English from anywhere",body:"Mobile app to learn English from anywhere. Part of Latin America's no. 1 online English course.",items:[{text:"Lessons available from the phone."},{text:"Study resources always at hand."},{text:"Tracking of each student's progress."}],stack:["Mobile app","E-learning"],fig:"Lessons, resources and progress"},{name:"MagnetoHR",logo:"magnetohr",kind:"Project · Web",kicker:"PROJECT",when:"WEB",title:"MagnetoHR",sub:"Decentralised recruiting with AI and blockchain",body:"Decentralised recruiting platform that uses AI and blockchain to rethink and speed up the hiring process.",items:[{text:"AI to speed up candidate selection."},{text:"Blockchain as the base of a decentralised platform."},{head:"My time at Magneto HR",text:"Technical and business support, January to May 2026."}],stack:["AI","Blockchain","Web platform"],fig:"Candidates, matches and blocks"},{name:"EvaApp",logo:"evaapp",kind:"Project · App / Web",kicker:"PROJECT",when:"APP / WEB",title:"EvaApp",sub:"Local sitters for dogs and cats",body:"Platform that connects pet owners with local sitters for dogs and cats.",items:[{text:"Boarding and day care."},{text:"Walks with sitters nearby."},{text:"Home visits."}],stack:["Mobile app","Web","Marketplace"],fig:"A walk, from booking to route"},{name:"Software quality",kind:"Experience · QA",kicker:"EXPERIENCE",when:"2024 TO 2026",title:"Quality, end to end.",sub:"Manual and automated QA under Scrum",body:"Functional, integration, regression and stress testing; REST APIs validated with Postman and defects tracked in Jira.",items:[{head:"QA Analyst · Devlync Tech Company",logo:"devlync",meta:"APR TO MAY 2026",text:"Led the full QA cycle: test design, environments, execution and defect closure."},{head:"QA Analyst · Tecnologías Informáticas Roots",logo:"roots",meta:"JAN 2025 TO MAR 2026",text:"Manual, functional, integration and automated testing strategies."},{head:"Programming Instructor · UGB",meta:"APR TO JUN 2024",text:"Taught programming logic and software development."}],stack:["Selenium","Playwright","Cypress","JMeter","Postman","Jira"],fig:"A test run, defect included"}],skills:{name:"Skills and education",title:"Skills",kicker:"TOOLBOX",groups:[{head:"Development",text:"React, Vite, Tailwind CSS, Node.js, Firebase (Auth and Firestore)"},{head:"Quality (QA)",text:"Functional, integration, regression, unit and stress testing"},{head:"Automation",text:"Selenium, Playwright, Cypress, Vitest"},{head:"APIs and data",text:"Postman for REST APIs, PostgreSQL (SQL), Firestore"},{head:"Workflow",text:"Git, GitHub Actions, Vercel, Jira, Azure DevOps, Chrome DevTools"},{head:"Languages and methods",text:"JavaScript, Python, PHP · Scrum, Kanban, waterfall"}]},education:{title:"Education",kicker:"STUDIES AND CERTIFICATIONS",studies:[{head:"Computer Systems and Network Engineering",meta:"5TH YEAR · IN PROGRESS",text:"Universidad Gerardo Barrios"},{head:"Software Quality Assurance and Test Automation",meta:"2025",text:"Escuela Superior de Innovación y Tecnología"}],certsLabel:"CERTIFICATIONS",certs:[{meta:"MAY 2025",text:"QA Testing: Methodologies for Managing Software Quality Assurance"},{meta:"DEC 2024",text:"Web Development Training: HTML and CSS"}],langsLabel:"LANGUAGES",langs:[{head:"Spanish",text:"Native"},{head:"English",text:"B1 · Academia Europea"}]},contact:{name:"Contact",kicker:"CONTACT",title:"Let's talk.",body:"Available for software development and quality assurance work.",emailLabel:"EMAIL",linkedinLabel:"LINKEDIN",locationLabel:"LOCATION",location:"El Salvador"},back:{thanks:["Let's build something","and test it."],sign:"DROP ME A LINE"},terminal:[["whoami","edwin villalta · software developer & qa analyst"],["cat now.txt","institutional web app for MINEDUCYT"],["stack --top","react · node.js · firebase · postgresql"],["qa --tools","selenium · playwright · cypress · jmeter · postman"],["studies","computer systems & network engineering · 5th year"]],viz:{scan:"SCAN ME",shortLink:"SHORT LINK",scans:"SCANS",week:"LAST 12 WEEKS",invoice:"INVOICE",item:"ITEM",qty:"QTY",amount:"AMOUNT",subtotal:"Subtotal",tax:"VAT 13%",total:"Total",sent:"SENT",stock:"INVENTORY",p1:"HDMI cable 2 m",p2:"Mechanical keyboard",p3:'24" monitor',p4:"Wireless mouse",lesson:"LESSON 12",progress:"PROGRESS",streak:"WEEKLY STREAK",tap:"tap to flip",candidates:"CANDIDATES",match:"MATCH",chain:"BLOCKCHAIN",ai:"AI",walk:"Walk in progress",walker:"with a sitter nearby",s1:"Boarding",s2:"Walks",s3:"Day care",s4:"Visits",suite:"regression suite",passed:"PASSED",bug:"defect filed in Jira",fixed:"fixed · re-running",t1:"sign in with Google",t2:"create a QR step by step",t3:"customise frame and logo",t4:"API · POST /links",t5:"export to PNG and SVG",t6:"role-based access control",t7:"statistics panel"}},i0={es:Mw,en:xw},Ew=[["qr-suite","QR Suite"],["electrodte","ElectroDTE"],["direct-english","Direct English"],["magnetohr","MagnetoHR"],["evaapp","EvaApp"]];function H0(r){return[{name:r.profile.name,kind:r.profile.kind,spread:1},...r.cases.map((e,t)=>({name:e.name,kind:e.kind,spread:2+t})),{name:r.skills.name,kind:r.education.title,spread:8},{name:r.contact.name,kind:r.contact.location,spread:9}]}const pt=(r,e=400)=>`${e} ${r}px ${Xa}`,_r=(r,e=400)=>`${e} ${r}px ${Ha}`,ss=(r,e=600)=>`${e} ${r}px ${No}`,ww=(r,e,t,s,a)=>{for(let y=0;y<3;y++)r.fillStyle=tn,r.beginPath(),r.arc(44+y*30,40,9,0,Math.PI*2),r.fill();Se(r,"edwin@portfolio: ~",e/2,47,{font:pt(20),color:$t,align:"center"}),jt(r,0,78,e,78,tn);const l=24;let u=.5;const f=a.terminal.map(([y])=>{const S=u,M=S+y.length/l;return u=M+.9,{start:S,typed:M}}),h=s%(u+2.6);let p=150;const g=64;a.terminal.forEach(([y,S],M)=>{const x=f[M];if(h<x.start)return;const w=Math.floor(an((h-x.start)*l,0,y.length));Se(r,"$",g,p,{font:pt(28,500),color:Ft}),Se(r,y.slice(0,w),g+36,p,{font:pt(28,500),color:Tt}),h<x.typed+.3&&Math.floor(h*2.5)%2===0&&(r.fillStyle=Tt,r.fillRect(g+36+w*16.8+4,p-26,14,32)),h>=x.typed+.3&&(r.globalAlpha=ni(x.typed+.3,x.typed+.55,h),Se(r,S,g+36,p+46,{font:pt(26),color:$t}),r.globalAlpha=1),p+=108}),h>=u&&Math.floor(h*2.5)%2===0?(Se(r,"$",g,p,{font:pt(28,500),color:Ft}),r.fillStyle=Tt,r.fillRect(g+40,p-26,14,32)):h>=u&&Se(r,"$",g,p,{font:pt(28,500),color:Ft})},Jr=29,nd=(()=>{const r=Yo(7),e=[],t=[],s=(l,u)=>{for(const[f,h]of[[0,0],[Jr-7,0],[0,Jr-7]]){const p=l-f,g=u-h;if(p>=0&&p<7&&g>=0&&g<7)return Math.max(Math.abs(p-3),Math.abs(g-3))!==2?1:0;if(p>=-1&&p<8&&g>=-1&&g<8)return 0}return-1};for(let l=0;l<Jr;l++){e.push([]),t.push([]);for(let u=0;u<Jr;u++){const f=s(u,l);e[l].push(f===-1?r()>.52:f===1),t[l].push(f===-1?.08+r()*.92:.02)}}const a=Array.from({length:12},(l,u)=>.3+r()*.5+u*.015);return{on:e,order:t,bars:a}})(),Tw=(r,e,t,s,a)=>{const l=s%11,u=464,f=u/Jr,h=124,p=(t-u)/2-24,g=ni(.3,2.8,l),y=ni(3,3.7,l),S=ni(4.3,5.3,l),M=ni(5.4,6,l),x=Xd(jd,Yd,S);r.globalAlpha=y,Dt(r,h-34,p-34,u+68,u+122,26),r.strokeStyle=x,r.lineWidth=4,r.stroke(),Se(r,a.viz.scan,h+u/2,p+u+58,{font:pt(26,500),color:x,align:"center",spacing:6}),r.globalAlpha=1,r.fillStyle=x;const w=(Jr-1)/2;for(let I=0;I<Jr;I++)for(let D=0;D<Jr;D++){if(!nd.on[I][D]||M>.01&&Math.abs(D-w)<=3&&Math.abs(I-w)<=3)continue;const F=an((g-nd.order[I][D])*9);if(F<=0)continue;const b=f*(.35+.65*is(F))-1.5;r.globalAlpha=F,r.fillRect(h+D*f+(f-b)/2,p+I*f+(f-b)/2,b,b)}r.globalAlpha=M,Dt(r,h+(w-2.5)*f,p+(w-2.5)*f,f*6,f*6,14),r.fillStyle=x,r.fill(),Se(r,"E",h+u/2+1,p+u/2+22,{font:ss(62,700),color:un,align:"center"}),r.globalAlpha=1;const v=760;Se(r,a.viz.shortLink,v,110,{font:pt(20),color:$t,spacing:3});const m="/r/7kD2a",R=Math.floor(an((l-.5)*7,0,m.length));Se(r,m.slice(0,R),v,172,{font:pt(46,500),color:Tt}),l<2.4&&Math.floor(l*2.5)%2===0&&(r.fillStyle=Ft,r.fillRect(v+R*27.6+6,132,20,46)),jt(r,v,214,v+460,214,tn);const L=ni(6,6.5,l);r.globalAlpha=L,Se(r,a.viz.scans,v,272,{font:pt(20),color:$t,spacing:3});const A=Math.round(1284*is(an((l-6.1)/2.6)));Se(r,A.toLocaleString("en-US"),v-4,392,{font:ss(124),color:Tt,spacing:-4});const B=596;nd.bars.forEach((I,D)=>{const F=is(an((l-6.3-D*.12)/.8)),b=150*I*F;r.fillStyle=D===11?Ft:"rgba(243,242,238,0.34)",Dt(r,v+D*39,B-b,26,Math.max(b,2),5),r.fill()}),jt(r,v,B+14,v+460,B+14,tn),Se(r,a.viz.week,v,B+52,{font:pt(18),color:$t,spacing:3}),r.globalAlpha=1},r0=[{key:"p1",qty:2,price:6.5,stock:48},{key:"p2",qty:1,price:45,stock:20},{key:"p3",qty:1,price:129,stock:9},{key:"p4",qty:3,price:12.9,stock:60}],Aw=(r,e,t,s,a)=>{const l=s%10.5,u=96,f=54,h=620,p=t-108;Dt(r,u,f,h,p,12),r.fillStyle=Bc,r.fill();const g=u+44,y=u+h-44;Se(r,a.viz.invoice,g,f+62,{font:ss(34),color:un}),Se(r,"DTE-01 · 000184",y,f+60,{font:pt(19),color:"rgba(17,17,17,.55)",align:"right"}),jt(r,g,f+88,y,f+88,"rgba(17,17,17,.9)",2),Se(r,a.viz.item,g,f+124,{font:pt(16),color:"rgba(17,17,17,.55)",spacing:2}),Se(r,a.viz.qty,g+330,f+124,{font:pt(16),color:"rgba(17,17,17,.55)",spacing:2,align:"right"}),Se(r,a.viz.amount,y,f+124,{font:pt(16),color:"rgba(17,17,17,.55)",spacing:2,align:"right"});let S=0;r0.forEach((R,L)=>{const A=ni(.7+L*.95,1.15+L*.95,l);if(S+=R.qty*R.price*A,A<=0)return;const B=f+176+L*56;r.globalAlpha=A;const I=(1-A)*-16;Se(r,a.viz[R.key],g+I,B,{font:_r(24,500),color:un}),Se(r,String(R.qty),g+330+I,B,{font:pt(22),color:un,align:"right"}),Se(r,(R.qty*R.price).toFixed(2),y+I,B,{font:pt(22),color:un,align:"right"}),r.globalAlpha=1,jt(r,g,B+20,y,B+20,"rgba(17,17,17,.12)")});const M=f+p-150,x=S*.13;[[a.viz.subtotal,S,!1],[a.viz.tax,x,!1],[a.viz.total,S+x,!0]].forEach(([R,L,A],B)=>{const I=M+B*42+(A?10:0);Se(r,R,g+300,I,{font:A?_r(26,600):_r(22),color:un}),Se(r,`$ ${L.toFixed(2)}`,y,I,{font:pt(A?28:22,A?500:400),color:un,align:"right"})});const v=an((l-5.4)/.35);if(v>0){r.save(),r.translate(g+118,M+30),r.rotate(-.2);const R=ns(1.7,1,is(v));r.scale(R,R),r.globalAlpha=v*.92,r.strokeStyle="#B4541E",r.lineWidth=5,r.beginPath(),r.arc(0,0,92,0,Math.PI*2),r.stroke(),r.lineWidth=2,r.beginPath(),r.arc(0,0,80,0,Math.PI*2),r.stroke(),yh(r,0,-22,44,"#B4541E",6),Se(r,a.viz.sent,0,40,{font:pt(18,500),color:"#B4541E",align:"center",spacing:2}),r.restore(),r.globalAlpha=1}const m=800;Se(r,a.viz.stock,m,110,{font:pt(20),color:$t,spacing:3}),r0.forEach((R,L)=>{const A=ni(.7+L*.95,1.5+L*.95,l),B=R.stock-R.qty*A,I=190+L*128;Se(r,a.viz[R.key],m,I,{font:_r(24,500),color:Tt}),Se(r,String(Math.round(B)),m+440,I,{font:pt(26,500),color:A>0&&A<1?Ft:Tt,align:"right"}),Dt(r,m,I+24,440,10,5),r.fillStyle=tn,r.fill(),Dt(r,m,I+24,440*B/60,10,5),r.fillStyle=B<10?Ft:Tt,r.fill()})},wc=[["Hello","Hola"],["Thank you","Gracias"],["See you soon","Hasta pronto"]],Cw=(r,e,t,s,a)=>{const u=s%9,f=168,h=340,p=44,g=t-88;Dt(r,f,p,h,g,46),r.strokeStyle=Tt,r.lineWidth=3,r.stroke(),Dt(r,f+h/2-48,p+20,96,14,7),r.fillStyle=tn,r.fill(),Se(r,a.viz.lesson,f+h/2,p+96,{font:pt(18),color:$t,align:"center",spacing:3});const y=u/1.5,S=Math.floor(y/2)%wc.length,M=Math.floor(y)%2,x=y%1,w=x>.82?Math.abs(Math.cos((x-.82)/.18*Math.PI)):1,v=x>.91?(M+1)%2:M,m=x>.91&&M===1?wc[(S+1)%wc.length][0]:wc[S][v];r.save(),r.translate(f+h/2,p+270),r.scale(Math.max(w,.02),1),Dt(r,-130,-120,260,240,22),r.fillStyle=v===0?Tt:Ft,r.fill(),Se(r,m,0,14,{font:ss(m.length>9?34:44),color:un,align:"center"}),Se(r,v===0?"EN":"ES",0,-76,{font:pt(16,500),color:"rgba(17,17,17,.5)",align:"center",spacing:3}),r.restore(),Se(r,a.viz.tap,f+h/2,p+438,{font:_r(19),color:$t,align:"center"}),Dt(r,f+44,p+g-96,h-88,10,5),r.fillStyle=tn,r.fill(),Dt(r,f+44,p+g-96,(h-88)*(u/9),10,5),r.fillStyle=Tt,r.fill(),Dt(r,f+h/2-60,p+g-34,120,6,3),r.fillStyle=tn,r.fill();const R=690;Se(r,a.viz.progress,R,110,{font:pt(20),color:$t,spacing:3});const L=Zr(an(u/(9-1.2))),A=R+150,B=300;r.lineWidth=24,r.strokeStyle=tn,r.beginPath(),r.arc(A,B,132,0,Math.PI*2),r.stroke(),r.strokeStyle=Ft,r.lineCap="round",r.beginPath(),r.arc(A,B,132,-Math.PI/2,-Math.PI/2+Math.PI*2*Math.max(L,.001)),r.stroke(),r.lineCap="butt",Se(r,`${Math.round(L*100)}%`,A,B+30,{font:ss(84),color:Tt,align:"center",spacing:-2});const I=R+360;for(let D=0;D<4;D++){const F=L*4>D+.6,b=196+D*62;r.beginPath(),r.arc(I+14,b-8,14,0,Math.PI*2),F?(r.fillStyle=Tt,r.fill(),yh(r,I+14,b-8,15,un,3)):(r.strokeStyle=$t,r.lineWidth=2,r.stroke()),Dt(r,I+46,b-16,150-D*18,14,7),r.fillStyle=F?$t:tn,r.fill()}Se(r,a.viz.streak,R,540,{font:pt(20),color:$t,spacing:3});for(let D=0;D<7;D++){const F=u/9>(D+.5)/7.5;r.beginPath(),r.arc(R+22+D*74,604,22,0,Math.PI*2),F?(r.fillStyle=D===6?Ft:Tt,r.fill()):(r.strokeStyle=tn,r.lineWidth=3,r.stroke())}},Na=(()=>{const r=Yo(21),e=Array.from({length:10},(a,l)=>{const u=l/10*Math.PI*2-Math.PI/2+(r()-.5)*.2,f=.86+r()*.2;return{x:Math.cos(u)*330*f,y:Math.sin(u)*190*f,score:Math.round(52+r()*40)}});e[2].score=97,e[6].score=93,e[8].score=91;const t=[...e.keys()].sort((a,l)=>e[l].score-e[a].score).slice(0,3),s=Array.from({length:6},()=>`0x${Math.floor(r()*4095).toString(16).padStart(3,"0")}…${Math.floor(r()*255).toString(16).padStart(2,"0")}`);return{nodes:e,top:t,hashes:s}})(),Rw=(r,e,t,s,a)=>{const l=s%11,u=440,f=270,h=ni(5.5,6.1,l);Se(r,a.viz.candidates,64,76,{font:pt(20),color:$t,spacing:3}),Na.nodes.forEach((M,x)=>{const w=.5+x*.47,v=an((l-w)/.45),R=Na.top.includes(x)?h:0;jt(r,u,f,u+M.x,f+M.y,R>0?Xd(jd,Yd,R):tn,1+R*2),v>0&&v<1&&(r.fillStyle=Tt,r.beginPath(),r.arc(u+M.x*v,f+M.y*v,6,0,Math.PI*2),r.fill());const L=u+M.x,A=f+M.y;if(r.fillStyle="#111",r.beginPath(),r.arc(L,A,24,0,Math.PI*2),r.fill(),r.strokeStyle=tn,r.lineWidth=3,r.stroke(),v>=1){const B=is(an((l-w-.45)/.5));r.strokeStyle=R>0?Xd(jd,Yd,R):Tt,r.lineWidth=4,r.beginPath(),r.arc(L,A,24,-Math.PI/2,-Math.PI/2+Math.PI*2*(M.score/100)*B),r.stroke(),Se(r,String(Math.round(M.score*B)),L,A+7,{font:pt(18,500),color:R>0?Ft:Tt,align:"center"})}});const p=1+Math.sin(l*3)*.03;r.fillStyle=Tt,r.beginPath(),r.arc(u,f,58*p,0,Math.PI*2),r.fill(),Se(r,a.viz.ai,u,f+16,{font:ss(44,700),color:un,align:"center"});const g=900;Se(r,a.viz.match,g,76,{font:pt(20),color:$t,spacing:3}),Na.top.forEach((M,x)=>{const w=ni(5.7+x*.3,6.1+x*.3,l);if(w<=0)return;r.globalAlpha=w;const v=150+x*96;Se(r,`#${String(M+1).padStart(2,"0")}`,g,v,{font:pt(24),color:$t}),Se(r,`${Na.nodes[M].score}%`,g+364,v,{font:ss(46),color:x===0?Ft:Tt,align:"right"}),Dt(r,g+76,v-22,150,12,6),r.fillStyle=tn,r.fill(),Dt(r,g+76,v+2,96,10,5),r.fill(),jt(r,g,v+36,g+364,v+36,tn),r.globalAlpha=1});const y=t-128;Se(r,a.viz.chain,64,y-24,{font:pt(20),color:$t,spacing:3});const S=(e-128-130)/6;Na.hashes.forEach((M,x)=>{const w=is(an((l-6.6-x*.5)/.45));if(w<=0)return;const v=64+x*(S+26);r.globalAlpha=w,x>0&&jt(r,v-26,y+36,v,y+36,$t,2);const m=l<6.6+(x+1)*.5+.2||x===5;Dt(r,v,y+(1-w)*18,S,72,10),r.strokeStyle=m?Ft:$t,r.lineWidth=2,r.stroke(),Se(r,M,v+S/2,y+44+(1-w)*18,{font:pt(20),color:m?Ft:Tt,align:"center"}),r.globalAlpha=1})},Ot=(()=>{const r=[0,150,330,470,690,860,1040,1190,1328],e=[0,120,270,400,560,716],t=[[150,560],[150,400],[330,400],[330,270],[690,270],[690,120],[1040,120],[1040,400],[860,400]];let s=0;const a=t.slice(1).map((u,f)=>{const h=t[f],p=Math.abs(u[0]-h[0])+Math.abs(u[1]-h[1]);return s+=p,p});return{xs:r,ys:e,route:t,segs:a,len:s,pins:[[470,120],[860,270],[1190,270],[470,560]]}})(),bw=(r,e,t,s,a)=>{const u=s%11;r.fillStyle="rgba(243,242,238,0.06)";for(let v=0;v<Ot.ys.length-1;v++)for(let m=0;m<Ot.xs.length-1;m++)Dt(r,Ot.xs[m]+14,Ot.ys[v]+14,Ot.xs[m+1]-Ot.xs[m]-28,Ot.ys[v+1]-Ot.ys[v]-28,10),r.fill();Dt(r,Ot.xs[3]+14,Ot.ys[2]+14,Ot.xs[4]-Ot.xs[3]-28,Ot.ys[3]-Ot.ys[2]-28,10),r.fillStyle="rgba(243,242,238,0.1)",r.fill();for(let v=0;v<5;v++)r.beginPath(),r.arc(Ot.xs[3]+52+v*36,Ot.ys[2]+60+v%2*34,12,0,Math.PI*2),r.fill();const f=Zr(an((u-.6)/(11-3.2)));let h=f*Ot.len,p=Ot.route[0][0],g=Ot.route[0][1];r.strokeStyle=Ft,r.lineWidth=7,r.lineCap="round",r.lineJoin="round",r.beginPath(),r.moveTo(p,g);for(let v=0;v<Ot.segs.length&&h>0;v++){const m=Ot.route[v],R=Ot.route[v+1],L=Math.min(1,h/Ot.segs[v]);p=ns(m[0],R[0],L),g=ns(m[1],R[1],L),r.lineTo(p,g),h-=Ot.segs[v]}r.stroke(),r.setLineDash([4,14]),r.strokeStyle="rgba(232,164,92,0.35)",r.lineWidth=4,r.beginPath(),Ot.route.forEach(([v,m],R)=>R?r.lineTo(v,m):r.moveTo(v,m)),r.stroke(),r.setLineDash([]),Ot.pins.forEach(([v,m],R)=>{const L=(u*.6+R*.27)%1;r.strokeStyle=`rgba(243,242,238,${.5*(1-L)})`,r.lineWidth=2,r.beginPath(),r.arc(v,m,14+L*26,0,Math.PI*2),r.stroke(),r.fillStyle=Tt,r.beginPath(),r.arc(v,m,12,0,Math.PI*2),r.fill()});const[y,S]=Ot.route[0];Dt(r,y-16,S-16,32,32,7),r.fillStyle=Tt,r.fill(),r.fillStyle="rgba(232,164,92,0.28)",r.beginPath(),r.arc(p,g,30+Math.sin(u*5)*4,0,Math.PI*2),r.fill(),r.fillStyle=Ft,r.beginPath(),r.arc(p,g,15,0,Math.PI*2),r.fill(),r.strokeStyle=un,r.lineWidth=3,r.stroke();let M=e-40;[a.viz.s4,a.viz.s3,a.viz.s2,a.viz.s1].forEach((v,m)=>{r.font=_r(20,500);const R=r.measureText(v).width+36;M-=R;const L=m===2;Dt(r,M,t-84,R,44,22),r.fillStyle=L?Ft:"rgba(17,17,17,0.9)",r.fill(),L||(r.strokeStyle=tn,r.lineWidth=2,r.stroke()),Se(r,v,M+R/2,t-55,{font:_r(20,500),color:L?un:Tt,align:"center"}),M-=12}),Dt(r,40,t-196,420,156,18),r.fillStyle="rgba(17,17,17,0.94)",r.fill(),r.strokeStyle=tn,r.lineWidth=2,r.stroke(),Se(r,a.viz.walk,70,t-142,{font:_r(28,600),color:Tt}),Se(r,a.viz.walker,70,t-108,{font:_r(20),color:$t});const x=Math.floor(f*30),w=Math.floor(f*30*60%60);Se(r,`${String(x).padStart(2,"0")}:${String(w).padStart(2,"0")}`,430,t-142,{font:pt(24,500),color:Ft,align:"right"}),Dt(r,70,t-82,360,8,4),r.fillStyle=tn,r.fill(),Dt(r,70,t-82,360*Math.max(f,.01),8,4),r.fillStyle=Ft,r.fill()},Ao=["t1","t2","t3","t4","t5","t6","t7"],Pw=(r,e,t,s,a)=>{const l=s%13,u=64;Se(r,"$",u,84,{font:pt(24,500),color:Ft}),Se(r,`test --suite "${a.viz.suite}"`,u+32,84,{font:pt(24,500),color:Tt}),jt(r,u,112,812,112,tn);const f=4,h=8.6,p=9.8;let g=0,y=0,S=0;Ao.forEach((L,A)=>{const B=.6+A*.85,I=B+.75,D=170+A*68;let F="pending";l>=I?F="pass":l>=B&&(F="running"),A===f&&l>=I&&(F=l>=p?"pass":l>=h?"running":"fail"),F==="pass"&&g++,F==="fail"&&y++,(F==="pass"||F==="fail")&&S++;const b=u+16;if(F==="pending"?(r.fillStyle=tn,r.beginPath(),r.arc(b,D-8,6,0,Math.PI*2),r.fill()):F==="running"?(r.strokeStyle=Ft,r.lineWidth=4,r.lineCap="round",r.beginPath(),r.arc(b,D-8,13,l*9,l*9+4.2),r.stroke(),r.lineCap="butt"):F==="pass"?yh(r,b,D-8,22,Tt,4):iw(r,b,D-8,22,Da,4),Se(r,a.viz[L],u+56,D,{font:pt(23),color:F==="pending"?$t:F==="fail"?Da:Tt}),F==="pass"||F==="fail"){const C=180+A*137%420;Se(r,`${C} ms`,812,D,{font:pt(19),color:$t,align:"right"})}});const M=ni(7.2,7.6,l)*(1-ni(10.6,11,l));if(M>0){r.globalAlpha=M;const L=170+f*68+18,A=l>=h,B=A?a.viz.fixed:`QA-142 · ${a.viz.bug}`;r.font=pt(18,500);const I=r.measureText(B).width+32;Dt(r,u+56,L,I,34,8),r.fillStyle=A?Ft:Da,r.fill(),Se(r,B,u+72,L+24,{font:pt(18,500),color:un}),r.globalAlpha=1}const x=1080,w=300,v=140;r.lineWidth=26,r.strokeStyle=tn,r.beginPath(),r.arc(x,w,v,0,Math.PI*2),r.stroke();const m=-Math.PI/2,R=g/Ao.length*Math.PI*2;g&&(r.strokeStyle=Tt,r.beginPath(),r.arc(x,w,v,m,m+R),r.stroke()),y&&(r.strokeStyle=Da,r.beginPath(),r.arc(x,w,v,m+R,m+R+y/Ao.length*Math.PI*2),r.stroke()),Se(r,`${g}/${Ao.length}`,x,w+30,{font:ss(88),color:Tt,align:"center",spacing:-2}),Se(r,a.viz.passed,x,w+v+76,{font:pt(20),color:$t,align:"center",spacing:3}),Dt(r,x-190,w+v+116,380,10,5),r.fillStyle=tn,r.fill(),Dt(r,x-190,w+v+116,380*Math.max(S/Ao.length,.01),10,5),r.fillStyle=y?Da:g===Ao.length?Ft:Tt,r.fill()},As={terminal:ww,qr:Tw,invoice:Aw,english:Cw,magneto:Rw,eva:bw,runner:Pw},zt=1440,Nc=900,Un=9,tt=84,Yt=(r,e=400)=>`${e} ${r}px ${Xa}`,mn=(r,e=400)=>`${e} ${r}px ${Ha}`,Bi=(r,e=600)=>`${e} ${r}px ${No}`,qo=r=>String(r).padStart(2,"0");function $o(r,e){r.fillStyle=Bc,r.fillRect(0,0,zt,Nc);const t=e==="R"?r.createLinearGradient(0,0,130,0):r.createLinearGradient(zt,0,zt-130,0);t.addColorStop(0,"rgba(30,24,16,0.14)"),t.addColorStop(.35,"rgba(30,24,16,0.04)"),t.addColorStop(1,"rgba(30,24,16,0)"),r.fillStyle=t,r.fillRect(0,0,zt,Nc)}function Ka(r,e,t){Se(r,e,tt,92,{font:Yt(21,500),color:un,spacing:2.5}),Se(r,t,zt-tt,92,{font:Yt(21),color:on,spacing:2.5,align:"right"}),jt(r,tt,116,zt-tt,116,un,2)}function Vc(r,e,t=zt-tt*2){for(const a of[104,92,80])if($a(r,e,Bi(a),-a*.03)<=t)return Se(r,e,tt-4,232,{font:Bi(a),spacing:-a*.03}),232;const s=B0(r,e,Bi(72),t,-2);return s.forEach((a,l)=>Se(r,a,tt-3,206+l*78,{font:Bi(72),spacing:-2})),206+(s.length-1)*78}const V0={};function Uc(r,e,t,s,a,l,u){const f=e?V0[e]:void 0;if(!f)return 0;const h=f.naturalWidth||300,p=f.naturalHeight||150,g=Math.min(a/h,l/p),y=h*g,S=p*g;return r.drawImage(f,u==="right"?t-y:t,s+(l-S)/2,y,S),y}function Lw(r,e,t,s){const a=[[]];let l=0;for(const u of e){const f=$a(r,u,Yt(21,500),.5)+40;l+f>s&&a[a.length-1].length&&(a.push([]),l=0),a[a.length-1].push({label:u,w:f}),l+=f+12}a.forEach((u,f)=>{const h=t-48-(a.length-1-f)*60;let p=tt;for(const{label:g,w:y}of u)Dt(r,p,h,y,48,24),r.strokeStyle="rgba(17,17,17,0.45)",r.lineWidth=1.5,r.stroke(),Se(r,g,p+20,h+32,{font:Yt(21,500),spacing:.5}),p+=y+12})}function Iw(r,e,t,s,a){e.forEach((l,u)=>{jt(r,t,s-30,t+a,s-30,zi),l.head?(l.meta?(Se(r,l.meta,t,s,{font:Yt(18,500),color:on,spacing:2}),Uc(r,l.logo,t+a,s-26,180,40,"right"),s+=34):s+=4,Se(r,l.head,t,s,{font:mn(25,600)}),s=Bs(r,l.text,t,s+34,a,31,{font:mn(23),color:on})+42):(Se(r,qo(u+1),t,s+2,{font:Yt(19,500),color:on}),s=Bs(r,l.text,t+56,s+2,a-56,35,{font:mn(25)})+37)})}function G0(r,e,t,s,a){r.strokeStyle=a,r.lineWidth=2.5,r.lineCap="round",r.lineJoin="round",r.beginPath(),r.moveTo(e-s,t),r.lineTo(e,t),r.moveTo(e-s*.45,t-s*.45),r.lineTo(e,t),r.lineTo(e-s*.45,t+s*.45),r.stroke()}const Dw=(r,e,t)=>{$o(r,"R"),Ka(r,e.contents.label,"EDWIN VILLALTA · 2026"),Vc(r,e.contents.title);const s=[],a=286,l=57;return H0(e).forEach((u,f)=>{const h=a+f*l,p=t.hover===f;p&&(r.fillStyle=un,r.fillRect(tt-20,h,zt-tt*2+40,l)),jt(r,tt,h,zt-tt,h,zi);const g=p?Bc:un,y=p?"rgba(243,242,238,0.6)":on;Se(r,qo(f+1),tt,h+38,{font:Yt(19,500),color:p?Ft:on}),Se(r,u.name,tt+70+(p?10:0),h+39,{font:mn(29,500),color:g,spacing:-.4}),Se(r,u.kind,zt-tt-60,h+38,{font:mn(21),color:y,align:"right"}),G0(r,zt-tt-4,h+29,20,p?Ft:"rgba(17,17,17,0.5)"),s.push({x:tt-20,y:h,w:zt-tt*2+40,h:l,action:{type:"goto",spread:u.spread}})}),jt(r,tt,a+9*l,zt-tt,a+9*l,zi),Se(r,e.contents.note,tt,852,{font:Yt(19),color:on,spacing:.5}),s},Cs=(r,e,t)=>(s,a)=>{const l=e(a);$o(s,"L"),Ka(s,`${qo(r)} · ${l.kicker}`,l.when);let u=0;for(const y of[l.logo??[]].flat().reverse()){const S=Uc(s,y,zt-tt-u,142,300,108,"right");S&&(u+=S+30)}const f=Vc(s,l.title,zt-tt*2-(u?u+18:0));Se(s,l.sub,tt,f+54,{font:mn(26,500),color:on});const h=f+148;Bs(s,l.body,tt,h,580,44,{font:mn(30),spacing:-.2});const p=740,g=zt-tt-p;if(t){t(a).forEach(([S,M],x)=>{const w=h+x*84;jt(s,p,w-30,p+g,w-30,zi),Se(s,S.toUpperCase(),p,w,{font:Yt(18,500),color:on,spacing:2}),Se(s,M,p,w+34,{font:mn(27,500)})}),jt(s,tt,772,zt-tt,772,zi),Se(s,a.profile.platforms,tt,824,{font:Yt(18,500),color:on,spacing:2});let y=tt+230;for(const[S,M]of Ew){const x=Uc(s,S,y,792,210,52,"left");x||Se(s,M,y,826,{font:mn(27,600),spacing:-.4}),y+=(x||$a(s,M,mn(27,600),-.4))+54}}else Iw(s,l.items,p,h,g);return l.stack.length&&Lw(s,l.stack,850,580),[]},wn={x:56,y:56,w:zt-112,h:716},Rs=(r,e,t)=>(s,a,l)=>{if($o(s,"R"),s.save(),Dt(s,wn.x,wn.y,wn.w,wn.h,20),s.fillStyle="#111111",s.fill(),s.clip(),s.translate(wn.x,wn.y),e(s,wn.w,wn.h,l.time,a),s.restore(),s.globalAlpha=1,!l.playing){Dt(s,wn.x,wn.y,wn.w,wn.h,20),s.fillStyle="rgba(17,17,17,0.34)",s.fill();const h=wn.x+wn.w/2,p=wn.y+wn.h/2;s.fillStyle=Tt,s.beginPath(),s.arc(h,p,52,0,Math.PI*2),s.fill(),s.fillStyle=un,s.beginPath(),s.moveTo(h-14,p-22),s.lineTo(h+25,p),s.lineTo(h-14,p+22),s.closePath(),s.fill()}Se(s,`FIG. ${qo(r)} · ${t(a).fig}`,wn.x+4,838,{font:Yt(21,500),spacing:.5});const u=l.playing?a.play.playing:a.play.idle;Se(s,u,zt-60,838,{font:Yt(19),color:on,spacing:2,align:"right"});const f=$a(s,u,Yt(19),2);return s.fillStyle=l.playing?"#C8641E":"rgba(17,17,17,0.35)",s.beginPath(),s.arc(zt-60-f-22,831,8,0,Math.PI*2),s.fill(),[]},Nw=(r,e)=>{$o(r,"L"),Ka(r,`08 · ${e.skills.kicker}`,"EDWIN VILLALTA"),Vc(r,e.skills.title);const t=(zt-tt*2-80)/2;return e.skills.groups.forEach((s,a)=>{const l=tt+a%2*(t+80),u=330+Math.floor(a/2)*174;jt(r,l,u-34,l+t,u-34,zi),Se(r,qo(a+1),l,u+2,{font:Yt(19,500),color:on}),Se(r,s.head,l+52,u+4,{font:mn(29,600),spacing:-.3}),Bs(r,s.text,l+52,u+48,t-52,35,{font:mn(25),color:on})}),[]},Uw=(r,e)=>{const t=e.education;$o(r,"R"),Ka(r,t.kicker,"EDWIN VILLALTA"),Vc(r,t.title);let s=330;const a=600;for(const f of t.studies)jt(r,tt,s-34,tt+a,s-34,zi),Se(r,f.meta??"",tt,s,{font:Yt(18,500),color:on,spacing:2}),s=Bs(r,f.head??"",tt,s+42,a,36,{font:mn(28,600),spacing:-.3}),Se(r,f.text,tt,s+4,{font:mn(23),color:on}),s+=96;Uc(r,"ugb",tt,s+2,300,124,"left")&&jt(r,tt,s-34,tt+a,s-34,zi);const l=770,u=zt-tt-l;s=330,jt(r,l,s-34,l+u,s-34,zi),Se(r,t.certsLabel,l,s,{font:Yt(18,500),color:on,spacing:2}),s+=46;for(const f of t.certs)s=Bs(r,f.text,l,s,u,33,{font:mn(24,500)}),Se(r,f.meta??"",l,s+2,{font:Yt(18),color:on,spacing:2}),s+=54;s+=22,jt(r,l,s-34,l+u,s-34,zi),Se(r,t.langsLabel,l,s,{font:Yt(18,500),color:on,spacing:2}),s+=46;for(const f of t.langs)Se(r,f.head??"",l,s,{font:mn(24,600)}),Se(r,f.text,l+u,s,{font:mn(22),color:on,align:"right"}),s+=44;return[]},Fw=(r,e,t)=>{const s=e.contact;$o(r,"L"),Ka(r,`09 · ${s.kicker}`,"EDWIN VILLALTA"),Se(r,s.title,tt-6,290,{font:Bi(168),spacing:-6}),Bs(r,s.body,tt,366,900,42,{font:mn(29),color:on});const a=[];return[[s.emailLabel,Va,`mailto:${Va}`,Bi(50,500)],[s.linkedinLabel,Sw,Kd,Bi(38,500)],[s.locationLabel,s.location,null,Bi(38,500)]].forEach(([u,f,h,p],g)=>{const y=500+g*118,S=h!==null&&t.hover===a.length;jt(r,tt,y-44,zt-tt,y-44,zi),Se(r,u,tt,y,{font:Yt(18,500),color:on,spacing:2}),Se(r,f,tt+220,y+12,{font:p,spacing:-.8,color:S?"#B4541E":un}),h&&(G0(r,zt-tt-4,y,22,S?"#B4541E":"rgba(17,17,17,0.5)"),a.push({x:tt,y:y-44,w:zt-tt*2,h:118,action:{type:"link",href:h}}))}),a},ks=1440,Qd=944;function Sh(r,e,t){r.fillStyle=e,r.fillRect(0,0,ks,Qd);const s=Yo(t);for(let a=0;a<9e3;a++)r.fillStyle=`rgba(255,255,255,${s()*.035})`,r.fillRect(s()*ks,s()*Qd,1+s()*2,1)}function kw(r,e){Sh(r,"#0b0b0b",3);const t="#EDE7DA";Se(r,e.cover.top,96,124,{font:Yt(24,500),color:t,spacing:7}),Se(r,e.cover.year,ks-96,124,{font:Yt(24,500),color:t,spacing:7,align:"right"}),jt(r,96,156,ks-96,156,"rgba(237,231,218,0.45)",2),Se(r,e.cover.title,84,700,{font:Bi(236),color:t,spacing:-10}),jt(r,96,772,ks-96,772,"rgba(237,231,218,0.45)",2),Se(r,e.cover.bottom,96,832,{font:mn(30,500),color:t,spacing:.5}),r.fillStyle=Ft,r.beginPath(),r.arc(ks-110,822,13,0,Math.PI*2),r.fill()}function Ow(r,e){Sh(r,"#161514",5),Se(r,e.endpaper.line1.toUpperCase(),120,380,{font:Yt(20),color:$t,spacing:3}),Se(r,e.endpaper.line2,114,470,{font:Bi(92),color:Tt,spacing:-3}),jt(r,120,520,760,520,"rgba(243,242,238,0.25)",2),e.endpaper.nav.forEach((t,s)=>{Se(r,qo(s+1),120,720+s*42,{font:Yt(18,500),color:Ft}),Se(r,t,172,720+s*42,{font:Yt(18),color:$t,spacing:.5})})}function zw(r,e){Sh(r,"#161514",9),e.back.thanks.forEach((t,s)=>Se(r,t,114,410+s*100,{font:Bi(92),color:Tt,spacing:-3})),jt(r,120,560,760,560,"rgba(243,242,238,0.25)",2),Se(r,e.back.sign,120,620,{font:Yt(20,500),color:Ft,spacing:3})}const Bw=[{draw:Dw},{draw:Cs(1,r=>r.profile,r=>r.profile.facts)},{draw:Rs(1,As.terminal,r=>r.profile),poster:9.2},{draw:Cs(2,r=>r.cases[0])},{draw:Rs(2,As.qr,r=>r.cases[0]),poster:9.6},{draw:Cs(3,r=>r.cases[1])},{draw:Rs(3,As.invoice,r=>r.cases[1]),poster:7},{draw:Cs(4,r=>r.cases[2])},{draw:Rs(4,As.english,r=>r.cases[2]),poster:5.6},{draw:Cs(5,r=>r.cases[3])},{draw:Rs(5,As.magneto,r=>r.cases[3]),poster:10.2},{draw:Cs(6,r=>r.cases[4])},{draw:Rs(6,As.eva,r=>r.cases[4]),poster:6.4},{draw:Cs(7,r=>r.cases[5])},{draw:Rs(7,As.runner,r=>r.cases[5]),poster:12.2},{draw:Nw},{draw:Uw},{draw:Fw}],Hw=(navigator.deviceMemory??8)<=4||Math.min(screen.width,screen.height)<=500,Po=Hw?.75:1;function s0(r,e,t){const s=document.createElement("canvas");s.width=Math.round(r*Po),s.height=Math.round(e*Po);const a=s.getContext("2d");a.fillStyle=Bc,a.fillRect(0,0,s.width,s.height);const l=new k0(s);return l.colorSpace=ti,l.anisotropy=t,{ctx:a,texture:l}}const Vw=[`600 40px ${No}`,`500 40px ${No}`,`700 40px ${No}`,`400 20px ${Ha}`,`500 20px ${Ha}`,`600 20px ${Ha}`,`400 20px ${Xa}`,`500 20px ${Xa}`],Gw=Object.assign({"../assets/logos/devlync.png":fw,"../assets/logos/direct-english.png":dw,"../assets/logos/electrodte.png":hw,"../assets/logos/evaapp.png":pw,"../assets/logos/magnetohr.png":mw,"../assets/logos/mineducyt.png":gw,"../assets/logos/qr-suite.png":vw,"../assets/logos/ugb.png":_w});async function Ww(){const r="Aáéíóúñ¿º·—←→…",e=Vw.map(s=>document.fonts.load(s,r).catch(()=>{})),t=Object.entries(Gw).map(([s,a])=>new Promise(l=>{const u=new Image;u.onload=()=>{V0[s.split("/").pop().replace(/\.[^.]+$/,"")]=u,l()},u.onerror=()=>l(),u.src=a}));await Promise.all([...e,...t])}class W0{constructor(e){Pe(this,"pages");Pe(this,"cover");Pe(this,"front");Pe(this,"back");Pe(this,"special");Pe(this,"content");Pe(this,"playingId",-1);Pe(this,"dirty",!1);Pe(this,"sinceFrame",0);const t=Math.min(e,4);this.pages=Bw.map(a=>{const{ctx:l,texture:u}=s0(zt,Nc,t);return{def:a,ctx:l,texture:u,regions:[],st:{time:a.poster??0,playing:!1,hover:-1}}});const s=[0,1,2].map(()=>s0(ks,Qd,t));this.special=s.map(a=>a.ctx),[this.cover,this.front,this.back]=s.map(a=>a.texture)}setContent(e){this.content=e,this.pages.forEach((t,s)=>this.redraw(s)),[kw,Ow,zw].forEach((t,s)=>{const a=this.special[s];a.save(),a.setTransform(Po,0,0,Po,0,0),t(a,e),a.restore()}),this.cover.needsUpdate=this.front.needsUpdate=this.back.needsUpdate=!0,this.dirty=!0}redraw(e){const t=this.pages[e];t.ctx.save(),t.ctx.setTransform(Po,0,0,Po,0,0),t.regions=t.def.draw(t.ctx,this.content,t.st),t.ctx.restore(),t.texture.needsUpdate=!0,this.dirty=!0}canvas(e){return this.pages[e].ctx.canvas}get coverCanvas(){return this.special[0].canvas}get frontCanvas(){return this.special[1].canvas}get backCanvas(){return this.special[2].canvas}get textures(){return[...this.pages.map(e=>e.texture),this.cover,this.front,this.back]}takeDirty(){const e=this.dirty;return this.dirty=!1,e}regionIndex(e,t,s){const a=t*zt,l=s*Nc;return this.pages[e].regions.findIndex(u=>a>=u.x&&a<=u.x+u.w&&l>=u.y&&l<=u.y+u.h)}actionAt(e,t,s){const a=this.regionIndex(e,t,s);return a<0?null:this.pages[e].regions[a].action}hover(e,t=0,s=0){let a=!1;return this.pages.forEach((l,u)=>{const f=u===e?this.regionIndex(u,t,s):-1;f>=0&&(a=!0),f!==l.st.hover&&(l.st.hover=f,this.redraw(u))}),a}play(e){const t=e>=0&&e<this.pages.length&&this.pages[e].def.poster!==void 0?e:-1;if(t===this.playingId)return;const s=this.playingId;this.playingId=t,s>=0&&(this.pages[s].st.playing=!1,this.redraw(s)),t>=0&&(this.pages[t].st.playing=!0,this.pages[t].st.time=0,this.sinceFrame=1)}update(e){this.playingId<0||(this.pages[this.playingId].st.time+=e,this.sinceFrame+=e,!(this.sinceFrame<1/31)&&(this.sinceFrame=0,this.redraw(this.playingId)))}dispose(){this.pages.forEach(e=>e.texture.dispose()),this.cover.dispose(),this.front.dispose(),this.back.dispose()}}function Xw(){const r=document.createElement("canvas");return r.width=r.height=1024,qd(r.getContext("2d"),1024,!1),r.toDataURL("image/jpeg",.82)}function jw({content:r,onState:e,controls:t}){const[s,a]=Xt.useState(!1),[l,u]=Xt.useState(0),[f,h]=Xt.useState("R"),[p,g]=Xt.useState(()=>window.innerWidth<window.innerHeight),y=Xt.useRef(null),S=y.current??(y.current=new W0(1)),M=Xt.useRef(null),x=Xt.useRef([]),w=Xt.useRef(0),v=Xt.useMemo(Xw,[]),m={open:()=>{h("R"),a(!0)},close:()=>{a(!1),u(0)},next:()=>{if(!s)return m.open();if(p&&f==="L")return h("R");l>=Un||(h("L"),u(l+1))},prev:()=>{if(s){if(p&&f==="R"&&l>0)return h("L");if(l===0)return m.close();h("R"),u(l-1)}},goto:I=>{a(!0),u(Math.min(Math.max(I,0),Un)),h(I===0?"R":"L")}};t.current=m,Xt.useEffect(()=>{S.setContent(r)},[S,r]),Xt.useEffect(()=>{const I=[S.coverCanvas,S.frontCanvas,S.backCanvas];for(let D=0;D<Un*2;D++)I.push(S.canvas(D));I.forEach((D,F)=>{const b=x.current[F];b&&b.firstChild!==D&&b.replaceChildren(D)})},[S]),Xt.useEffect(()=>{S.play(s&&l<Un?l*2:-1);const I=l>=Un&&(!p||f==="R");e({open:s,spread:l,spreads:Un+1,canNext:!I})},[S,e,s,l,f,p]),Xt.useEffect(()=>{let I=0,D=performance.now();const F=$=>{I=requestAnimationFrame(F),S.update(Math.min(($-D)/1e3,.05)),D=$};I=requestAnimationFrame(F);const b=()=>g(window.innerWidth<window.innerHeight),C=$=>{if($.metaKey||$.ctrlKey||$.altKey)return;const X=t.current;if($.key==="ArrowRight"||$.key==="PageDown")X==null||X.next();else if($.key==="ArrowLeft"||$.key==="PageUp")X==null||X.prev();else if($.key==="Escape")X==null||X.close();else if($.key==="Home")X==null||X.goto(0);else if($.key==="End")X==null||X.goto(Un);else if($.key==="Enter"&&!($.target instanceof HTMLButtonElement))X==null||X.open();else return;$.preventDefault()},O=$=>{const X=M.current;!X||$.pointerType!=="mouse"||(X.style.setProperty("--lx",($.clientX/window.innerWidth*2-1).toFixed(3)),X.style.setProperty("--ly",($.clientY/window.innerHeight*2-1).toFixed(3)))};return window.addEventListener("resize",b),window.addEventListener("keydown",C),window.addEventListener("pointermove",O),()=>{cancelAnimationFrame(I),window.removeEventListener("resize",b),window.removeEventListener("keydown",C),window.removeEventListener("pointermove",O),S.dispose()}},[S,t]);const R=w.current;Xt.useEffect(()=>{w.current=l},[l]);const L=l>=R,A=I=>{const D=I.currentTarget.getBoundingClientRect();return[(I.clientX-D.left)/D.width,(I.clientY-D.top)/D.height]},B=(I,D)=>Ne.jsx("div",{className:D?"fb-face fb-back":"fb-face",ref:F=>x.current[3+I]=F,onPointerMove:F=>F.pointerType==="mouse"&&S.hover(I,...A(F)),onPointerLeave:F=>F.pointerType==="mouse"&&S.hover(-1),onClick:F=>{F.stopPropagation();const[b,C]=A(F),O=S.actionAt(I,b,C);(O==null?void 0:O.type)==="goto"?m.goto(O.spread):(O==null?void 0:O.type)==="link"?O.href.startsWith("mailto:")?window.location.href=O.href:window.open(O.href,"_blank","noopener"):(p?b>=.5:!D)?m.next():m.prev()}});return Ne.jsxs("div",{className:"fb",style:{backgroundImage:`url(${v})`},children:[Ne.jsx("div",{className:"fb-light"}),Ne.jsx("div",{className:"fb-scene",ref:M,"data-open":s,"data-single":p,"data-side":f,children:Ne.jsxs("div",{className:"fb-book",children:[Ne.jsx("div",{className:"fb-board fb-base",ref:I=>x.current[2]=I,onClick:()=>m.next()}),Ne.jsxs("div",{className:"fb-leaf fb-cover","data-turned":s,style:{zIndex:s?0:Un*2+2},onClick:I=>{I.stopPropagation(),s?m.prev():m.open()},children:[Ne.jsx("div",{className:"fb-face fb-board",ref:I=>x.current[0]=I}),Ne.jsx("div",{className:"fb-face fb-back fb-board",ref:I=>x.current[1]=I})]}),Array.from({length:Un},(I,D)=>{const F=s&&D<l,b=Math.min(R,l),C=L?D-b:Math.max(R,l)-1-D,O=D>=b&&D<Math.max(R,l)?Math.max(0,C)*.09:0;return Ne.jsxs("div",{className:"fb-leaf","data-turned":F,style:{zIndex:F?D+1:Un*2-D,transitionDelay:`${O}s, ${O+.42}s`},children:[B(D*2,!1),B(D*2+1,!0)]},D)})]})})]})}const Ui=1.6,Oa=1,Gn=Un,Kr=.007,en=.014,X0=.035,$i=Gn*Kr+en+.002,Ni=Ui+X0,bs=Oa+X0*2,Mi=36,Co=14,Yw=$i/2+en/2+.004,Ua=.17;function o0(r,e){const t=an((e-r.start)/r.dur);return{value:ns(r.from,r.to,r.ease(t)),done:t>=1}}class qw{constructor(e){Pe(this,"group",new ui);Pe(this,"target",0);Pe(this,"wantOpen",!1);Pe(this,"onChange",()=>{});Pe(this,"sheets",[]);Pe(this,"spine",new ui);Pe(this,"cover",new ui);Pe(this,"blockR");Pe(this,"blockL");Pe(this,"time",0);Pe(this,"phi",0);Pe(this,"phiTween",null);Pe(this,"lift",0);Pe(this,"liftTarget",0);Pe(this,"lastPhi",-1);Pe(this,"lastGutter",-1);Pe(this,"dragging",null);Pe(this,"inv",new Kt);Pe(this,"ray",new fh);const t=new Fn({color:723723,roughness:.82,envMapIntensity:.5}),s=M=>new Fn({map:M,roughness:.82,envMapIntensity:.5}),a=(M,x=!0)=>(M.castShadow=x,M.receiveShadow=!0,M),l=a(new bt(new Zi(Ni,en,bs),t));l.position.set($i/2+Ni/2,en/2,0);const u=new bt(new Sr(Ni,bs).rotateX(-Math.PI/2),s(e.back));u.position.set($i/2+Ni/2,en+6e-4,0),u.receiveShadow=!0,this.group.add(l,u),this.spine.position.set($i/2,en/2,0);const f=a(new bt(new Zi($i+en,en,bs),t));f.position.x=$i/2,this.spine.add(f,this.cover),this.cover.position.x=$i;const h=a(new bt(new Zi(Ni,en,bs),t));h.position.x=Ni/2;const p=new bt(new Sr(Ni,bs).rotateX(-Math.PI/2),s(e.cover));p.position.set(Ni/2,en/2+6e-4,0),p.receiveShadow=!0;const g=new bt(new Sr(Ni,bs).rotateX(Math.PI/2).rotateY(Math.PI),s(e.front));g.position.set(Ni/2,-en/2-6e-4,0),g.receiveShadow=!0,this.cover.add(h,p,g),this.group.add(this.spine);const y=new Fn({color:15131352,roughness:.95}),S=new Zi(Ui,1,Oa);this.blockR=new bt(S,y),this.blockL=new bt(S,y),this.blockR.castShadow=this.blockL.castShadow=!0,this.group.add(this.blockR,this.blockL);for(let M=0;M<Gn;M++)this.sheets.push(this.makeSheet(e,M));this.update(0)}makeSheet(e,t){const s=new fi,a=(Mi+1)*(Co+1),l=new Float32Array(a*2),u=[];for(let g=0;g<=Co;g++)for(let y=0;y<=Mi;y++){const S=g*(Mi+1)+y;if(l[S*2]=y/Mi,l[S*2+1]=1-g/Co,g<Co&&y<Mi){const M=S,x=S+Mi+1;u.push(M,x,M+1,x,x+1,M+1)}}s.setAttribute("position",new xi(new Float32Array(a*3),3)),s.setAttribute("uv",new xi(l,2)),s.setIndex(u);const f=e.pages[t*2+1].texture;f.wrapS=Ga,f.repeat.x=-1,f.offset.x=1;const h=new bt(s,new Qg({map:e.pages[t*2].texture,side:Mr})),p=new bt(s,new Qg({map:f,side:Xn}));return h.material.shadowSide=Fi,h.castShadow=!0,h.receiveShadow=p.receiveShadow=!0,h.frustumCulled=p.frustumCulled=!1,this.group.add(h,p),{geo:s,front:h,back:p,e:0,tween:null,peel:0,peelTarget:0,corner:1,lead:0,dirty:!0}}get isOpen(){return this.wantOpen}get spreads(){return Gn+1}get isDragging(){return this.dragging!==null}open(){this.wantOpen||(this.wantOpen=!0,this.phiTween={from:this.phi,to:1,start:this.time,dur:1.5,ease:Zr},this.onChange())}close(){if(!this.wantOpen)return;const e=this.sheets.filter(t=>t.e>0).length;this.goto(0,!0),this.wantOpen=!1,this.phiTween={from:this.phi,to:0,start:this.time+(e?.3+e*.05:0),dur:1.3,ease:Zr},this.onChange()}next(){this.target<Gn&&this.goto(this.target+1)}prev(){this.target>0?this.goto(this.target-1):this.close()}goto(e,t=!1){const s=an(Math.round(e),0,Gn),a=[];this.sheets.forEach((f,h)=>{const p=h<s?1:0;((f.tween?f.tween.to:f.e)!==p||!f.tween&&f.e!==p)&&a.push(h)}),s>=this.target||a.reverse();const u=a.length>1;a.forEach((f,h)=>{const p=this.sheets[f],g=f<s?1:0,y=p.e===0||p.e===1;p.tween={from:p.e,to:g,start:this.time+h*(t?.05:.085),dur:t?.45:y?u?.75:.95:Math.max(.3,.8*Math.abs(g-p.e)),ease:y?Zr:is}}),this.target=s,this.onChange()}beginDrag(e,t){const s=e==="R"?this.target:this.target-1;return s<0||s>=Gn||this.sheets[s].tween?!1:(this.dragging={index:s,dir:e==="R"?1:-1},this.sheets[s].corner=t>.5?1:0,!0)}drag(e){if(!this.dragging)return;const t=this.sheets[this.dragging.index];t.e=an(Math.acos(an(e/Ui,-1,1))/Math.PI,.002,.998),t.dirty=!0}cancelDrag(){if(!this.dragging)return;const{index:e,dir:t}=this.dragging;this.dragging=null,this.sheets[e].e=t>0?0:1,this.sheets[e].dirty=!0}endDrag(){if(!this.dragging)return;const{index:e,dir:t}=this.dragging,s=this.sheets[e];this.dragging=null;const a=t>0?s.e>.3:s.e<.7,l=a?t>0?1:0:t>0?0:1,u=s.e<.01||s.e>.99;s.tween={from:s.e,to:l,start:this.time,dur:u?.95:Math.max(.3,.85*Math.abs(l-s.e)),ease:u?Zr:is},a&&(this.target=an(this.target+t,0,Gn),this.onChange())}setPeel(e,t=0,s=1){const a=e==="R"?this.target:e==="L"?this.target-1:-1;this.sheets.forEach((l,u)=>{const f=u===a&&!l.tween&&!this.dragging&&this.wantOpen;l.peelTarget=f?t:0,f&&(l.corner=s>.5?1:0)})}setCoverHover(e){this.liftTarget=e&&!this.wantOpen?.03:0}hit(e){this.inv.copy(this.group.matrixWorld).invert();const t=this.ray.copy(e).applyMatrix4(this.inv),s=l=>{if(Math.abs(t.direction.y)<1e-6)return null;const u=(l-t.origin.y)/t.direction.y;return u>0?{x:t.origin.x+t.direction.x*u,z:t.origin.z+t.direction.z*u}:null};if(!this.wantOpen){const l=s($i+en);return l&&l.x>$i/2-.03&&l.x<$i/2+Ni&&Math.abs(l.z)<bs/2?{kind:"cover"}:null}if(this.phi<.85)return null;const a=s(en+Gn*Kr/2);return!a||Math.abs(a.x)>Ui||Math.abs(a.z)>Oa/2?null:{kind:"page",side:a.x<0?"L":"R",s:Math.abs(a.x)/Ui,v:a.z/Oa+.5,x:a.x}}planeX(e){this.inv.copy(this.group.matrixWorld).invert();const t=this.ray.copy(e).applyMatrix4(this.inv);if(Math.abs(t.direction.y)<1e-6)return null;const s=(en+Gn*Kr/2-t.origin.y)/t.direction.y;return s>0?t.origin.x+t.direction.x*s:null}update(e){this.time+=e;const t=m=>1-Math.exp(-e*m);if(this.phiTween&&this.time>=this.phiTween.start){const m=o0(this.phiTween,this.time);this.phi=m.value,m.done&&(this.phiTween=null)}this.lift+=(this.liftTarget-this.lift)*t(9);const s=Math.max(this.phi,this.lift),a=Math.abs(s-this.lastPhi)>1e-5;this.lastPhi=s,this.sheets.forEach((m,R)=>{var A;if(m.tween&&this.time>=m.tween.start){const B=o0(m.tween,this.time);m.e=B.value,m.dirty=!0,B.done&&(m.e=m.tween.to,m.tween=null)}R>0&&m.e>this.sheets[R-1].e&&(m.e=this.sheets[R-1].e,m.dirty=!0);const L=((A=this.dragging)==null?void 0:A.index)===R?1:0;for(const[B,I]of[["peel",m.peelTarget],["lead",L]])Math.abs(I-m[B])>4e-4?(m[B]+=(I-m[B])*t(B==="peel"?11:7),m.dirty=!0):m[B]!==I&&(m[B]=I,m.dirty=!0);a&&(m.dirty=!0)});let l=Gn,u=-1;this.sheets.forEach((m,R)=>{m.e===0&&l===Gn&&(l=R),m.e===1&&(u=R)});const f=Yw*(1-s),h=l<Gn?en+(Gn-l)*Kr:en,p=u>=0?en+(u+1)*Kr:en,g=Math.max(en+.002,Math.min(h,p)-.003),y=g!==this.lastGutter;this.lastGutter=g;let S=a||y;this.sheets.forEach((m,R)=>{const L=m.e>0&&m.e<1||m.e===0&&R<=l+1||m.e===1&&R>=u-1;m.front.visible=m.back.visible=L,L&&(m.dirty||y)?(this.layOut(m,R,f,g),m.dirty=!1,S=!0):y&&(m.dirty=!0)});const M=Gn-l-2,x=u-1;this.setBlock(this.blockR,M,f+(Ui+Ua)/2),this.setBlock(this.blockL,x,f-(Ui+Ua)/2);const w=Math.PI/2+s*Math.PI/2;this.spine.rotation.z=w,this.cover.rotation.z=s*Math.PI-w;const v=Zr(an(this.phi));return this.group.position.x=-.857*(1-v),this.group.rotation.y=.09*(1-v),this.group.updateMatrixWorld(),S}setBlock(e,t,s){if(e.visible=t>0,!e.visible)return;const a=(t+.5)*Kr;e.scale.set((Ui-Ua)/Ui,a,1),e.position.set(s,en+a/2,0)}layOut(e,t,s,a){const l=e.geo.attributes.position,u=l.array,f=e.e,h=Math.PI*f,p=Math.sin(Math.PI*f),g=f<.5?1:-1,y=Ui/Mi,S=ns(en+(Gn-t)*Kr,en+(t+1)*Kr,f),M=Math.pow(Math.cos(Math.PI*f),2),x=Math.min(1.2,3*Math.max(0,S-a)*M/Ua),w=R=>{const L=1-R*Ui/Ua;return L>0?x*L*L:0};let v=0;for(let R=0;R<Mi;R++)v+=Math.sin(w((R+.5)/Mi))*y;const m=S-v;for(let R=0;R<=Co;R++){const L=R/Co,A=Math.pow(Math.max(0,1-Math.abs(L-e.corner)/1.15),2);let B=0,I=m;for(let D=0;D<=Mi;D++){const F=(R*(Mi+1)+D)*3;u[F]=s+B,u[F+1]=I,u[F+2]=(L-.5)*Oa;const b=(D+.5)/Mi,C=p*(.95*(Math.pow(b,1.4)-.42)+e.lead*.7*A*b*b),O=g*e.peel*1.3*A*ni(.5,1,b),$=an(h+C+O+g*w(b),0,Math.PI);B+=Math.cos($)*y,I+=Math.sin($)*y}}l.needsUpdate=!0,e.geo.computeVertexNormals(),e.geo.computeBoundingSphere()}}const a0=30,id=.8;class $w{constructor(e,t,s,a=()=>{}){Pe(this,"canvas");Pe(this,"renderer");Pe(this,"lamp");Pe(this,"scene",new Kg);Pe(this,"camera",new ci(a0,1,.1,80));Pe(this,"pages");Pe(this,"book");Pe(this,"raycaster",new nw);Pe(this,"ndc",new ut(0,0));Pe(this,"lean",new ut(0,0));Pe(this,"pointerInside",!1);Pe(this,"down",null);Pe(this,"camK",0);Pe(this,"camTween",null);Pe(this,"clock",new tw);Pe(this,"time",0);Pe(this,"raf",0);Pe(this,"observer");Pe(this,"reduceMotion",window.matchMedia("(prefers-reduced-motion: reduce)").matches);Pe(this,"focus","R");Pe(this,"focusX",0);Pe(this,"stale",!0);Pe(this,"idle",0);Pe(this,"lost",!1);Pe(this,"lostTimer",0);Pe(this,"lastEye",new Q);Pe(this,"cursor","");Pe(this,"ratio",Math.min(window.devicePixelRatio,1.5));Pe(this,"paceSum",0);Pe(this,"paceN",0);Pe(this,"slowRuns",0);Pe(this,"open",()=>{this.focus="R",this.book.open()});Pe(this,"close",()=>this.book.close());Pe(this,"next",()=>{if(!this.book.isOpen)return this.open();if(this.single&&this.focus==="L")return this.setFocus("R");this.book.target>=Un||(this.focus="L",this.book.next())});Pe(this,"prev",()=>{if(this.book.isOpen){if(this.single&&this.focus==="R"&&this.book.target>0)return this.setFocus("L");this.focus="R",this.book.prev()}});Pe(this,"goto",e=>{this.focus=e===0?"R":"L",this.book.open(),this.book.goto(e),this.emit()});Pe(this,"onLost",e=>{e.preventDefault(),this.lost=!0,this.lostTimer=window.setTimeout(()=>this.lost&&this.onFail(),4e3)});Pe(this,"onRestored",()=>{window.clearTimeout(this.lostTimer),this.lost=!1,this.renderer.shadowMap.needsUpdate=!0,this.stale=!0});Pe(this,"onMove",e=>this.setPointer(e));Pe(this,"onDown",e=>{if(e.button!==0)return;this.setPointer(e),this.down={x:e.clientX,y:e.clientY},this.canvas.setPointerCapture(e.pointerId);const t=this.hitNow();(t==null?void 0:t.kind)==="page"&&t.s>id&&this.book.beginDrag(t.side,t.v)});Pe(this,"onUp",e=>{if(!this.down)return;this.setPointer(e);const t=Math.hypot(e.clientX-this.down.x,e.clientY-this.down.y)>6;if(this.down=null,e.pointerType!=="mouse"&&(this.pointerInside=!1),this.book.isDragging&&t){const u=this.book.target;this.book.endDrag(),this.book.target!==u&&this.setFocus(this.book.target>u?"L":"R");return}if(this.book.cancelDrag(),t)return;const s=this.hitNow();if(!s)return;if(s.kind==="cover"){this.book.open();return}const a=this.pageId(s.side),l=a>=0?this.pages.actionAt(a,s.side==="R"?s.s:1-s.s,s.v):null;(l==null?void 0:l.type)==="goto"?this.goto(l.spread):(l==null?void 0:l.type)==="link"?l.href.startsWith("mailto:")?window.location.href=l.href:window.open(l.href,"_blank","noopener"):(this.single?this.ndc.x>=0:s.side==="R")?this.next():this.prev()});Pe(this,"onCancel",()=>{this.down=null,this.book.endDrag()});Pe(this,"onLeave",()=>{this.down||(this.pointerInside=!1)});Pe(this,"onKey",e=>{if(e.metaKey||e.ctrlKey||e.altKey)return;const t=e.target,s=!!t&&/^(BUTTON|A|INPUT|TEXTAREA|SELECT)$/.test(t.tagName);switch(e.key){case"ArrowRight":case"PageDown":this.next();break;case"ArrowLeft":case"PageUp":this.prev();break;case"Home":this.book.isOpen&&this.book.goto(0);break;case"End":this.book.isOpen&&this.book.goto(Un);break;case"Escape":this.close();break;case"Enter":if(s||this.book.isOpen)return;this.open();break;default:return}e.preventDefault()});Pe(this,"tick",()=>{this.raf=requestAnimationFrame(this.tick);const e=this.clock.getDelta(),t=this.step(Math.min(e,.05));t||this.stale?this.idle=0:this.idle++,this.stale=!1,!(this.lost||this.idle>2)&&(this.renderer.render(this.scene,this.camera),t&&this.pace(e))});this.onState=s,this.onFail=a;const l=document.createElement("canvas");l.className="stage",l.setAttribute("role","img"),l.setAttribute("aria-label",t.ui.canvasLabel),this.canvas=l;const u=new URLSearchParams(location.search).get("gl")==="force",f=new K1({canvas:l,antialias:!0,failIfMajorPerformanceCaveat:!u}),h=f.getContext(),p=h.getExtension("WEBGL_debug_renderer_info"),g=p?String(h.getParameter(p.UNMASKED_RENDERER_WEBGL)):"";if(!u&&/swiftshader|llvmpipe|softpipe|software/i.test(g))throw f.dispose(),new Error(`Software renderer: ${g}`);e.prepend(l),f.setPixelRatio(this.ratio),f.toneMapping=c0,f.toneMappingExposure=1,f.shadowMap.enabled=!0,f.shadowMap.type=eh,f.shadowMap.autoUpdate=!1,f.shadowMap.needsUpdate=!0,this.renderer=f,this.scene.background=new lt(0);const y=new Kg;y.background=new lt(131586);const S=(A,B,I,D,F,b)=>{const C=new bt(new Sr(B,I),new hh({color:A,side:Fi}));C.position.set(D,F,b),C.lookAt(0,0,0),y.add(C)};S(new lt(2.4,1.7,1.1),7,2.6,-2.5,6,-9),S(new lt(.5,.62,.85),5,5,10,4,3);const M=new Vd(f);this.scene.environment=M.fromScene(y,.035).texture,this.scene.environmentIntensity=.4,M.dispose();const x=new ew(16768178,135,0,.5,1,2);x.position.set(-2.4,6.2,2.6),x.target.position.set(0,0,-.1),x.castShadow=!0,x.shadow.mapSize.set(2048,2048),x.shadow.camera.near=2,x.shadow.camera.far=14,x.shadow.bias=-3e-4,x.shadow.normalBias=.012,x.shadow.radius=2.2,this.lamp=x,this.scene.add(x,x.target,new Q1(9081766,0,.1));const w=f.capabilities.getMaxAnisotropy();this.scene.add(rw(w));const v=sw();v.position.set(.74,0,-1.17),v.rotation.y=-.6;const m=uw();m.position.set(-.78,0,-1.1);const R=ow();R.position.set(2.05,0,-.05),R.rotation.y=1.28;const L=lw();L.position.set(1.95,0,.86),L.rotation.y=-.22,this.scene.add(v,m,R,L),this.pages=new W0(w),this.pages.setContent(t),this.book=new qw(this.pages),this.book.onChange=()=>this.emit(),this.scene.add(this.book.group),l.addEventListener("pointermove",this.onMove),l.addEventListener("pointerdown",this.onDown),l.addEventListener("pointerup",this.onUp),l.addEventListener("pointercancel",this.onCancel),l.addEventListener("pointerleave",this.onLeave),window.addEventListener("keydown",this.onKey),this.observer=new ResizeObserver(()=>this.resize()),this.observer.observe(l),l.addEventListener("webglcontextlost",this.onLost),l.addEventListener("webglcontextrestored",this.onRestored),this.resize(),this.warm(),this.emit(),this.tick()}setContent(e){this.canvas.setAttribute("aria-label",e.ui.canvasLabel),this.pages.setContent(e),this.warm()}warm(){for(const e of this.pages.textures)this.renderer.initTexture(e);this.stale=!0}get single(){return this.camera.aspect<.95}setFocus(e){this.focus=e,this.emit()}dispose(){var t,s;cancelAnimationFrame(this.raf),window.clearTimeout(this.lostTimer),this.observer.disconnect();const e=this.canvas;e.removeEventListener("pointermove",this.onMove),e.removeEventListener("pointerdown",this.onDown),e.removeEventListener("pointerup",this.onUp),e.removeEventListener("pointercancel",this.onCancel),e.removeEventListener("pointerleave",this.onLeave),e.removeEventListener("webglcontextlost",this.onLost),e.removeEventListener("webglcontextrestored",this.onRestored),window.removeEventListener("keydown",this.onKey),this.pages.dispose(),this.scene.traverse(a=>{var u,f,h;const l=a;(u=l.geometry)==null||u.dispose();for(const p of[l.material??[]].flat())(f=p.map)==null||f.dispose(),(h=p.bumpMap)==null||h.dispose(),p.dispose()}),(t=this.scene.environment)==null||t.dispose(),(s=this.lamp.shadow.map)==null||s.dispose(),this.renderer.dispose(),e.remove()}emit(){var a;const e=this.book.isOpen,t=e?1:0;(((a=this.camTween)==null?void 0:a.to)??this.camK)!==t&&(this.camTween={from:this.camK,to:t,start:this.time+(e?0:.25)});const s=this.book.target>=Un&&(!this.single||this.focus==="R");this.onState({open:e,spread:this.book.target,spreads:this.book.spreads,canNext:!s})}resize(){const e=this.canvas.clientWidth||1,t=this.canvas.clientHeight||1;this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.stale=!0,this.emit()}placeCamera(e){if(this.camTween&&this.time>=this.camTween.start){const x=an((this.time-this.camTween.start)/1.7);this.camK=this.camTween.from+(this.camTween.to-this.camTween.from)*Zr(x),x>=1&&(this.camTween=null)}const t=this.camK,s=this.camera.aspect,a=Math.tan(Ra.degToRad(a0/2)),l=Math.max(5.7,1.08/(a*s)),u=this.single?Math.max(.92/(a*s),.9/a):Math.max(1.82/(a*s),.9/a),f=Ra.lerp(l,u,t),h=Ra.lerp(.7,1.4,t),p=this.single?this.focus==="R"?.82:-.82:0;this.focusX+=(p-this.focusX)*(1-Math.exp(-e*5));const g=new Q(this.focusX*t,0,Ra.lerp(.42,.05,t)),y=this.pointerInside&&!this.reduceMotion?this.ndc:new ut(0,0);this.lean.lerp(y,1-Math.exp(-e*3));const S=Ra.lerp(1,.42,t);this.camera.position.set(g.x+this.lean.x*.36*S,Math.sin(h)*f,g.z+Math.cos(h)*f-this.lean.y*.24*S),this.camera.up.set(0,Math.cos(h),-Math.sin(h)),this.camera.lookAt(g),this.camera.updateMatrixWorld();const M=this.camera.position.distanceToSquared(this.lastEye)>1e-10;return this.lastEye.copy(this.camera.position),M}setPointer(e){const t=this.canvas.getBoundingClientRect();this.ndc.set((e.clientX-t.left)/t.width*2-1,-((e.clientY-t.top)/t.height)*2+1),this.pointerInside=!0}hitNow(){return this.raycaster.setFromCamera(this.ndc,this.camera),this.book.hit(this.raycaster.ray)}pageId(e){const t=e==="L"?this.book.target*2-1:this.book.target*2;return t>=0&&t<Un*2?t:-1}canTurn(e){return e==="R"?this.book.target<Un:this.book.target>0}hover(){const e=this.book;if(this.pages.play(e.isOpen?this.pageId("R"):-1),e.isDragging){this.raycaster.setFromCamera(this.ndc,this.camera);const u=e.planeX(this.raycaster.ray);u!==null&&e.drag(u),this.pages.hover(-1),this.setCursor("grabbing");return}const t=this.pointerInside?this.hitNow():null;if(e.setCoverHover((t==null?void 0:t.kind)==="cover"),(t==null?void 0:t.kind)!=="page"){e.setPeel(null),this.pages.hover(-1),this.setCursor(t?"pointer":"default");return}const s=this.pageId(t.side),a=t.side==="R"?t.s:1-t.s;this.pages.hover(s,a,t.v);const l=t.s>id&&this.canTurn(t.side);e.setPeel(l?t.side:null,ni(id-.03,.97,t.s)*.5,t.v),this.setCursor(l?"grab":"pointer")}setCursor(e){e!==this.cursor&&(this.cursor=e,this.canvas.style.cursor=e)}step(e){this.time+=e;const t=this.placeCamera(e);this.hover();const s=this.book.update(e);return this.pages.update(e),s&&(this.renderer.shadowMap.needsUpdate=!0),this.pages.takeDirty()||t||s}pace(e){if(e>.08||(this.paceSum+=e,++this.paceN<40))return;const t=this.paceSum/this.paceN>1/36;this.paceSum=this.paceN=0,this.slowRuns=t?this.slowRuns+1:0,!(this.slowRuns<3||this.ratio<=.75)&&(this.slowRuns=0,this.ratio=Math.max(.75,this.ratio*.85),this.renderer.setPixelRatio(this.ratio),this.resize())}advance(e){for(let t=0;t<e;t+=1/60)this.step(1/60)}}const l0=r=>String(r).padStart(2,"0");function Kw(){const[r,e]=Xt.useState(yw),[t,s]=Xt.useState({open:!1,spread:0,spreads:10,canNext:!0}),[a,l]=Xt.useState("loading"),u=Xt.useRef(null),f=Xt.useRef(null),h=Xt.useRef(null),p=Xt.useRef(r),g=i0[r],y=Xt.useCallback(()=>{var v;(v=f.current)==null||v.dispose(),f.current=null,h.current=null,s(m=>({...m,open:!1,spread:0})),l("flat")},[]);Xt.useEffect(()=>{let v=!1;return Ww().then(()=>{if(!(v||!u.current))try{const m=new $w(u.current,i0[p.current],s,y);f.current=m,h.current=m,l("3d")}catch{y()}}),()=>{var m;v=!0,(m=f.current)==null||m.dispose(),f.current=null}},[y]),Xt.useEffect(()=>{var m;const v=Number(new URLSearchParams(location.search).get("p"));a!=="loading"&&Number.isInteger(v)&&v>=1&&((m=h.current)==null||m.goto(v-1))},[a]),Xt.useEffect(()=>{var v;p.current=r,document.documentElement.lang=r,document.title=`Edwin Villalta | ${g.cover.title}`,(v=f.current)==null||v.setContent(g)},[r,g]);const{open:S,spread:M,spreads:x,canNext:w}=t;return Ne.jsxs("div",{className:"app","data-open":S,"data-ready":a!=="loading","data-mode":a,ref:u,children:[a==="flat"&&Ne.jsx(jw,{content:g,onState:s,controls:h}),Ne.jsx("div",{className:"vignette","aria-hidden":"true"}),Ne.jsxs("header",{className:"nav",children:[Ne.jsxs("div",{className:"brand",children:[Ne.jsx("span",{className:"brand-name",children:"Edwin Villalta"}),Ne.jsx("span",{className:"brand-role",children:g.ui.role})]}),Ne.jsxs("nav",{className:"links","aria-label":"Links",children:[Ne.jsx("a",{href:Kd,target:"_blank",rel:"noreferrer",children:"LinkedIn"}),Ne.jsx("a",{href:`mailto:${Va}`,children:g.ui.email}),Ne.jsx("div",{className:"lang",role:"group","aria-label":g.ui.langLabel,children:["es","en"].map(v=>Ne.jsx("button",{type:"button","aria-pressed":r===v,onClick:()=>e(v),children:v.toUpperCase()},v))})]})]}),Ne.jsxs("section",{className:"hero","aria-hidden":S,children:[Ne.jsx("p",{className:"kicker",children:g.ui.kicker}),Ne.jsxs("h1",{children:[g.ui.headline[0],Ne.jsx("br",{}),g.ui.headline[1]]}),Ne.jsx("p",{className:"lede",children:g.ui.lede}),Ne.jsxs("button",{type:"button",className:"cta",tabIndex:S?-1:0,onClick:()=>{var v;return(v=h.current)==null?void 0:v.open()},children:[g.ui.open,Ne.jsx("span",{"aria-hidden":"true",children:"→"})]})]}),Ne.jsx("p",{className:"hint hint-closed","aria-hidden":"true",children:g.ui.hintClosed}),Ne.jsxs("footer",{className:"bar","aria-hidden":!S,children:[Ne.jsxs("button",{type:"button",className:"ghost",tabIndex:S?0:-1,onClick:()=>{var v;return(v=h.current)==null?void 0:v.close()},children:[Ne.jsx("span",{"aria-hidden":"true",children:"×"})," ",g.ui.close]}),Ne.jsx("p",{className:"hint",children:a==="flat"?g.ui.flatNote:g.ui.hintOpen}),Ne.jsxs("div",{className:"pager",children:[Ne.jsx("button",{type:"button",tabIndex:S?0:-1,"aria-label":g.ui.prev,onClick:()=>{var v;return(v=h.current)==null?void 0:v.prev()},children:"←"}),Ne.jsxs("span",{className:"count",children:[l0(M+1)," ",Ne.jsx("i",{children:"/"})," ",l0(x)]}),Ne.jsx("button",{type:"button",tabIndex:S?0:-1,"aria-label":g.ui.next,disabled:!w,onClick:()=>{var v;return(v=h.current)==null?void 0:v.next()},children:"→"})]})]}),Ne.jsxs("article",{className:"sr-only",children:[Ne.jsx("h2",{children:g.profile.title}),Ne.jsx("p",{children:g.profile.sub}),Ne.jsx("p",{children:g.profile.body}),Ne.jsx("nav",{"aria-label":g.ui.contents,children:Ne.jsx("ol",{children:H0(g).map(v=>Ne.jsx("li",{children:Ne.jsxs("button",{type:"button",onClick:()=>{var m;return(m=h.current)==null?void 0:m.goto(v.spread)},children:[v.name,", ",v.kind]})},v.spread))})}),g.cases.map(v=>Ne.jsxs("section",{children:[Ne.jsx("h3",{children:v.title}),Ne.jsx("p",{children:v.sub}),Ne.jsx("p",{children:v.body}),Ne.jsx("ul",{children:v.items.map(m=>Ne.jsxs("li",{children:[m.head?`${m.head}${m.meta?` (${m.meta})`:""}: `:"",m.text]},m.text))}),Ne.jsx("p",{children:v.stack.join(", ")})]},v.name)),Ne.jsxs("section",{children:[Ne.jsx("h3",{children:g.skills.title}),Ne.jsx("ul",{children:g.skills.groups.map(v=>Ne.jsxs("li",{children:[v.head,": ",v.text]},v.head))})]}),Ne.jsxs("section",{children:[Ne.jsx("h3",{children:g.education.title}),Ne.jsx("ul",{children:[...g.education.studies,...g.education.certs,...g.education.langs].map(v=>Ne.jsx("li",{children:[v.head,v.text,v.meta].filter(Boolean).join(", ")},v.text+(v.head??"")))})]}),Ne.jsxs("section",{children:[Ne.jsx("h3",{children:g.contact.title}),Ne.jsxs("p",{children:[Ne.jsx("a",{href:`mailto:${Va}`,children:Va})," · ",Ne.jsx("a",{href:Kd,children:"LinkedIn"})," · ",g.contact.location]})]})]})]})}N_.createRoot(document.getElementById("root")).render(Ne.jsx(Kw,{}));
