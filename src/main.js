// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuetify from 'vuetify';
import vueJWT from 'vuejs-jwt';
import Antd from 'ant-design-vue';
import vueMoment from 'vue-moment';
import moment from 'moment';
import 'vuetify/dist/vuetify.css';
import 'ant-design-vue/dist/antd.css';
import '@mdi/font/css/materialdesignicons.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import App from './App';
import router from './router';

const filter = (text, length, clamp) => {
  // eslint-disable-next-line
  clamp = clamp || '...';
  const node = document.createElement('div');
  node.innerHTML = text;
  const content = node.textContent;
  return content.length > length ? content.slice(0, length) + clamp : content;
};

Vue.filter('truncate', filter);

Vue.config.productionTip = false;

Vue.use(Vuetify);
Vue.use(Antd);
Vue.use(vueMoment);
Vue.use(vueJWT);
Vue.prototype.moment = moment;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App,
  },
  template: '<App/>',
});
