$(document).ready(function() {
	function initialize() {
		var mapOptions = {
			center: new google.maps.LatLng (28.12227, -81.4612),
			zoom: minZoomLevel,
			mapTypeId: google.maps.MapTypeId.SATELLITE,
			  panControl: false,
			  zoomControl: false,
			  mapTypeControl: false,
			  scaleControl: false,
			  streetViewControl: true,
			  overviewMapControl: false,

		};
		var map = new google.maps.Map(document.getElementById("map-canvas"),
			mapOptions);

		google.maps.event.addListener(map, 'dragend', function() {
			if (strictBounds.contains(map.getCenter())) return;

			var c = map.getCenter(),
				x = c.lng(),
				y = c.lat(),
				maxX = strictBounds.getNorthEast().lng(),
				maxY = strictBounds.getNorthEast().lat(),
				minX = strictBounds.getSouthWest().lng(),
				minY = strictBounds.getSouthWest().lat();

			if (x < minX) x = minX;
			if (x > maxX) x = maxX;
			if (y < minY) y = minY;
			if (y > maxY) y = maxY;

			map.setCenter(new google.maps.LatLng(y, x));	

			});

		var infowindow = new google.maps.InfoWindow({
		    });

		var markers = new Array();

	    for (var i = 0; i < locations.length; i++) {  
	      marker = new google.maps.Marker({
	        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
	        map: map,
	      });

	      markers.push(marker);

	      google.maps.event.addListener(marker, 'click', (function(marker, i) {
	        return function() {
	          infowindow.setContent(locations[i][0]);
	          infowindow.open(map, marker);
	          $(".info-title").html(locations[i][3]);
	          $(".wikipedia-info").html(locations[i][4]);
	          $(".sourced").html(locations[i][5]);
	        }
	      })(marker, i));
	      
	      }
	    };
	initialize(); 
});
