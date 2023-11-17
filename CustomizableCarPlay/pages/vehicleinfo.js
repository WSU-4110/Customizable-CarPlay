import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const VehicleInfo = ({ onVehicleInfoSubmit, onAddAnotherVehicle }) => {
  const [vehicleMake, setVehicleMake] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const [vehicleYear, setVehicleYear] = useState('');
  const [vehicleState, setVehicleState] = useState('');
  const [vehiclePlate, setVehiclePlate] = useState('');

  const handleVehicleInfoSubmit = () => {
    const vehicleInfo = {
      make: vehicleMake,
      model: vehicleModel,
      year: vehicleYear,
      stateRegistered: vehicleState,
      plateNumber: vehiclePlate,
    };

    onVehicleInfoSubmit(vehicleInfo);
  };

  const handleAddVehicle = () => {
    const vehicleInfo = {
      make: vehicleMake,
      model: vehicleModel,
      year: vehicleYear,
      stateRegistered: vehicleState,
      plateNumber: vehiclePlate,
    };

    onAddAnotherVehicle(vehicleInfo);

    setVehicleMake('');
    setVehicleModel('');
    setVehicleYear('');
    setVehicleState('');
    setVehiclePlate('');
  };

  return (
    <View style={styles.container}>
      <Text>Vehicle Information</Text>
      <TextInput
        placeholder="Vehicle Make"
        value={vehicleMake}
        onChangeText={setVehicleMake}
        style={styles.input}
      />
      <TextInput
        placeholder="Vehicle Model"
        value={vehicleModel}
        onChangeText={setVehicleModel}
        style={styles.input}
      />
      <TextInput
        placeholder="Vehicle Year"
        value={vehicleYear}
        onChangeText={setVehicleYear}
        keyboardType="numeric"
        style={styles.input}
      />
      <Picker
        selectedValue={vehicleState}
        style={styles.input}
        onValueChange={(itemValue) => setVehicleState(itemValue)}
      >
        <Picker.Item label="Select State" value="" />
        <Picker.Item label="AL" value="AL" />
        <Picker.Item label="AK" value="AK" />
        <Picker.Item label="AZ" value="AZ" />
        <Picker.Item label="AR" value="AR" />
        <Picker.Item label="CA" value="CA" />
        <Picker.Item label="CO" value="CO" />
        <Picker.Item label="CT" value="CT" />
        <Picker.Item label="DE" value="DE" />
        <Picker.Item label="FL" value="FL" />
        <Picker.Item label="GA" value="GA" />
        <Picker.Item label="HI" value="HI" />
        <Picker.Item label="ID" value="ID" />
        <Picker.Item label="IL" value="IL" />
        <Picker.Item label="IN" value="IN" />
        <Picker.Item label="IA" value="IA" />
        <Picker.Item label="KS" value="KS" />
        <Picker.Item label="KY" value="KY" />
        <Picker.Item label="LA" value="LA" />
        <Picker.Item label="ME" value="ME" />
        <Picker.Item label="MD" value="MD" />
        <Picker.Item label="MA" value="MA" />
        <Picker.Item label="MI" value="MI" />
        <Picker.Item label="MN" value="MN" />
        <Picker.Item label="MS" value="MS" />
        <Picker.Item label="MO" value="MO" />
        <Picker.Item label="MT" value="MT" />
        <Picker.Item label="NE" value="NE" />
        <Picker.Item label="NV" value="NV" />
        <Picker.Item label="NH" value="NH" />
        <Picker.Item label="NJ" value="NJ" />
        <Picker.Item label="NM" value="NM" />
        <Picker.Item label="NY" value="NY" />
        <Picker.Item label="NC" value="NC" />
        <Picker.Item label="ND" value="ND" />
        <Picker.Item label="OH" value="OH" />
        <Picker.Item label="OK" value="OK" />
        <Picker.Item label="OR" value="OR" />
        <Picker.Item label="PA" value="PA" />
        <Picker.Item label="RI" value="RI" />
        <Picker.Item label="SC" value="SC" />
        <Picker.Item label="SD" value="SD" />
        <Picker.Item label="TN" value="TN" />
        <Picker.Item label="TX" value="TX" />
        <Picker.Item label="UT" value="UT" />
        <Picker.Item label="VT" value="VT" />
        <Picker.Item label="VA" value="VA" />
        <Picker.Item label="WA" value="WA" />
        <Picker.Item label="WV" value="WV" />
        <Picker.Item label="WI" value="WI" />
        <Picker.Item label="AL" value="AL" />
        <Picker.Item label="WY" value="WY" />
        </Picker>
      <TextInput
        placeholder="Vehicle Plate"
        value={vehiclePlate}
        onChangeText={setVehiclePlate}
        keyboardType="numeric"
        style={styles.input}
      />
      <TouchableOpacity onPress={handleVehicleInfoSubmit}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Submit Vehicle Info</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleAddVehicle}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Add Another Vehicle</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default VehicleInfo;

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
    height: 30,
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
 