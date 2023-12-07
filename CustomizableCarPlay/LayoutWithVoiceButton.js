import React, { useState } from 'react';
import { ImageBackground, TouchableOpacity, View, StyleSheet, Image, Text, Linking } from 'react-native';
import * as Speech from 'expo-speech';
import { useNavigation } from "@react-navigation/native";



const QuickAcessButton = ({ children }) => {
  const [showOptions, setShowOptions] = useState(false);
  const navigation = useNavigation(); // Using the hook

  const onPressButton = () => {
    //onPress shows Spotify, Google Maps, Home Button
    setShowOptions(!showOptions);
  };

  const openSpotify = () => {
    Speech.speak("Opening Spotify");
    const url = "https://spotify.com";
    Linking.openURL(url).catch((err) => {
      console.error("Failed to open Spotify:", err);
    });
  };
  
  const openGoogleMaps = () => {
    Speech.speak("Opening Google Maps");
    const url = "https://maps.google.com";
    Linking.openURL(url).catch((err) => {
      console.error("Failed to open Google Maps:", err);
    });
  };

  const goToHomePage = () => {
    Speech.speak("Going to Home Page");
    navigation.navigate('Home');
  };


  return (
    <View style={{ flex: 1 }}>
      {children}
      <TouchableOpacity style={styles.voiceButton} onPress={onPressButton}>
        <Image source={require('./images/icons8-microphone-64.png')} style={styles.image} />
      </TouchableOpacity>

      {showOptions && (
        <View style={styles.optionsContainer}>
          <TouchableOpacity onPress={openSpotify} style={styles.optionButton}>
            <Image source={require('./images/icons8-spotify-100.png')} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity onPress={openGoogleMaps} style={styles.optionButton}>
            <Image source={require('./images/icons8-google-maps-100-Color.png')} style={styles.image} />
          </TouchableOpacity>
          <TouchableOpacity onPress={goToHomePage} style={styles.optionButton}>
          <Image source={require('./images/icons8-home-button-80-white.png')} style={styles.image} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  voiceButton: {
    position: 'absolute',
    right: 20,
    bottom: 70,
  },
  image: {
    width: 64,  
    height: 64, 
    borderRadius: 32,
  },
  optionsContainer: {
    position: 'absolute',
    right: 20,
    bottom: 150,
  },
  optionButton: {
  }
});

export default QuickAcessButton;
