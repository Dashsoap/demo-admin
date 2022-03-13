<template>
  <div>
    登录
  </div>
</template>

<script setup lang="ts">
import { getLoginInfo } from '@/api/common'
import { onMounted } from 'vue'
onMounted(() => {
  getLoginInfo().then(res => {
    console.log(res)
  })
})
</script>

<style scoped>

</style>
