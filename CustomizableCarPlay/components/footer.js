import React, { useState, useContext } from "react";

import styled from "styled-components/native";
import Icon from "react-native-vector-icons/Ionicons";
import { Alert } from "react-native";
import Sidebar from "./customSideBar";
import LayoutContext from "./LayoutContext";
import { useNavigation } from "@react-navigation/native";


const FooterBar = styled.View`
  flex-direction: row;
  justify-content: space-around;
  padding: 10px;
  background-color: #ffffff;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const FooterItem = styled.TouchableOpacity`
  align-items: center;
`;

export const Footer = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const { footerColor } = useContext(LayoutContext);
  const navigation = useNavigation();



  const showPlaceholderAlert = () => {
    Alert.alert("Under Construction", "This feature is not available yet.");
  };

  const toggleSidebar = () => {
    setSidebarVisible((prevVisible) => !prevVisible);
  };
  const toggleProfilePage = () => {
    navigation.navigate("Profile");
  };

  return (
    <>
      <FooterBar style={{ backgroundColor: footerColor }}>
        <FooterItem onPress={toggleSidebar}>
          <Icon name="create-outline" size={30} color="#000000" />
        </FooterItem>
        <FooterItem onPress={toggleProfilePage}>
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
