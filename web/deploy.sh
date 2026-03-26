#!/usr/bin/env sh
set -e

echo "====== BUILD PRODUCTION ======"
npm run build

DIST_DIR="../gapcm-dist"

echo "====== PREPARE DIST ======"
cp .htaccess "$DIST_DIR" 2>/dev/null || true
cp UPDATE.md "$DIST_DIR" 2>/dev/null || true

cd "$DIST_DIR"

echo "====== COMMIT DIST ======"
git add -A
git commit -m "deploy production"

echo "====== PUSH TO SERVER ======"
git push -f production main

echo "====== DEPLOY DONE ======"
