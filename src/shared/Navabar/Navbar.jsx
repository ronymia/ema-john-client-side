import React from 'react';
import logo from '../../assets/images/Logo.svg';
import './Navbar.css';

export default function Navbar() {
    return (
        <header className="nav-header">
            <nav>
                <div className="logo">{logo}</div>
                <ul className="menu">
                    <a href="/home">Home</a>
                    <a href="/shop">Shop</a>
                    <a href="/orderReview">Order Review</a>
                    <a href="/inventory">Inventory</a>
                    <a href="/login">Login</a>
                </ul>
            </nav>
        </header>
    );
}
