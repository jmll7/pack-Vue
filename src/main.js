// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import VueRouter from "vue-router"
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'

axios.defaults.withCredentials = false
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(Vuex)

const state = {
  adminCard: '',
}
const mutations = {
  setStore(state) {
    state.adminName = ''
  },
  setAdminName(state, adminName) {
    state.adminName = adminName
  }
}
const actions = {
  setStore(context) {
    context.commit("setStore")
  },
  setAdminName(context, adminName) {
    context.commit("setAdminName", adminName)
  }
}
// 创建Store实例
const store = new Vuex.Store({
  state,
  mutations,
  actions
})
export default store

Vue.prototype.$store = store

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',

  // mounted(){
  //   this.prevent_back();
  // },
  // methods:{
  //   prevent_back(){
  //     const _this = this;
  //     window.pushStateFun = function(){
  //       let path = '#'+_this.$route.path;;
  //       console.log(path);
  //       let state = {
  //         title: null,
  //         url: path,
  //       };
  //       window.history.pushState(state,null, path);
  //     }
  //     window.pushStateFun();
  //     window.removeEventListener("popstate", window.pushStateFun, false);
  //     window.addEventListener("popstate", window.pushStateFun, false);
  //   }
  //
  // }
})
