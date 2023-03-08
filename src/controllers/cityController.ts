
import { ref } from 'vue';
import { fetchWeatherData, fetchCityData } from '@/api/api';
import { convertTemp } from '@/helpers/temp-helpers'


const cities = ref<Array<{ name: string; data: Array<{ weather: string; temp: string; day: number; time: string, icon: string, description: string }> }>>([]);
const weatherData = ref([]);
const cityData = ref([]);
const errorMessage = ref('');

async function addCity(cityName: string) {

    try {
        cityData.value = await fetchCityData(cityName);
        weatherData.value = await fetchWeatherData(cityData.value[0]["lat"], cityData.value[0]["lon"]);

        // create new city object with data array
        const newCityObj = {
            name: cityName.toLowerCase(),
            data: [
                {
                    weather: '',
                    temp: '',
                    day: 0,
                    time: '',
                    icon: '',
                    description: ''
                }
            ]
        };
        // store data array with weather data
        weatherData.value.forEach(item => {
            const date_obj: Date = new Date(item['dt_txt']);

            const weatherForecasts = {
                weather: item['weather'][0]['main'],
                temp: convertTemp(item['main']['temp']),
                day: date_obj.getDate(),
                time: `${date_obj.getHours()}:${date_obj.getMinutes() < 10 ? '0' : ''}${date_obj.getMinutes()}`,
                icon: item['weather'][0]['icon'],
                description: item['weather'][0]['description']
            };
            newCityObj.data.push(weatherForecasts);
        });

        // add new city object to cities array
        if (!cities.value.find(city => city.name === newCityObj.name)) {
            cities.value.push(newCityObj);
            errorMessage.value = '';
        }
        else {
            errorMessage.value = 'The city is already on the list!';
        }
    } catch (error) {
        errorMessage.value = 'Oops, City could not be added. Please try again!';
    }
}

async function removeCity(cityName: string) {
    cities.value = cities.value.filter(city => city.name !== cityName);
}

export { addCity, removeCity, cities, errorMessage };