import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/Logo.svg';
import './Navbar.css';

export default function Navbar() {
    return (
        <header className="nav-header">
            <nav>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <ul className="menu">
                    <Link to="/">Home</Link>
                    <Link to="/shop">Shop</Link>
                    <Link to="/orders">Orders</Link>
                    <Link to="/inventory">Inventory</Link>
                    <Link to="/login">Login</Link>
                </ul>
            </nav>
        </header>
    );
}
