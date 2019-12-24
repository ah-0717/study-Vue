import Vue from 'vue'
// .vueファイルはシングルファイルコンポーネントという
// Appはコンポーネントのオブジェクト（vueLoader）
import App from './App.vue'
import LikeNumber from './components/LikeNumber.vue'

Vue.config.productionTip = true

// グローバル登録
Vue.component('LikeNumber', LikeNumber);

new Vue({
  // コンポーネントのオブジェクトを与えてる
  render: h => h(App),
}).$mount('#app')
