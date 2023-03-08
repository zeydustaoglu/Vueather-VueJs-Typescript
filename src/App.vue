<template>
  <div class="app">
    <CgNavbar />
    <CgJumbotron />
    <div class="container">
        <HomeView />
    </div>
  </div>
</template>

<script setup lang="ts">
import CgNavbar from "@/components/Generic/CgNavbar/CgNavbar.vue";
import HomeView from "./views/HomeView.vue";
import CgJumbotron from "./components/Generic/CgJumbotron/CgJumbotron.vue";


</script>


