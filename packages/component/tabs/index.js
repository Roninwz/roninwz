// 导入组件，组件必须声明 name
import RZTabs from './src/tabs'

// 为组件提供 install 安装方法，供按需引入
RZTabs.install = function (Vue) {
  Vue.component(RZTabs.name, RZTabs)
}

// 默认导出组件
export default RZTabs
