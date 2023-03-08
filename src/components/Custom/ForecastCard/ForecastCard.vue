<template>
    <div class="card shadow rounded m-4">
        <div class="text-center">
            <img :src="`http://openweathermap.org/img/wn/${data.icon}@2x.png`" height="80" width="80"
                alt="{{data.description}}">
            <div class="card-body">
                <p><strong>{{ data.temp }} °C</strong></p>
                <p class="card-text">{{ data.weather }}</p>
                <small class="card-text">{{ data.description }}</small>
                <p><strong>{{ data.time }}</strong></p>
            </div>
        </div>

    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        data: {
            type: Object,
            required: true,
        },
    }
});

</script>

<style>
.card {
  width: 10rem; 
  min-height: 18rem;
}

</style>
  