# 项目部署指南

## 部署到 Vercel（推荐）

### 方法一：使用 Vercel Dashboard（最简单）

1. **注册 Vercel 账号**
   - 访问 https://vercel.com/signup
   - 使用 GitHub 账号或邮箱注册（免费）

2. **将项目推送到 GitHub**
   ```bash
   # 初始化 Git 仓库
   git init
   
   # 添加文件
   git add .
   git commit -m "Initial commit"
   ```
   - 在 GitHub 创建新仓库
   - 推送到 GitHub

3. **一键部署**
   - 登录 Vercel 后点击 "New Project"
   - 选择您的 GitHub 仓库
   - 点击 "Deploy"
   - 等待约 1-2 分钟即可完成！

4. **获得永久域名**
   - 部署完成后会获得类似 `your-project-name.vercel.app` 的域名
   - 可以在设置中自定义域名

### 方法二：使用 Vercel CLI

1. **安装 Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **登录并部署**
   ```bash
   # 登录 Vercel
   vercel login
   
   # 部署（第一次会提示创建项目）
   vercel
   
   # 部署到生产环境
   vercel --prod
   ```

## 部署到 Netlify（备选方案）

1. 访问 https://www.netlify.com/
2. 点击 "Add new site"
3. 上传 `dist` 文件夹或连接 GitHub 仓库
4. 等待部署完成

## 部署后验证

部署完成后，您的网站将：
- ✅ 永久在线，电脑关机也能访问
- ✅ 全球 CDN 加速，手机电脑都能快速打开
- ✅ 自动 HTTPS，安全可靠
- ✅ 免费域名，可自定义

## 更新网站

后续更新内容时：
1. 提交代码到 GitHub
2. Vercel 会自动重新部署
3. 通常 10-30 秒内完成更新

## 本地预览部署结果

```bash
npm run build
npm run preview
```
