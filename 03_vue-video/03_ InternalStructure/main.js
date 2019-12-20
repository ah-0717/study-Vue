const data = {
  message: 'hoge1',
}

const app1 = new Vue({
  el: '#app1',
  // 外部で宣言したオブジェクトでもリアクティブシステムにのせられる
  data,
  computed: {
    myData() {
      // 内部からVueプロパティへのアクセス
      return this.$data
    },
  },
  methods: {
    destroy() {
      this.$destroy();
    }
  },
  create() {
    console.log('create')
  },
  beforeMount() {
    console.log('beforeMount')
  },
  mounted() {
    console.log('mounted')
  },
  beforeUpdate() {
    console.log('beforeUpdate')
  },
  updated() {
    console.log('updated')
  },
  beforeDestroy() {
    console.log('beforeDestroy')
  },
  destroyed() {
    console.log('destroyed')
  },
})
app1.message = '外部からのアクセス'

// 外部からVueプロパティへのアクセス
// $がついているのがユーザへ提供しているプロパティ
console.log(data === app1.$data) // true

const app2 = new Vue({
  data: {
    message: 'hoge2',
  },
  // 文字列でテンプレートもかける
  template: '<p>{{message}}</p>'
}).$mount('#app2') // 後からリアクティブにするために使う elオプションと同等

new Vue({
  el: '#app3',
  // 外部で宣言したオブジェクトでもリアクティブシステムにのせられる
  data: {
    message: 'hoge3',
  },
  render(h) {
    // 引数にはVNodeが入ってくる 仮想DOM
    return h('p', `message:${this.message}`)
  },
})

// インスタンスを複数使いたい時はコンポーネントを使用する
// new Vueのelで指定したインスタンは最初の一回しか適応されない
Vue.component('hello', {
  template: '<p>hello</p>'
})