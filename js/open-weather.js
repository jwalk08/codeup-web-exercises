import {getForecast} from './api/open-weather.js';
import {getCoordinates} from './api/mapbox.js';
import {keys} from './keys.js';


const createCardElement = (forecast) => {
    const card = document.createElement('div');
    card.classList.add('col', 'col-2');
    const date = new Date(forecast.dt * 1000);
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: "numeric",
        timeZoneName: 'short'
    };
    const formattedDate = date.toLocaleDateString("en-US", options);
    card.innerHTML = `
        <div class="card">
          <img src="http://openweathermap.org/img/w/${forecast.weather[0].icon}.png" class="card-img-top" alt="...">
          <p class="card-date">${formattedDate}</p>
          <div class="card-body">
            <h6 class="card-title">${forecast.temp.day}°F / ${forecast.temp.eve}°F</h6>
            <p class="card-text">Description: ${forecast.weather[0].description}</p>
            <p class="card-text">Humidity: ${forecast.humidity}</p>
            <p class="card-text">Wind: ${forecast.wind_speed}</p>
            <p class="card-text">Pressure: ${forecast.pressure}</p>
          </div>
        </div>
    `;
    const appendCard = document.querySelector('#card');
    appendCard.appendChild(card);

}

const updateCard = async (searchTerm, map) => {
    const getDataMap = await getCoordinates(searchTerm);
    const forecasts = await getForecast(51.5281798, -0.4312328);
    const cardElement = document.querySelector('#card');
    cardElement.innerHTML = "";

    forecasts.forEach((forecast, index) => {
        if (index <= 4) {
            console.log(forecast)
            createCardElement(forecast);
        }

    })
}
//main
(async () => {
    const getDataMap = await getCoordinates('Tower of London, London EC3N 4AB, United Kingdom');
    mapboxgl.accessToken = keys.mapbox;
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: getDataMap,
        zoom: 10
    });
    const marker = new mapboxgl.Marker({
        draggable: true
    })
        .setLngLat(getDataMap)
        .addTo(map);
    updateCard("Tower of London, London EC3N 4AB, United Kingdom", map);

})();