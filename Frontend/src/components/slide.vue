<script setup>
  import { ref } from 'vue';
  import Show from './pslide.vue'
  import { listshow } from '@/assets/list';

  const title = ['Kaos Polos','Lorem Ipsum']
  const desc = ["Lorem Ipsum is simply dummy text of the printing and typesetting industry.",'It is a long established fact that a reader will be distracted by the readable content of a page.']
  let slide = ref(0)
  
  setInterval(plus,10000)

  function plus (n=1) {
    slideshow(slide.value+=n)
  }
  function goSlide (n) {
    slide.value=n
  }
  function slideshow (n) {
    if (n>title.length-1) {
      n=0
    }
    else if (n<0) {
      n=title.length-1
    }
    slide.value=n
  }
</script>

<template>
  <div class="container-all">
    <div v-for="(item,index) in listshow" :class="[slide==index?'active':'','slide-con fade']">
      <Show :img=listshow[index] :title=title[index] :desc=desc[index]></Show>
    </div>
    <div class="container-bulat">
      <button :class="[slide==0?'active':'','bulat']" @click="goSlide(1)"></button>
      <button :class="[slide==1?'active':'','bulat']" @click="goSlide(2)"></button>
    </div>
    <div class="left-btn">
      <button class="next-btn" @click="plus(-1)">
        <svg xmlns="http://www.w3.org/2000/svg" height="32" width="20" viewBox="0 0 320 512"><path fill="#ffffff" d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
      </button>
    </div>
    <div class="right-btn">
      <button class="next-btn" @click="plus(1)">
        <svg xmlns="http://www.w3.org/2000/svg" height="32" width="20" viewBox="0 0 320 512"><path fill="#ffffff" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>
      </button>
    </div>
  </div>
</template>

<style scoped>
  .slide-con{
    display: none;
  }
  .fade {
    animation-name: fade;
    animation-duration: 1.5s;
  }
  @keyframes fade {
    from {opacity: .4} 
    to {opacity: 1}
  }

  .slide-con.active{
    display: block;
  }
  .container-all{
    position: relative;
    color: white;
  }
  .next-btn{
    background-color: transparent;
    border: 0;
    height: 10vw;
    width: 10vw;
  }
  .next-btn:hover{
    background-color: black;
  }
  .left-btn{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
  }
  .right-btn{
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
  }
  .container-bulat{
    position: absolute;
    bottom: 10px;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .bulat{
    border: 0;
    height: 12px;
    border-radius: 15px;
    background-color: white;
    margin: 5px;
    transition: background-color 0.6s ease;
  }
  .bulat.active{
    background-color: grey;
  }
</style>