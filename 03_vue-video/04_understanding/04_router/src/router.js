import Vue from 'vue'
import Router from './vue-router'
import Home from './views/Home.vue'
import Users from './views/Users.vue'

// vue専用のプラグインを使用するための宣言
Vue.use(Router)


export default new Router({
  // urlとコンポーネントのマッピング
  routes: [
    {path: '/', component: Home},
    {path: '/users', component: Users}
  ]
})