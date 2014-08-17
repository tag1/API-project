
var strictBounds = new google.maps.LatLngBounds(
	 new google.maps.LatLng(24.39, -79.65),
     new google.maps.LatLng(31, -87.60)
   );
 
function getNormalizedCoord(coord, zoom) {
	var y = coord.y;
	var x = coord.x;
	var tileRange = 1 << zoom;
	if (y < 0 || y >= tileRange) {
		return null;
	}
	if (x < 0 || x >= tileRange) {
		return null;
	}
	return {
		x: x,
		y: y
	};
}
$(document).ready(function() {
	function initialize() {
		var mapOptions = {
			center: new google.maps.LatLng (28.12227, -81.4612),
			zoom: 15
		};
		var map = new google.maps.Map(document.getElementById("map-canvas"),
			mapOptions);
	};
	initialize(); 
});