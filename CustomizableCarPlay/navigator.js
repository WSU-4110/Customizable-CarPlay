import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Landing from "./pages/landing";
import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home";
import VehicleInfo from "./pages/vehicleinfo";

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
      <Stack.Screen options={{headerShown: false}}name="Login" component={Login} />
        <Stack.Screen options={{headerShown: false}}name="Register" component={Register} />
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="VehicleInfo" component={VehicleInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
