import React from "react";
import { LayoutProvider } from "./components/LayoutContext";
import AppNavigator from "./navigator";
import { StatusBar } from "expo-status-bar";
import LayoutWithVoiceButton from './LayoutWithVoiceButton';

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