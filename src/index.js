import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app';
import 'firebase/auth'

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

firebase.initializeApp(firebaseConfig)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
