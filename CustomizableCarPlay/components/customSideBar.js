import { Animated, Text } from "react-native";
import React, { useRef, useEffect, useContext } from "react";
import styled from "styled-components/native";
import LayoutContext from "./LayoutContext";
import { Picker } from "@react-native-picker/picker";

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
  const { layout, setLayout } = useContext(LayoutContext);
  const slideAnim = useRef(new Animated.Value(-250)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: isVisible ? 0 : -250,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [isVisible]);

  const handleBackgroundChange = (newLayout) => {
    setLayout(newLayout);
    onClose();
  };

  return (
    <SidebarWrapper style={{ left: slideAnim }}>
      <CustomizeText>Customize</CustomizeText>
      <HorizontalLine />
      <Picker
        selectedValue={layout}
        onValueChange={(itemValue, itemIndex) =>
          handleBackgroundChange(itemValue)
        }
        style={{
          width: 200,
          height: 40,
          backgroundColor: "#333333",
          color: "white",
        }}
      >
        <Picker.Item label="Default" value="Default" />
        <Picker.Item label="Abstract" value="layoutOne" />
        <Picker.Item label="Pacman" value="layoutTwo" />
        <Picker.Item label="WSU" value="layoutThree" />
      </Picker>
    </SidebarWrapper>
  );
};

export default Sidebar;
