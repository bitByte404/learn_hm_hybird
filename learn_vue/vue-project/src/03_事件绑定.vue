<!-- 
 逻辑代码 写 函数，定义数据
 setup：用Vue 提供的一种语法糖
-->
<script setup lang="ts">
const sayHallo = () => {
  // console.log('sayHello')
  alert('你好啊')
}
const food = '西兰花炒蛋'
</script>

<!-- 结构 -->
<template>
  <button @click="sayHallo">点我试试</button>
  <button @mouseenter="sayHallo">点我试试</button>
</template>

<style scoped></style>
