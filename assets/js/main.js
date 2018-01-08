//지도표시
function initMap() {
    var uluru = {lat: 37.544023, lng: 126.872009};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}


