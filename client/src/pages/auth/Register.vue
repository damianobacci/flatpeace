<template>
  <form v-on:submit.prevent="registerUser">
    <label>Name: <input type="text" v-model="name" /></label>
    <label>Email: <input type="email" v-model="email" /></label>
    <label>Password: <input type="password" v-model="password" /></label>
    <label
      >Name of your flatshare: <input type="text" v-model="flatshareName"
    /></label>
    <button>Register and create a flatshare</button>
  </form>
</template>

<script setup>
import { ref } from "vue";

const name = ref("");
const email = ref("");
const password = ref("");
const flatshareName = ref("");

function registerUser() {
  console.log(name.value, email.value, password.value, flatshareName.value);
}
</script>

<style scoped>
/* Add any styles for your Register component here */
</style>
