import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView,
  TouchableOpacity, Image} from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../lib/firebase';


const Login= ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if(user){
        navigation.navigate('Landing');
      }
    });

    return unsubscribe;
  }, [navigation]);


  const handleLogin = async() => {
    try{
      console.log('Attempting login with:', email, password);
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Login successful for', email);
      navigation.navigate('Landing');
    } catch (error) {
      console.error('Login failed:', error.code, error.message);
    }
  };

  const handleRegistrationUser = () => {
    navigation.navigate('RegisterUser');
  };
  
  return(
    <KeyboardAvoidingView
    style={styles.container}
    behavior="padding"
    >
      <View style={styles.container}>
      <Image source={require('../images/AppLogo.png')} style={styles.logo} />
        <Text>Login</Text>
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
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleLogin}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleRegistrationUser}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>RegisterUser</Text>
          </View>
        </TouchableOpacity>
    </View>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
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
// Styles remain the same
 