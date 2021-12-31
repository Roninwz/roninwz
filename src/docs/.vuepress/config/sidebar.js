// 侧边栏配置
const coreCatalogArr = require('./sidebar/core.js');
const vant2CatalogArr = require('./sidebar/vant2.js');
const element2CatalogArr = require('./sidebar/element2.js');

var sidebar = {
  '/core/': coreCatalogArr,
  // 个人中心
  '/vant2/': vant2CatalogArr,
  '/element2/': element2CatalogArr,
};

module.exports = sidebar;