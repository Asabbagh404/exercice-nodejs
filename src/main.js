import Vue from 'vue';
import { io } from 'socket.io-client';

import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

Vue.prototype.$socket = io('http://localhost:443');

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
