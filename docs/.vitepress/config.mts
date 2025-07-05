import { defineConfig } from 'vitepress'
import taskLists from 'markdown-it-task-checkbox'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "小X宝社区 & 小胰宝",
  description: "用 AI 为肿瘤患者点亮希望之光",
  ignoreDeadLinks: true, // 允许死链
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '关于项目', link: '/about_project' }
    ],

    sidebar: [
      {
        text: '项目介绍',
        items: [
          { text: '项目简介', link: '/about_project' },
          { text: '自部署指南', link: '/project/自部署指南' },
          { text:'产品路线图', link: '/project/roadmap' },
          { text:'安全政策说明', link: '/project/SECURITY' },
        ]
      },
      {
        text: '病友指南',
        items: [
          { text: '病友宝典', link: '/patient/小胰宝-病友宝典' },
          { text: '小胰宝套装二维码', link: '/patient/小胰宝套装二维码' }
        ]
      },
      {
        text: '贡献指南',
        items: [
          { text: '加入项目前必读', link: '/contributor/加入项目前必读' },
          { text: '任务清单', link: '/contributor/require' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/PancrePal-xiaoyibao' }
    ]
  },

  markdown: {
    config: (md) => {
      // 使用 markdown-it-task-checkbox 插件来支持任务列表
      md.use(taskLists)
    }
  }
})
