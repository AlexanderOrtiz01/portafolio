#!/usr/bin/env bash
# Builds the site and publishes the result to the gh-pages branch, which GitHub Pages serves.
set -euo pipefail
cd "$(dirname "$0")/.."

remote=$(git remote get-url origin)
npm run build
touch dist/.nojekyll

# The built site goes up as a single fresh commit; the branch keeps no history of its own.
cd dist
rm -rf .git
git init -q -b gh-pages
git add -A
git -c user.name="$(git -C .. config user.name)" -c user.email="$(git -C .. config user.email)" \
  commit -q -m "Publish $(git -C .. rev-parse --short HEAD)"
git push -q --force "$remote" gh-pages
rm -rf .git
echo "Published. It can take a minute to show up."
