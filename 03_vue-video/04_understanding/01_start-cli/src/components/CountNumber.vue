<template>
  <div>
    <p>{{title | upperCase}}</p>
    <p>{{number}}</p>
    <button @click="number++">+1</button>
  </div>
</template>

<script>
import {tokyoNumber} from '@/tokyoNumber'

export default {
  mixins: [tokyoNumber],
}
</script>