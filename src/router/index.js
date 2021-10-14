import Vue from 'vue'
import Router from 'vue-router'
import navCoreConf from './core.router.js'
import navVant2Conf from './vant2.router.js'
import navElement2Conf from './element2.router.js'
import navConf from './nav.router.js'

Vue.use(Router)

let routes = []

Object.keys(navConf).forEach((header) => {
  routes = routes.concat(navConf[header])
})
Object.keys(navCoreConf).forEach((header) => {
  routes = routes.concat(navCoreConf[header])
})
Object.keys(navVant2Conf).forEach((header) => {
  routes = routes.concat(navVant2Conf[header])
})
Object.keys(navElement2Conf).forEach((header) => {
  routes = routes.concat(navElement2Conf[header])
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
      if (route.type === 'core') {
        route.component = r => require.ensure([], () =>
          r(require(`../docs/core/${route.name}.md`)))
        return
      }
      // 基于element二次封装分组件
      if (route.type === 'element2') {
        route.component = r => require.ensure([], () =>
          r(require(`../docs/element2/${route.name}.md`)))
        return
      }
      // 基于vant二次封装的组件
      if (route.type === 'vant2') {
        route.component = r => require.ensure([], () =>
          r(require(`../docs/vant2/${route.name}.md`)))
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
