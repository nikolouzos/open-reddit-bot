import Vue from 'vue'
import VueResource from 'vue-resource';

// Use the VueResource module
Vue.use(VueResource)

export default class Networking {
  http: {
    (options: VueResource.HttpOptions): PromiseLike<VueResource.HttpResponse>;
    get: VueResource.$http;
    post: VueResource.$http;
    put: VueResource.$http;
    patch: VueResource.$http;
    delete: VueResource.$http;
    jsonp: VueResource.$http;
  }

  constructor(vue: Vue) {
    this.http = vue.$http
  }

  static config = {
    root: 'https://www.reddit.com/api/v1',
  }

  authenticationRequest() {
    const body = {
      client_id: process.env.CLIENT_ID,
      response_type: 'code',
      redirect_url: 'http://localhost:8080/',
      duration: 'permanent',
      scope: 'submit mysubreddits',
      state: process.env.STATE_SECRET,
    };

    this.http.post('/authorize', body).then((response: VueResource.HttpResponse) => {
      console.log(response);
    });
  }
}
