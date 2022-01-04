// 导入其它配置
const sidebar = require('./config/sidebar.js');
const nav = require('./config/nav.js');
const path = require('path');
module.exports = {
  logo: '/img/head.png', // 导航栏logo
  theme: 'vdoing', // v1.8.3
  title: '个人 UI 组件库',
  description: '个人 UI 组件库',
  base: '/',
  port: '10002',
  head: [
  ],
  markdown: {
    lineNumbers: true, // 代码块显示行号
  },
  lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间,
  themeConfig: {
    defaultTheme: 'light',
    nav,
    sidebar,
    sidebarDepth: 3,
    lastUpdated: '更新时间',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '编辑',
    author: { // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, link: String}
      name: '放肆青春', // 必需
      link: 'https://gitee.com/roninwz' // 可选的
    },
    blogger: {
      // 博主信息，显示在首页侧边栏
      avatar: '/img/head.png',
      name: '放肆青春',
      slogan: '一个前端菜鸟的技术成长之路',
    },
    social: {
      // 社交图标，显示于博主信息栏和页脚栏
      // iconfontCssFile: '//at.alicdn.com/t/font_1678482_u4nrnp8xp6g.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自由添加
      icons: [
        {
          iconClass: 'icon-youjian',
          title: '发邮件',
          link: 'mailto:1947914887@qq.com',
        },
        {
          iconClass: 'icon-github',
          title: 'GitHub',
          link: 'https://github.com/roninwz',
        },
        {
          iconClass: 'icon-gitee',
          title: 'Gitee',
          link: 'https://gitee.com/roninwz',
        },
      ],
    },
    footer: {
      createYear: 2019,
      copyrightInfo: '放肆青春'
    }
  },
  plugins: [
    ['vuepress-plugin-one-click-copy', true],// 复制代码块插件
    [
      'copyright',
      {
        noCopy: true, // 选中的文字将无法被复制
        minLength: 100, // 如果长度超过 100 个字符
      },
    ],
    ['demo-container']
  ],
};