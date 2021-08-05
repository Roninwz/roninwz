(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3e5da718"],{d534:function(s,t,a){"use strict";a.r(t);var e=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",[s._v("address 选择器")]),a("hr"),a("h2",[s._v("概述")]),a("p",[s._v("基于 vant 二次封装的地址选择器")]),a("h2",[s._v("基础布局")]),a("div",{staticClass:"demo-block"},[a("rz-button",{staticClass:"cell-box",on:{click:function(t){s.isShowAddressSelect=!0}}},[s._v("去选择")]),a("van2-Address",{attrs:{title:"地址选择器",show:s.isShowAddressSelect},on:{selectValue:s.selectAddress,closeShow:s.closeShowAddress,cancel:function(t){s.isShowAddressSelect=!1}}})],1),a("demo-block",[a("div",{attrs:{slot:"desc"},slot:"desc"},[a("html",[a("head"),a("body",[a("rz-button",{staticClass:"cell-box",on:{click:function(t){s.isShowAddressSelect=!0}}},[s._v("去选择")]),a("van2-address",{attrs:{title:"地址选择器",show:s.isShowAddressSelect},on:{selectvalue:s.selectAddress,closeshow:s.closeShowAddress,cancel:function(t){s.isShowAddressSelect=!1}}})],1)])]),a("div",{attrs:{slot:"highlight"},slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("\x3c!-- 地址选择器 --\x3e")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("rz-button")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"cell-box"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"isShowAddressSelect = true"')]),s._v("\n  >")]),s._v("去选择"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("rz-button")]),s._v("\n>")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("van2-Address")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("title")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"地址选择器"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":show")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"isShowAddressSelect"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@selectValue")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"selectAddress"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@closeShow")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"closeShowAddress"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@cancel")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"isShowAddressSelect = false"')]),s._v("\n/>")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("isShowAddressSelect")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 是否显示地址弹窗")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("address")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('""')]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 地址")]),s._v("\n      };\n    },\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 底部弹窗带取消按钮")]),s._v("\n      closeShowAddress() {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".isShowAddressSelect = "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(";\n      },\n      "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 选择地址")]),s._v("\n      selectAddress(data) {\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" (!data["),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2")]),s._v("]) "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v("; "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 当索引3的数据为空时，表示只选择了省，这种情况不进行操作（至少要选择到市）")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".address = data["),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("].name + data["),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v("].name + data["),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("2")]),s._v("].name;\n      },\n    },\n  };\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])]),a("h3",[s._v("属性")]),s._m(0),a("h3",[s._v("事件")]),s._m(1)],1)},r=[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[s._v("参数")]),a("th",[s._v("说明")]),a("th",[s._v("类型")]),a("th",[s._v("可选值")]),a("th",[s._v("默认值")])])]),a("tbody",[a("tr",[a("td",[s._v("show")]),a("td",[s._v("是否显示地址选择器")]),a("td",[s._v("boolean")]),a("td",[s._v("—")]),a("td",[s._v("false")])]),a("tr",[a("td",[s._v("title")]),a("td",[s._v("地址选择器的标题")]),a("td",[s._v("string")]),a("td"),a("td")])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[s._v("事件名称")]),a("th",[s._v("说明")]),a("th",[s._v("回调参数")])])]),a("tbody",[a("tr",[a("td",[s._v("selectValue")]),a("td",[s._v("确定地址选择时的事件")]),a("td",[s._v("—")])]),a("tr",[a("td",[s._v("closeShowAddress")]),a("td",[s._v("关闭地址选择器弹窗的事件")]),a("td",[s._v("—")])]),a("tr",[a("td",[s._v("cancel")]),a("td",[s._v("取消地址选择器选择的事件")]),a("td",[s._v("—")])])])])}],l=(a("b0c0"),{data:function(){return{isShowAddressSelect:!1,address:""}},methods:{closeShowAddress:function(){this.isShowAddressSelect=!1},selectAddress:function(s){s[2]&&(this.address=s[0].name+s[1].name+s[2].name)}}}),n=l,c=a("2877"),v=Object(c["a"])(n,e,r,!1,null,null,null);t["default"]=v.exports},f73e:function(s,t,a){var e={"./address.md":"d534"};function r(s){var t=l(s);return a(t)}function l(s){if(!a.o(e,s)){var t=new Error("Cannot find module '"+s+"'");throw t.code="MODULE_NOT_FOUND",t}return e[s]}r.keys=function(){return Object.keys(e)},r.resolve=l,s.exports=r,r.id="f73e"}}]);
//# sourceMappingURL=chunk-3e5da718.c88261fc.js.map