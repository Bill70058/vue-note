import Vue from 'vue'
import App from './App.vue'
import Loading from './components/loading/loading'
import VueRouter from '../node_modules/vue-router/dist/vue-router.js'


//告诉全局Loading是个组件
Vue.use(Loading);
Vue.use(VueRouter);
import Home from './routers/home.vue'
const router = new VueRouter({
  routes:[
    {
      path:'/home',
      component:{
        template:Home
      }
    },
    {
      path:'/news',
      component:{
        template:`<p>我是news</p>`
      }
    }
  ]
})

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
