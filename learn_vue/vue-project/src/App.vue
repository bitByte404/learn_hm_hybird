<!-- 
 逻辑代码 写 函数，定义数据
 setup：用Vue 提供的一种语法糖
-->
<script setup lang="ts">
import { ref } from 'vue'

const age = ref(4)
const isShow = ref(false)
</script>

<!-- 结构 -->
<template>
  <div>
    <button @click="isShow = !isShow">切换图片显示</button>
  </div>
  <img
    v-show="isShow"
    src="https://picx.zhimg.com/70/v2-dc3f3340884aed8c6e2470d55319064c_1440w.avis?source=172ae18b&biz_tag=Post"
    alt=""
  />
  <!-- v-if 本质从页面中移除或添加元素，比较消耗性能 -->
  <h2>v-if</h2>
  <img
    v-if="isShow"
    src="https://picx.zhimg.com/70/v2-dc3f3340884aed8c6e2470d55319064c_1440w.avis?source=172ae18b&biz_tag=Post"
    alt=""
  />
  <h3 v-if="age < 5">玩泥巴</h3>
  <h3 v-if="age > 5">去酒吧</h3>
  <h3 v-if="age > 18">光明正大去网吧</h3>
  <button @click="age++">长大</button>
</template>

<style scoped>
img {
  width: 200px;
  height: 200px;
}
</style>
