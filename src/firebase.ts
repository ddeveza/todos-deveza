// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyAnhnTRPDsW2hBgmIy3ZRo6kXC__1RNSpU",
  authDomain: "todo-list-deveza-b5684.firebaseapp.com",
  projectId: "todo-list-deveza-b5684",
  storageBucket: "todo-list-deveza-b5684.appspot.com",
  messagingSenderId: "1078731420347",
  appId: "1:1078731420347:web:eea0ee626bd5ba6cd1af9e",
  measurementId: "G-PJPP8W78VS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = initializeFirestore(app, { ignoreUndefinedProperties: true });
