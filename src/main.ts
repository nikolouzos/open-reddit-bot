import Vue from 'vue'
import vuetify from '@/plugins/vuetify'
import 'vue-resource'

import App from './App.vue'
import router from './router'

import Networking from './models/networking/networking'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => (h(App)),

  // vue-resource config
  http: {
    root: 'https://www.reddit.com/dev/api',
    headers: {
      Authorization: '',
    },
  },

  prototype: {
    // Add Networking as an instance variable
    $networking: new Networking(),
  },
}).$mount('#app')
