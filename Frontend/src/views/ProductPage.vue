<script setup>
  import axios from 'axios';
  import { ref } from 'vue';
  import { defineProps } from 'vue';
  import { useRoute } from 'vue-router';
  import { cart, list } from '../assets/list'

  const route = useRoute()
  const prop = defineProps(['id'])
  const data = ref()
  const qty = ref(1)

  const tmbh = ()=>{
    if (qty.value<30) {
      qty.value++
    }
  }
  const krg = ()=>{
    if (qty.value>1){
      qty.value--
    }
  }

  axios.get(`http://localhost:3000/product/${route.params.id}`)
  .then((res)=>{
    data.value = res.data[0]
  })

  function addCart () {
    axios.post('http://localhost:3000/cart/add',
    {kode:data.value.kode,qty:qty.value},
    {
      withCredentials: true
    })
    .then((res)=>{
      alert(res.data)
      cart()
    })
    .catch((err)=>{
      alert('Add Cart Error')
    })
  }

</script>

<template>
  <div class="blank"></div>
  <div class="container">
  <div>
    <img :src=list[data.kode-1]>
  </div>
  <div class="container-data">
    <div class="nama">{{ data.nama }}</div>
    <div class="jenis">{{ data.jenis }}</div>
    <div class="rate">Rating {{ data.rate.toPrecision(2) }}</div>
    <div class="harga">Rp. {{ data.harga.toLocaleString("id-ID") }}</div>
    <div class="container-desc">
      <div class="desc">Description :</div>
      <div>{{ data.deskripsi }}</div>
    </div>
    <div class="quantity">
        <button class="inde" @click="krg">-</button>
        <input :value=qty disabled>
        <button class="inde" @click="tmbh">+</button>
        <br>
        <button class="add-cart" @click="addCart">
          <font-awesome-icon icon="fa-solid fa-cart-plus" />
        </button>
    </div>
  </div>
</div>
</template>

<style scoped>
  img {
    width: 300px;
    border: 3px black solid;
    border-radius: 10px;
  }
  .container{
    display: flex;
    padding-top: 40px;
    padding-bottom: 30px;
    justify-content: center;
    flex-wrap: wrap;
    margin: 20px auto;
  }
  .container-data{
    padding: 0px 25px 25px 25px;
  }
  .nama{
    font-size: 25px;
    font-weight: bold;
  }
  .rate, .desc , .jenis{
    font-size: 15px;
  }
  .harga{
    font-size: 20px;
    font-weight: bold;
  }
  .container-desc{
    margin: 20px 0px;
    max-width: 300px;
  }
  .desc{
    font-weight: bold;
  }
  .quantity input {
    width: 60px;
    height: 30px;
    text-align: center;
    border-radius: 30px;
    margin: 3px;
  }
  .quantity .inde{
    background-color: rgb(0, 251, 255);
    border: none;
    width: 30px;
    height: 30px;
    border-radius: 30px;
    font-weight: bolder;
  }
  .add-cart{
    height: 35px;
    width: 101px;
    margin: 15px 0px;
    background-color: rgb(0, 255, 55);
    border: none;
    padding: 0px 10px;
    border-radius: 10px;
    font-size: 25px;
  }
</style>