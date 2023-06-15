<template>
    <div>
        <div>
            <router-link to="/login">login页面</router-link>
            <router-link to="/login">欢迎页面</router-link>
        </div>
        <div>
          <router-view></router-view>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
</script>

<style scoped lang="scss"></style>
