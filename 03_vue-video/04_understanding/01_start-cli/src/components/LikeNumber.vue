<template>
  <div>
    <!-- <p>いいね（{{totalNumber / 2}}）</p> -->
    <p>いいね（{{halfNumber}}）</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
  export default {
    // props: ['totalNumber', 'hoge'],
    props: {
      // 型を指定できる
      // totalNumber: String,
      totalNumber: {
        type: Number,
        // required: true, // defaultと共存できない
        default: 20 // プリミティブな値のみ
        // default: () => ({number: 5}) // 配列やオブジェクトの場合は関数にする
      },
    },
    computed: {
      halfNumber() {
        // propsはスクリプトでも利用OK
        return this.totalNumber / 2
      }
    },
    methods: {
      // increment() {
      //   this.number += 1
      // },
      increment() {
        // 親のメソッド（イベント）を発火 (親のイベントを発火するタイミングでデータを渡せる)
        // $emitでカスタムイベントを作成できる
        this.$emit('my-click', this.totalNumber + 1);
      },
    },
  }
</script>

<style scoped>
  div {
    border: 1px solid blue;
  }
</style>