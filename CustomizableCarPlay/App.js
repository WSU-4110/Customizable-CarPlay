<<<<<<< HEAD
import React from "react";
import firebase from 'firebase';
=======
//Original App.js
import React, {useEffect} from "react";
//import firebase from 'firebase';
>>>>>>> Dell's-branch
import AppNavigator from "./navigator";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { AlanView } from '@alan-ai/alan-sdk-react-native';
import alanBtn from '@alan-ai/alan-sdk-react-native'

<<<<<<< HEAD
firebase.initializeApp(firebaseConfig);

=======
//firebase.initializeApp(firebaseConfig);
const alanKey = '1779461c5737aa4b5952c0d4449c96802e956eca572e1d8b807a3e2338fdd0dc/stage'

// Define the App component
>>>>>>> Dell's-branch
export default function App() {
  // Use the useEffect hook to run the enclosed function once when the component mounts
  useEffect(() => {
    // Initialize the Alan button with the provided API key and set a command listener
    alanBtn({
      key: alanKey,
      onCommand: ({ command }) => {
        // Check if the received command is 'testCommand', and if so, display an alert
        if (command === 'testCommand') {
          alert('This code was executed');
        }
      }
    });
  }, []);  // Moved the semicolon here
  return <AppNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});