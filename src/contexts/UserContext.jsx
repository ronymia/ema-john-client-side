import React, { useState, useEffect } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContxt = createContext();

const auth = getAuth(app);

const UserContext = ({ children }) => {
    const [user, setUser] = useState(null);

    // getting current user 
    useEffect(() => {
        const unSubscrip = onAuthStateChanged(auth, currentUser => setUser(currentUser))

        //clean up
        return () => unSubscrip();
    }, []);

    // new user create
    const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password)

    const authInfo = { user, setUser, createUser }

    return (
        <AuthContxt.Provider value={authInfo}>
            {children}
        </AuthContxt.Provider>
    )
}

export default UserContext;
