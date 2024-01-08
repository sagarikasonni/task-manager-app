// import logo from './logo.svg';
import './App.css';
// import firebase from 'firebase/app';
import firebaseApp from './firebase';
// import * as firebase from './firebase';
import 'firebase/auth'
import SignUp from './components/signup';
import Login from './components/Login';
import Logout from './components/Logout';
import { useEffect, useState } from 'react';


const App = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    // const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
    //   setUser(authUser)
    // })
    const unsubscribe = firebaseApp.auth().onAuthStateChange((authUser) => {
      try {
        setUser(authUser)
      }
      catch (error) {
        console.error('Error while setting user', error)
      }
    })

    // try {
    //   setUser(authUser)
    // }
    // catch (error) {
    //   console.error("Error setting user", error)
    // }

    return () => unsubscribe()
  }, [])

  return (
    <div>
      <h1>Your Task Manager App</h1>
      {user ? (
        <>
          <p>Welcome, {user.email}!</p>
          <Logout />
        </>
      ) : (
        <>
          <SignUp />
          <Login />
        </>
      )}
    </div>
  );
}

export default App;
