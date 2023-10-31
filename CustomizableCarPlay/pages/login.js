import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, KeyboardAvoidingView } from 'react-native';
import{AuthContext} from '../navigation/AuthProvider';
import FormButton from './FormButton';

const LoginScreen = ({navigation}) => {
  const [email,setEmail] = useState('');
  const[password, setPassword] = useState('');
  const{login}= useContext(AuthContext);


  return(
    <KeyboardAvoidingView
      style={styles.container}
        behavior="padding"
        >
         <Text>Login Screen</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
       
      <FormButton
        buttonTitle="Log in"
        onPress{() => login(email,password)}
      />
      </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    margin: 10,
  },
});

export default LoginScreen;