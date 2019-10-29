module.exports = {
    title: '码农——zxh',
    description: 'Just playing around',
    locales: {
      '/': {
        lang: 'zh-CN'
      }
    },
    head: [
      ['link', { rel:'icon', href: '/favicon.png' } ]
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
        nav: [
          { text: '基础功课', 
            items: [
                { text: '英语', link: '/basic_homework/english/' },
                { text: '高数', link: '/basic_homework/mathematics/' }
            ] 
          },
          { text: '必修课',
            items: [
              { text: '数据结构与算法', 
                items: [
                  { text: '数据结构与算法', link: '/compulsory_course/data_structures_and_algorithms/' }
                ]
              },
              { text: '设计模式', 
                items: [
                  { text: '单例模式', link: '/compulsory_course/design_patterns/Singleton.md' },
                  { text: '工厂模式', link: '/compulsory_course/design_patterns/factory.md' }
                ]
              }
            ]
          },
          { text: '在线工具', 
            items: [
                { text: '谷歌插件', link: 'https://www.crx4chrome.com/' }
            ] 
          },
          { text: '关于我', link: '/about/'}
        ],
        displayAllHeaders: true, // 默认值：false 显示所有页面的标题链接
        sidebar: 'auto',
        sidebarDepth: 2
    }
}