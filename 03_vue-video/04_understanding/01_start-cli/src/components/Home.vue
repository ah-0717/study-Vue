<template>
  <div>
    <!-- :の後に引数を取れる、ただし、一つだけ -->
    <!-- 修飾詞も登録できる -->
    <p v-border2:solid.round.shadow="{width: '5px', color: 'red'}">{{home | lowerCase}}</p>
    <p>{{title | upperCase}}</p>
    <p>{{number}}</p>
    <button @click="number++">+1</button>
    <CountNumber></CountNumber>
  </div>
</template>

<script>
import CountNumber from './CountNumber.vue'
import {tokyoNumber} from '@/tokyoNumber'

export default {
  // オプションを共有化できる、差分だけの記述で良くなる
  mixins: [tokyoNumber],
  data() {
    return {
      home: 'Home',
    }
  },
  components: {
    CountNumber,
  },
  filters: {
    lowerCase(value) {
      // 注意：filtersでthisは使えない
      return value.toLowerCase();
    }
  },
  // ローカル登録
  directives: {
    border2(el, binding) {
      // 注意：ディレクティブでthisは使えない
      // this.home = 'aaaaa'

      // DOMを直接操作
      // el.style.border = 'solid black 2px'
      el.style.borderWidth = binding.value.width
      el.style.borderColor = binding.value.color
      // 引数を受け取る
      el.style.borderStyle = binding.arg
      // 修飾詞の判定
      if (binding.modifiers.round) {
        el.style.borderRadius = '0.5rem'
      }
      if (binding.modifiers.shadow) {
        el.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.26)'
      }
    }
  }
}
</script>