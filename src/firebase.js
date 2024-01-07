// src/firebase.js
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDx1MPgvFGc_DQqKzn_2BU9gaEyd2l-STs",
  authDomain: "task-manager-f6000.firebaseapp.com",
  databaseURL: "https://task-manager-f6000-default-rtdb.firebaseio.com",
  projectId: "task-manager-f6000",
  storageBucket: "task-manager-f6000.appspot.com",
  messagingSenderId: "506917379169",
  appId: "1:506917379169:web:f6ed978dfcf3cd4e475e20",
  measurementId: "G-7HV2JNZ9CZ",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
