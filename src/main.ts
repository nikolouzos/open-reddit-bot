import Vue from 'vue'
import vuetify from '@/plugins/vuetify'
import 'vue-resource'

import App from './App.vue'
import router from './router'

// Add the global styles
import './styles/global.stylus'

// Add the Networking instance variable
import Networking from './models/networking/networking'

Vue.prototype.$networking = new Networking()

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
}).$mount('#app')
