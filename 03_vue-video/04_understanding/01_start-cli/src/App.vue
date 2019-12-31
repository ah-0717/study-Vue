<template>
  <div>
    <!-- componentsに指定したkey名がパスカルケースならば、HTMLをケバブケースでも記述できる -->
    <!-- key名がケバブの時はHTMLをパスカルケースで記述はできない -->
    <like-header> 
      <!-- 名前つきslot -->
      <!-- slotプロパティを使用すれば子コンポーネントの値を使用できる v-slotは#に置き換わる -->
      <template #:[title]="slotProps" >
        <h2 >こんにちは</h2>
        <p>{{slotProps}}</p>
      </template>
      <h3>初めまして</h3>
      <template v-slot:number>
        <h2>トータルのいいね数{{number}}</h2>
      </template>
    </like-header>
    <!-- デフォルトスロットのしかない場合のみ下記の様な書き方ができる 省略（#）はできない -->
    <like-header v-slot="slotProps">
      <p>{{slotProps}}</p>
    </like-header>
    <!-- キャメルケースでもかける -->
    <!-- <LikeNumber :totalNumber="number" @my-click="number = $event"></LikeNumber> --> <!-- $eventにemitの値が入る -->
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
      number: 10,
      // 動的な名前
      title: 'title'
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