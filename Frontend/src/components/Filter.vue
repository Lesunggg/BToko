<script setup>
  import FilterBox from './FilterBox.vue';
  import Title from './Title.vue';
  import { listFilter } from '../assets/list'

const name = ['Kaos', 'Kemeja', 'Celana Boxer', 'Celana Panjang']
</script>

<template>
  <Title item="Our Products"></Title>
  <div class="filter-cont">
    <FilterBox v-for="(item,index) in listFilter" :nama="name[index]" :img="item"/>
  </div>
</template>

<style scoped>
  .filter-cont{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    grid-gap: 25px;
    padding: 0px 10px;
    margin: auto;
    margin-bottom: 40px;
  }
</style>