import React, { useState } from 'react';
import { TouchableOpacity, View, StyleSheet, Image, Text } from 'react-native';
import * as Speech from 'expo-speech';
import { useNavigation } from "@react-navigation/native";

const LayoutWithVoiceButton = ({ children }) => {
  const navigation = useNavigation(); // Hook used to navigate
  const [showOptions, setShowOptions] = useState(false);

  const onPressButton = () => {
    setShowOptions(!showOptions);
  };

  const openSpotify = () => {
    Speech.speak("Opening Spotify");
    // Logic to open Spotify goes here
  };

  const openGoogleMaps = () => {
    Speech.speak("Opening Google Maps");
    // Logic to open Google Maps goes here
  };

  const goToHomePage = () => {
    Speech.speak("Going to Home Page");
    navigation.navigate('Home'); // Presuming 'Home' is a valid route in your navigation
  };

  return (
    <View style={{ flex: 1 }}>
      {children}
      <TouchableOpacity
        testID="voiceButton"
        style={styles.voiceButton}
        onPress={onPressButton}
      >
        <Image
          source={require('./images/icons8-microphone-64.png')}
          style={styles.image}
        />
      </TouchableOpacity>

      {showOptions && (
        <View style={styles.optionsContainer} testID="optionsContainer">
          <TouchableOpacity onPress={openSpotify} style={styles.optionButton} testID="spotifyButton">
            <Text>Spotify</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={openGoogleMaps} style={styles.optionButton} testID="mapsButton">
            <Text>Maps</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={goToHomePage} style={styles.optionButton} testID="homeButton">
            <Text>Home</Text>
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
    // ...styles for your option buttons
  }
});

export default LayoutWithVoiceButton;
