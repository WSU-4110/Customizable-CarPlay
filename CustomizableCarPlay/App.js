import React, { useState } from "react";
import LayoutContext from "./components/LayoutContext";

import AppNavigator from "./navigator";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const [layout, setLayout] = useState("layoutOne");

  const toggleLayout = () => {
    setLayout((currentLayout) =>
      currentLayout === "layoutOne" ? "layoutTwo" : "layoutOne"
    );
  };

  return (
    <LayoutContext.Provider value={{ layout, toggleLayout }}>
      <StatusBar style="auto" />
      <AppNavigator />
    </LayoutContext.Provider>
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
