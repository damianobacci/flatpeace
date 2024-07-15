import { createApp } from "vue";
import Notifications from "@kyvg/vue3-notification";
import { createRouter, createWebHistory } from "vue-router";

import Register from "./pages/auth/Register.vue";
import Home from "./pages/Home.vue"; // Example home component

import App from "./App.vue";
import "./style.css";

// Define your routes
const routes = [
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/",
    component: Home,
  },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Create and mount the app
createApp(App).use(router).use(Notifications).mount("#app");
