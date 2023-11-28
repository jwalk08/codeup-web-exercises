import {keys} from './keys.js';

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
    const coordinates = await getCoordinates("8700 Tesoro Dr Suite 100 San Antonio, TX 78217");
    console.log(coordinates);
    mapboxgl.accessToken = keys.mapbox;
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/navigation-night-v1', // style URL
        center: (coordinates), // starting position [lng, lat]
        zoom: 9 // starting zoom
    });
    // const marker = new mapboxgl.Marker().setLngLat([-98.4916, 29.426]).addTo(map);
    // const popup = new mapboxgl.Popup().setLngLat([-98.4916, 29.426]).setHTML("<p>We don't live here anymore</p>").addTo(map);
    map.flyTo({
        center: (coordinates),
        zoom: 16,
        speed: 2,
    });
    const popup = new mapboxgl.Popup().setHTML("<p>We don't live here anymore</p>");
    const marker = new mapboxgl.Marker({
        color: 'red',
        draggable: true,
    })
        .setLngLat(coordinates)
        .setPopup(popup)
        .addTo(map);

    marker.on('dragend', (e) => {
        console.log(e);
        const lng = e.target._lngLat.lng;
        const lat = e.target._lngLat.lat;
        map.flyTo({
            center: [lng, lat],
            zoom: 16,
            speed: 2,
        });

    });

})();