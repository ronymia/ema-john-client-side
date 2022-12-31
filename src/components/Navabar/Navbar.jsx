import React from 'react';
import logo from '../../assets/images/Logo.svg';
import './Navbar.css';

export default function Navbar() {
    return (
        <header className="nav-header">
            <nav>
                <div className="logo">{logo}</div>
                <ul className="menu">
                    <a href="#">Home</a>
                    <a href="#">Shop</a>
                    <a href="#">Order Review</a>
                    <a href="#">Inventory</a>
                    <a href="#">Login</a>
                </ul>
            </nav>
        </header>
    );
}
