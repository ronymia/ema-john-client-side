import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/Logo.svg';
import { AuthContxt } from '../../contexts/UserContext';
import './Navbar.css';

export default function Navbar() {
    const { user } = useContext(AuthContxt);

    console.log(user)

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
                    <Link to="/login">Login</Link>
                    <Link to="/signUp">Sign Up</Link>
                    <h3>{user?.email}</h3>
                </ul>
            </nav>
        </header>
    );
}
