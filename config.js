import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDOcQ5AyRrp4-5eAR2FIqwFpeFp5OWzGic",
    authDomain: "somya-sky-nest.firebaseapp.com",
    databaseURL: "https://somya-sky-nest.firebaseio.com",
    projectId: "somya-sky-nest",
    storageBucket: "somya-sky-nest.appspot.com",
    messagingSenderId: "575592551140",
    appId: "1:575592551140:web:1468f2e8abd12f5eddd2f1",
    measurementId: "G-R2JLFV727X"
  };
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
