import React, { useEffect, useRef } from 'react';
import { ImageBackground, TouchableOpacity, View, StyleSheet, Image, Text, Linking } from 'react-native';
import * as Speech from 'expo-speech';
import { useNavigation } from "@react-navigation/native";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC0S35P0uuC8BX-WvZH_HJTXBYHfhBAhgM",
  authDomain: "customizable-carplay-ef401.firebaseapp.com",
  databaseURL: "https://customizable-carplay-ef401-default-rtdb.firebaseio.com",
  projectId: "customizable-carplay-ef401",
  storageBucket: "customizable-carplay-ef401.appspot.com",
  messagingSenderId: "17748607274",
  appId: "1:17748607274:web:1c55289dd428b8ed069e53"
};

const App = () => {
  const mapContainerRef = useRef(null);
  const searchInputRef = useRef(null);
  let map, marker, searchBox, watchId;

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCA3WTCIbiw7tgwkEf-3i83VP4q8W68Tu8&libraries=places,geometry`;
    script.async = true;
    script.defer = true;
    script.onload = initMap;
    document.head.appendChild(script);

    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, []);

  const calculateDistance = (origin, destination) => {
    const distanceInMeters = window.google.maps.geometry.spherical.computeDistanceBetween(
      origin,
      destination
    );

    const distanceInMiles = distanceInMeters * 0.000621371; // 1 meter = 0.000621371 miles
    const distanceInKilometers = distanceInMeters / 1000; // 1 kilometer = 1000 meters

    return { miles: distanceInMiles.toFixed(2), kilometers: distanceInKilometers.toFixed(2) };
  };

  const initMap = () => {
    map = new window.google.maps.Map(mapContainerRef.current, {
      center: { lat: 42.3314, lng: -83.0458 },
      zoom: 11,
    });

    marker = new window.google.maps.Marker({
      map: map,
      anchorPoint: new window.google.maps.Point(0, -29),
    });

    searchBox = new window.google.maps.places.SearchBox(searchInputRef.current);
    map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(searchInputRef.current);

    map.addListener('bounds_changed', () => {
      searchBox.setBounds(map.getBounds());
    });

    const markers = [];
    const directionsService = new window.google.maps.DirectionsService();
    const directionsRenderer = new window.google.maps.DirectionsRenderer({
      map: map,
    });

    // Add an info window for displaying information on marker hover
    const infoWindow = new window.google.maps.InfoWindow();

    searchBox.addListener('places_changed', () => {
      const places = searchBox.getPlaces();

      if (places.length === 0) {
        return;
      }

      markers.forEach((marker) => {
        marker.setMap(null);
      });

      const bounds = new window.google.maps.LatLngBounds();
      places.forEach((place) => {
        if (!place.geometry) {
          console.log('Returned place contains no geometry');
          return;
        }

        markers.push(
          new window.google.maps.Marker({
            map: map,
            title: place.name,
            position: place.geometry.location,
          })
        );

        // Add listener for marker hover
        markers[markers.length - 1].addListener('mouseover', () => {
          const distanceInfo = calculateDistance(
            new window.google.maps.LatLng(marker.getPosition().lat(), marker.getPosition().lng()),
            place.geometry.location
          );

          const content = `${place.name}<br/>Distance: ${distanceInfo.miles} miles (${distanceInfo.kilometers} km)`;

          infoWindow.setContent(content); 
          infoWindow.open(map, markers[markers.length - 1]);
        });

        markers[markers.length - 1].addListener('mouseout', () => {
          infoWindow.close();
        });

        if (place.geometry.viewport) {
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }

        const origin = new window.google.maps.LatLng(
          marker.getPosition().lat(),
          marker.getPosition().lng()
        );

        const destination = place.geometry.location;

        const request = {
          origin: origin,
          destination: destination,
          travelMode: window.google.maps.TravelMode.DRIVING,
        };

        directionsService.route(request, (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            directionsRenderer.setDirections(result);
          } else {
            console.error('Directions request failed due to ' + status);
          }
        });
      });
      map.fitBounds(bounds);
    });
    

    navigator.geolocation.getCurrentPosition((position) => {
      marker.setPosition({ lat: position.coords.latitude, lng: position.coords.longitude });
      map.setCenter({ lat: position.coords.latitude, lng: position.coords.longitude });
    });

    watchId = navigator.geolocation.watchPosition((position) => {
      marker.setPosition({ lat: position.coords.latitude, lng: position.coords.longitude });
    });
    
  };
  return (
    <div>
      <div
        style={{
          width: '100%',
          height: '50px',
          backgroundColor: '#F0F0F0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingLeft: '10px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <button
            onClick={() => {
              navigation.navigate('Home')
              console.log('Go back logic goes here');
            }}
            style={{
              fontSize: '16px',
              fontWeight: 'bold',
              backgroundColor: '#007BFF',
              color: 'white',
              border: 'none',
              padding: '8px 12px',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Back
          </button>
          <p style={{ fontSize: '18px', fontWeight: 'bold', marginLeft: '850px' }}>Customizable Carplay</p>
        </div>
      </div>
      <input
        ref={searchInputRef}
        type="text"
        placeholder="Search Box"
        style={{
          width: '80%',
          height: '40px',
          outline: 'none',
          border: '2px solid #ced4da',
          borderRadius: '5px',
          textAlign: 'center',
          fontSize: '16px',
          marginTop: '10px',
        }}
      />
      <div ref={mapContainerRef} style={{ width: '100%', height: '844px' }} />
    </div>
  );
};

export default App;