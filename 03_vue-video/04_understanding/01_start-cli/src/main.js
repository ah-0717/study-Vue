import Vue from 'vue'
// .vueファイルはシングルファイルコンポーネントという
// Appはコンポーネントのオブジェクト（vueLoader）
import App from './App.vue'

Vue.config.productionTip = true

new Vue({
  // コンポーネントのオブジェクトを与えてる
  render: h => h(App),
}).$mount('#app')
