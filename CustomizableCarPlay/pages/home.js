import React from "react";
import { View, Text } from "react-native";
import { Footer } from "../components/footer";

function Home() {
  return (
    <View style={{ flex: 1, backgroundColor: "#3C3C3C" }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: "#FFFFFF", fontSize: 24 }}>
          CustomizableCarPlay!
        </Text>
      </View>

      <Footer />
    </View>
  );
}

export default Home;
