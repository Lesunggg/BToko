<script setup>
  import axios from 'axios';
  import { ref } from 'vue';
  import { RouterLink } from 'vue-router'
  import { akun,cekAkun } from '../assets/list'
  import { onUpdated } from 'vue';

  onUpdated(cekAkun)
  cekAkun()
  
  const burger = ref(true)

  function burgerAction () {
    burger.value=!burger.value
  }
  function logout () {
    axios.delete('http://localhost:3000/logout',{withCredentials:true})
    .then((res)=>{
      akun.value=false
      alert(res.data)
      cekAkun()
    })
  }
</script>

<template>
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item">
      <span class="title-nav is-size-4" style="font-size: x-large;">TokoTrio</span>
    </a>
    <div :class="[burger?'dropdownx':'dropdown']">
      <a @click="burgerAction" role="button" :class="[burger?'':'is-active','navbar-burger']" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
      <div :class="[burger?'dropdown-contentx':'dropdown-content']">
        <div>
          <RouterLink to="/">
            <span @click="burgerAction" class="icon-text">
              <span class="icon">
                <font-awesome-icon icon='fa-solid fa-house-chimney'/>
              </span>
              <span>Home</span>
            </span>
          </RouterLink>
        </div>
        <div>
          <RouterLink :to="{name: 'product', params:{title:'All Products'}}">
            <span @click="burgerAction" class="icon-text">
              <span class="icon">
                <font-awesome-icon icon="fa-solid fa-store" />
              </span>
              <span>Product</span>
            </span>
          </RouterLink>
        </div>
        <div>
          <RouterLink to="/about">
            <span @click="burgerAction" class="icon-text">
              <span class="icon">
                <font-awesome-icon icon="fa-solid fa-circle-info" />
              </span>
              <span>About</span>
            </span>
          </RouterLink>
        </div>
        <hr>
        <div @click="burgerAction">
          <RouterLink to="/cart">
            <a class="button is-primary">
              <font-awesome-icon icon="fa-solid fa-cart-shopping" size="xl" />&nbsp;
              <strong>Cart</strong>
            </a>
          </RouterLink>
        </div>
        <div style="display: flex;justify-content: center;">
          <div style="padding: 0px;" class="margin-reg">
            <RouterLink to="/register">
              <a :class="[akun?'display-hilang':'','button is-success']" @click="burgerAction">
                <strong>Sign up</strong>
              </a>
            </RouterLink>
          </div>
          <div style="padding: 0px;">
            <RouterLink to="/login">
              <a :class="[akun?'display-hilang':'','button is-light']" @click="burgerAction">
                <strong>Log in</strong>
              </a>
            </RouterLink>
          </div>
        </div>
        <div>
          <RouterLink to="/">
            <a :key="akun" @click="logout();burgerAction();" :class="[akun?'':'display-hilang','button is-danger']">
              Logout
            </a>
          </RouterLink>
        </div>
      </div>
    </div> 
  </div>
  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <div class="navbar-item">
        <RouterLink to="/">
          <span class="icon-text">
            <span class="icon">
              <font-awesome-icon icon='fa-solid fa-house-chimney'/>
            </span>
            <span>Home</span>
          </span>
        </RouterLink>
      </div>
      <div class="navbar-item">
        <RouterLink :to="{name: 'product', params:{title:'All Products'}}">
          <span class="icon-text">
            <span class="icon">
              <font-awesome-icon icon="fa-solid fa-store" />
            </span>
            <span>Product</span>
          </span>
        </RouterLink>
      </div>
      <div class="navbar-item">
        <RouterLink to="/about">
          <span class="icon-text">
            <span class="icon">
              <font-awesome-icon icon="fa-solid fa-circle-info" />
            </span>
            <span>About</span>
          </span>
        </RouterLink>
      </div>
    </div>
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <div class="margin-cart">
            <RouterLink to="/cart">
              <a class="button is-primary">
                <font-awesome-icon icon="fa-solid fa-cart-shopping" size="xl" />&nbsp;
                <strong>Cart</strong>
              </a>
            </RouterLink>
          </div>
          <div class="margin-reg">
            <RouterLink to="/register">
              <a :class="[akun?'display-hilang':'','button is-success']" @click="burgerAction">
                <strong>Sign up</strong>
              </a>
            </RouterLink>
          </div>
          <div>
            <RouterLink to="/login">
              <a :class="[akun?'display-hilang':'','button is-light']" @click="burgerAction">
                <strong>Log in</strong>
              </a>
            </RouterLink>
          </div>
          <div>
            <RouterLink to="/">
              <a :key="akun" @click="logout();burgerAction();" :class="[akun?'':'display-hilang','button is-danger']">
                Logout
              </a>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>

<style scoped>
  a{
    color: black;
  }
  nav{
    position: fixed;
    background-color: rgb(187, 187, 187);
    top: 0;
    width: 100%;  
  }
  .title-nav{
    color: greenyellow;
    font-weight: bolder;
  }
  .dropdown, .dropdownx{
    position: fixed;
    top: 0;
    right: 0;
  }
  .dropdown-content {
    display: none;
    position: absolute;
    right: 0px;
    top: 52px;
    background-color: #c9c9c9;
    min-width: 220px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }
  .dropdown-content div {
    float: none;
    color: black;
    padding: 5px 10px;
    text-decoration: none;
    display: block;
    text-align: center;
  }
  .dropdown .dropdown-content {
    display: block;
  }
  .dropdownx .dropdown-contentx {
    display: none;
  }
  hr{
    height: 2px;
    background-color: grey;
    margin: 15px;
  }
  .display-hilang{
    display: none;
  }
  .margin-cart{
    margin-right: 15px;
  }
  .margin-reg{
    margin-right: 6px;
  }

  @media only screen and (min-width: 1024px) {
    .dropdownx,.dropdown{
      display: none;
    }
  }
</style>