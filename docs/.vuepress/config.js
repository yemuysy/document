let { nav } = require("./nav.js")
let { sidebar } = require("./sidebar.js")

module.exports = {
  title: '夜幕的天空',
  description: 'Just playing around',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],
  // base: '/documents/',
  themeConfig: {
    lastUpdated: '上次更新时间',
    repo: 'yemuysy/documents',
    repoLabel: 'GitHub',
    editLinks: true,
    editLinkText: '编辑文档',
    // 以下为可选的编辑链接选项
    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: 'yemuysy/documents',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    nav: nav, // 导航栏
    displayAllHeaders: true, // 默认值：false 显示所有页面的标题链接
    sidebar: sidebar, // 侧边栏
    sidebarDepth: 2
  }
}