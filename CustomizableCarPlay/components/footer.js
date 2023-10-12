import React from "react";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/Ionicons";
import { Alert } from "react-native";

const FooterBar = styled.View`
  flex-direction: row;
  justify-content: space-around;
  padding: 10px;
  background-color: #a5432f;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const FooterItem = styled.TouchableOpacity`
  align-items: center;
`;

export const Footer = () => {
  const showPlaceholderAlert = () => {
    Alert.alert("Under Construction", "This feature is not available yet.");
  };

  return (
    <FooterBar>
      <FooterItem onPress={showPlaceholderAlert}>
        <Icon name="create-outline" size={30} color="#000000" />
      </FooterItem>
      <FooterItem onPress={showPlaceholderAlert}>
        <Icon name="person-outline" size={30} color="#000000" />
      </FooterItem>
      <FooterItem onPress={showPlaceholderAlert}>
        <Icon name="chatbubbles-outline" size={30} color="#000000" />
      </FooterItem>
    </FooterBar>
  );
};
