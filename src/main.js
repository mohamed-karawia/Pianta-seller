import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'



import axios from 'axios'
import Vuelidate from 'vuelidate'

axios.defaults.baseURL = 'https://gradubanana.herokuapp.com/';
axios.defaults.headers.common['Authorization'] = `auth ${localStorage.getItem('token')}`

Vue.use(Vuelidate);



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
