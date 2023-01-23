import React, { useState, useEffect } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
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

    // exist user login
    const existUserLogin = (email, password) => signInWithEmailAndPassword(auth, email, password)

    //user log out
    const logOut = () => signOut(auth)

    const authInfo = { user, setUser, createUser, existUserLogin, logOut }

    return (
        <AuthContxt.Provider value={authInfo}>
            {children}
        </AuthContxt.Provider>
    )
}

export default UserContext;
