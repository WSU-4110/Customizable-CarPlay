import React from "react";
import { View, Text, TouchableOpacity, Linking } from "react-native";

const Call911 = () => {
  const url = `tel:911`;
  const handlePress = () => {
    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(url);
        } else {
          console.error("Phone number is not supported");
        }
      })
      .catch((error) => console.error("An error occurred", error));
  };

  return (
    <View>
      <TouchableOpacity
        style={{ backgroundColor: "#903040", padding: 15, borderRadius: 10 }}
        onPress={handlePress}
      >
        <Text style={{ fontSize: 20, color: "#FFFFFF" }}>Call 911</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Call911;
