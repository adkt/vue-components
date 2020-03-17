var Vue = require('vue');

var App = require('../comp/app.vue');
var redText = require('../comp/redText.vue');

// component registration
Vue.component('red-text', redText);

new Vue({
  el: '#app',
  render: (createElement) => createElement(App)
});
