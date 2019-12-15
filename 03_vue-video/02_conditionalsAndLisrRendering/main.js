const app = new Vue({
  el: '#app',
  data : {
    ok: false,
    maybeOk: true,
    fruits: ['りんご', 'バナナ', 'みかん'],
    person: {
      name: '田中',
      age: 20,
    }
  },
  methods: {
    remove() {
      this.fruits.shift()
    }
  }
})
