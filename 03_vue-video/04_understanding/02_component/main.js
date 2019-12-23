// コンポーネントのグローバル登録
Vue.component('my-component', {
  // テンプレートの中では、dataはオブジェクトを返すようにする
  // dataを別々に管理するために初期値を返す仕様のため
  data() {
      return {
        number: 12,
      }
  },
  template: '<p>いいね（{{number}}）<button @click="increment">+1</button></p>',
  methods: {
    increment() {
      this.number += 1
    }
  },
})

// あえて共通のdataを参照させる
const data = {
  number: 1
}
Vue.component('share-data', {
  data() {
    return data
  },
  template: '<p>いいね（{{number}}）<button @click="increment">+1</button></p>',
  methods: {
    increment() {
      this.number += 1
    }
  },
})

const component = {
  data() {
    return {
      number: 30
    }
  },
  template: '<p>いいね（{{number}}）<button @click="increment">+1</button></p>',
  methods: {
    increment() {
      this.number += 1
    }
  },
}

new Vue({
  el: '#app',
})

new Vue({
  el: '#app2',
  components: {
    // コンポーネントのローカル登録
    'local-component': component
  }
})

