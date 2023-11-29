(() => {
    const apiKey = '8eda2e9236e69d59d94a68c24ee35e19';
    const mapboxToken = 'pk.eyJ1IjoiandhbGs5MCIsImEiOiJjbHBoNjRpa28wNG1oMnFyeGZjeDhvaGdoIn0.-CnKXIvgMqys5HuF2k1ygw';
    const apiBaseUrl = 'http://api.openweathermap.org/data/2.5';
    const mapboxBaseUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';

    // Step 1: Display Current Weather
    const displayCurrentWeather = async (philadelphia) => {
        const url = `${apiBaseUrl}/weather?q=${city}&appid=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();

        // Display current weather in the #current-weather-container
        document.getElementById('current-weather-container').innerHTML = `
            <h2>Current Weather in ${city}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <!-- Add more details as needed -->
        `;
    };

    // Step 2: Display Five-Day Forecast
    const displayFiveDayForecast = async (philadelphia) => {
        const url = `${apiBaseUrl}/forecast?q=${city}&appid=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();

        // Display five-day forecast in the #forecast-container
        document.getElementById('forecast-container').innerHTML = `
            <h2>Five-Day Forecast for ${city}</h2>
            <!-- Display forecast details and icons -->
        `;
    };

    // Step 3: Initialize Map
    const initMap = () => {
        mapboxgl.accessToken = mapboxToken;
        const map = new mapboxgl.Map({
            container: 'map-container',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [0, 0],
            zoom: 2
        });

        const marker = new mapboxgl.Marker({
            draggable: true
        })
            .setLngLat([0, 0])
            .addTo(map);

        // Step 4: Update Forecast on Marker Drag
        marker.on('dragend', async () => {
            const coordinates = marker.getLngLat();
            const {lat, lng} = coordinates;

            // Step 5: Update Forecast with New Coordinates
            await displayFiveDayForecastByCoordinates(lat, lng);
        });
    };

    // Step 6: Display Forecast by Coordinates
    const displayFiveDayForecastByCoordinates = async (lat, lon) => {
        const url = `${apiBaseUrl}/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();

        // Display five-day forecast in the #forecast-container
        document.getElementById('forecast-container').innerHTML = `
            <h2>Five-Day Forecast for the New Location</h2>
            <!-- Display forecast details and icons for the new coordinates -->
        `;
    };

    // Step 7: Add Mapbox Text Input for Location Search
    const addLocationSearchInput = () => {
        const searchInput = document.createElement('input');
        searchInput.setAttribute('type', 'text');
        searchInput.setAttribute('placeholder', 'Search by location');
        searchInput.addEventListener('change', async () => {
            const location = searchInput.value;

            // Step 8: Update Forecast on Location Search
            await displayCurrentWeather(location);
            await displayFiveDayForecast(location);
        });

        document.body.appendChild(searchInput);
    };

    // Step 9: Add Bonus - Update Marker's Position on Search Result
    const updateMarkerPosition = (lat, lon) => {
        const marker = map.getLayer('marker');
        marker.setLngLat([lon, lat]);
    };

    // Initial Execution
    displayCurrentWeather('YourCityName'); // Replace with your city name
    displayFiveDayForecast('YourCityName'); // Replace with your city name
    initMap();
    addLocationSearchInput();
})();
