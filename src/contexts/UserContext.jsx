import React, { useState } from 'react';
import { createContext } from 'react';

export const AuthContxt = createContext();

const UserContext = ({ children }) => {
    const [user, setUser] = useState(null);

    const authInfo = { name: "Rony" }

    return (
        <AuthContxt.Provider value={authInfo}>
            {children}
        </AuthContxt.Provider>
    )
}

export default UserContext;
