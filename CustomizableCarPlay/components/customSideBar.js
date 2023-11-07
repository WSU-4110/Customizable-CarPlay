import { Animated, Text } from "react-native";
import React, { useRef, useEffect, useContext } from "react";
import styled from "styled-components/native";
import LayoutContext from "./LayoutContext";

const SidebarWrapper = styled(Animated.View)`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 52px;
  width: 250px;
  background-color: black;
  align-items: center;

  shadow-color: gray;
  shadow-offset: 5px -5px;
  shadow-opacity: 0.8;
  shadow-radius: 5px;

  elevation: 10;
`;

const CustomizeText = styled.Text`
  font-size: 24px;
  color: white;
  align-items: center;
  padding-top: 20px;
  font-style: italic;
  font-family: System;
`;

const SidebarButton = styled.TouchableOpacity`
  margin-top: 20px;
  padding: 10px;
  border-radius: 5px;
  background-color: #333;
`;

const SidebarButtonText = styled.Text`
  color: white;
  font-size: 18px;
`;

const HorizontalLine = styled.View`
  height: 2px;
  background-color: white;
  width: 60%;
  margin-top: 10px;
`;

const Sidebar = ({ isVisible, onClose }) => {
  const { toggleLayout } = useContext(LayoutContext);
  const slideAnim = useRef(new Animated.Value(-250)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: isVisible ? 0 : -250,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [isVisible]);

  const handleBackgroundSwap = () => {
    toggleLayout();
    onClose();
  };

  return (
    <SidebarWrapper style={{ left: slideAnim }}>
      <CustomizeText>Customize</CustomizeText>
      <HorizontalLine />
      <SidebarButton onPress={handleBackgroundSwap}>
        <SidebarButtonText>Swap Background</SidebarButtonText>
      </SidebarButton>
    </SidebarWrapper>
  );
};

export default Sidebar;
