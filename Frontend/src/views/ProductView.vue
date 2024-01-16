<script setup>
  import Title from '../components/Title.vue' 
  import { ref } from 'vue';
  import axios from'axios';
  import Card from '../components/Card.vue'
  import { list } from '../assets/list'
  import { useRoute } from 'vue-router';

  const route = useRoute()
  const title = route.params.title
  const data = ref([])
  const link = ref('')

  if (title == 'All Products') {
    link.value = 'http://localhost:3000/product'
  }
  else{
    link.value = `http://localhost:3000/product/filter/${title}`
  }
  axios.get(link.value)
  .then((res)=>{
    data.value = res.data
  })
  .catch((err)=>{
    alert('Ada masalah koneksi...')
  })
</script>

<template>
  <div class="blank"></div>
  <Title :item=title></Title>
  <div class="cards-container">
    <Card v-for="item in data" v-bind:key="item" :pro="item" :img="list[item.kode-1]"/>
  </div>
</template>

<style scoped>
  .cards-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 20px;
    padding: 20px;
    margin: 0px 20px;
  }
</style>