import Vue from 'vue'
import App from './App.vue'
import router from './router'


import demoBlock from './components/demo-block.vue'
Vue.component('demo-block', demoBlock)

// 先导入element组件库
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

// 导入二次封装的element组件库
import RoninwzUIElement2 from "@roninwz-ui/element2";
import "@roninwz-ui/element2/lib/theme/index.css"; // 导入RoninwzUI样式
Vue.use(RoninwzUIElement2);

// 先导入vant组件库
import Vant from "vant";
import "vant/lib/index.css";
Vue.use(Vant);

// 导入基于vant二次封装的组件库
import RoninwzUIVant2 from "@roninwz-ui/vant2";
// import "@roninwz-ui/vant2/lib/theme/index.css"; // 导入@roninwz-ui/vant2样式
Vue.use(RoninwzUIVant2);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
