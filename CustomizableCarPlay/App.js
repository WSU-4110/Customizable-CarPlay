import React, { Component } from "react";
import AppNavigator from "./navigator";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { AlanView } from '@alan-ai/alan-sdk-react-native';
import { initializeAlanEmitter, terminateAlanEmitter } from './components/AlanEmitter'; // Assuming AlanEmitter is in the components folder


//firebase.initializeApp(firebaseConfig);
export default class App extends Component {
  componentDidMount() {
      initializeAlanEmitter();
  }

  componentWillUnmount() {
      terminateAlanEmitter();
  }

  render() {
      return (
          <View style={styles.container}>
              <AppNavigator />
              <AlanView projectid={'1779461c5737aa4b5952c0d4449c96802e956eca572e1d8b807a3e2338fdd0dc/stage'} />
              <StatusBar style="auto" />
          </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
  },
});