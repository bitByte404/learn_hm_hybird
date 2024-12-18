<!-- 
 逻辑代码 写 函数，定义数据
 setup：用Vue 提供的一种语法糖
-->
<script setup lang="ts">
import { reactive } from 'vue'

let food = reactive({
  name: '隆江猪脚饭',
  price: 18,
  foods: ['米饭', '猪脚', '卤蛋', '咸菜'],
})

setTimeout(() => {
  // 如果重新赋值普通数据，失去响应性
  food = {name: '', price: 0, foods: []}
}, 3000)
</script>

<!-- 结构 -->
<template>
  <p @click="food.name = '祖传隆江猪脚饭'">{{ food.name }}</p>
  <p @click="food.price++">{{ food.price }}</p>
  <p @click="food.foods.push('鸡腿')">{{ food.foods }}</p>
</template>

<style scoped></style>
