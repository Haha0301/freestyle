import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.min.css'

import Home from './component/homePage.vue'
import Us from './component/us.vue'
import News from './component/news.vue'
import Store from './component/store.vue'
import About from './component/about.vue'
Vue.use(Router)
Vue.use(Mint)
const router =new Router({
    routes:[
        {path:'/homePage',component:Home},
        {path:'/us',component:Us},
        {path:'/news',component:News},
        {path:'/store',component:Store},
        {path:'/about',component:About},
        {path:'*',redirect:'/homePage'}
    ]
})
new Vue({
  el: '#app',
  render: h => h(App),
    router,

})
