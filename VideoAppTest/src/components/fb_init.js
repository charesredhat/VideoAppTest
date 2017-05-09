import React from 'react';
import * as firebase from 'firebase';


const config = {  
   apiKey: "AIzaSyCcEXyUbMbXc55uA8UAK-O1-7j9JcknROo",
    authDomain: "movedbtest.firebaseapp.com",
    databaseURL: "https://movedbtest.firebaseio.com",
    projectId: "movedbtest",
    storageBucket: "movedbtest.appspot.com",
    messagingSenderId: "1064503929224"
};


const fbdatabase = firebase  
  .initializeApp(config)
  

  
  
  export default firebase;