// 项目的主入口
// npm run dev 时 vite 会解析这个文件 以及引入的其他文件

import './assets/main.css'


// 引入 Vue中创建 Vue 实例的一个方法
import { createApp } from 'vue'
// 引入 App.vue组件
import App from './App.vue'

// 根据App组件创建UI界面 并且渲染到#app这个元素内
createApp(App).mount('#app')
