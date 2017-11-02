import Vue from 'vue'
import router from './router'
import App from './App'
import './common/stylus/index.styl'

/* eslint-disable no-new */
new Vue({
  el: '#app',
   router,
  render: h => h(App)
})
