// 地図の設定
var mymap = L.map('mapid').setView([35.678362, 139.715387], 13);


L.tileLayer('https://api.maptiler.com/maps/jp-mierune-gray/256/{z}/{x}/{y}.png?key=kQ7jEXOFcCTPC5D4Q9xX', {
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>',
  maxZoom: 18,
}).addTo(mymap);

var options = {
            geocoder: new L.Control.Geocoder.Nominatim()
        };
        L.Control.geocoder(options).addTo(mymap);
