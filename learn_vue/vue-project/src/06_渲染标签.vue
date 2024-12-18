<!-- 
 逻辑代码 写 函数，定义数据
 setup：用Vue 提供的一种语法糖
-->
<script setup lang="ts">
const info = '摸摸哒'
const htmlStr = '<button>点我试试</button>'
</script>

<!-- 结构 -->
<template>
  <div>
    <!-- 普通文本 v-html v-text 没有区别 标签内部不能写东西 会被覆盖 -->
    <p v-text="info"></p>
    <p v-html="info"></p>
    <h2>渲染标签</h2>
    <!-- 针对 html标签，如果需要解析，需要v-html -->
    <p v-html="htmlStr"></p>
  </div>
</template>

<style scoped></style>
