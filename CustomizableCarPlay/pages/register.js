import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
// Import the validation functions
import { isValidEmail, isValidPassword } from './validation'; // Adjust the import path if needed

function Register({navigation}) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  // Define error message states
  const [emptyFieldError, setEmptyFieldError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // State to track whether registration is completed
  const [registrationCompleted, setRegistrationCompleted] = useState(false);

  // Handle registration logic here
  const handleRegister = () => {
      // Reset error messages
      setEmptyFieldError('');
      setEmailError('');
      setPasswordError('');

      if (!firstName || !lastName || !email || !phoneNumber || !password) {
        // Handle empty fields
        setEmptyFieldError('All fields are required');
      } else if (!isValidEmail(email)) {
        // Handle invalid email format
        setEmailError('Invalid email format');
      } else if (!isValidPassword(password)) {
        // Handle invalid password format
        setPasswordError('Password must be at least 8 characters long');
      } else {
        // Proceed with registration
        // Clear any previous error messages if needed
        setEmptyFieldError('');
        setEmailError('');
        setPasswordError('');

        // Mark registration as completed
        setRegistrationCompleted(true);
      }
    };
    
    // Function to handle skipping registration
    const handleSkipRegistration = () => {
    navigation.navigate('Landing');
    };
    return (
      <View style={styles.container}>
        {registrationCompleted ? (
          // Render a different component or navigate to the next page
          <Text>Registration Completed</Text>
        ) : (
          // Registration form
          <>
            <Text>Registration</Text>
            <TextInput
              style={styles.input}
              placeholder="First Name"
              value={firstName}
              onChangeText={(text) => setFirstName(text)}
            />
            {emptyFieldError ? (
              <>
                <Text style={styles.errorText}>{emptyFieldError}</Text>
                <Text style={styles.errorText}>{invalidNameError}</Text>
              </>
            ) : null}
            <TextInput
              style={styles.input}
              placeholder="Last Name"
              value={lastName}
              onChangeText={text => setLastName(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={text => setEmail(text)}
              keyboardType="email-address"
            />
            {emailError ? <><Text style={styles.errorText}>{emailError}</Text><Text style={styles.errorText}>{invalidEmailError}</Text></> : null}

            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              value={phoneNumber}
              onChangeText={text => setPhoneNumber(text)}
              keyboardType="phone-pad"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              onChangeText={text => setPassword(text)}
              secureTextEntry
            />
            {passwordError ? <><Text style={styles.errorText}>{passwordError}</Text><Text style={styles.errorText}>{invalidPasswordError}</Text></> : null}

    
            {/* Other input fields and error messages go here */}
    
            <Button title="Register" onPress={handleRegister} />
            <Button title="Skip" onPress={handleSkipRegistration} />
            </>
          )}
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
      },
      input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        marginBottom: 12,
        padding: 8,
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
    
    export default Register;
