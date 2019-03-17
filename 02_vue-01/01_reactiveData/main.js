// 外で宣言したオブジェクトも対象
let state = {count: 0};

const app = new Vue({
  el: '#app',
  // dataで宣言したオブジェクトはリアクティブデータとなる
  data: {
    message: 'Hello World.',
    state: state,
    count: 0,
    // class cssの定義
    isChild: false,
    isActive: true,
    textColor: 'red',
    bgColor: '#eeeeee',
    // class cssの定義まとめて渡す
    myStyle: {
      color: 'red',
      backgroundColor: '#eeeeee'
    },
    item: {
      id: 1,
      src: 'item.jpg',
      alt: 'サムネイル',
      width: 200,
      height: 200,
    },
    radius: 50,
    ok: false,
    
  },
  methods: {
    // カウントを増やすボタンをクリックした時のハンドラ
    increment: function() {
      // thisはvueインスタンスを指す
      this.count += 1;
      // thisに注意
      // コールバック内ではthisはwindowを指す
      // setTimeout(function() {this.count++}, 100);
      // 以下のようにする
      setTimeout(function() {this.count++}.bind(this), 100);
      setTimeout(() => {this.count++}, 100);
    },
    // 短縮記法
    hoge() {
      // ...
    }
  }
})

state.count++;
// 後から追加したオブジェクトはリアクティブデータとならない
state.hoge = 'hoge';