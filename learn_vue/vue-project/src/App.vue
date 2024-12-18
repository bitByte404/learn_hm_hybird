<!-- 
 逻辑代码 写 函数，定义数据
 setup：用Vue 提供的一种语法糖
-->
<script setup lang="ts">
import { ref } from 'vue'

// 1. 定义基本类型
const num = ref(10)
const foods = ref(['鸡蛋', '番茄'])
// 代码中如果需要修改数据，需要通过.value
const changeNum = () => {
  num.value++
}

const changeFoods = () => {
  foods.value.push('香肠')
}
</script>

<!-- 结构 -->
<template>
  <h1 @click="changeNum">num: {{ num }}</h1>
  <h1 @click="changeFoods">food: {{ foods }}</h1>
  <!-- ref 定义的数据在UI界面中使用或者修改不需要写.value -->
  <button @click="foods.unshift('花菜')">修改数据</button>
</template>

<style scoped></style>
