// 导航栏配置

var nav = [
  { text: '首页', link: '/' },
  { text: 'core', link: '/core/' },
  { text: 'vant2', link: '/vant2/' },
  { text: 'element2', link: '/element2/' },
  {
    text: '索引',
    link: '/archives/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  },
  { text: 'github', link: 'https://github.com/Roninwz/roninwz-ui' },
  { text: 'gitee', link: 'https://gitee.com/roninwz-ui' },
  // { text: 'ui库', link: 'https://roninwz.github.io/roninwz-ui/#/' },
];

module.exports = nav;