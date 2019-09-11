import Vue from 'vue';
import 'vue-resource';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => (h(App)),
  vuetify,

  // vue-resource config
  http: {
    root: 'https://www.reddit.com/dev/api',
    headers: {
      Authorization: '',
    },
  },
}).$mount('#app');
