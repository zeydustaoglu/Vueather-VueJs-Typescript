<template>
    <div class="accordion my-5" id="accordionExample">
        <div v-for="(city, index) in cities" :key="index" class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
                <button class="accordion-button" style="background-color: white;" type="button" :data-bs-toggle="'collapse'"
                    :data-bs-target="'#collapse' + index" :aria-expanded="index === 0 ? 'true' : 'false'"
                    :aria-controls="'collapse' + index">
                    <div class="row w-100">
                        <div class="col-4">
                            <h3>{{ city.name }}</h3>
                        </div>
                        <div class="col-7"></div>
                        <div class="col-1 text-center mt-2">
                            <svg @click="removeCity(city.name)" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-x-lg" viewBox="0 0 16 16">
                                <path
                                    d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                            </svg>
                        </div>
                    </div>
                </button>
            </h2>
            <!-- Content -->
            <div :id="'collapse' + index" class="accordion-collapse collapse" :class="{ 'show': index === 0 }"
                :aria-labelledby="'heading' + index" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                    <!-- Tab Buttons --------------------------------->
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <!-- Today button-->
                            <button class="nav-link active" :id="'home-tab-' + index" data-bs-toggle="tab"
                                :data-bs-target="'#home-' + index" type="button" role="tab" aria-controls="home"
                                aria-selected="true">
                                <h5>{{ getToday }} {{ getMonth }}</h5>
                            </button>
                        </li>
                        <!-- Tomorrow button -->
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" :id="'profile-tab-' + index" data-bs-toggle="tab"
                                :data-bs-target="'#profile-' + index" type="button" role="tab" aria-controls="profile"
                                aria-selected="false">
                                <h5>{{ getTomorrowDay }} {{ getTomorrowMonth }}</h5>
                            </button>
                        </li>
                    </ul>
                    <!-- Tab Content ------------------------->
                    <div class="tab-content" id="myTabContent">
                        <!-- Today content -->
                        <div class="tab-pane fade show active" :id="'home-' + index" role="tabpanel"
                            :aria-labelledby="'home-tab-' + index">
                            <div class="cards-container mx-3">
                                <div v-for="data in city.data" :key="data.day">
                                    <div
                                        v-if="data.day === parseInt(getToday) && data.time !== '0:00' && data.time !== '3:00'">
                                        <ForecastCard :data="data" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Tomorrow content -->
                        <div class="tab-pane fade" :id="'profile-' + index" role="tabpanel"
                            :aria-labelledby="'profile-tab-' + index">
                            <div class="cards-container my-3 ">
                                <div v-for="data in city.data" :key="data.day">
                                    <div
                                        v-if="data.day === (parseInt(getTomorrowDay)) && data.time !== '0:00' && data.time !== '3:00'">
                                        <ForecastCard :data="data" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import ForecastCard from '@/components/Custom/ForecastCard/ForecastCard.vue'
import { addCity, cities, removeCity } from '@/controllers/cityController';
import { ref } from 'vue';
import { getToday, getMonth, getTomorrowDay, getTomorrowMonth } from '@/helpers/date-helpers';

//Default City
const selectedCity = ref('');
selectedCity.value = 'Amsterdam';

addCity(selectedCity.value);
</script>

<style>
h3 {
    text-transform: uppercase;
}
button h3,
h5 {
    color: #473C66;
}
.cards-container {
    display: flex;
    flex-wrap: wrap;
}
</style>