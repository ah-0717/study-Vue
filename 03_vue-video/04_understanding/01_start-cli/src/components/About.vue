<template>
  <div>
    <p>About</p>
    <input type="text">
  </div>
</template>

<script>
export default {
  destroyed() {
    // console.log('destroyed')
  },
  deactivated() {
    // keep-aliveのライフサイクルで使用可能
    // 非活性時
  },
  activated() {
    // keep-aliveのライフサイクルで使用可能
    // 活性時
},
}
</script>
