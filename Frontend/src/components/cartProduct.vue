<script setup>
  import axios from 'axios';
  import { defineProps, ref } from 'vue';
  import { cart } from '@/assets/list';
  const prop = defineProps(['kodecart','kodeUser','kodeBrg','name','harga','qty','total'])
  const update = function (x) {
    let y = 0
    if (x=='minus') {
      y = -1
    }
    else{
      y = 1
    }
    axios.post('http://localhost:3000/cart/update',{
      user:prop.kodeUser,
      qty:prop.qty+y,
      brg:prop.kodeBrg
    },{withCredentials: true})
    .then((res)=>{
      if(x=='plus') {
        prop.qty++
      }
      else if (x=='minus') {
        prop.qty--
      }
      cart()
    })
  }
  const krg = function () {
    if (prop.qty>1){
      update('minus')
    }
  }
  const tmbh = function () {
      update('plus')
  }
  const hapus = function () {
    axios.delete(`http://localhost:3000/cart/delete/${prop.kodecart}`,
    {withCredentials: true})
    .then((res)=>{
      alert(res.data)
      cart()
    })
    .catch((err)=>{
      alert('Delete Server Error')
    })
  }
</script>

<template>
  <div class="container">
    <div class="name">
      <span class="is-size-5">{{ prop.name }}</span><br>
      Rp. {{ prop.harga.toLocaleString("id-ID") }}
    </div>
    <div class="quantity">
      <button class="inde" @click="krg">-</button>
      <input :value=prop.qty disabled>
      <button class="inde" @click="tmbh">+</button>
      <div class="total">
        <div>Rp.</div> 
        <div>{{ (prop.harga*prop.qty).toLocaleString("id-ID") }}</div>
      </div>
      <button class="hapus" @click="hapus">
        <font-awesome-icon icon="fa-solid fa-trash" />
      </button>
    </div>
  </div>
</template>

<style scoped>
  .container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    border-radius: 10px;
    border: outset;
    padding: 10px 30px;
    align-items: center;
    margin: 15px 20px;
    width: 95%;
    background: linear-gradient(rgb(199, 199, 199),rgba(6, 255, 98, 0.637));
  }
  .quantity .inde{
    background-color: rgb(0, 251, 255);
    border: none;
    width: 30px;
    height: 30px;
    border-radius: 30px;
    font-weight: bolder;
}
  .quantity input {
    width: 60px;
    height: 30px;
    text-align: center;
    border-radius: 30px;
    margin: 3px;
  }
  .hapus{
    background-color: red;
    border: none;
    border-radius: 10px;
    margin: 0px 0px 0px 20px;
    width: 40px;
    height: 40px;
    font-size: larger;
  }
  .total{
    display: inline-flex;
    justify-content: space-between;
    margin-left: 15px;
    width: 100px;
  }
  .name{
    width: 400px;
  }
</style>