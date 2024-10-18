import Vue from 'vue'
import App from './App.vue'
import MagicGrid from "vue-magic-grid";
import Router from 'vue-router';
import VueMeta from 'vue-meta';
import VueSocialSharing from 'vue-social-sharing';





Vue.config.productionTip = false
Vue.use(MagicGrid)
Vue.use(Router)
Vue.use(VueMeta)
Vue.use(VueSocialSharing)
new Vue({
  render: h => h(App),
}).$mount('#app')

