import Vue from 'vue'
import Router from 'vue-router'
import home from './home'
import login from './login'
import list from './list'
import detail from './detail'
import comment from './comment'
import search from './search'
import searchlist from './searchlist'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
      home,
      login,
      list,
      detail,
      comment,
      search,
      searchlist
  ]
})
