 // Import the functions you need from the SDKs you need
 import { initializeApp } from "firebase/app";
 import { getAnalytics } from "firebase/analytics";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries
 
 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyD8EcjDU02qujNskZgbZCqAkMs7maffDcw",
   authDomain: "chatbuddy-ef3bc.firebaseapp.com",
   databaseURL: "https://chatbuddy-ef3bc-default-rtdb.asia-southeast1.firebasedatabase.app",
   projectId: "chatbuddy-ef3bc",
   storageBucket: "chatbuddy-ef3bc.appspot.com",
   messagingSenderId: "802946500686",
   appId: "1:802946500686:web:4cb7ab826bbe09d40adb1f",
   measurementId: "G-NVYFG6G4XT"
 };
 
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAnalytics = getAnalytics(firebaseApp);

export { firebaseApp, firebaseAnalytics };
