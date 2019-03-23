// 更新後のDOMにアクセスしたい場合は $nextTickを使用する
// ウェブフォントや画像のロードは待たないため注意
// 画像のロードをまつコールバック内でnextTickを使用したりする必要あり

var app = new Vue({
  el: '#app',
  data: {
    list: [],
  },
  watch: {
    list() {
      // 更新後のulの高さを取得できない
      console.log('通常', this.$refs.list.offsetHeight);
      // nextTick
      this.$nextTick(() => {
        console.log('nextTick', this.$refs.list.offsetHeight);
      });
    }
  },
});