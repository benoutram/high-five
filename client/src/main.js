// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from './App'
import router from './router'
import {sync} from 'vuex-router-sync'
import Vue from 'vue'
import Vuetify from 'vuetify'
import store from '@/store/store'
import _ from 'lodash'

Vue.use(Vuetify)
Vue.config.productionTip = false
Object.defineProperty(Vue.prototype, '$_', { value: _ })
// Vue.set(Vue.prototype, '_', _)

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

require('../node_modules/vuetify/dist/vuetify.min.css')
