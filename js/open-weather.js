import {getForecast} from './api/open-weather.js';
import {getCoordinates} from './api/mapbox.js';
import {keys} from './keys.js';

const createCardElement = (forecast) => {
    const card = document.createElement('div');
    card.classList.add('col', 'col-2', 'rounded', getWeatherClass(forecast.weather[0].main.toLowerCase()));

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
        <div class="tiltcard" data-tilt data-tilt-glare>
          <img src="./icon/${forecast.weather[0].icon}.png" class="card-img-top" alt="...">
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
const getWeatherClass = (weatherCondition) => {
    const videoElement = document.querySelector('#background-video');
    const audioElement = document.getElementById('background-audio');
    switch (weatherCondition) {
        case 'clear':
            videoElement.src = 'vid/clouds.mp4'
            audioElement.src = 'audio/wind.mp3'
            break;
        case 'clouds':
            videoElement.src = 'vid/overcast.mp4'
            audioElement.src = 'audio/wind.mp3'
            break;
        case 'rain':
            videoElement.src = 'vid/rain.mp4'
            audioElement.src = 'audio/natural-thunder-113219.mp3'
            break;
        case 'snow':
            videoElement.src = 'vid/snow1.mp4'
            audioElement.src = 'audio/snow-rain-bird-chirping-19560.mp3'
            break;
        // Add more cases for other weather conditions
        default:
            videoElement.src = 'vid/snow1.mp4'
            audioElement.src = 'audio/wind.mp3'
            break;
    }
    audioElement.play();

    return weatherCondition;
};
const updateCard = async (searchTerm, map) => {
    const selectedArea = await getCoordinates(searchTerm);
    console.log(selectedArea)
    const forecasts = await getForecast(selectedArea[1], selectedArea[0]);
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
    const getDataMap = await getCoordinates('Philadelphia,PA');
    mapboxgl.accessToken = keys.mapbox;
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: getDataMap,
        zoom: 10
    });
    const geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        placeholder: 'Search for places in Philadelphia',
        mapboxgl: mapboxgl
    });
    geocoder.on('result', async (e) => {
        const selectedLocation = e.result;
        const searchTerm = selectedLocation.text;
        await updateCard(searchTerm, map);
        marker.setLngLat(selectedLocation.center).addTo(map);
        map.flyTo({
            center: selectedLocation.center,
            zoom: 10
        });
    });
    map.addControl(geocoder);
    const marker = new mapboxgl.Marker({
        draggable: true
    })
        .setLngLat(getDataMap)
        .addTo(map);
    updateCard("Philadelphia,PA", map);

})();