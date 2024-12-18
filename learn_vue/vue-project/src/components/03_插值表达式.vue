<!-- 
 逻辑代码 写 函数，定义数据
 setup：用Vue 提供的一种语法糖
-->
<script setup lang="ts">
const male = false

const getInfo = () => {
  return '感觉自己萌萌哒'
}

</script>

<!-- 结构 -->
<template>
  <!-- {{ 插值表达式 }} -->
  <h2>{{ male == true ? '男孩' : '女孩' }}</h2>
  <h2>{{ getInfo() }}</h2>
</template>

<style scoped></style>
