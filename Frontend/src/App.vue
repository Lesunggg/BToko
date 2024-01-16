<script setup>
  import { RouterView } from 'vue-router'
  import Navbar from './components/navigation.vue'
  import Footer from './components/footer.vue'
</script>

<template>
  <Navbar/>
  <div>
    <RouterView/>
  </div>
  <Footer></Footer>
</template>

<style scoped>

</style>
