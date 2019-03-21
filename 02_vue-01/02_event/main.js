const scroll = new SmoothScroll();

var app = new Vue({
  el: '#app',
  data: {
    count: 0,
    item: {
      hoge: 'hoge',
    },
    show: false,
    message: 'Hello Vue.js',
    val: true,
    val2: [],
    val3: '',
    val4: '',
    val5: [],
    items: ['A', 'B', 'C'],
    preview: '',
    price: 100,
    scrollY: 0,
    timer: null,
  },
  created() {
    // ハンドラを登録
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    // ハンドラを解除
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    // イベントハンドラの定義
    handleClick() {
      alert('クリック');
    },
    handleClick2(item, event) {
      if (event) {
        console.log(event);
        event.preventDefault();
      }
      console.log(item.hoge);
    },
    handleInput(event) {
      // 代入前に処理を行える
      console.log(event.target.value);
      this.message = event.target.value;
    },
    handler(comment) {
      console.log(comment);
    },
    handleChange(event) {
      const file = event.target.files[0];
      if (file && file.type.match(/^image\/(png|jpeg)$/)) {
        this.preview = window.URL.createObjectURL(file);
      }
    },
    // 200ms間隔でscrollデータを更新する
    handleScroll() {
      if (this.timer === null) {
        this.timer = setTimeout(() => {
          this.scrollY = window.scrollY;
          clearTimeout(this.timer);
          this.timer = null;
          console.log('更新されたよ');
        }, 200);
      }
    },
    scrollTop() {
      scroll.animateScroll(0);
    }
  }
})