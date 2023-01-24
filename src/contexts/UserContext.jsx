import React, { useState, useEffect } from 'react';
import { createContext } from 'react';
import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut
} from 'firebase/auth';
import app from '../firebase/firebase.config';


// create Auth context 
export const AuthContxt = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleAuth = new GoogleAuthProvider;

    // new user create
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // exist user login
    const existUserLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    //sign in with google 
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleAuth);
    }

    //user log out
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }


    // getting current user 
    useEffect(() => {
        const unSubscrip = onAuthStateChanged(auth, currentUser => {
            console.log('current User inside state change', currentUser);
            setUser(currentUser);
            setLoading(false);
        })

        //clean up
        return () => unSubscrip();
    }, []);

    const authInfo = { user, setUser, loading, createUser, existUserLogin, signInWithGoogle, logOut };

    return (
        <AuthContxt.Provider value={authInfo}>
            {children}
        </AuthContxt.Provider>
    )
}

export default UserContext;
