module.exports = {
  // 分组，现在分组是全局一样的，到时候实现不同类别下不同的分组情况
  sidebar: [
    {
      title: '基础功课',   // 必要的
      // path: '/basic_homework/',      // 标题跳转 可选的, 应该是一个绝对路径
      collapsable: true, // 可选的, 默认值是 true,
      sidebarDepth: 1,    // 可选的, 默认值是 1
      children: [
        "/basic_homework/english/",
        "/basic_homework/mathematics/"
      ]
    },
    {
      title: '必修课',   // 必要的
      collapsable: true, // 折叠 默认值是 true,
      sidebarDepth: 1,  // 可选的, 默认值是 1
      children: [
        {
          title: '数据结构与算法',
          collapsable: true,
          sidebarDepth: 1,
          children: [
            '/compulsory_course/data_structures_and_algorithms/'
          ]
        },
        {
          title: '设计模式',
          collapsable: true,
          sidebarDepth: 1,
          children: [
            "/compulsory_course/design_patterns/singleton",
            "/compulsory_course/design_patterns/factory"
          ]
        },
      ]
    },
  ]
}
