import RzVideo from './src/index';

/* istanbul ignore next */
RzVideo.install = function (Vue) {
  Vue.component(RzVideo.name, RzVideo);
};

export default RzVideo;
