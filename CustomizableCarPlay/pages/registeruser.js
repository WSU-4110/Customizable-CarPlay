import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, KeyboardAvoidingView,
  TouchableOpacity, ScrollView, Image } from 'react-native';
//import styled from "styled-components/native";
import { doc, setDoc } from 'firebase/firestore';
import { collection } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app, db } from '../lib/firebase';
import { useNavigation } from '@react-navigation/native';

const RegisterUser = ({navigation, route}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleRegistrationUser = async () => {
    try {
      const auth = getAuth(app);
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      //const {userId} = route.params;

      const usersCollection = collection(db, 'users'); // Replace 'users' with your Firestore collection name
      const userDoc = doc(usersCollection, userCredential.user.uid );

      const userData = {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        displayName: email,
      };

      await setDoc(userDoc, userData);

      console.log('User data added successfully');

      navigation.navigate('RegisterVehicle', { userId: userCredential.user.uid, email, password, } );

      //console.log('Email:', email);
      //console.log('Password:', password);
      //navigation.navigate('RegisterVehicle', { userId: "userid", email: email, } );

    } catch (error) {
      console.error('User registration failed:', error);
      navigation.navigate('RegisterUser');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <KeyboardAvoidingView style={styles.innerContainer} behavior="padding">
          <Image source={require('../images/AppLogo.png')} style={styles.logo} />
          <Text>RegisterUser</Text>
          <TextInput
          placeholder="First Name"
          value={firstName}
          onChangeText={setFirstName}
          style={styles.input}
        />
        <TextInput
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
        style={styles.input}
      />
      <TextInput
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
      />

      <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleRegistrationUser}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>RegisterUser</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  </View>
  );
};

export default RegisterUser;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 16,
  },
  scrollView:{
    flex: 1,
    width: '100%',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //paddingBottom: 20,
  },
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  input: {
    height: 48,
    width: 300, // Adjust the width as needed
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: 'white',
    marginVertical: 10,
    padding: 10,
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  button: {
    width: 200, // Adjust the width as needed
    height: 48,
    borderRadius: 5,
    backgroundColor: '#007AFF', // Button background color
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logo: {
    width: 200, // Set the width of your logo
    height: 200, // Set the height of your logo
    resizeMode: 'contain', // Adjust the resize mode as needed
    marginBottom: 20, // Adjust the margin as needed
  },
  // Error message style
  errorText: {
    color: 'red', // Set the text color to red
    fontSize: 14,   // Define the font size
    marginBottom: 8,
    fontWeight: 'bold',
    textAlign: 'center',
    // You can add more styles as needed (e.g., textAlign, fontWeight, etc.)
  },
});
