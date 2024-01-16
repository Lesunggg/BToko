<script setup>
  import { akun, total, user, cart, listcart } from '@/assets/list';
  import { ref } from 'vue';
  import cartProduct from '@/components/cartProduct.vue';
  cart()
  const data = ref(listcart)
  const all = ref (total)
</script>

<template>
  <div class="blank"></div>
  <div v-if=akun>
    <div class="title-container">
      <div class="is-size-4">Shopping Cart</div>
      <div class="is-size-4">User : {{ user.nama }}</div>
    </div>
    <div v-if="data.length>0">
      <div class="contain-cart">
        <cartProduct v-for="item in data" :kodecart=item.cartid :kodeUser=item.kode_user :kodeBrg = item.kode_brg :name=item.nama :harga=item.harga :qty=item.qty></cartProduct>
      </div>
      <div class="kotak-total is-size-4">
        <div>
          Total
        </div> 
        <div class="total">
          <div>Rp.</div> 
          <div>{{ all.toLocaleString("id-ID") }},-</div>
        </div>
      </div>
    </div>
    <div class="empty" v-else>
      <div class="is-size-1">
        <font-awesome-icon style="color: chartreuse;" icon="fa-solid fa-face-frown" />
      </div>
      Oops! Your Shopping Cart is Empty!
    </div>
  </div>
  <div v-else class="empty">
    <div class="is-size-1">
      <font-awesome-icon style="color: rgb(255, 0, 0);" icon="fa-solid fa-face-sad-tear" />
    </div>
    Account Not Found, Please login first
  </div>
</template>

<style scoped>
  .title-container{
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
    margin: 10px 20px;
    color: grey;
    font-weight: bolder;
  }
  .empty{
    display: flex;
    flex-direction: column;
    height: 300px;
    align-items: center;
    justify-content: center;
  }
  .kotak-total{
    padding: 20px;
    font-weight: bolder;
    background: linear-gradient(rgb(0, 217, 255),rgb(165, 165, 165));
    color: black;
  }
  .kotak-total,.total{
    display: flex;
    justify-content: space-between;
  }
  .total{
    width: 200px;
  }
  .contain-cart{
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-bottom: 15px;
  }
</style>