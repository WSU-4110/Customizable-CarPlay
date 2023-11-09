import React, {useContext, useState} from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, Switch, Button } from "react-native";
import { StyledButton, StyledButtonText } from "../StyledComponents";
import { useNavigation } from "@react-navigation/native";
import {EventRegister}  from "react-native-event-listeners";
import themeContext from "../components/themeContext";



export default function Landing() {
  

  
   const theme = useContext(themeContext); 
   const [mode, setMode] = useState(false);

  const navigation = useNavigation();
 

  const navigateToHome = () => {
    navigation.navigate("Home");

  };





  return (
    <View style={[styles.container, { backgroundColor: theme.background}]}>
      <Text style={[styles.text, {color: theme.color }]}>Landing page - Customized Car Play</Text>
      <StyledButton onPress={navigateToHome}>
        <StyledButtonText>Start</StyledButtonText>
      </StyledButton>
      
      <StatusBar style="auto" />
      <Switch value = {mode} 
      onValueChange = {(value) => {
      setMode(value);
      EventRegister.emit("changeTheme",value );
      }} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 20,
  },
  button :{
    paddingTop: 20,
  },
})
