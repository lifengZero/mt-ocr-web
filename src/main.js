// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import api from './axios/api'
import elementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'

Vue.use(elementUI)
Vue.config.productionTip = false
Vue.prototype.axios = api

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
