
import React, {useState, useEffect, useContext} from "react";
import AppNavigator from "./navigator";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
//import { EventRegister } from "react-native-event-listeners";
import themeContext  from "./components/themeContext";
import theme from "./components/theme";
import { EventRegister }  from "react-native-event-listeners";
import { NavigationContainer, DarkTheme, DefaultTheme } from "@react-navigation/native";
//import { DefaultTheme } from "styled-components";


export default function App() {
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
  
   return(
    <themeContext.Provider value={mode === true ? theme.dark : theme.light}>
      <NavigationContainer theme = {mode === true ? DarkTheme : DefaultTheme}>
         <AppNavigator />
   </NavigationContainer>
    </themeContext.Provider>
    );
 

  
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

