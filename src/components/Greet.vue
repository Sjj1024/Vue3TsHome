<template>
    <div>
        <a-row>
            <a-col :span="12">
                <div>子组件: {{ count }}</div>
            </a-col>
            <a-col :span="12">
                <div>接受到的内容 {{ props.data }}</div>
            </a-col>
        </a-row>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

const count: number = 10

const props = defineProps({
    data: String,
})

// 定义一个emits函数，约束它传递一个泛型进去，这个泛型是一个
const emits = defineEmits<{ (e: 'fun', num: number): void }>()
</script>

<style scoped></style>
