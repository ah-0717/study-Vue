import Vue from 'vue'
// .vueファイルはシングルファイルコンポーネントという
// Appはコンポーネントのオブジェクト（vueLoader）
import App from './App.vue'
import LikeNumber from './components/LikeNumber.vue'

Vue.config.productionTip = true

// コンポーネント
// グローバル登録
Vue.component('LikeNumber', LikeNumber)

// カスタムディレクティブ
// グローバル登録
// Vue.directive('border', {
//   bind(el, binding, vnode) {
//     // ディレクティブが初めて対象の対象の要素に紐づいた時
//   },
//   inserted(el, binding, vnode) {
//     // 親Node（リアル）に挿入された時
//   },
//   update(el, binding, vnode, oldVnode) {
//     // コンポーネントが更新される度。子コンポーネントが変更される前
//   },
//   componentUpdated(el, binding, vnode, oldVnode) {
//     // コンポーネントが更新される度。子コンポーネントが変更された後
//   },
//   unbind(el, binding, vnode) {
//     // ディレクティブが紐づいている要素から取り除かれた時
//   },
// });

// bindとupdateの省略記法
Vue.directive('border', (el ,binding) => {
  // DOMを直接操作
  // el.style.border = 'solid black 2px'
  el.style.borderWidth = binding.value.width
  el.style.borderColor = binding.value.color
  // 引数を受け取る
  el.style.borderStyle = binding.arg
  // 修飾詞の判定
  if (binding.modifiers.round) {
    el.style.borderRadius = '0.5rem'
  }
  if (binding.modifiers.shadow) {
    el.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.26)'
  }
});

// フィルタ
// 引数を必ずとる
Vue.filter('upperCase', value => {
  return value.toUpperCase()
})

new Vue({
  // コンポーネントのオブジェクトを与えてる
  render: h => h(App),
}).$mount('#app')
