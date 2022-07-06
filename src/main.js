import Vue from 'vue'
import App from '@/components/RVerticalDashboardLayout'
import router from './router'
import vuetify from './plugins/vuetify'
import store from './store'
import Vue2Editor from "vue2-editor";
import './assets/styles.css'
import VueApexCharts from 'vue-apexcharts'

Vue.config.productionTip = false
Vue.use(Vue2Editor);
Vue.use(VueApexCharts)
Vue.component('quill-component', require('./components/QuillCompenent').default);
// eslint-disable-next-line vue/multi-word-component-names
Vue.component('apexchart', VueApexCharts)

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
