import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../../components/SocialLogin/SocialLogin';
import { AuthContxt } from '../../contexts/UserContext';
import './SignUp.css';

function SignUp() {
    const navigate = useNavigate();
    const location = useLocation();
    const { createUser, setUser } = useContext(AuthContxt);

    const [email, setEmail] = useState({
        value: '',
        error: ''
    });
    const [password, setPassword] = useState({
        value: '',
        error: ''
    });
    const [confirmPassword, setConfirmPassword] = useState({
        value: '',
        error: ''
    });

    const from = location.state?.from?.pathname || "/";


    const emailHandler = (event) => {
        const email = event.target.value;
        setEmail({ value: email });

        if (!(/^\S+@\S+\.\S+$/).test(email)) {
            const errorMessage = 'please provide a valid email';
            setEmail({ ...email, error: errorMessage });
        }
    }

    const passwordHandler = (event) => {
        const password = event.target.value;
        setPassword({ value: password });

        if (password < 6) {
            setPassword({ error: 'Password must be 6 character' })
        }
    }

    const confirmPasswordHandler = (event) => {
        const confirmPassword = event.target.value;
        setConfirmPassword({ value: confirmPassword });

        if (password.value !== confirmPassword) {
            setConfirmPassword({ ...confirmPassword, error: "Password did not match" })
        }
    }

    const SignUpSubmit = (event) => {
        event.preventDefault();

        const errorMessage = 'this field is required';

        if (!email.value || !password.value || !confirmPassword.value) {
            setEmail({ error: errorMessage });
            setPassword({ ...password, error: errorMessage });
            setConfirmPassword({ ...confirmPassword, error: errorMessage });
        } else {
            setEmail({ ...email, error: "" });
            setPassword({ ...password, error: '' });
            setConfirmPassword({ ...confirmPassword, error: '' });
        }


        // createingt new user
        const userEmail = email.value;
        const userPassword = password.value;

        createUser(userEmail, userPassword)
            .then(result => {
                const user = result.user;
                setUser(user);
                event.target.reset();
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error.message));

    }

    return (
        <div className="form-container">
            <h2 className="form-title">Sign Up</h2>
            <form onSubmit={SignUpSubmit}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email"
                        className={`${email.error ? "error-border" : ''}`}
                        onBlur={emailHandler}
                        name="email"
                    />
                    {email.error && <p className="input-error">{email?.error}</p>}
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password"
                        className={`${email.error ? "error-border" : ''}`}
                        onBlur={passwordHandler}
                        name="password"
                    />
                    {password.error && <p className="input-error">{password.error}</p>}
                </div>
                <div className="form-control">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password"
                        className={`${email.error ? "error-border" : ''}`}
                        onBlur={confirmPasswordHandler}
                        name="confirmPassword"
                    />
                    {confirmPassword.error && <p className="input-error">{confirmPassword.error}</p>}
                </div>
                <input className="btn-submit" type="submit" value="Sign Up" />
            </form>
            <p className="togol-login">Already Have an Account? <Link to="/login" className="togol-link">Login</Link></p>

            <SocialLogin />
        </div>
    );
}

export default SignUp;
