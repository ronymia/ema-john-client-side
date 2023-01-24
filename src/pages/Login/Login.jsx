import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContxt } from '../../contexts/UserContext';
import './Login.css';

function Login() {
    const { existUserLogin, setUser } = useContext(AuthContxt);

    const [email, setEmail] = useState({
        value: '',
        error: ''
    });
    const [password, setPassword] = useState({
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


    const userLoginHandler = (event) => {
        event.preventDefault();

        const errorMessage = 'this field is required';

        if (!email.value || !password.value) {
            setEmail({ ...email, error: errorMessage });
            setPassword({ ...password, error: errorMessage });
        } else {
            setEmail({ error: "" });
            setPassword({ ...password, error: '' });
        }

        //user login 
        const userEmail = email.value;
        const userPassword = password.value;

        existUserLogin(userEmail, userPassword)
            .then(result => {
                const user = result.user;
                setUser(user);
                event.target.reset();
            })
            .catch(error => console.error(error.message));

    }

    return (
        <div className="form-container">
            <h2 className="form-title">Login</h2>
            <form onSubmit={userLoginHandler}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email"
                        name="email"
                        onBlur={emailHandler}
                    />
                    {email.error && <p className="input-error">{email?.error}</p>}
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password"
                        name="password"
                        onBlur={passwordHandler}
                    />
                    {password.error && <p className="input-error">{password.error}</p>}
                </div>
                <input className="btn-submit" type="submit" value="Login" />
            </form>
            <p className="togol-register">
                New to Ema-john? <Link to="/signup" className="togol-link">Create a New Account</Link>
            </p>
        </div>
    );
}

export default Login;
