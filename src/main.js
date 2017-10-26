import Vue from 'vue'
import App from './App'

/* eslint-disable no-new */
// 上面注释的意思new一个对象的时候可以不赋值给一个变量， 可以单独通过配置这条规则来跳过检验
new Vue({
  el: 'body',
  components: { App }
})
