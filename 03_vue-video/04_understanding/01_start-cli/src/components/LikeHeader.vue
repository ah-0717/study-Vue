<template>
  <div>
    <!-- 親からHTMLのテンプレートを受け取る -->
    <slot name="title" :user="user" text="text">
      <!-- 指定されないとデフォルトが適応される -->
      <h2>デフォルトのタイトル</h2>
    </slot>
    <!-- デフォルトslot 名前つき以外がここに入る v-slot:default name="default"の定義と同等 -->
    <slot test="test"></slot>
    <hr>
    <slot name="number"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        firstName: 'aaa',
        lastName: 'bbb',
      }
    }
  }
}
</script>

<style scoped>
  /* soltで適応されるHTMLにスタイルを当てられる、親側で定義しても当たるその場合は親が勝つ */
  h2 {
    color: red;
  }
</style>