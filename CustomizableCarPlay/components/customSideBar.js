import { Animated, Text, Switch } from "react-native";
import React, { useRef, useEffect, useContext, useState } from "react";
import styled from "styled-components/native";
import LayoutContext from "./LayoutContext";
import { Picker } from "@react-native-picker/picker";
import { Platform } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import {EventRegister}  from "react-native-event-listeners";
import themeContext from "../components/themeContext";

const SidebarWrapper = styled(Animated.View)`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 52px;
  width: 250px;
  background-color: black;
  align-items: center;
`;

const CustomizeText = styled.Text`
  font-size: 24px;
  color: white;
  align-items: center;
  padding-top: 20px;
  font-style: italic;
  font-family: System;
`;

const SidebarText = styled.Text`
  color: white;
  font-size: 12px;
  margin-top: 10px;
`;

const HorizontalLine = styled.View`
  height: 2px;
  background-color: white;
  width: 60%;
  margin-top: 10px;
  margin-bottom: 15px;
`;
const layoutPickerItems = [
  { label: "Default", value: "Default" },
  { label: "Abstract", value: "layoutOne" },
  { label: "Pacman", value: "layoutTwo" },
  { label: "WSU", value: "layoutThree" },
];

const footerColorPickerItems = [
  { label: "White", value: "#FFFFFF" },
  { label: "Orange", value: "#F28500" },
  { label: "Red", value: "#C21807" },
  { label: "Green", value: "#228B22" },
  { label: "Blue", value: "#007FFF" },
  { label: "Yellow", value: "#FFD800" },


];

const Sidebar = ({ isVisible, onClose }) => {
  const { layout, setLayout, footerColor, setFooterColor } =
    useContext(LayoutContext);
  const slideAnim = useRef(new Animated.Value(-250)).current;
  const theme = useContext(themeContext);
  const [mode, setMode] = useState(false);

  
  useEffect(() => {
    let eventListener = EventRegister.addEventListener(
      "changeTheme",
      (data) => {
         setMode(data);
         console.log(data);
    } 
    );
    return () => {
      EventRegister.removeEventListener(eventListener);
    };
  });


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

  const renderPicker = (selectedValue, onValueChange, items) => {
    if (Platform.OS === "ios") {
      return (
        <RNPickerSelect
          onValueChange={onValueChange}
          items={items}
          style={{
            inputIOS: {
              color: "white",
              paddingTop: 13,
              paddingHorizontal: 10,
              paddingBottom: 12,
              backgroundColor: "#333333",
              width: 240,
              marginTop: 4,
            },
          }}
        />
      );
    } else {
      return (
        <Picker
          selectedValue={selectedValue}
          onValueChange={onValueChange}
          style={{
            width: 200,
            height: 40,
            backgroundColor: "#333333",
            color: "white",
            marginTop: 10,
          }}
        >
          {items.map((item) => (
            <Picker.Item
              key={item.value}
              label={item.label}
              value={item.value}
            />
          ))}
        </Picker>
      );
    }
  };

  return (
    <SidebarWrapper style={{ left: slideAnim }}>
      <CustomizeText>Customize</CustomizeText>
      <HorizontalLine />
      <SidebarText>Choose Layout</SidebarText>
      {renderPicker(
        layout,
        (value) => handleBackgroundChange(value),
        layoutPickerItems
      )}
      <SidebarText>Choose FooterColor</SidebarText>
      {renderPicker(
        footerColor,
        (value) => setFooterColor(value),
        footerColorPickerItems
      )}
  <SidebarText>Dark Mode</SidebarText>
  <Switch value = {mode}  
  onValueChange = {(value) => {
  setMode(value);
  EventRegister.emit("changeTheme",value );
  footerColor,
        (value) => setFooterColor("#000000"),
        footerColorPickerItems
  }} />
    </SidebarWrapper>
  );
};

export default Sidebar;
