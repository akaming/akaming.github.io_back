//지도표시
(function(){
    function initialize() {
        var myLatlng = new google.maps.LatLng(37.544287, 126.871966); // y, x좌표값
        var mapOptions = {
            zoom: 15,
            center: myLatlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: "my home"
        });
        var infowindow = new google.maps.InfoWindow(
            {
                content: "<h4>my home</h4>",
                maxWidth: 300
            }
        );

        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map, marker);
        });
    }
    initialize();
})();





