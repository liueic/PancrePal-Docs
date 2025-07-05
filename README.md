# PancrePal-Docs

## 项目简介

**PancrePal-Docs** 是“小X宝社区 & 小胰宝”公益开源项目的文档站点源码，基于 [VitePress](https://vitepress.dev/) 构建。项目致力于为胰腺癌等肿瘤患者及家属、医生、开发者提供权威、易用的知识库和社区协作平台，推动 AI 技术在肿瘤患者服务领域的公益应用。

- **项目主页**：[https://github.com/PancrePal-xiaoyibao/PancrePal-Docs](https://github.com/PancrePal-xiaoyibao/PancrePal-Docs)
- **在线文档**：建议访问部署后的站点获取最佳体验

## 功能亮点

- 📚 **详细的项目介绍、部署指南、贡献流程**
- ✅ **任务清单与贡献者指引**
- 🧑‍🤝‍🧑 **病友指南与社区共创内容**
- 🔒 **安全政策与项目路线图**
- 📝 **支持 Markdown 任务列表、代码高亮等丰富格式**

## 本地开发与预览

### 1. 克隆项目

```bash
git clone https://github.com/PancrePal-xiaoyibao/PancrePal-Docs.git
cd PancrePal-Docs
```

### 2. 安装依赖

确保你已安装 [Node.js](https://nodejs.org/) (建议 22.x 及以上) 和 [npm](https://www.npmjs.com/)。

```bash
npm install
```

### 3. 本地启动文档站点

```bash
npm run docs:dev
```
或
```bash
npx vitepress dev docs
```

启动后，访问 [http://localhost:5173](http://localhost:5173) 查看文档站点。

### 4. 构建静态站点

如需生成静态文件用于部署：

```bash
npm run docs:build
```
或
```bash
npx vitepress build docs
```
生成的静态文件位于 `docs/.vitepress/dist` 目录。

## 目录结构说明

```
PancrePal-Docs/
├── docs/                # 文档源码目录
│   ├── index.md         # 首页配置
│   ├── about_project.md # 项目介绍
│   ├── project/         # 项目相关文档
│   ├── patient/         # 病友指南
│   ├── contributor/     # 贡献者指南
│   └── .vitepress/      # VitePress 配置
│       └── config.mts   # 主题与插件配置
├── package.json         # 项目依赖与脚本
└── README.md            # 项目说明（本文件）
```

## 常见开发问题

- **任务列表支持**：直接在 Markdown 文件中使用 `- [ ]` 或 `- [x]` 语法即可渲染复选框。
- **自定义块/高亮**：可通过 VitePress 插件扩展，详见 `.vitepress/config.mts`。
- **内容协作**：欢迎通过 Pull Request 贡献文档、纠错或补充内容。

## 参与贡献

1. Fork 本仓库并新建分支
2. 提交修改并发起 Pull Request
3. 详细描述你的更改内容

欢迎开发者、患者、医生、公益组织等各界伙伴加入我们，共同完善文档和社区！


**让技术点亮生命之光，欢迎你的加入！**