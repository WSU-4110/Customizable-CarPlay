import React, { useState } from "react";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/Ionicons";
import { Alert } from "react-native";
import Sidebar from "./customSideBar";



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
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const showPlaceholderAlert = () => {
    Alert.alert("Under Construction", "This feature is not available yet.");
  };
 

  const toggleSidebar = () => {
    setSidebarVisible((prevVisible) => !prevVisible);
  };

  return (
    <>
      <FooterBar>
        <FooterItem onPress={toggleSidebar}>
          <Icon name="create-outline" size={30} color="#000000" />
        </FooterItem>
        <FooterItem onPress={showPlaceholderAlert}>
          <Icon name="person-outline" size={30} color="#000000" />
        </FooterItem>
        <FooterItem onPress={showPlaceholderAlert}>
          <Icon name="chatbubbles-outline" size={30} color="#000000" />
        </FooterItem>
      </FooterBar>

      <Sidebar
        isVisible={sidebarVisible}
        onClose={() => setSidebarVisible(false)}
      />
    </>
  );
};
