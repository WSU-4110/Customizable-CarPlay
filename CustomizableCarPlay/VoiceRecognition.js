import React, { useEffect } from 'react';
import Voice from '@react-native-voice/voice';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import Voice from '@react-native-voice/voice';

const VoiceControlButton = () => {
  useEffect(() => {
    // Setting up voice recognition event listeners
    Voice.onSpeechResults = onSpeechResults;

    return () => {
      // Removing event listeners on cleanup
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const onSpeechResults = (event) => {
    // Process the voice command
    // event.value contains the array of spoken words/phrases
    console.log(event.value);
  };

  const startListening = () => {
    // Request permissions and start listening
    Voice.start('en-US');
  };

  return (
    <TouchableOpacity
      style={styles.voiceButton}
      onPress={startListening}>
      {/* Insert your button design here */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  voiceButton: {
    // Your button styles
  },
});

export default VoiceControlButton;
