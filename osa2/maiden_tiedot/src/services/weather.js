import axios from 'axios'

const api_key = import.meta.env.VITE_W_API_KEY
console.log('api keyu', api_key)
const URL = 'https://api.openweathermap.org/data/2.5/weather'

const getWeather = (capital) => {
  const request = axios.get(`${URL}?q=${capital}&appid=${api_key}&units=metric`)
  console.log(`${URL}?q=${capital}&appid=${api_key}&units=metric`)
  return request.then(response => response.data)
}

export default { getWeather }
