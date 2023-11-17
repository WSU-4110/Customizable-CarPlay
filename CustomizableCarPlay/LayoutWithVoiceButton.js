import React, { useState } from 'react';
import { TouchableOpacity, View, StyleSheet, Image, Text } from 'react-native';
import * as Speech from 'expo-speech';
import { useNavigation } from "@react-navigation/native";

const LayoutWithVoiceButton = ({ navigation, children }) => {
  const [showOptions, setShowOptions] = useState(false);

  const onPressButton = () => {
    setShowOptions(!showOptions);
  };

  const openSpotify = () => {
    Speech.speak("Opening Spotify");
    //open Spotify
  };

  const openGoogleMaps = () => {
    Speech.speak("Opening Google Maps");
    //open Google Maps
  };

  const goToHomePage = () => {
    Speech.speak("Going to Home Page");
    // Problems at the moment navigation.navigate('Home');
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
            <Text>Spotify</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={openGoogleMaps} style={styles.optionButton}>
            <Text>Maps</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={goToHomePage} style={styles.optionButton}>
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
  }
});

export default LayoutWithVoiceButton;
