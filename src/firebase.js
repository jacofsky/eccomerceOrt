// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDV11nRGJi35bJO_MwOyE59MmKsmlfcibY",
  authDomain: "sneakers-51afe.firebaseapp.com",
  projectId: "sneakers-51afe",
  storageBucket: "sneakers-51afe.appspot.com",
  messagingSenderId: "174063913472",
  appId: "1:174063913472:web:f832c01fe6d4f6e623e6e5",
  measurementId: "${config.measurementId}"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)