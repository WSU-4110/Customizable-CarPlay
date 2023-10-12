import React from "react";
import { View, Text } from "react-native";
import { Footer } from "../components/footer";

function Home() {
  return (
    <View style={{ flex: 1 }}>
      <Text>Hello, welcome to Home!</Text>
      <Footer />
    </View>
  );
}

export default Home;
