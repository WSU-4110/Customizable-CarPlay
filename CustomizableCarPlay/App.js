import React from "react";
import{ NavigationContainer} from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import firebase from 'firebase';
import AppNavigator from "./navigator";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

firebase.initializeApp(firebaseConfig);

export default function App() {
  return 
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen options={ headerShown:false}} name="Login" component={login}/>
      <Stack.Screen options={ headerShown:false}} name="Register" component={register}/>
      <Stack.Screen options={ headerShown:false}} name="Landing" component={landing}/>
      <Stack.Screen options={ headerShown:false}} name="Home" component={home}/>
      </Stack.Navigator>
      </NavigationContainer>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
