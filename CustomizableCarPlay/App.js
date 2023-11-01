
import React from "react";
import firebase from 'firebase';
//Original App.js
import React, {useEffect} from "react";
//import firebase from 'firebase';
import AppNavigator from "./navigator";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { AlanView } from '@alan-ai/alan-sdk-react-native';
import alanBtn from '@alan-ai/alan-sdk-react-native'
//firebase.initializeApp(firebaseConfig);

const alanKey = '1779461c5737aa4b5952c0d4449c96802e956eca572e1d8b807a3e2338fdd0dc/stage'

// Define the App component
export default function App() {
  useEffect(() => {
    // Initialize the Alan button with the provided API key and set a command listener
    alanBtn({
      key: alanKey,
      onCommand: ({ command }) => {
        // Check if the received command is 'testCommand'
        if (command === 'testCommand') {
          alert('This code was executed');
        }
      }
    });
  }, []);  
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