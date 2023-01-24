import React, { useContext } from 'react';
import { AuthContxt } from '../../contexts/UserContext';

const SocialLogin = () => {
    const { signInWithGoogle, setUser } = useContext(AuthContxt);

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                setUser(user);
            })
            .catch(error => console.error(error.errorMessage));
    }


    return (
        <div>
            <div className="login-divider">
                <hr className="first-divider" />
                <span>or</span>
                <hr className="third-divider" />
            </div>
            <button type="button"
                className="btn google-btn"
                onClick={handleGoogleSignIn}
            >
                Continue with Google
            </button>
        </div>
    )
}

export default SocialLogin;
