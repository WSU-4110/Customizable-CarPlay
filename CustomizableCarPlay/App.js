import React, { useState } from "react";
import LayoutContext from "./components/LayoutContext";
import AppNavigator from "./navigator";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [layout, setLayout] = useState("layoutOne");

  const toggleLayout = () => {
    setLayout((currentLayout) =>
      currentLayout === "layoutOne" ? "layoutTwo" : "layoutOne"
    );
  };

  return (
    <LayoutContext.Provider value={{ layout, setLayout, toggleLayout }}>
      <StatusBar style="auto" />
      <AppNavigator />
    </LayoutContext.Provider>
  );
}
