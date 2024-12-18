<!-- 
 逻辑代码 写 函数，定义数据
 setup：用Vue 提供的一种语法糖
-->
<script setup lang="ts">

const food = '西南桦炒蛋'
const cat = {
  name: '喵喵',
  food: '鱼'
}

</script>

<!-- 结构 -->
<template>
  <h1>摸摸哒： {{ food }}</h1>
  <p>{{ cat }}</p>
  <p>{{ cat.name }}</p>
</template>

<style scoped>
  h1 {
    background-color: skyblue;
  }

  p {
    background-color: yellow;
  }
</style>
