import React from "react";
import firebase from 'firebase';
import AppNavigator from "./navigator";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";


const firebaseConfig = {
  apiKey: "AIzaSyC0S35P0uuC8BX-WvZH_HJTXBYHfhBAhgM",
  authDomain: "customizable-carplay-ef401.firebaseapp.com",
  projectId: "customizable-carplay-ef401",
  storageBucket: "customizable-carplay-ef401.appspot.com",
  messagingSenderId: "17748607274",
  appId: "1:17748607274:web:1c55289dd428b8ed069e53",
};

firebase.initializeApp(firebaseConfig);

export default function App() {
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
