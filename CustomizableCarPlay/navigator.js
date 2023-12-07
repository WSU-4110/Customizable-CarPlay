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
import App from "./src/App";

const Stack = createStackNavigator() 



function AppNavigator() {
  return (
   
      <Stack.Navigator initialRouteName="Register">
        <Stack.Screen name="RegisterUser" component={RegisterUser} />
        <Stack.Screen name="RegisterVehicle" component={RegisterVehicle} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="App" component={App} />
      </Stack.Navigator>
      
  );
}
export default AppNavigator;
