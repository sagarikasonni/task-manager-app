import React, { useState } from 'react'
// import firebase  from '../src/firebase/app'
import firebase  from 'firebase/app'
import 'firebase/auth'

// needs to be upper case
const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSignUp = async (e) => {
        e.preventDefault()

        try {
            await firebase.auth().createUserWithEmailAndPassword(email, password)
        }
        catch (error) {
            console.error("Error signing up", error.message)
        }
    }

    return (
        <div>
          <h2>Sign Up</h2>
          <form onSubmit={handleSignUp}>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit">Sign Up</button>
          </form>
        </div>
      );
}

export default SignUp