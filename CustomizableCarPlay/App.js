import React from "react";
import firebase from 'firebase';
import AppNavigator from "./navigator";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

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
