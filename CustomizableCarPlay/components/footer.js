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
      <FooterBar testID="footer-bar">
        <FooterItem onPress={toggleSidebar} testID="custom-sidebar1">
          <Icon name="create-outline" size={30} color="#000000" />
        </FooterItem>
        <FooterItem onPress={showPlaceholderAlert} testID="sidebar-toggle">
          <Icon name="person-outline" size={30} color="#000000" />
        </FooterItem>
        <FooterItem onPress={showPlaceholderAlert} testID="footer-item">
          <Icon name="chatbubbles-outline" size={30} color="#000000" />
        </FooterItem>
      </FooterBar>

      <Sidebar
        testID="custom-sidebar"
        isVisible={sidebarVisible}
        onClose={() => setSidebarVisible(false)}
      />
    </>
  );
};
