import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Landing from "./pages/landing";
import Login from "./pages/login";
import RegisterUser from "./pages/registeruser";
import RegisterVehicle from "./pages/registervehicle";
import Home from "./pages/home";

const Stack = createStackNavigator();

function AppNavigator() {
  return (
   
      <Stack.Navigator initialRouteName="Register">
        <Stack.Screen name="RegisterUser" component={RegisterUser} />
        <Stack.Screen name="RegisterVehicle" component={RegisterVehicle} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default AppNavigator;
