import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import LayoutWithVoiceButton from './LayoutWithVoiceButton';
import AppNavigator from "./navigator";
import { LayoutProvider } from "./components/LayoutContext";

export default function App() {
  return (
    <LayoutProvider>
      <StatusBar style="auto" />
      <LayoutWithVoiceButton>
        <AppNavigator />
      </LayoutWithVoiceButton>
    </LayoutProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
