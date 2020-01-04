<template>
  <div>
    <label for="title">タイトル</label>
    <input
      id="title"
      type="text"
      :value="value"
      @input="$emit('input', $event.target.value)"
    >
    <!-- 
      @input="$emit('input', $event.target.value)"
      親のinputを発火させる、第二引数に親の$eventに渡る値を指定する
      lazyの時はchangeとなる
    -->
    <pre>{{value}}</pre>
  </div>
</template>

<script>
export default {
  // 受け取り口の用意
  props: ['value']
}
</script>