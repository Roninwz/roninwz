import Vue from 'vue'
import Router from 'vue-router'
import navConf from '../nav.config.json'

Vue.use(Router)

let routes = []

Object.keys(navConf).forEach((header) => {
  routes = routes.concat(navConf[header])
})

let addComponent = (router) => {
  router.forEach((route) => {
    if (route.items) {
      addComponent(route.items)
      routes = routes.concat(route.items)
    } else {
      // vue页面
      if (route.type === 'pages') {
        route.component = r => require.ensure([], () =>
          r(require(`../pages/${route.name}.vue`)))
        return
      }
      // 完全自定义组件文档
      if (route.type === 'components') {
        route.component = r => require.ensure([], () =>
          r(require(`../docs/components/${route.name}.md`)))
        return
      }
      // 基于element二次封装分组件
      if (route.type === 'element') {
        route.component = r => require.ensure([], () =>
          r(require(`../docs/element/${route.name}.md`)))
        return
      }
      // 基于vant二次封装的组件
      if (route.type === 'vant') {
        route.component = r => require.ensure([], () =>
          r(require(`../docs/vant/${route.name}.md`)))
        return
      }
      // 其它md文档
      route.component = r => require.ensure([], () =>
        r(require(`../docs/${route.name}.md`)))
    }
  })
}
addComponent(routes)

export default new Router({
  routes: routes
})
