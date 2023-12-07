import React, { useState, useEffect, useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { LayoutProvider } from "./components/LayoutContext";
import AppNavigator from "./navigator";
import QuickAcessButton from './QuickAcessButton';
import themeContext from "./components/themeContext";
import theme from "./components/theme";
import { EventRegister } from "react-native-event-listeners";
import { NavigationContainer, DarkTheme, DefaultTheme } from "@react-navigation/native";



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
    <LayoutProvider>
    <StatusBar style="auto" />
    <themeContext.Provider value={mode === true ? theme.dark : theme.light}>
      <NavigationContainer theme = {mode === true ? DarkTheme : DefaultTheme}>
      <QuickAcessButton>
         <AppNavigator />
      </QuickAcessButton>
   </NavigationContainer>
    </themeContext.Provider>
    </LayoutProvider>
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

