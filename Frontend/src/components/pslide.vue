<script setup>
  import { defineProps } from 'vue';
  const prop = defineProps(['title','desc','img'])
</script>

<template>
  <img class="img-besar" :src=prop.img>
  <div class="text-container">
    <div class="text-middle">
      <div class="content-text">
        <div class="title">{{ prop.title }}</div>
        <p class="text">{{ prop.desc }}</p>
        <RouterLink :to="{name: 'product', params:{title:'Kaos'}}">
          <button class="tombol-jelajah">More ></button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
  img{
    width: 100%;
    filter: brightness(70%);
  }
  .title{
    font-size: 5vw;
    color: yellow;
  }
  .text{
    font-size: 2vw;
    margin: 15px 0px;
    width: 100%;
  }
  .text-container{
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }
  .text-middle{
    width: 75%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
  }
  .content-text{
    width: 45%;
  }
  .tombol-jelajah{
    background-color: rgb(0, 255, 238);
    font-size: 2vw;
    border: 0;
    padding: 5px 10px;
    border-radius: 5px;
    font-weight: bolder;
    margin-bottom: 10px;
  }
  .tombol-jelajah:hover{
    background-color: rgb(7, 255, 40);
  }
</style>