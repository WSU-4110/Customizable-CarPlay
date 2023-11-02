import { collection, addDoc, getFirestore } from "firebase/firestore"; 
import db from "../lib/firebase";
import {app} from "../lib/firebase";

export const testuser= async()=> {
  const db= getFirestore(app);
  
  try {
  const docRef = await addDoc(collection(db, "users"), 
  {
    first: "Ada",
    last: "Lovelace",
    born: 1815,
  });
  console.log("Document written with ID: ", docRef.id);
  }catch (e) {
  console.error("Error adding document: ", e);
  }
};