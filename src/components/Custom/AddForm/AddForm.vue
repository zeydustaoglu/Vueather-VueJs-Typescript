<template>
        <form @submit.prevent="formSubmit" class="d-flex ">
            <input type="text" v-model="newCity" class="form-control me-2" style="height: 3rem;" placeholder="City name">
            <button type="submit" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#modal">Add</button>
        </form>
        <!-- Modal -->
        <div class="modal fade" id="modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div v-if="errorMessage === ''" class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>{{ newCity.toUpperCase() }}</strong> successfully added to your list!
                </div>
                <div v-else-if="errorMessage !== ''" class="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>{{ errorMessage }}</strong>
                </div>
            </div>
        </div>
</template>
  
<script setup lang="ts">
import { addCity, errorMessage } from '@/controllers/cityController';
import { ref } from 'vue';

const newCity = ref('');
const formSubmit = () => {
    addCity(newCity.value);
    // clear input
    newCity.value = '';
};

</script>
  
  