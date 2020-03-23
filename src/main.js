import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { MdButton, MdContent, MdTabs, MdList, MdIcon, MdBadge } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdTabs)
Vue.use(MdList)
Vue.use(MdIcon)
Vue.use(MdBadge)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
