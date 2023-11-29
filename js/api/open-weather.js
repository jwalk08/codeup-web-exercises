import {keys} from "../keys.js";

/**
 * Gets a forecast of a OpenWeather API
 * @param {number} lat - Latitude of the coordinates
 * @param {number} lng - longitude of the coordinates
 * return {Promise} - Promise object represents the forecast
 */
export const getForecast = async (lat, lng) => {
    if (Array.isArray(lat)) {
        lng = lat[1];
        lat = lat[0];
    }
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lng}&units=imperial&appid=${keys.openweather}`;
    const options = {
        method: 'GET',
    };
    const response = await fetch(url, options);
    const data = await response.json();
    return data.daily;
    
}

