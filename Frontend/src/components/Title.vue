<script setup>
  import { defineProps } from 'vue';
  const prop = defineProps(['item'])
</script>

<template>
  <div>
    <span class="item">-- {{ prop.item }} --</span>
  </div>
</template>

<style scoped>
  .item{
    display: flex;
    margin-top: 15px;
    padding-top: 15px;
    padding-bottom: 20px;
    color: rgb(0, 208, 255);
    font-size: 25px;
    font-weight: bolder;
    justify-content: center;
  }
</style>