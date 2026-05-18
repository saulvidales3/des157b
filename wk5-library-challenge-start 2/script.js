(function(){
    'use strict';

    // add your script here
    var map = L.map('map').setView([39.128540, -79.466591], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var popup = L.popup()
    .setLatLng([39.128540, -79.466591])
    .setContent("University of Davis")
    .openOn(map);

var circle = L.circle([39.128540, -79.466591], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

circle.bindPopup("I am Davis.");


function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

map.on('click', onMapClick);




}());