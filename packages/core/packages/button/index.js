import RZButton from './src/button';

/* istanbul ignore next */
RZButton.install = function (Vue) {
  Vue.component(RZButton.name, RZButton);
};

export default RZButton;
