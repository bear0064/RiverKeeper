

function lookupPostal() {
	var postalCode = $("#postal-code").val().trim().substring(0,3);

	$.ajax({url:"http://api.zippopotam.us/ca/" + postalCode}).then(function(place) {
		if (place == {}) {
			alert("Could not find your postal code!");
		}
		else if (place.places.length > 0) {
			var location = place.places[0];
			var lat = location.latitude;
			var long = location.longitude;
			map.setView([lat, long], 9);
			console.log(lat + ", " + long);
			if (marker == null) {
				marker = L.marker([lat, long]).addTo(map);
				/*marker.bindPopup("Please add your activities here!<br />[ " + lat + ", " + long + ' ]<br />' + location['place name']).openPopup();
				*/
				marker.bindPopup($("#map-form").html()).openPopup();
				// set lat long here!
			}
			else {
				marker.setLatLng([lat, long]);
				marker.bindPopup($("#map-form").html()).openPopup();
				// set lat long here!
			}
		}
		else {
			console.log('not found!');
		}
    }, function() {
		alert("Could not look up the postal code " + postalCode);
	});
}
