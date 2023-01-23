import React, { useState } from 'react';
import { createContext } from 'react';

export const AuthContxt = createContext();

const UserContext = ({ children }) => {
    const [user, setUser] = useState(null);

    // const createUser = (email, password) =>

    const authInfo = { user }

    return (
        <AuthContxt.Provider value={authInfo}>
            {children}
        </AuthContxt.Provider>
    )
}

export default UserContext;
