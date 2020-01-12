import * as centrosCulturales from '../js/data.js';

var mymap;

window.onload = function () {
    cargarDatos();
}

function cargarDatos() {
    var aux = centrosCulturales.datos.length;
    var centro = [];
    var coordenadaX, coordenadaY;

    map();

    for (let i = 0; i < aux; i++) {
        centro.push(centrosCulturales.datos[i]);
        coordenadaY = centro[i].geometry.coordinates[0];
        coordenadaX = centro[i].geometry.coordinates[1];

        añadirMarcador(coordenadaX, coordenadaY);
    }
}

function map() {
    mymap = L.map("map").setView([28.4685305050524, -16.2579951658036], 12);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
        {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 80,
            id: 'mapbox/streets-v11',
            accessToken: 'pk.eyJ1IjoibW9uc3RlcnJ5ZGUiLCJhIjoiY2s1NTg5NWgzMDE4aTNsbzUxMjFodTU5eiJ9.mcJFfW_HQwuwl0o9tDVRHA'
        }).addTo(mymap);
}

function añadirMarcador(coordenadaX, coordenadaY) {
    L.marker([coordenadaX, coordenadaY])
        .addTo(mymap)
        .bindPopup()
        .openPopup();
}
