import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

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


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };

