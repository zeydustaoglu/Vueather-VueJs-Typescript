const API_KEY = 'c7423eeb30fbf46765d879dcb03cade8';

async function fetchCityData(name: string) {
  const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=5&appid=${API_KEY}`);
  const data = await response.json();
  return data;
}

async function fetchWeatherData(lat: number, lon: number) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
  const data = await response.json();
  return data.list;
}

export { fetchWeatherData, fetchCityData };