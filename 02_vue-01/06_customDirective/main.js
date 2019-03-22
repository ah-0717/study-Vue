// グローバル定義
// Vue.directive('focus', {
//   inserted(elm) {
//     elm.focus();
//   }
// });

// 使用可能なフック
Vue.directive('example', {
  // ディレクティブが初めて要素と紐づいたとき
  bind(el, binding) {
    console.log('v-example bind')
  },
  // 紐づいた要素が親NODEに挿入されたとき
  inserted(el, binding) {
    console.log('v-example inserted')
  },
  // 紐づいた要素を包含しているコンポーネントのVNodeが更新されたとき
  update(el, binding) {
    console.log('v-example update')
  },
  // 包含しているコンポーネントと子コンポーネントのVNodeが更新されたとき
  componentUpdated(el, binding) {
    console.log('v-example componentUpdated')
  },
  // 紐づいていた要素からディレクティブから削除されるとき
  unbind(el, binding) {
    console.log('v-example unbind')
  },
});

// 省略記法
Vue.directive('example2', function(el, binding, vnode, oldVnode){
  // bindとupdateで呼び出される
});  

var app = new Vue({
  el: '#app',
  data: {
    video1: false,
    video2: false,    
  },
  directives: {
    focus : {
      inserted(elm) {
        // 要素にフォーカスをあてる
        elm.focus();
      }
    },
    // 動画の再生
    video(elm, binding) {
      // 自分がバインドしているデータに変化があった場合のみ処理する
      if (binding.value !== binding.oldValue) {
        binding.value ? elm.play() : elm.pause();
      }
    }
  }
});