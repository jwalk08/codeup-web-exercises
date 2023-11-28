import {keys} from './keys.js';

const restaurants = [
    {
        name: 'Pastries n Chaat',
        address: '10222 Huebner Rd Suite 113, San Antonio, TX 78240',
        description: 'A delightful place for pastries and chaat.'
    },
    {
        name: 'Pappadeaux Seafood Kitchen',
        address: '76 NE Interstate 410 Loop, San Antonio, TX 78216',
        description: 'A great place to enjoy delicious cuisine.'
    },
    {
        name: 'Tarka Indian Kitchen',
        address: '427 TX-1604 Loop Ste 101, San Antonio, TX 78232',
        description: 'An excellent spot for food enthusiasts.'
    },
];
const getCoordinates = async (searchText) => {
    searchText = encodeURIComponent(searchText);
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchText}.json?access_token=${keys.mapbox}`;
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    };
    const response = await fetch(url, options);
    const data = await response.json();
    return data.features[0].center;
};


//main
(async () => {
    // Fetch coordinates for each restaurant
    await Promise.all(restaurants.map(async (restaurant) => {
        restaurant.coordinates = await getCoordinates(restaurant.address);
    }));

    // Set up Mapbox access token
    mapboxgl.accessToken = keys.mapbox

    // Create a new Map instance
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/satellite-streets-v12', // style URL
        center: restaurants[0].coordinates, // starting position [lng, lat]
        zoom: 9 // starting zoom
    });

    // Display markers and popups for each restaurant
    restaurants.forEach((restaurant) => {
        const popupContent = `<h1>${restaurant.name}</h1><p>${restaurant.description}</p>`;
        const popup = new mapboxgl.Popup({closeOnClick: false}).setHTML(popupContent);
        const marker = new mapboxgl.Marker({
            color: 'red',
            draggable: true,
        })
            .setLngLat(restaurant.coordinates)
            .setPopup(popup)
            .addTo(map);

        marker.on('dragend', (e) => {
            const lng = e.target._lngLat.lng;
            const lat = e.target._lngLat.lat;

            // Fly to the dragged position
            map.flyTo({
                center: [lng, lat],
                zoom: 16,
                speed: 2,
            });
        });
    });

})();