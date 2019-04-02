// コンポーネントの登録
Vue.component('my-component', {
  template: '<p>MyComponent</p>'
});

const localMyComponent = {
  template: '<p>localMyComponent</p>'
};

var app = new Vue({
  el: '#app',
  components: {
    // ルートでのみ有効になる
    'local-my-template': localMyComponent,
    // オプションを指定した定義
    'message-component': {
      template: '<p>{{message}}</p>',
      // オブジェクトを返す関数である必要がある
      data() {
        return {
          message: 'Hello Vue.js!',
        }
      },
      // その他オプション
    }
  },
});