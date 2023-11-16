import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
//import { db } from './firebase';

/*
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};
*/
const firebaseConfig = {
  apiKey: "AIzaSyC0S35P0uuC8BX-WvZH_HJTXBYHfhBAhgM",
  authDomain: "customizable-carplay-ef401.firebaseapp.com",
  projectId: "customizable-carplay-ef401",
  storageBucket: "customizable-carplay-ef401.appspot.com",
  messagingSenderId: "17748607274",
  appId: "1:17748607274:web:1c55289dd428b8ed069e53"
};

const addVehicleForCurrentUser = async (userId, vehicleData) => {
  try {
    // Reference to the 'vehicles' collection for the current user
    const userVehiclesRef = collection(firestoreDB, 'users', userId, 'vehicles');

    // Add the vehicle data to the 'vehicles' collection
    await addDoc(userVehiclesRef, vehicleData);

    console.log('Vehicle information added for the current user.');
  } catch (error) {
    console.error('Error adding vehicle information:', error);
  }
};


const app = initializeApp(firebaseConfig);
//const auth = getAuth(app);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
const firestoreDB = getFirestore(app);

export { app, auth, firestoreDB as db, addVehicleForCurrentUser };

