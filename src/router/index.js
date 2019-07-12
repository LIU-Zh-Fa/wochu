import Vue from 'vue'
import Router from 'vue-router'
import home from './home'
import login from './login'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
      home,
      login
  ]
})
