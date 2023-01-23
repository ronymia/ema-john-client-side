import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContxt } from '../../contexts/UserContext';
import './SignUp.css';

function SignUp() {
    const { user } = useContext(AuthContxt);

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
            setEmail({ error: "" });
            setPassword({ ...password, error: '' });
            setConfirmPassword({ ...confirmPassword, error: '' });
        }


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
                    <p className="input-error">{email?.error}</p>
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
        </div>
    );
}

export default SignUp;
