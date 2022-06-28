import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import store from './store'
import Vue2Editor from "vue2-editor";
import './assets/styles.css'

Vue.config.productionTip = false
Vue.use(Vue2Editor);
Vue.component('quill-component', require('./components/QuillCompenent').default);

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
