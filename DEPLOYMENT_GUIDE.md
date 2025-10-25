# 部署指南

本文档详细说明如何将您的开发者作品集网站部署到 Vercel。

## 前置要求

1. GitHub/GitLab/Bitbucket 账户
2. Vercel 账户（免费注册）
3. Node.js 18+ 已安装

## 步骤 1: 准备项目

### 1.1 更新个人信息

编辑 `lib/data.ts` 文件，更新以下信息：

```typescript
export const personalInfo = {
  name: "你的名字",
  title: "你的职位",
  description: "你的个人简介",
  email: "your.email@example.com",
  social: {
    github: "https://github.com/your-username",
    linkedin: "https://linkedin.com/in/your-profile",
    twitter: "https://twitter.com/your-handle",
  },
};
```

### 1.2 更新项目、技能和工作经历

编辑 `lib/data.ts` 中的 `skills`、`projects` 和 `experience` 数据。

### 1.3 本地测试

在部署前，本地测试确保一切正常：

```bash
npm install
npm run dev
```

访问 http://localhost:3000 检查效果。

## 步骤 2: 上传到 Git 仓库

### 2.1 初始化 Git 仓库（如果还没有）

```bash
cd /Users/atom/Develop/Portfolio
git init
git add .
git commit -m "Initial commit: Portfolio website"
```

### 2.2 创建远程仓库

- 登录 GitHub/GitLab/Bitbucket
- 创建新的私有或公开仓库
- 将代码推送到远程仓库

```bash
git remote add origin https://github.com/your-username/portfolio.git
git branch -M main
git push -u origin main
```

## 步骤 3: 部署到 Vercel

### 方法 1: 使用 Vercel CLI（推荐）

#### 3.1.1 安装 Vercel CLI

```bash
npm i -g vercel
```

#### 3.1.2 登录 Vercel

```bash
vercel login
```

按提示完成登录。

#### 3.1.3 部署项目

```bash
cd /Users/atom/Develop/Portfolio
vercel
```

按照提示回答问题：
- Project name: 选择一个名称（默认是文件夹名）
- Framework: 选择 "Next.js"
- Root directory: 保留默认值
- Build command: 保留默认值
- Output directory: 保留默认值

部署完成后，您将获得一个 Vercel URL。

### 方法 2: 使用 Vercel Web 界面（推荐初学者）

#### 3.2.1 访问 Vercel

1. 打开 https://vercel.com
2. 使用 GitHub/GitLab/Bitbucket 账户登录或注册

#### 3.2.2 导入项目

1. 点击 "New Project"（新建项目）
2. 选择 "Import Git Repository"
3. 搜索并选择您的 portfolio 仓库
4. 点击 "Import"

#### 3.2.3 配置

Vercel 会自动检测 Next.js 配置。检查以下设置：
- **Project Name**: 您的项目名称
- **Framework Preset**: Next.js
- **Root Directory**: ./
- **Build Command**: `next build`
- **Output Directory**: `.next`

点击 "Deploy" 开始部署。

## 步骤 4: 配置自定义域名（可选）

### 4.1 在 Vercel 仪表盘中

1. 进入项目设置
2. 导航到 "Domains" 页面
3. 点击 "Add" 添加新域名
4. 输入您的域名（例如 portfolio.example.com）

### 4.2 配置 DNS 记录

根据您的域名注册商：

#### 对于 A 记录（推荐）

```
Type: A
Name: @ 或 portfolio
Value: 76.76.19.130
```

#### 对于 CNAME 记录

```
Type: CNAME
Name: portfolio
Value: cname.vercel-dns.com
```

**注意**: DNS 记录可能需要 15-72 小时才能生效。

## 步骤 5: 部署后的优化

### 5.1 启用预览部署

1. 在 Vercel 项目设置中
2. 启用 "Git Connections"
3. 每次推送到 Git 时，Vercel 会自动创建预览部署

### 5.2 启用自动构建

在 Vercel 中，推送到 `main` 分支会自动触发生产构建。

### 5.3 设置环境变量（如需要）

1. 项目设置 → "Environment Variables"
2. 添加任何必需的环境变量

## 步骤 6: 维护和更新

### 6.1 更新内容

1. 在本地编辑 `lib/data.ts` 等文件
2. 提交更改：`git add . && git commit -m "Update portfolio"`
3. 推送到 GitHub：`git push`
4. Vercel 会自动部署更新

### 6.2 查看部署日志

在 Vercel 仪表盘中，您可以：
- 查看构建和部署日志
- 查看性能指标
- 回滚到之前的部署版本

## 常见问题

### Q: 部署失败，显示 "Build failed"

**A**: 检查：
1. 所有依赖项都已正确安装
2. 代码中没有语法错误
3. 环境变量已正确配置
4. 查看 Vercel 构建日志获取详细错误信息

### Q: 网站显示缓存的旧版本

**A**: 
1. 等待 24 小时让缓存清除
2. 或在 Vercel 项目中手动清除缓存
3. 或使用 Ctrl+Shift+Delete 完全刷新浏览器缓存

### Q: 自定义域名不工作

**A**:
1. 检查 DNS 记录是否正确配置
2. 使用 nslookup 工具验证：`nslookup portfolio.example.com`
3. 等待 DNS 传播（可能需要 48 小时）
4. 在 Vercel 中验证域名所有权

### Q: 如何从 vercel.app 域名更改为自定义域名？

**A**: 
1. 在 Vercel 中添加自定义域名
2. 配置 DNS 记录
3. 设置为默认域名（可选）
4. 旧的 vercel.app 域名仍然可用

## 性能优化建议

1. **图像优化**: 使用 Next.js Image 组件处理项目图片
2. **代码分割**: Next.js 自动进行代码分割
3. **缓存策略**: 利用 Vercel 的边缘缓存
4. **监控**: 定期检查 Vercel Analytics 和 Web Vitals

## 支持资源

- [Vercel 文档](https://vercel.com/docs)
- [Next.js 文档](https://nextjs.org/docs)
- [Tailwind CSS 文档](https://tailwindcss.com/docs)

## 后续步骤

部署完成后：
1. 分享您的新作品集链接
2. 在简历中添加链接
3. 在社交媒体上分享
4. 定期更新您的项目和经验
