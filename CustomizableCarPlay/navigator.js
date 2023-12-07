import React,{useContext} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Landing from "./pages/landing";
import Login from "./pages/login";
import RegisterUser from "./pages/registeruser";
import RegisterVehicle from "./pages/registervehicle";
import Home from "./pages/home";
import themeContext from "./components/themeContext";
import theme from "./components/theme";
import Profile from "./pages/profile";

const Stack = createStackNavigator() 



function AppNavigator() {
  return (
   
      <Stack.Navigator initialRouteName="Register">
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
      
  );
}
