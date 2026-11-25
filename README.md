# WebNav Hub - 现代化网址导航站

> 融合 Neumorphism 设计风格的现代化网址导航站，采用纯 HTML/CSS/JavaScript 技术栈。

## ✨ 特色功能

### 🎨 设计特色
- **Neumorphism 设计风格** - 现代立体软件界面设计
- **深色/浅色主题** - 支持系统主题检测和手动切换
- **响应式设计** - 完美适配各种设备尺寸
- **流畅动画** - 丰富的交互动画和微交互效果

### ⚡ 核心功能
- **平滑导航** - 锚点导航和平滑滚动
- **主题切换** - 一键切换深色/浅色主题
- **动画效果** - 页面加载、滚动和悬停动画
- **简洁设计** - 专注于网站导航的核心功能

### 📱 技术特点
- **纯原生技术** - HTML5 + CSS3 + Vanilla JavaScript
- **Tailwind CSS** - 通过 CDN 引入的原子化 CSS 框架
- **模块化设计** - 功能模块化，易于维护和扩展
- **性能优化** - 轻量级，快速加载

## 🗂️ 项目结构

```
webnav-hub/
├── index.html              # 主页面
├── css/                    # 样式文件
│   ├── themes.css         # 主题变量系统
│   ├── neumorphism.css    # Neumorphism样式
│   └── responsive.css     # 响应式设计
├── js/                     # JavaScript模块
│   ├── theme.js           # 主题切换系统
│   ├── navigation.js      # 导航功能
│   └── animations.js      # 动画效果
├── data/                   # 数据文件
│   └── links.js           # 网站链接数据
├── netlify.toml            # Netlify 部署配置
├── vercel.json             # Vercel 部署配置
├── README.md               # 项目说明文档
└── OPTIMIZATION_PLAN.md   # 优化计划文档
```

## 🚀 快速开始

### 1. 克隆项目
```bash
git clone https://github.com/your-repo/webnav-hub.git
cd webnav-hub
```

### 2. 本地运行
直接在浏览器中打开 `index.html` 文件即可。

或者使用本地服务器：
```bash
# 使用 Python
python -m http.server 8000

# 使用 Node.js
npx serve .

# 使用 VS Code Live Server 扩展
# 右键 -> Open with Live Server
```

### 3. 访问地址
```
http://localhost:8000
```

### 4. 部署上线
支持多种免费部署平台：
- **GitHub Pages** - 适合开源项目
- **Cloudflare Pages** - 全球CDN加速
- **Netlify** - 操作简单，功能强大
- **Vercel** - 无服务器部署

详细部署教程见 [🚀 部署指南](#-部署指南) 章节。

## 📊 网站分类

| 分类     | 数量 | 说明                           |
| -------- | ---- | ------------------------------ |
| Ai搜索   | 55   | AI工具、搜索引擎、对话助手     |
| 托管社交 | 23   | 托管部署、下载工具、社交平台   |
| 实用工具 | 94   | 在线工具、域名、运维与图片处理 |
| 科技资讯 | 9    | 科技新闻、技术资讯网站         |
| 云存储   | 7    | 云存储服务、文件分享平台       |
| 电子邮箱 | 8    | 邮箱服务、隐私邮箱             |

**总计：196 个精选网站**

## 🎯 功能演示

### 主题切换
- 支持深色/浅色主题无缝切换
- 自动检测系统主题偏好
- 主题设置本地存储

### 响应式设计
- **桌面端** (1024px+): 多列网格布局
- **平板端** (768px-1023px): 中等网格布局
- **手机端** (480px-767px): 双列布局
- **小屏手机** (<480px): 单列布局

### 动画效果
- 页面加载动画
- 滚动进入动画
- 卡片悬停效果
- 点击涟漪效果

## 🛠️ 自定义配置

### 📂 管理分类

#### 添加新分类
1. 编辑 `data/links.js` 文件，在 `categories` 数组中添加新分类：

```javascript
{
  id: "new-category",           // 唯一标识符，用于导航链接
  title: "新分类",              // 显示名称
  icon: "fas fa-star",          // Font Awesome 图标类名
  description: "新分类描述",     // 分类描述
  links: [                      // 该分类下的网站链接
    // 网站链接数据...
  ]
}
```

2. 在 `index.html` 中添加对应的HTML结构：

```html
<!-- 在导航栏中添加导航项 -->
<li><a href="#new-category" class="neuro-nav-item">新分类</a></li>

<!-- 在主要内容区域添加分类section -->
<section id="new-category" class="category-section mb-12 animate-on-scroll">
    <h2 class="category-title text-2xl font-bold mb-6 flex items-center"
        style="color: var(--primary-color);">
        <i class="fas fa-star mr-3"></i>
        新分类
    </h2>
    <div class="link-grid grid grid-auto-fit gap-4">
        <!-- 链接卡片将通过JavaScript动态生成 -->
    </div>
</section>
```

#### 删除分类
1. 从 `data/links.js` 的 `categories` 数组中删除对应的分类对象
2. 从 `index.html` 中删除对应的导航项和section
3. 更新网站数量统计

#### 重命名分类
1. 修改 `data/links.js` 中分类的 `title` 字段
2. 更新 `index.html` 中对应的显示文本
3. 如需修改URL路径，同时更新 `id` 字段和HTML中的锚点

### 🔗 管理网址

#### 添加新网站
在目标分类的 `links` 数组中添加网站对象：

```javascript
{
  id: "website-id",                    // 唯一标识符（全站唯一）
  title: "网站名称",                   // 显示名称
  url: "https://example.com",         // 网站URL
  icon: "fa-solid fa-globe"           // Font Awesome图标
}
```

**图标选择指南：**
- 🔍 搜索引擎：`fa-solid fa-magnifying-glass`
- 🤖 AI工具：`fa-solid fa-robot`
- 📱 社交媒体：`fa-brands fa-twitter`、`fa-brands fa-facebook`
- 🛠️ 开发工具：`fa-solid fa-code`、`fa-solid fa-terminal`
- 📰 新闻资讯：`fa-solid fa-newspaper`
- ☁️ 云存储：`fa-solid fa-cloud`
- 📧 邮箱服务：`fa-solid fa-envelope`
- 🎨 设计工具：`fa-solid fa-palette`
- 📊 数据分析：`fa-solid fa-chart-bar`

更多图标查看：[Font Awesome Icons](https://fontawesome.com/icons)

#### 删除网站
从对应分类的 `links` 数组中删除目标网站对象即可。

#### 修改网站信息
直接编辑 `data/links.js` 中对应网站对象的字段：
- `title`：修改显示名称
- `url`：更新网站地址
- `icon`：更换图标
- `description`：更新描述
- `tags`：修改标签

#### 调整网站顺序
在 `links` 数组中拖动网站对象的位置，数组顺序即为显示顺序。

### 🎨 界面定制

### 🎨 界面定制

#### 修改主题色
编辑 `css/themes.css` 文件中的 CSS 变量：

```css
:root {
  --primary-color: #ff9000;        /* 主色调 */
  --primary-hover: #e67e22;        /* 悬停色 */
  --primary-light: #ffb84d;        /* 浅色调 */
  --primary-dark: #cc7400;         /* 深色调 */
}
```

#### 调整 Neumorphism 效果
修改 `css/neumorphism.css` 中的参数：

```css
:root {
  --neuro-distance: 20px;    /* 阴影距离 */
  --neuro-intensity: 0.15;   /* 阴影强度 */
  --neuro-blur: 30px;        /* 模糊半径 */
  --neuro-radius: 20px;      /* 圆角大小 */
}
```

## 🚀 部署指南

### 🐱 GitHub Pages 部署

#### 方法一：通过 GitHub 网页界面
1. **上传代码**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/webnav-hub.git
   git push -u origin main
   ```

2. **配置 GitHub Pages**
   - 进入仓库设置 (Settings)
   - 找到 "Pages" 选项
   - Source 选择 "Deploy from a branch"
   - Branch 选择 "main"
   - 点击 "Save"

3. **访问网站**
   - 网址：`https://yourusername.github.io/webnav-hub`
   - 部署时间：1-5分钟

#### 方法二：使用 GitHub Actions
创建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./
```

### ☁️ Cloudflare Pages 部署

1. **连接 GitHub 仓库**
   - 访问 [Cloudflare Pages](https://pages.cloudflare.com/)
   - 点击 "Create a project"
   - 选择 "Connect to Git"
   - 授权并选择您的仓库

2. **配置构建设置**
   ```
   Framework preset: None
   Build command: （留空）
   Build output directory: /
   Root directory: /
   ```

3. **部署完成**
   - 自动分配域名：`your-project.pages.dev`
   - 支持自定义域名
   - 部署时间：30秒-2分钟

### 🕺 Netlify 部署

#### 方法一：拖放部署
1. 访问 [Netlify](https://www.netlify.com/)
2. 直接拖放项目文件夹到网页
3. 等待部署完成

#### 方法二：Git 集成
1. **连接仓库**
   - 点击 "New site from Git"
   - 选择 GitHub 并授权
   - 选择目标仓库

2. **构建设置**
   ```
   Branch to deploy: main
   Build command: （留空）
   Publish directory: /
   ```

3. **自定义配置** (可选)
   项目中已包含 `netlify.toml` 配置文件。

### 🔺 Vercel 部署

1. **安装 Vercel CLI** (可选)
   ```bash
   npm i -g vercel
   ```

2. **通过网页部署**
   - 访问 [Vercel](https://vercel.com/)
   - 点击 "New Project"
   - 导入 GitHub 仓库
   - 使用默认设置部署

3. **CLI 部署**
   ```bash
   cd your-project
   vercel
   # 按提示完成配置
   ```

4. **自定义配置**
   项目中已包含 `vercel.json` 配置文件。

### 📦 其他部署平台

#### Surge.sh
```bash
npm install -g surge
cd your-project
surge
```

#### Firebase Hosting
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

#### Render
1. 访问 [Render](https://render.com/)
2. 连接 GitHub 仓库
3. 选择 "Static Site"
4. 设置 Build Command: 留空
5. 设置 Publish Directory: `/`

### 🔧 部署优化建议

1. **压缩优化**
   - 使用 CDN 加载外部资源
   - 启用 Gzip 压缩
   - 优化图片大小

2. **性能监控**
   - 使用 Google PageSpeed Insights
   - 检查 Core Web Vitals
   - 监控加载时间

3. **SEO 优化**
   - 设置自定义域名
   - 配置 HTTPS
   - 添加 robots.txt
   - 提交 sitemap.xml

4. **缓存策略**
   ```html
   <!-- 在 index.html 中添加 -->
   <meta http-equiv="Cache-Control" content="public, max-age=31536000">
   ```

## 📱 浏览器支持

| 浏览器  | 版本要求 |
| ------- | -------- |
| Chrome  | 60+      |
| Firefox | 55+      |
| Safari  | 12+      |
| Edge    | 79+      |

### 核心功能支持
- ✅ CSS Grid 布局
- ✅ CSS Variables
- ✅ ES6+ JavaScript
- ✅ Intersection Observer
- ✅ Local Storage

## 🎨 设计规范

### Neumorphism 设计原则
1. **柔和阴影** - 使用内外阴影创建立体效果
2. **微妙渐变** - 背景使用细微的渐变
3. **圆角设计** - 大量使用圆角元素
4. **低对比度** - 保持色彩的低对比度
5. **触感体验** - 模拟真实的物理材质

### 色彩系统
- **主色调**: #FF9000 (橙色)
- **浅色主题**: #F0F0F3 背景
- **深色主题**: #2D3748 背景
- **功能色**: 成功(绿)、警告(橙)、错误(红)、信息(蓝)

## 🔧 开发指南

### 代码结构
- **模块化** - 每个功能独立模块
- **可配置** - 通过配置文件调整参数
- **可扩展** - 易于添加新功能和网站

### 性能优化
- **CDN 加载** - Tailwind CSS 和 Font Awesome
- **懒加载** - 图片和动画按需加载
- **代码分割** - 功能模块独立加载
- **缓存策略** - 本地存储用户设置

## 📈 更新日志

### v2.1.0 (2025-08-26)
- ✨ 移除搜索功能，专注核心导航体验
- ✨ 简化页脚设计，保留必要信息
- 🗂️ 优化项目结构，删除多余文件
- 🔄 更新文档，反映最新项目状态

### v2.0.0 (2025-08-26)
- ✨ 全新 Neumorphism 设计风格
- ✨ 集成 Tailwind CSS 框架
- ✨ 增强主题切换系统
- ✨ 丰富动画效果和微交互
- 🚀 优化响应式设计
- 🔧 重构代码架构

### v1.0.0
- 🎉 初始版本发布
- 📱 基础响应式设计
- 🔗 155+ 网站收录
- 🎨 深色主题设计

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

### 📝 提交网站建议
1. **质量要求**
   - 确保网站质量和实用性
   - 网站必须正常访问，无恶意内容
   - 优先选择知名度高、用户量大的网站

2. **信息完整性**
   - 提供准确的网站名称和URL
   - 编写简洁明了的功能描述
   - 选择合适的分类和图标
   - 添加相关的搜索标签

3. **提交格式**
   ```markdown
   **网站名称**：示例网站
   **网站地址**：https://example.com
   **功能描述**：提供XXX功能的在线工具
   **建议分类**：实用工具
   **建议图标**：fa-solid fa-tools
   **搜索标签**：工具、在线、免费
   ```

### 📊 提交新分类建议
1. **分类必要性**
   - 证明新分类的必要性
   - 提供至少 5-10 个相关网站
   - 确保与现有分类不重复

2. **分类设计**
   - 分类名称简洁明了
   - 选择合适的 Font Awesome 图标
   - 提供简短的分类描述

### 🔧 技术贡献
1. **代码规范**
   - 使用 ES6+ 语法
   - 遵循模块化设计
   - 保持代码简洁可读
   - 添加必要的注释

2. **功能开发**
   - 新功能需要与项目风格保持一致
   - 保持 Neumorphism 设计风格
   - 确保响应式兼容性
   - 添加必要的测试

3. **文档更新**
   - 同步更新 README.md
   - 更新相关配置文件
   - 添加变更日志

### 📝 Pull Request 指南
1. **提交前检查**
   - 确保代码正常运行
   - 检查所有链接是否有效
   - 验证响应式设计
   - 测试主题切换功能

2. **PR 标题格式**
   ```
   feat: 添加XXX网站到XXX分类
   fix: 修复XXX问题
   docs: 更新文档
   style: 优化样式
   ```

3. **PR 描述模板**
   ```markdown
   ## 变更类型
   - [ ] 新增网站
   - [ ] 新增分类
   - [ ] 功能优化
   - [ ] Bug修复
   - [ ] 文档更新
   
   ## 变更内容
   请描述具体的变更内容...
   
   ## 测试说明
   请说明如何测试这些变更...
   ```

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 🙏 致谢

- [Tailwind CSS](https://tailwindcss.com/) - 原子化 CSS 框架
- [Font Awesome](https://fontawesome.com/) - 图标字体库
- [Inter Font](https://rsms.me/inter/) - 现代化字体
- Neumorphism 设计理念

---

**🌟 如果这个项目对你有帮助，请给个 Star！**

<div align="center">

![WebNav Hub](https://img.shields.io/badge/WebNav-Hub-orange?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

</div>