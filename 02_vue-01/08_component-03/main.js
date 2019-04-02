// コンポーネント間の通信 親子間
// 子から親

Vue.component('comp-child', {
  template: '<button @click="handleClick">イベント発火</button>',
  methods: {
    handleClick() {
      // $emitを使用して自信のイベントを発火
      this.$emit('childs-event');
    }
  }
});

// リストレンダリング  子コンポーネント
Vue.component('comp-list', {
  template: `<li>{{name}} HP.{{hp}}<button @click="doAttack">攻撃</button></li>`,
  props: {id: Number, name: String, hp: Number},
  methods: {
    // $emitでattackを発火する
    doAttack() {
      // idを引数で渡す
      this.$emit('attack', this.id);
    },
  },  
});

// 非親子間
// thisを使ったpropsとカスタムイベントの通信はできない
// 代りにvueインスタンスを「イベントバス」として使用する
const bus = new Vue();

Vue.component('comp-a', {
  template: '<button @click="click">コンポートBのイベントを発火</button>',
  data() {
    return { message: 'comp-a Msg' }
  },
  methods: {
    click() {
      bus.$emit('bus-event', this.message)
    }
  }
});

Vue.component('comp-b', {
  template: '<p>bus: {{message}}</p>',
  data() {
    return {message: 'comp-b Msg'}
  },
  created() {
    bus.$on('bus-event', msg => {
      console.log(this.message);
      this.message = msg;
    })
  }
});

var app = new Vue({
  el: '#app',
  data: {
    list: [
      {id: 1, name: 'スライム', hp: 100},
      {id: 2, name: 'ゴブリン', hp: 200},
      {id: 3, name: 'ドラゴン', hp: 500},
    ],
  },
  methods: {
    // childs-eventが発火
    parentsMethod() {
      alert('イベントをキャッチ');
    },
    // attackが発火
    handleAttack(id) {
      const item = this.list.find(el => el.id === id);
      if (item != null && item.hp > 0) {
        item.hp -= 10;
      }
    }
  }
});