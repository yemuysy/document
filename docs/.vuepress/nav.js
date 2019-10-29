module.exports = {
  nav: [
    {
      text: '基础功课',
      items: [
        { text: '英语', link: '/basic_homework/english/' },
        { text: '高数', link: '/basic_homework/mathematics/' }
      ]
    },
    {
      text: '必修课',
      items: [
        {
          text: '数据结构与算法',
          items: [
            { text: '数据结构与算法', link: '/compulsory_course/data_structures_and_algorithms/' }
          ]
        },
        {
          text: '设计模式',
          items: [
            { text: '单例模式', link: '/compulsory_course/design_patterns/singleton.md' },
            { text: '工厂模式', link: '/compulsory_course/design_patterns/factory.md' }
          ]
        }
      ]
    },
    {
      text: '技术框架',
      items: [
        {
          text: 'java',
          items: [
            { text: 'javase', link: '/technology_and_framework/1' }
          ]
        },
        {
          text: '数据库',
          items: [
            { text: 'mysql', link: '/technology_and_framework/2' },
            { text: 'redis', link: '/technology_and_framework/3' }
          ]
        },
        {
          text: 'spring',
          items: [
            { text: 'spring', link: '/technology_and_framework/4' },
            { text: 'spring mvc', link: '/technology_and_framework/5' },
            { text: 'spring boot', link: '/technology_and_framework/6' },
            { text: 'spring cloud', link: '/technology_and_framework/7' }
          ]
        }
      ]
    },
    {
      text: '在线工具',
      items: [
        { text: '谷歌插件', link: 'https://www.crx4chrome.com/' }
      ]
    },
    { text: '关于我', link: '/about/' }
  ],
}