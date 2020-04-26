import Vue from 'vue';
import VueGtag from 'vue-gtag';
import VueCompositionApi from '@vue/composition-api';

Vue.use(VueCompositionApi);

Vue.config.productionTip = false;

import './registerServiceWorker';
const App = require('./App.vue').default;
const router = require('./router').default;

if ((window as any).webpackHotUpdate === undefined) {
  const gtagId = 'UA-164225754-2';
  Vue.use(VueGtag, {
    config: {
      id: 'UA-164225754-2',
      params: {
        send_page_view: false
      },
    },
    onReady(gtag: any) {
      // send initial page-view after load
      gtag('config', gtagId, {
        'page_path': location.hash.substring(1)
      });
    }
  }, router);
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
