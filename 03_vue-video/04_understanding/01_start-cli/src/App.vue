<template>
  <div>
    <!-- componentsに指定したkey名がパスカルケースならば、HTMLをケバブケースでも記述できる -->
    <!-- key名がケバブの時はHTMLをパスカルケースで記述はできない -->
    <like-header></like-header>
    <h2>トータルのいいね数{{number}}</h2>
    <!-- キャメルケースでもかける -->
    <!-- <LikeNumber :totalNumber="number" @my-click="number = $event"></LikeNumber> -->
    <LikeNumber :totalNumber="number" @my-click="incrementNumber"></LikeNumber>
    <!-- ケバブケースでもかける プロパティはこちらを推奨 -->
    <LikeNumber :total-number="number"></LikeNumber>
    <LikeNumber></LikeNumber>
  </div>
</template>

<script>
// ローカル登録 App.vueでのみコンポーネントが使える
import LikeHeader from './components/LikeHeader.vue'

export default {
  // babelをしようしているのでES6もOK
  data() {
    return {
      number: 10
    }
  },
  components: {
    LikeHeader
  },
  methods: {
    // カスタムイベントのincrementNumberに引数がなくても$emitに渡した値が入る
    incrementNumber(value) {
      // ポイントは親が子供のデータに依存しているわけではない＝単一方向
      this.number = value
    }
  }
}
</script>

<style scoped>
  div {
    border: 1px solid red;
  }
</style>