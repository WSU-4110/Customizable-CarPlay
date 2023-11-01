import { Animated, Text } from "react-native";
import React, { useRef, useEffect } from "react";
import styled from "styled-components/native";

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

const HorizontalLine = styled.View`
  height: 2px;
  background-color: white;
  width: 60%;
  margin-top: 10px;
`;

const Sidebar = ({ isVisible, onClose }) => {
  // Initialize the animated value
  // start off screen
  const slideAnim = useRef(new Animated.Value(-250)).current;

  useEffect(() => {
    if (isVisible) {
      // once button click or isVisible == true, start animation
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      // if !isVisible bring sidebar back
      Animated.timing(slideAnim, {
        toValue: -250,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  }, [isVisible]);

  return (
    <SidebarWrapper style={{ left: slideAnim }}>
      <CustomizeText>Customize</CustomizeText>
      <HorizontalLine />
    </SidebarWrapper>
  );
};

export default Sidebar;
