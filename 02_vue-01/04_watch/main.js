var app = new Vue({
  el: '#app',
  data: {
    item: {
      value: 0,
      value2: 0,
    },
    list: [
      {id: 1, name: 'a'},
      {id: 2, name: 'b'},
      {id: 3, name: 'c'},
    ],
    value: 0,
    edited: false,
    width: 100,
    height: 200,
    width2: 300,
    height2: 400,
    repoList: [],
    current: '',
    topics: [
      {value: 'vue', name: 'Vue.js'},
      {value: 'jQuery', name: 'jQuery'},
    ]
  },
  computed: {
    watchTarget() {
      return [this.width2, this.height2];
    }
  },
  // ウォッチャ
  // 特定のデータ、算出プロパティの値を監視して変化があった場合に処理を実行する
  watch: {
    // 監視するデータ: function(新しい値, 古い値) 
    'item.value': function(newVal, oldVal) {
      // オブジェクトのプロパティも監視できる
      console.log('watch: item.value');
    },
    'item.value2'() {
      console.log('watch: item.value2');
    },
    // オプションを使用する場合
    list: {
      handler: function(newVal, oldVal) {
        // listが変更されたときに行いたい処理
        console.log('watch: list');
      },
      // ネストされたオブジェクトも監視
      deep: true,
      // 初期読み込み時にも呼び出す
      immediate: true
    },
    // 実行頻度を制御する
    value: _.debounce(newVal => {
      console.log(newVal);
    }, 500),
    // 算出プロパティを監視しても複数の値を監視できる
    watchTarget() {
      console.log('changed width2 or height2');
    },
    // フォームを監視してAPIからデータを取得
    current(val) {
      // githubのAPIからトピックのリポジトリを検索
      axios.get('https://api.github.com/search/repositories', {
        params: {
          q: 'topic:' + val,
        }
      }).then(res => {
        this.repoList = res.data.items;
      });
    },
  },
  created() {
    // インスタンスメソッドでのウォッチャの登録
    const unWatch = this.$watch('value', (newVal, oldVal) => {
      // ハンドラ
    }, {
      // オプション
      immediate: true
    });
    // 登録の解除
    unWatch();

    // 例：一度だけ動作するウォッチャ
    const onceUnWatch = this.$watch('list', () => {
      // listが編集されたことを記録する
      this.edited = true;
      // 監視を解除
      onceUnWatch();
    }, {
      deep: true,
    });

    // 複数の値を監視する場合は、インスタンスメソッドを使用する
    this.$watch(() => {
      return [this.width, this.height];
    }, () => {
      // width or heightが変化した場合
      console.log('changed width or height');
    });
  }
})