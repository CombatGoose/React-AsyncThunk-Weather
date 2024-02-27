import axios from 'axios';

const apiKey = '3dcddb0f8bb8442095071943231005';
const baseUrl = 'http://api.weatherapi.com/v1/current.json';

export const getWeather = async (city) => {
    const { data } = await axios.get(`${baseUrl}?key=${apiKey}&q=${city}`);
    return data;
}