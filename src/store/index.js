import Vue from 'vue';
import Vuex from 'vuex';
import classify from './modules/classify';
import products from './modules/products';
import orders from './modules/orders'

import axios from 'axios';
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null,
    sellerName: '',
    sellerMobile: '',
    sellerImage: '',
    sellerEmail: '',
    loading: false,
    error: ''
  },

  getters:{
    isAuthenticated (state) {
      return state.idToken !== null;
    },
    loading(state){
      return state.loading;
    },
    error(state){
      return state.error;
    }
  },

  mutations: {
    authUser(state, data){
      //console.log('triggerd')
      state.idToken = data.token;
      state.sellerName = data .sellerName;
      state.sellerMobile = data.sellerMobile;
      state.sellerImage = data.sellerImage;
      state.sellerEmail = data.sellerEmail;
      //console.log(this.getters.isAuthenticated)
      axios.defaults.headers.common['Authorization'] = `auth ${state.idToken}`

    },

    clearAuthData (state) {
      state.idToken = null;
      state.sellerName = '';
      state.sellerMobile = '';
      state.sellerImage = '';
      state.sellerEmail= '';
      router.push('/login')
    },

    showError(state, res){
      switch(res.data.state){
        case 6:
          state.error = 'User already registered with mobile number';
          break;
        case 26:
          state.error = 'User already registered with email'
          break;
        case 7:
          state.error = 'Email address not found';
          break;
        case 8:
          state.error = 'Wrong Password';
        break;
        default:
          state.error = ''
      }
      
    }
  },

  actions: {
    /*setLogoutTimer ({commit}, expirationTime) {
      setTimeout(() => {
        commit('clearAuthData')
      }, expirationTime)
    },*/
    registerUser({commit, state}, payload){
      state.loading = true;
      axios.put('/seller/signup', payload)
      .then(res => {
        console.log(res)
        commit('authUser', res.data.data);
        /*const now = new Date();
        const expirationDate = new Date(now.getTime() + res.data.data.expiresIn);*/
        localStorage.setItem('token', res.data.data.token);
        localStorage.setItem('sellerName', res.data.data.sellerName);
        localStorage.setItem('sellerMobile', res.data.data.sellerMobile);
        localStorage.setItem('sellerImage', res.data.data.sellerImage);
        localStorage.setItem('sellerEmail', res.data.data.sellerEmail);
        state.loading = false
        router.push('/')
        /*localStorage.setItem('expirationDate', expirationDate);
        dispatch('setLogoutTimer', res.data.data.expiresIn)*/
      })
      .catch(err => {
        console.log(err.response)
        state.loading = false
      })
    },

    loginLocal({commit, state}, payload){
      state.loading = true;
      axios.post('/seller/login', payload)
      .then(res => {
        state.loading = false
        console.log(res);
        /*const now = new Date()
        const expirationDate = new Date(now.getTime() + res.data.data.expiresIn);
        console.log(expirationDate)*/
        localStorage.setItem('token', res.data.data.token);
        localStorage.setItem('sellerName', res.data.data.sellerName);
        localStorage.setItem('sellerMobile', res.data.data.sellerMobile);
        localStorage.setItem('sellerImage', res.data.data.sellerImage);
        localStorage.setItem('sellerEmail', res.data.data.sellerEmail);
        commit('authUser', res.data.data)
        router.push('/')
        //dispatch('setLogoutTimer', res.data.data.expiresIn)
      })
      .catch(err => {
        console.log(err.response)
        state.loading = false 
        commit('showError', err.response)
      })
    },
    tryAutoLogin ({commit}) {
      const data = {
        token: localStorage.getItem('token'),
        sellerName: localStorage.getItem('sellerName'),
        sellerMobile: localStorage.getItem('sellerMobile'),
        sellerImage: localStorage.getItem('sellerImage'),
        sellerEmail: localStorage.getItem('sellerEmail')
    }
      if (!data.token) {
        return
      }else{
        commit('authUser', data)
      }

    },
    logout ({commit}) {
      localStorage.clear();
      commit('clearAuthData')
    }
  },

  modules: {
    classify,
    products,
    orders
  }
})
