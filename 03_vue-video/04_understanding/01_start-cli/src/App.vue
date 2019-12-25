<template>
  <div>
    <!-- componentsに指定したkey名がパスカルケースならば、HTMLをケバブケースでも記述できる -->
    <!-- key名がケバブの時はHTMLをパスカルケースで記述はできない -->
    <like-header></like-header>
    <LikeNumber></LikeNumber>
  </div>
</template>

<script>
// ローカル登録 App.vueでのみコンポーネントが使える
import LikeHeader from './components/LikeHeader.vue'

export default {
  components: {
    LikeHeader
  }
}
</script>

<style scoped>
  div {
    border: 1px solid red;
  }
</style>