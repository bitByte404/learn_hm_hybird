import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')

const num: number = 124
console.log(num)


const info = '感觉自己萌萌哒'
let msg = '哈哈哈哈哈'

// 字面量类型
let food: '西兰花' = '西兰花'

// 字面量类型和const 一起使用，会自动生成对应的字面量类型

type Gender = '男' | '女'
let yourGender: Gender = '女'

let obj: any = { age: 18 }
console.log(obj.age)

const arr = [1, '2', false]

import axios from 'axios'
axios.create({
    timeout: 4000
})

import { Food } from './types/data'
const f: Food = {
    color: 'black',
    data: '2024',
    name: '龙江主教反'
}

import { add } from './utils/index'
const res = add(1, 2)
console.log(res)