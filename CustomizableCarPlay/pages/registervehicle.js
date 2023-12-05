import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView, ScrollView,Image } from 'react-native';
import { collection, doc, setDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { getAuth } from 'firebase/auth';
import { app } from '../lib/firebase'; 
//import { async } from '@firebase/util';



const RegisterVehicle = ({ route }) => {
  const { userId } = route.params; // Get the user ID passed from the previous screen
  const [vehicles, setVehicles] = useState([
    { make: '', model: '', plateNumber: '' } // Initial empty vehicle
  ]);
  const navigation = useNavigation();

  const addVehicle = () => {
    setVehicles([...vehicles, { make: '', model: '', plateNumber: '' }]);
  };

  const removeVehicle = (index) => {
    const updatedVehicles = [...vehicles];
    updatedVehicles.splice(index, 1);
    setVehicles(updatedVehicles);
  };

  const handleRegisterVehicle = async() => {
    try {
      const usersCollection = collection(db, 'users');
      const userDoc = doc(usersCollection, userId);

      const vehiclesData = vehicles.map((vehicle) => ({
        make: vehicle.make,
        model: vehicle.model,
        plateNumber: vehicle.plateNumber,
      }));

      await setDoc(userDoc, { vehicles: vehiclesData }, { merge: true });

      console.log('Vehicles registered successfully!');
      const auth = getAuth(app);
      await signInWithEmailAndPassword(auth, email, password);
      navigation.navigate('Login'); // Navigate to the login screen after vehicle registration
    } catch (error) {
      console.error('Vehicle registration failed:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../images/AppLogo.png')} style={styles.logo} />
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <KeyboardAvoidingView
        style={styles.innerContainer}
        behavior="padding"
      ><Text>Vehicle Registration</Text>
      
        {vehicles.map((vehicle, index) => (
          <View key={index} style={styles.vehicleContainer}>
            <TextInput
              placeholder="Make"
              value={vehicle.make}
              onChangeText={(text) => {
                const updatedVehicles = [...vehicles];
                updatedVehicles[index].make = text;
                setVehicles(updatedVehicles);
              }}
              style={styles.input}
            />
            <TextInput
              placeholder="Model"
              value={vehicle.model}
              onChangeText={(text) => {
                const updatedVehicles = [...vehicles];
                updatedVehicles[index].model = text;
                setVehicles(updatedVehicles);
              }}
              style={styles.input}
            />
            <TextInput
              placeholder="Plate Number"
              value={vehicle.plateNumber}
              onChangeText={(text) => {
                const updatedVehicles = [...vehicles];
                updatedVehicles[index].plateNumber = text;
                setVehicles(updatedVehicles);
              }}
              style={styles.input}
            />
            {vehicles.length > 1 && (
              <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={() => removeVehicle(index)}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Remove Vehicle</Text>
                </View>
              </TouchableOpacity>
              </View>
            )}
          </View>
        ))}
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={addVehicle}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Add Vehicle</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleRegisterVehicle}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Register Vehicle</Text>
            </View>
          </TouchableOpacity>
        </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};
  
export default RegisterVehicle;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
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
