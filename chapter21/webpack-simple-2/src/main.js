import Vue from 'vue'
import App from './App.vue'
import VueRouter from './node_modules/vue-router/dist/vue-router'


import Home from './Router/Home.vue'
Vue.use(VueRouter);

const router = new VueRouter({
  routes:[
    {
      path:'/home',
      component: Home,
      children:[
        {
          path:'/home/name',
          component:{
            template:'<p>my name is home</p>'
          }
        }
      ]
    },
    {
      path:'/news',
      component: {
        template:'<p>i am router news</p>'
      }
    },
    {
      path:'*',
      redirect: '/home'
    }
  ]
})

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
