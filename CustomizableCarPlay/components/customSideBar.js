import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Sidebar = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <View style={styles.sidebar}>
      <Text>Sidebar Text Test</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sidebar: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 52,
    width: 250,
    backgroundColor: "gray",
  },
});

export default Sidebar;
