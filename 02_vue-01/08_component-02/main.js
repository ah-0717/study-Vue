// コンポーネント間の通信 親子間
// 親から子
Vue.component('comp-child', {
  template: '<p>{{val}}</p>',
  // 子コンポーネントに受け取りたい属性名を指定する（IF）
  props: ['val'],
});

// リストレンダリング  子コンポーネント
Vue.component('comp-list', {
  template: `<li>{{name}} HP.{{hp}}<button @click="doAttack">攻撃</button></li>`,
  props: ['name', 'hp'],
  methods: {
    doAttack() {
      console.log(this.hp);
      // 子から直接親のデータを書き換えてはいけない vue warn
      // 算出プロパティか$emitを使う
      this.hp -= 10;
    },
  },  
});

// 受け取る値に型を指定できる
Vue.component('comp-type', {
  props: {
    // 基本的な型チェック
    propA: Number,
    // 複数指定
    propB: [String, Number],
    // オプション指定
    propC: {
      // 型、配列で複数指定
      type: Boolean,
      // 必須
      required: true,
      // デフォルト値
      default: true,
    },
    // オブジェクトと配列のデフォルト値ははファクトリ関数から返すようにする
    propD: {
      type: Object,
      default() {
        return {message: 'hello'};
      }
    },
    // カスタムバリデータ関数
    propE: {
      validator(val) {
        return val > 10;
      }
    }
  }
});

var app = new Vue({
  el: '#app',
  data: {
    message: 'リアクティブデータ',
    list: [
      {id: 1, name: 'スライム', hp: 100},
      {id: 2, name: 'ゴブリン', hp: 200},
      {id: 3, name: 'ドラゴン', hp: 500},
    ]
  },
});