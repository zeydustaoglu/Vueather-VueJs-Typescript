<template>
    <div class="jumbotron jumbotron-fluid py-5">
        <div class="container text-white">
            <h1 class="display-2"><small>Welcome to</small> <span class="display-1">Vueather</span> </h1>
            <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi </p>
        </div>
        <div class="container">
            <AddForm />
        </div>
    </div>
</template>
<script setup lang="ts">
import AddForm from "@/components/Custom/AddForm/AddForm.vue";

</script>
<style>
.jumbotron {
    background: url('/src/assets/jumbotron.jpg');
    background-size: cover;
    min-height: 18rem;
    background-position: 50% 10%;
}
</style>