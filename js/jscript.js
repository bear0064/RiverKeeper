
$( document ).ready(function() {

    
              
                //lat=46.51805180290592,  lng=-76.92626953125
                // global variable storing map marker
                var marker = null;
                // set up Topographic map



                var map = L.map('map', {

                    center: [46.52, -81.1],
                    zoom: 7,
                    scrollWheelZoom: false,
                    fadeAnimation: true,
                    zoomControl: false
                });





                L.control.zoom({
                    position: 'topright'
                }).addTo(map);





                L.esri.basemapLayer("Topographic").addTo(map);
                // add water boundry overlay
                feature = L.esri.featureLayer("http://services3.arcgis.com/3A9PBYcAJK4G2Muz/arcgis/rest/services/Ottawa_Watershed_Boundaries/FeatureServer/0");
                feature.on('click', function (e) {
                    bigModal2();
                    var popLocation = e.latlng;
                    if (marker == null) {
                        marker = L.marker(popLocation).addTo(map);
                    } else {
                        marker.setLatLng(popLocation);
                    }
                    marker.bindPopup($("#map-form").html()).openPopup();
                        
                    $( "#submitMini").click(function() {
                        $(".leaflet-popup-content-wrapper, .leaflet-popup-tip").hide();
                        populateRandomPoints();
                    });
                });
                feature.addTo(map);
                // submit the postal code when the user presses enter
                $('#postal-code').on("keyup keypress", function (e) {
                    var code = e.keyCode || e.which;
                    if (code == 13) {
                        $('#postal-lookup').click();
                        return false;
                    }
                });
            
    

    
    
    
$( "#bottom" ).click(function() {
  $( "#containerForm" ).slideToggle( 1000, function() {
  
      bigModal();// Animation complete.
  });
});

    



    
    
function addRandomPopup(mark) {
    var uses = [
        "icon-fishing.svg", "icon-paddle.svg", "sail.svg"
    ];
    var numberUses = Math.floor(Math.random() * (uses.length - 1 )) + 1;
    var usesString = "";
    for (i = 0; i < numberUses; i++) {
        var rnd = Math.floor(Math.random() * uses.length);
        usesString += "<img src=\"img/" + uses[rnd] + "\"></img>";
    }
    mark.bindPopup("<div>"+usesString+"</div>");
}

function populateRandomPoints() {
    var points = [
        [47.03, -77.03],
        [46.5, -77.2],
        [46.99, -75.564],
        [46.98, -78.65],
		[45.4214, -75.6919],
		[45.2, -75.2],
		[45.1, -76]
     ];

    for (x = 0; x< points.length; x++) {
        var point = points[x];

        var m = L.marker(point).addTo(map);
        addRandomPopup(m);
    }
}
    
    
    function bigModal(ev) {


    //    alert('nothing');
    var single = {
        show: function (ev) {
            document.querySelector("[data-role=modal").style.display = "block";

        }
        
        
    }
//    single.init();
    single.show();
}

    
    function bigModal2(ev) {


    //    alert('nothing');
    var single = {
       hide: function (ev) {
            document.querySelector("[data-role=modal").style.display = "none";
    
        }
    }
//    single.init();
        single.hide();

}

      
});


