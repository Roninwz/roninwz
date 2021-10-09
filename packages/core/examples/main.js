import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 导入组件库
import RoninwzUI from './../src/index'
// 注册组件库
Vue.use(RoninwzUI)

import demoBlock from './components/demo-block.vue'
Vue.component('demo-block', demoBlock)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
