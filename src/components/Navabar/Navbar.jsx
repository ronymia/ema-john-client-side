import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/Logo.svg';
import { AuthContxt } from '../../contexts/UserContext';
import './Navbar.css';

export default function Navbar() {
    const { user, logOut } = useContext(AuthContxt);

    console.log(user)
    const userLogOUt = () => {
        logOut()
            .then(result => console.log("object"))
            .catch(error => console.error(error));
    }

    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <nav>
                <ul className="menu">
                    <Link to="/">Home</Link>
                    <Link to="/shop">Shop</Link>
                    <Link to="/orders">Orders</Link>
                    <Link to="/inventory">Inventory</Link>
                    {
                        user ?
                            <button type="button" className="btn"
                                onClick={userLogOUt}
                            >
                                Log Out</button>
                            :
                            <>
                                <Link to="/login">Login</Link>
                                <Link to="/signUp">Sign Up</Link>
                            </>
                    }
                </ul>
            </nav>
        </header>
    );
}
