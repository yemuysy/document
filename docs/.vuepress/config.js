module.exports = {
    title: '码农——zxh',
    description: 'Just playing around',
    themeConfig: {
        lastUpdated: '上次更新时间',
        nav: [
          { text: 'Home', link: '/' },
          { text: '插本', link: '/guide/' },
          { text: '在线工具', 
            items: [
                { text: '展示1', link: 'https://google.com' },
                { text: '展示2', link: 'https://google.com' }
            ] 
          }
        ],
        displayAllHeaders: true, // 默认值：false 显示所有页面的标题链接
        sidebar: {
            '/about/': [
              '',     /* /foo/ */
              'hello',  /* /foo/one.html */
            ],
      
            '/about2/': [
              '',      /* /bar/ */
            ],
      
            // fallback
            '/': [
              '',        /* / */
              'contact', /* /contact.html */
              'about'    /* /about.html */
            ]
        },
        sidebarDepth: 2,
        
    }
}