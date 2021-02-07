import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyD0roEUY6Hs0rU-PXcjDsaSle_H6xcT4t0",
  authDomain: "login-3d919.firebaseapp.com",
  projectId: "login-3d919",
  storageBucket: "login-3d919.appspot.com",
  messagingSenderId: "1041311497709",
  appId: "1:1041311497709:web:6d8865643597cfe2023be4",
};
// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;
