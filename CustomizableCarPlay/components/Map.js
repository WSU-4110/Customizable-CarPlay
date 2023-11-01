import GPSReceiver from './GPSReceiver';
import MapUI from './MapUI';

const gpsReceiver = new GPSReceiver();
const mapUI = new MapUI(gpsReceiver);
gpsReceiver.startTracking();


// Create a new Google map object.
var map = new google.maps.Map(document.getElementById('map-canvas'), {
    center: { lat: 40.7127837, lng: -74.0059413 },
    zoom: 11
  });
  
  // Create a new search box object.
  var searchBox = new google.maps.places.SearchBox(document.getElementById('pac-input'));
  searchBox.bindTo('bounds', map);
  
  // Listen for the search box results to change.
  searchBox.addListener('places_changed', function() {
    var place = searchBox.getPlaces()[0];
    if (place) {
      // Center the map on the place.
      map.setCenter(place.geometry.location);
      // Add a marker to the map.
      var marker = new google.maps.Marker({
        position: place.geometry.location,
        map: map,
        title: place.name
      });
    }
  });
  
  // Create a new directions service object.
  var directionsService = new google.maps.DirectionsService();
  // Create a new directions renderer object.
  var directionsRenderer = new google.maps.DirectionsRenderer();
  // Bind the directions renderer to the map.
  directionsRenderer.setMap(map);
  
  // Create a new button to get directions.
  var directionsButton = document.getElementById('get-directions-button');
  // Add a click listener to the button.
  directionsButton.addEventListener('click', function() {
    // Get the user's current position.
    navigator.geolocation.getCurrentPosition(function(position) {
      // Create a new directions request object.
      var directionsRequest = {
        origin: { lat: position.coords.latitude, lng: position.coords.longitude },
        destination: { placeId: searchBox.getPlaces()[0].placeId },
        travelMode: google.maps.TravelMode.DRIVING
      };
  
      // Calculate the directions.
      directionsService.route(directionsRequest, function(response, status) {
        if (status === google.maps.DirectionsStatus.OK) {
          // Display the directions on the map.
          directionsRenderer.setDirections(response);
        } else {
          // Show an error message.
          alert('Error getting directions: ' + status);
        }
      });
    });
  });
  
  // Create an array to store the markers.
  
  var markers = [];
  
  // Add a button to add a marker to the map.
  
  var addMarkerButton