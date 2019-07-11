import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import 'mint-ui/lib/style.css'
import MintUI from 'mint-ui'
import LazyLoad from 'vue-lazyload'

Vue.use(LazyLoad, {
    error: require('@/assets/images/load_err.jpg'), //错误的时候显示图片
    loading: require('@/assets/images/loading.gif'), // 正在加载中的图片
    attempt: 1 // 每次加载几张
});

Vue.use(MintUI)
Vue.prototype.$axios = axios;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
