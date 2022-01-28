<template>
  <div class="">
    个人中心 {{ $t('msg.test') }}
    <el-pagination
      :page-size="100"
      layout="total, prev, pager, next"
      :total="1000"
    >
    </el-pagination>
  </div>
</template>

<script setup>
import {} from 'vue'
</script>

<style lang="scss" scoped></style>
