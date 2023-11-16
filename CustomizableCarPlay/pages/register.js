import React, { useState } from 'react';
import VehicleInfo from './vehicleinfo';
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
  const [vehicles, setVehicles] = useState([]);
  const [carMake, setCarMake] = useState('');
  const [carModel, setCarModel] = useState('');
  const [carYear, setCarYear] = useState('');
  const [carState, setCarState] = useState('');
  const [carPlate, setCarPlate] = useState('');

  const [registrationStep, setRegistrationStep] = useState(1);
  const [userCompleted, setUserCompleted] = useState(false);
  const [vehicleCompleted, setVehicleCompleted] = useState(false);

  const handleUserRegistration = async () => {
    if (firstName && lastName && phoneNumber && email && password) {
    try {
      const auth = getAuth(app);
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      

      const usersCollection = collection(db, 'users'); // Replace 'users' with your Firestore collection name
      const userDoc = doc(usersCollection, user.uid);
      const userId = user.uid;

      const userData = {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        displayName: 'User Display Name', // Replace with actual user display name
        // Add more user-related data here
      };

      await setDoc(userDoc, userData);

      console.log('Registration successful for', user.email);
      setUserCompleted(true);

      setRegistrationStep(2);
    } catch (error) {
      console.error('Registration failed:', error);
      navigation.navigate('Register');
    }
  } else {
    console.error('Please fill out all user fields');
  }
  };

  const formatPhoneNumber = (value) => {
    const cleaned = value.replace(/\D/g, '');
    const formatted = `(${cleaned.substring(0, 3)}) ${cleaned.substring(3, 6)}-${cleaned.substring(6, 10)}`;
    return formatted;
  };

  const handlePhoneNumberChange = (value) => {
    setPhoneNumber(formatPhoneNumber(value));
  };

  const handleVehicleInfoSubmit =  async(userId, vehicleInfo)=> {
    if (carMake && carModel && carYear && carState && carPlate) {
    try{
      await addVehicleForCurrentUser(userId, vehicleInfo);

      setVehicles([...vehicles, vehicleInfo]);
      setVehicleCompleted(true);
      if (userCompleted && vehicleCompleted) {
        // Redirect to login page after successful registration
        navigation.navigate('Login');
      //navigation.navigate('Login');
      }
    }catch(error){
      console.error('Error adding vehicle information:', error);
    }
  } else {
    console.error('Please fill out all vehicle fields');
  }
  };

  const handleAddAnotherVehicle = () => {
    // Clear the vehicle information fields for the next vehicle
    setCarMake('');
    setCarModel('');
    setCarYear('');
    setCarState('');
    setCarPlate('');
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      {registrationStep === 1 ? (
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
            value={phoneNumber}
            onChangeText={handlePhoneNumberChange}
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
            <TouchableOpacity onPress={handleUserRegistration}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Next</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      ) : registrationStep === 2 ? (
        <VehicleInfo 
        carMake={carMake}
        setCarMake={setCarMake}
        carModel={carModel}
        setCarModel={setCarModel}
        carYear={carYear}
        setCarYear={setCarYear}
        carState={carState}
        setCarState={setCarState}
        carPlate={carPlate}
        setCarPlate={setCarPlate}

        onCarInfoSubmit={handleVehicleInfoSubmit}
        onAddAnotherVehicle={handleAddAnotherVehicle} 
        />
      ) : null}
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
 
