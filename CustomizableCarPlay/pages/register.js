import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, KeyboardAvoidingView,
  TouchableOpacity } from 'react-native';
//import styled from "styled-components/native";
import { doc, setDoc } from 'firebase/firestore';
import { collection } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app, db } from '../lib/firebase';

const Register = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const formatPhoneNumber = (input) => {
    // Regular expression to format the phone number as (111) 222-3333
    const cleaned = ('' + input).replace(/\D/g, '');
    const tenDigits = cleaned.slice(0, 10);
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return tenDigits;
  };

  const validateEmail = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };

  const validatePassword = (input) => {
    // Regex to validate strong password: minimum 6 characters with an uppercase, lowercase, number, and special character
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    return passwordRegex.test(input);
  };

  const handleRegistration = async () => {
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    if (!isEmailValid) {
      console.error('Invalid email format. Proper format: test@email.com');
      // Handle invalid email case
      return;
    }
    if (!isPasswordValid) {
      console.error('Invalid password format. Password requires at least one lowercase, one uppercase, one number, one special character, and at least 6 characters long. ');
      // Handle invalid password case
      return;
    }
  
    try {
      const auth = getAuth(app);
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const usersCollection = collection(db, 'users'); // Replace 'users' with your Firestore collection name
      const userDoc = doc(usersCollection, user.uid);

      const userData = {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        displayName: 'User Display Name', // Replace with actual user display name
        // Add more user-related data here
      };

      await setDoc(userDoc, userData);

      console.log('Registration successful for', user.email);
      navigation.navigate('VehicleInfo');
    } catch (error) {
      console.error('Registration failed:', error);
      navigation.navigate('Register');
    }
  };

  const isEmailValid = validateEmail(email);
  const isPasswordValid = validatePassword(password);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
    <View style={styles.container}>
      <Text>Register</Text>
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
        value={formatPhoneNumber(phoneNumber)}
        onChangeText={(input) => setPhoneNumber(formatPhoneNumber(input))}
        keyboardType="phone-pad"
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={[
          styles.input,
          !isEmailValid && {borderColor: 'red'}
        ]}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        style={[
          styles.input,
          !isPasswordValid && {borderColor: 'red'}
        ]}
        secureTextEntry
      />
    </View>

    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={handleRegistration}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Register</Text>
        </View>
      </TouchableOpacity>
    </View>
  </KeyboardAvoidingView>
  );
}

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    //padding: 16,
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
    marginTop: -20,
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
// Styles remain the same
 
