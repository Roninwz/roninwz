// 先导入element组件库
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

// 导入二次封装的element组件库
import RoninwzUIElement2 from "@roninwz-ui/element2";
import "@roninwz-ui/element2/lib/theme/index.css"; // 导入RoninwzUI样式


// 先导入vant组件库
import Vant from "vant";
import "vant/lib/index.css";


// 导入基于vant二次封装的组件库
import RoninwzUIVant2 from "@roninwz-ui/vant2";
import "@roninwz-ui/vant2/lib/theme/index.css"; // 导入@roninwz-ui/vant2样式


// 导入二次封装的element组件库
import RoninwzUICore from "@roninwz-ui/core";
// import "@roninwz-ui/core/lib/theme/index.css"; // 导入RoninwzUI样式

export default ({
  Vue, router
}) => {
  // 路由切换事件处理
  // router.beforeEach((to, from, next) => {
  //   // console.log("切换路由", to.fullPath, from.fullPath);
  //   // 触发百度的pv统计
  //   if (typeof _hmt != "undefined") {
  //     if (to.path) {
  //       _hmt.push(["_trackPageview", to.fullPath]);
  //       // console.log("上报百度统计", to.fullPath);
  //     }
  //   }
  //   next();
  // });
  Vue.use(ElementUI);
  Vue.use(RoninwzUIElement2);
  Vue.use(Vant);
  Vue.use(RoninwzUIVant2);
  Vue.use(RoninwzUICore);
}