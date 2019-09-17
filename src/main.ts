import Vue from 'vue'
import VueResource from 'vue-resource'
import vuetify from '@/plugins/vuetify'

import App from './App.vue'
import router from './router'
import Networking from './models/networking/networking'

// Add the global styles
import './styles/global.stylus'

Vue.config.productionTip = false

//* Add the Vue instance variable types
declare module 'vue/types/vue' {
  interface Vue {
    $http: {
      (options: VueResource.HttpOptions): PromiseLike<VueResource.HttpResponse>;
      get: VueResource.$http;
      post: VueResource.$http;
      put: VueResource.$http;
      patch: VueResource.$http;
      delete: VueResource.$http;
      jsonp: VueResource.$http;
    },
    // Add the Networking instance variable
    $networking: Networking,
  }
}

const vue = new Vue({
  router,
  vuetify,
  render: h => (h(App)),

  // vue-resource config
  http: Networking.config,

}).$mount('#app')

// Declare the instance variables
Vue.prototype.$networking = new Networking(vue)
