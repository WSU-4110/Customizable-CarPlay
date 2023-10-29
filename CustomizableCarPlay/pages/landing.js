import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import { StyledButton, StyledButtonText } from "../StyledComponents";
import { useNavigation } from "@react-navigation/native";

export default function Landing() {
  const navigation = useNavigation();

  const navigateToHome = () => {
    navigation.navigate("Home");
  };

  return (
    <View>
      <Text>Landing page - Customized Car Play</Text>
      <StyledButton onPress={navigateToHome}>
        <StyledButtonText>Start</StyledButtonText>
      </StyledButton>
      <StatusBar style="auto" />
    </View>
  );
}