// 导航栏配置

var nav = [
  { text: '首页', link: '/' },
  { text: '电脑', link: '/core/' },
  { text: '个人', link: '/vant2/' },
  { text: '文章', link: '/element2/' },
  {
    text: '索引',
    link: '/archives/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  },
  { text: 'github', link: 'https://github.com/Roninwz' },
  { text: 'gitee', link: 'https://gitee.com/roninwz' },
  // { text: 'ui库', link: 'https://roninwz.github.io/roninwz-ui/#/' },
];

module.exports = nav;