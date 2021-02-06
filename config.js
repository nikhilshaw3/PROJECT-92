import firebase from 'firebase';
require('@firebase/firestore')

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyB-MYAiUHwuveAvgz3pjqEOItm45fk9rMA",
    authDomain: "exercise---guide---app.firebaseapp.com",
    projectId: "exercise---guide---app",
    storageBucket: "exercise---guide---app.appspot.com",
    messagingSenderId: "901824169542",
    appId: "1:901824169542:web:13263aa23f6edd882fec47",
    measurementId: "G-C5DQ4L2ZVY"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();