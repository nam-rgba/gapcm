## 1. KIẾN TRÚC CHUẨN (CHỐT)

### Local (Ubuntu)

taskee-app/ # repo source code (có .git)
├── src/
├── vite.config.ts
└── package.json

taskee-dist/ # repo artifact (có .git riêng)
├── index.html
├── assets/
└── .git

### Server (DigitalOcean)

/var/www/taskee
├── repo/ # git bare repo (nhận push)
└── dist/ # nginx serve (checkout từ repo)

yaml
Copy code

Branch dùng **DUY NHẤT**: `main`

---

## 2. CẤU HÌNH VITE (BUILD RA NGOÀI REPO)

### `vite.config.ts`

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // hoặc vue

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '../taskee-dist',
    emptyOutDir: true
  }
})
.gitignore trong repo app
Copy code
taskee-dist/
3. SETUP SERVER (DIGITALOCEAN)
3.1 Tạo thư mục
sh
Copy code
sudo mkdir -p /var/www/taskee/repo
sudo mkdir -p /var/www/taskee/dist
3.2 Tạo Git bare repo
sh
Copy code
cd /var/www/taskee/repo
git init --bare
3.3 Git hook post-receive (BẮT BUỘC)
sh
Copy code
nano /var/www/taskee/repo/hooks/post-receive
sh
Copy code
#!/bin/sh
set -e

GIT_DIR=/var/www/taskee/repo
DIST_DIR=/var/www/taskee/dist

git --work-tree=$DIST_DIR --git-dir=$GIT_DIR checkout -f main
sh
Copy code
chmod +x /var/www/taskee/repo/hooks/post-receive
3.4 Phân quyền (user deploy: nam_dep)
sh
Copy code
sudo chown -R nam_dep:www-data /var/www/taskee
sudo chmod -R 775 /var/www/taskee
4. CẤU HÌNH NGINX (PRODUCTION)
4.1 Tạo site config
sh
Copy code
sudo nano /etc/nginx/sites-available/taskee
nginx
Copy code
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

    root /var/www/taskee/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|svg|ico|woff2?)$ {
        expires 30d;
        access_log off;
    }
}
Enable site:

sh
Copy code
sudo ln -s /etc/nginx/sites-available/taskee /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
5. SSH KEY (LOCAL → SERVER)
~/.ssh/config (LOCAL)
bash
Copy code
Host taskee-prod
    HostName SERVER_IP
    User nam_dep
    IdentityFile ~/.ssh/xxx
    IdentitiesOnly yes
Test:

sh
Copy code
ssh taskee-prod
6. SETUP REPO ARTIFACT (LOCAL – CHỈ 1 LẦN)
sh
Copy code
cd ../taskee-dist
git init
git branch -M main
git remote add production ssh://taskee-prod/var/www/taskee/repo
7. SCRIPT DEPLOY PRODUCTION (LOCAL)
deploy-prod.sh
sh
Copy code
#!/usr/bin/env sh
set -e

echo "====== BUILD PRODUCTION ======"
npm run build

DIST_DIR="../taskee-dist"

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
sh
Copy code
chmod +x deploy-prod.sh
8. DEPLOY
sh
Copy code
sh deploy-prod.sh
9. TEST SAU DEPLOY
9.1 Trên server
sh
Copy code
ls /var/www/taskee/dist
Phải có:

index.html

assets/

9.2 Test nginx
sh
Copy code
curl http://localhost
```
