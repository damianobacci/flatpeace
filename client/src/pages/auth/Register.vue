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
import { useRouter } from "vue-router";
import { useNotification } from "@kyvg/vue3-notification";

import axios from "axios";

const router = useRouter();
const { notify } = useNotification();

const name = ref("");
const email = ref("");
const password = ref("");
const flatshareName = ref("");

function registerUser() {
  try {
    axios.post("/api/v1/auth/register", {
      name: name.value,
      email: email.value,
      password: password.value,
      flatshare_name: flatshareName.value,
    });
    router.push({ path: "/" });
    notify({
      title: "Authorization",
      text: "You have been logged in!",
    });
  } catch (error) {
    console.log(error);
  }
  return null;
}
</script>

<style scoped>
/* Add any styles for your Register component here */
</style>
