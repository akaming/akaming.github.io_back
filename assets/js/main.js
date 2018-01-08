//지도표시
function initMap() {
    var uluru = {lat: -25.363, lng: 131.044};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: {lat: -34.397, lng: 150.644}
    });
    var marker = new google.maps.Marker({
        position: {lat: -34.397, lng: 150.644},
        map: map
    });
}






