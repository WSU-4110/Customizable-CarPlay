import React, { Component } from "react";
import AppNavigator from "./navigator";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { AlanView } from '@alan-ai/alan-sdk-react-native';
import { NativeEventEmitter, NativeModules } from 'react-native';


const { AlanManager } = NativeModules;
//const { AlanManager, AlanEventEmitter } = NativeModules;
const alanEventEmitter = new NativeEventEmitter(AlanEventEmitter);
const subscription = alanEventEmitter.addListener('command', (data) => {
  console.log(`got command event ${JSON.stringify(data)}`);
});

export default class App extends Component {

  render() {
    /// Add Alan Button with project key from Alan AI Studio
    <AlanView projectid={'1779461c5737aa4b5952c0d4449c96802e956eca572e1d8b807a3e2338fdd0dc/stage'}/>
  }
  
  componentDidMount() {
    /// Handle commands from Alan AI Studio
    alanEventEmitter.addListener('onCommand', (data) => {
      console.log(`onCommand: ${JSON.stringify(data)}`);
    });
  }
  
  componentWillUnmount() {
    alanEventEmitter.removeAllListeners('onCommand');
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