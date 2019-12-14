const app = new Vue({
  el: '#app',
  // dataは動的な値は置かない（初期値）
  data: {
    text: 'text',
    html: '<h1>hoge</h1>',
    url: 'https://google.com',
    twitterObj: {
      href: 'https://twitter.com',
      id: 12
    },
    count: 0,
    x: 0,
    y: 0,
    message: 'こんにちは',
    isActive: true
  },
  // 動的な値 プロパティなのでreturnする必要あり
  // リアクティブな依存関係に基づいてキャッシュされる
  computed: {
    // countに変更があった時のみ呼ばれる
    lessThanThree() {
      return this.count > 3
    },
    classObj() {
      return { red: this.isActive, 'bg-blue': !this.isActive }
    }
  },
  // dataが変化した時に特定の処理
  // 非同期な処理
  watch: {
    count() {
      setTimeout(() => {
        this.count = 0
      }, 3000)
    }
  },
  methods: {
    sayHi() {
      this.text = 'Hi'
      return 'Hi'
    },
    countUp() {
      this.count++
    },
    changeMousePosition(event) {
      this.x = event.clientX
      this.y = event.clientY
    },
    changeMousePosition2(event, hoge) {
      this.x = event.clientX / hoge
      this.y = event.clientY / hoge
    },
    myAlert() {
      alert('alert')
    }
  }
})
