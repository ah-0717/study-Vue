import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Users from './views/Users.vue'
import UsersPosts from './views/UsersPosts.vue'
import UsersProfile from './views/UsersProfile.vue'
import HeaderHome from './views/HeaderHome.vue'
import HeaderUsers from './views/HeaderUsers.vue'

// vue専用のプラグインを使用するための宣言
Vue.use(Router)

export default new Router({
  mode: "history", // hash, historyの選択
  // urlとコンポーネントのマッピング
  routes: [
    // {path: '/', component: Home}, // 通常の指定
    {
      path: "/",
      components: {
        // 名前付きViewの指定はcomponents
        // 一つのURLに対して二つ指定する [routerLinkName]: componentName
        default: Home,
        header: HeaderHome
      }
    },
    {
      path: "/users/:id",
      components: {
        // 名前付きViewの指定はcomponents
        default: Users,
        header: HeaderUsers
      },
      // パラメーターがpropsとして入ってくる
      // props: true,
      props: { // 前付きviewはオブジェクトにする
        default: true,
        header: false
      },
      children: [
        {
          // 先頭に/は付けない
          path: "posts",
          component: UsersPosts
        },
        {
          path: "profile",
          component: UsersProfile,
          name: "users-id-profile" // 任意の名前をつけることが可能 名前付きルートで使用可能
        }
      ]
    },
    {
      path: "*", // *はワイルドカード
      redirect: "/"
      // redirect: {path: "/"} // オブジェクトでの記述も可能
    }
  ]
});