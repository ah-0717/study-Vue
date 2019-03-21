var app = new Vue({
  el: '#app',
  data: {
    width: 800,
    height: 600,
    budget: 300,
    limit: 2,
    list: [
      {id: 1, name: 'りんご', price: 100},
      {id: 2, name: 'バナナ', price: 200},
      {id: 3, name: 'いちご', price: 400},
      {id: 4, name: 'オレンジ', price: 300},
      {id: 5, name: 'メロン', price: 500},
    ],
    order: false,

  },
  // 算出プロパティ
  computed: {
    halfWidth: {
      get() {
        return this.width / 2;
      },
      // widthとhalfWidthが双方向フロートなり同期する
      set(val) {
        return this.width = val * 2;
      },
    },
    halfHeight() {
      return this.height / 2;
    },
    halfPoint() {
      return {
        // 算出プロパティはVueのインスタンス化時にプロパティとして登録される
        x: this.halfWidth,
        y: this.halfHeight,
      }
    },
    computedData() {
      return Math.random();
    },
    matched() {
      return this.list.filter((elm) => elm.price <= this.budget);
    },
    sorted() {
      return _.orderBy(this.matched, 'price', this.order ? 'desc' : 'asc');
    },
    limited() {
      return this.sorted.slice(0, this.limit);
    },
    filteredList() {
      return this.limited;
    },
  },
  methods: {
    methodsData() {
      return Math.random();
    }
  }
})