Vue.filter('localNum2', (val) => {
  return val.toLocaleString();
})

var app = new Vue({
  el: '#app',
  data: {
    price: 19800,
    price2: 9999,
    message: 'msg',
    foo: 'foo!',
  },
  // フィルタ
  // テキストベースの変換処理に特化した機能
  filters: {
    // オプションに登録することで、特定のコンポーネント内でのみ使用できる
    localNum(val) {
      return val.toLocaleString();
    },
    // 引き数をとるフィルタ
    filter(message, foo, num) {
      console.log(message, foo, num);
    },
    round(val) {
      return Math.round(val * 100);
    },
    radian(val) {
      return val * Math.PI / 180;
    },
  }
});