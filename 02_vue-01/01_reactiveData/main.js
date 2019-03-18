import Axios from "axios";

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
    list: [
      {id: 1, name: 'スライム', hp: 100},
      {id: 2, name: 'ゴブリン', hp: 200},
      {id: 3, name: 'ドラゴン', hp: 500},
    ],
    name: 'キマイラ',
    // 外部読み込み用のリストを用意しておく
    list2: [],
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
    },
    // リストの更新
    doAdd() {
      const max = this.list.reduce((a, b) => a > b.id ? a : b.id, 0);
      this.list.push({
        id: max + 1,
        name: this.name,
        hp: 500,
      });
    },
    // リストの削除
    doRemove(index) {
      this.list.splice(index, 1);
    },
    // リスト要素の置き換え
    doMod(index) {
      // this.list[0] = 'hoge'; NG
      this.$set(this.list, index, {id: this.list[index].id, name: '置き換え', hp: 9999});
    },
    // プロパティの更新はリアクティブ
    doAttack(index) {
      this.list[index].hp -= 10;
    },
    // リスト自体の更新もリアクティブ(listがプロパティだから)
    doFiltering() {
      this.list = this.list.filter((elm) => elm.hp <= 100);
    }
  },
  created() {
    // プロパティの追加
    this.list.forEach(function(item) {
      this.$set(item, 'active', false)
    }, this);
    // 取得
    // axios.get('list.json')
    // .then(function(res) {
    //   this.list2 = res.data;}.bind(this))
    // .catch(function(err) {
    //   console.error(err);
    // });
  }
})

state.count++;
// 後から追加したオブジェクトはリアクティブデータとならない
state.hoge = 'hoge';