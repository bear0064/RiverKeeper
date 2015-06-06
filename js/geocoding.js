

function lookupPostal() {
	var postalCode = $("#postal-code").val().trim().substring(0,3);

	$.ajax({url:"http://api.zippopotam.us/ca/" + postalCode}).then(function(place) {
		if (place == {}) {
			alert("Could not look up the postal code " + postalCode);
		}
		else if (place.places.length > 0) {
			var location = place.places[0];
			var lat = location.latitude;
			var long = location.longitude;
			map.setView([lat, long], 9);

			if (marker == null) {
				marker = L.marker([lat, long]).addTo(map);
			}
			else {
				marker.setLatLng([lat, long]);
			}

			marker.bindPopup($("#map-form").html()).openPopup();
		}
		else {
			alert("Could not look up the postal code " + postalCode);
		}
    }, function() {
		alert("Could not look up the postal code " + postalCode);
	});
}
