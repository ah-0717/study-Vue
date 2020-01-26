import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Users from './views/Users.vue'
import UsersPosts from './views/UsersPosts.vue'
import UsersProfile from './views/UsersProfile.vue'

// vue専用のプラグインを使用するための宣言
Vue.use(Router)

export default new Router({
  mode: 'history', // hash, historyの選択
  // urlとコンポーネントのマッピング
  routes: [
    {path: '/', component: Home},
    {
      path: '/users/:id',
      component: Users,
      // パラメーターがpropsとして入ってくる
      props: true,
      children: [
        {
          // 先頭に/は付けない
          path: 'posts',
          component: UsersPosts
        },
        {
          path: 'profile',
          component: UsersProfile,
          name: 'users-id-profile' // 任意の名前をつけることが可能 名前付きルートで使用可能
        },
      ]
    }
  ]
})