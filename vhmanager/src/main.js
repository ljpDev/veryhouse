import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios'
import store from './store'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(Element)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
