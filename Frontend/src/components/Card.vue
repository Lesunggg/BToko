<script setup>
  import { RouterLink } from 'vue-router';
  const prop = defineProps(['pro','img'])
</script>

<template>
  <div class="card">
    <img :src=prop.img>
    <h2 class="card-title">{{ prop.pro.nama }}</h2>
    <p class="card-price">Rp. {{ prop.pro.harga.toLocaleString("id-ID") }}</p>
    <p class="card-type">{{ prop.pro.jenis }}</p>
    <p class="card-rate">Rating {{ prop.pro.rate }}</p>
    <div class="con-btn">
      <RouterLink :to="{name: 'productpage', params:{id:prop.pro.kode}}">
        <a href="your-purchase-url" class="cta-button">
          Details
        </a>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
  .card {
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 15px 10px;
    background-color: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  .card img {
    width: 90%;
    height: auto;
  }
  .card-title {
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: 18px;
    height: 45px;
  }
  .card-type{
    font-size: 15px;
    color: grey;
  }
  .card-price {
    color: #333;
    margin-bottom: 10px;
  }
  .card-rate{
    color: rgb(0, 0, 0);
  }
  .con-btn{
    display: block;
    text-align: center;
  }
  .cta-button {
    display: inline-block;
    margin-top: 10px;
    font-size: smaller;
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
  }
  @media screen and (max-width: 600px) {
    .cards-container {
      grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
    }
  }
</style>