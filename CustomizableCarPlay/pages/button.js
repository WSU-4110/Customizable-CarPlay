import React, (useState) from "react";
import firebase from 'firebase';
import AppNavigator from "./navigator";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

class ButtonState{
  constructor(initialState){
    this.state= initialState;
  }
  changeState(newState){
      this.state= newState;
    }
  buttonNav(navigation){
    this.state.buttonNav(navigation);
  }
 }

 class Register{
  buttonNav(navigation)
  public void buttonAction(){
    console.log("Register");
    navigation.navigate('register')
  }
}

class Login{
  buttonNav(navigation)
  public void buttonAction(){
    console.log("Login");
    navigation.navigate('login')
  }
}

class Logout{
  buttonNav(navigation)
  public void buttonAction(){
    console.log("Logout");
    navigation.navigate('home')
  }
}
function Button({navigation}){
  const registerState= new Register();
  const loginState= new Login();
  const logoutState= new Logout();
  const [context, setContext]= useState(new ButtonState(registerState));

}

const handleButtonState= () =>{
  context.buttonNav(navigation);
};

const handleButtonChange= (newState) => {
  setContext(new ButtonState(newState));
};

return(
  <View>
    <Button title= "Register" onPress= {()handleButtonChange(registerState)}/>
    <Button title= "Login" onPress= {()handleButtonChange(loginState)}/>
    <Button title= "Logout" onPress= {()handleButtonChange(logoutState)}/>
    </View>
);
}

export default Button;