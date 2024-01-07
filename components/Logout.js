import React from "react";
import firebase from "../src/firebase";
import 'firebase/auth'

const Logout = () => {
    const handleLogout = async () => {
        try {
            await firebase.auth().signOut()
        }
        catch (error) {
            console.error("Error signing out", error.message)
        }
    }

    return (
        <div>
          <h2>Logout</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Logout