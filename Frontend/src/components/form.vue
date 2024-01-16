<script setup>
  import { RouterLink } from 'vue-router';
  import { ref } from 'vue';
  import axios from 'axios'
  import { defineProps } from 'vue';
  import { akun } from '@/assets/list';

  const prop = defineProps(['form'])
  const username = ref('');
  const password = ref('');
  const repeatPassword = ref('');
  const inforp = ref('')
  const infoun = ref('')

  function cekdlu () {
    if(username.value.trim()=='') {
      infoun.value = 'Username cannot empty'
    }else {
      infoun.value = ''
    }
    if (password.value !== repeatPassword.value) {
      inforp.value = "Password doesn't match"
    }else {
      inforp.value = ''
    }
  }
  function register () {
    if (infoun.value=="" && inforp.value=="" && username.value!='' && password.value!='' && repeatPassword.value!='') {
      if (prop.form=='Register') {
        axios.post('http://localhost:3000/register',{
          nama: username.value,
          pass: password.value
        })
        .then((res)=>{
          alert(res.data)
        })
        .catch((err)=>{
          alert('Register Server Error')    
        })
      }
      else if (prop.form=='Login') {
        axios.get('http://localhost:3000/login', {
          withCredentials: true,
          headers: {
            'Authorization': `${username.value},${password.value}`
          }
        })
        .then((res)=>{
          alert(res.data)
          akun.value=true
        })
        .catch((err)=>{
          alert('Login Server Error')    
        })
      }
    }
    else{
        alert('Mohon input data yang benar')
    }
  }
</script>
   
<template>
  <div class="blank"></div>
  <div id="app">
    <h1 class="is-size-4 has-text-centered">{{ prop.form }} Page</h1>
    <label for="uname"><b>Username</b></label>
    <input @input='cekdlu' type="text" placeholder="Enter Username" name="uname" v-model="username">
    <div class="has-text-danger is-size-7">{{ infoun }}</div>
    <label for="psw"><b>Password</b></label>
    <input @input='cekdlu' type="password" placeholder="Enter Password" name="psw" v-model="password">
    <label for="psw-repeat"><b>Repeat Password</b></label>
    <input @input='cekdlu' type="password" placeholder="Repeat Password" name="psw-repeat" v-model="repeatPassword">
    <div class="has-text-danger is-size-7">{{ inforp }}</div>
    <div @click="register" style="padding-top: 10px;">
      <RouterLink to="/">
        <a :class="[prop.form=='Register'?'is-success':'is-info','button is-fullwidth']" type="submit">{{ prop.form }}</a>
      </RouterLink>
    </div>
  </div>
</template>
   
<style scoped>
  #app {
    width: 300px;
    padding: 16px;
    background-color: white;
    margin: 92px auto 40px auto;
    border: 1px solid black;
    border-radius: 4px;
  }

  input[type=text], input[type=password] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }

  button {
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
  }

  button:hover {
    opacity: 0.8;
  }
</style>