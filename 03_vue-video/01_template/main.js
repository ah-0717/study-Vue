const app = new Vue({
  el: '#app',
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
    y: 0
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
    }
  }
})
