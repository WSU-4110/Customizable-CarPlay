import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ThemeProvider } from './util/ThemeManager'
import Landing from "./pages/landing";
import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home";
import { Buttton } from "react-native";

const ToggleButton = () => {
   return(
    <Button
      title="Toggle"
      onPress={() => { }}
    />
   )
};
const Stack = createStackNavigator(
  
  {

defaultNavigationOptions: {
   headerRight: <ToggleButton />
 }
}

);

// const Navigation = createAppContainer(App);

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Register">
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () =>(
  <ThemeProvider>
    <AppNavigator />
  </ThemeProvider>
); 


