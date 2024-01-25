const map = L.map("map").setView([0, 0], 2);

const tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

var marker = L.marker([0, 0]).addTo(map);

navigator.geolocation.getCurrentPosition(
  function (position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;

    map.setView([lat, lon], 15);

    marker
      .setLatLng([lat, lon])
      .bindPopup("<b>Questa è la tua posizione</b><br />So dove sei!")
      .openPopup();
  },
  function (error) {
    console.error("Errore", error);
  }
);
