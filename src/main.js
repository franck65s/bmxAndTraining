// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import BootstrapVue from 'bootstrap-vue'
import App from './App'

// import 'bootstrap-vue/dist/bootstrap-vue.css'
// import 'bootstrap/dist/css/bootstrap.css'
import VueResource from 'vue-resource'
Vue.use(VueResource)

// import ('path/to/node_modules/vuetify/dist/vuetify.min.css') // Ensure you are using css-loader
 

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css';
Vue.use(Vuetify)

import SocialSharing from 'vue-social-sharing';
 Vue.use(SocialSharing);

// import Parallax from 'vue-parallaxy'
// Vue.use(Parallax);
// Vue.use(BootstrapVue);
Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
   
  }
})
