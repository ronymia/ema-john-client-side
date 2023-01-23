import React, { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContxt = createContext();

const auth = getAuth(app);

const UserContext = ({ children }) => {
    const [user, setUser] = useState(null);
    console.log(user)

    const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password)

    const authInfo = { user, setUser, createUser }

    return (
        <AuthContxt.Provider value={authInfo}>
            {children}
        </AuthContxt.Provider>
    )
}

export default UserContext;
