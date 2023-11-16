// `LayoutWithVoiceButton.js`
import React from 'react';
import { TouchableOpacity, View, StyleSheet, Image } from 'react-native';

const LayoutWithVoiceButton = ({ children }) => {
  const onPressButton = () => {
    console.log('Microphone button pressed!');
  };

  return (
    <View style={{ flex: 1 }}>
      {children}
      <TouchableOpacity style={styles.voiceButton} onPress={onPressButton}>
        <Image
          source={require('./images/icons8-microphone-64.png')} 
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  voiceButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
  },
  image: {
    width: 64,  
    height: 64, 
    borderRadius: 32,
  },
});

export default LayoutWithVoiceButton;
