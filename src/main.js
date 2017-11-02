import Vue from 'vue'
import router from './router'
import App from './App'
import vueLazyLoad from 'vue-lazyload'
import './common/stylus/index.styl'

Vue.use(vueLazyLoad, {
  loading: require('common/image/default.png')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
   router,
  render: h => h(App)
})
