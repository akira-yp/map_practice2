// 地図の設定
var sessionKey = sessionStorage.getItem('currentLat');

 //sessionStorageが空だった場合と値が存在する場合で分岐し、デフォルト値を動的に生成
 if( sessionKey == null ){
    var defaultLatlng = [35.678362, 139.715387];
    var defaultZoom = 13;
  } else {
    var defaultLatlng = [Number(sessionStorage.currentLat), Number(sessionStorage.currentLng)];
    var defaultZoom = Number(sessionStorage.currentZoom);
　　　　};
 　var mymap = L.map('mapid').setView(defaultLatlng, defaultZoom);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: 'c <a href="//osm.org/copyright">OpenStreetMap</a> contributors, <a href="//creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
  maxZoom: 18,
  minZoom: 3,
}).addTo(mymap);

// L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', { attribution: 'Tiles © <a href="http://www.esrij.com/"> Esri Japan </a>' }).addTo(mymap);

//'http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', { attribution: 'Tiles © <a href="http://www.esrij.com/"> Esri Japan </a>' }

var options = {
            geocoder: new L.Control.Geocoder.Nominatim()
        };
        L.Control.geocoder(options).addTo(mymap);

L.easyButton({
	states: [{
		stateName: 'full-screen',
		icon:	'fa-expand',
		title:	 '全画面',
		onClick: function(btn, map) {
			document.body.requestFullscreen();
			btn.state('full-screen-reset');
      $('#mapid').removeClass('mapsize');
      $('#mapid').addClass('fullsize');
		}
	}, {
		stateName: 'full-screen-reset',
		icon:	'fa-compress',
		title:	 '元に戻す',
		onClick: function(btn, map) {
			document.exitFullscreen();
			btn.state('full-screen');
      $('#mapid').removeClass('fullsize');
      $('#mapid').addClass('mapsize');
		}
	}]
}).addTo( mymap );

mymap.on('move', function(e){
	currentPosi = mymap.getCenter();
	currentZoom = mymap.getZoom();
	sessionStorage.setItem('currentLat',currentPosi.lat.toFixed(6));
	sessionStorage.setItem('currentLng',currentPosi.lng.toFixed(6));
	sessionStorage.setItem('currentZoom',currentZoom);
  });
