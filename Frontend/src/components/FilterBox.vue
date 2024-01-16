<script setup>
  import { defineProps } from 'vue';
  import { RouterLink } from 'vue-router';

  const prop = defineProps(['img','nama'])
</script>

<template>
  <RouterLink :to="{name: 'product', params:{title:prop.nama}}">
    <div class="card">
      <img :src=prop.img alt="random birthday image">
      <h1>{{ prop.nama }}</h1>
     </div>
  </RouterLink>
</template>

<style scoped>
  .card {
    background-color: #ffffff;
    padding: 20px;
    width: 300px;
    border-radius: 10px;
    border: outset;
  }
  .card h1 {
    color: #333;
    text-align: center;
    height: 35px;
    margin-bottom: 5px;
    font-weight: bold;
  }
  .card img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 10px;
  }
  .card:hover{
    scale: 1.1;
  }
</style>