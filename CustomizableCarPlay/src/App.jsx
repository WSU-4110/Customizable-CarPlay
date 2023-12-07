import React, { useEffect, useRef } from 'react';
import { withNavigation } from '@react-navigation/compat';

const App = ({ navigation }) => {
  const mapContainerRef = useRef(null);
  const searchInputRef = useRef(null);
  let map, marker, searchBox, watchId;

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=YAIzaSyCA3WTCIbiw7tgwkEf-3i83VP4q8W68Tu8&libraries=places,geometry`; 
    script.async = true;
    script.defer = true;
    script.onload = initMap;
    document.head.appendChild(script);

    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, []);



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
              navigation.navigate('Home');
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

export default withNavigation(App);
