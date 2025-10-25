# 快速开始指南

让您的个人作品集网站在 5 分钟内运行起来！

## 1. 本地开发（2 分钟）

```bash
# 进入项目目录
cd /Users/atom/Develop/Portfolio

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

打开浏览器访问 `http://localhost:3000` 查看您的网站。

## 2. 自定义内容（2 分钟）

编辑 `lib/data.ts` 文件，更新以下内容：

```typescript
// 个人信息
personalInfo: {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  // ...
}

// 技能
skills: [/* ... */]

// 项目
projects: [/* ... */]

// 工作经历
experience: [/* ... */]
```

保存后，网页会自动刷新显示更新。

## 3. 部署到 Vercel（1 分钟）

### 选项 A: 使用 CLI（最快）

```bash
npm i -g vercel    # 首次安装
vercel             # 部署
```

### 选项 B: 使用 Web 界面

1. 推送代码到 GitHub
2. 访问 [vercel.com](https://vercel.com)
3. 点击 "New Project" → 导入您的 GitHub 仓库
4. 点击 "Deploy"

🎉 完成！您的网站现已上线。

## 项目文件说明

| 文件 | 说明 |
|------|------|
| `lib/data.ts` | 个人信息、项目、技能等数据 |
| `components/` | 页面组件（导航、项目等） |
| `app/page.tsx` | 主页面 |
| `app/globals.css` | 全局样式 |
| `tailwind.config.ts` | Tailwind 配置 |

## 常见修改

### 更改网站标题和描述
编辑 `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: "Your Portfolio",
  description: "Your description here",
};
```

### 修改导航菜单
编辑 `components/Navigation.tsx` 中的 `navItems` 数组

### 更改颜色主题
编辑 `tailwind.config.ts` 中的颜色值

## 下一步

- 详细文档: 查看 [README.md](./README.md)
- 部署说明: 查看 [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)
- 自定义域名: 参考部署指南的第 4 步

## 需要帮助？

- 查看 [Next.js 文档](https://nextjs.org/docs)
- 查看 [Tailwind CSS 文档](https://tailwindcss.com/docs)
- 查看 [Vercel 文档](https://vercel.com/docs)
