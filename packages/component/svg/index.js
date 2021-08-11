import RzSvg from './src/index';

/* istanbul ignore next */
RzSvg.install = function (Vue) {
  Vue.component(RzSvg.name, RzSvg);
};

export default RzSvg;
