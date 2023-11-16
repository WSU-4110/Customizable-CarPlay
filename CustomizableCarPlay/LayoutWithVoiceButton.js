// `LayoutWithVoiceButton.js`
import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';

const LayoutWithVoiceButton = ({ children }) => {
  const onPressButton = () => {
    // You can add any action here that you want to perform when the button is pressed
    console.log('Button pressed!');
  };

  return (
    <View style={{ flex: 1 }}>
      {children}
      <TouchableOpacity style={styles.voiceButton} onPress={onPressButton}>
        {/* Add an icon or text inside the button */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  voiceButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LayoutWithVoiceButton;
