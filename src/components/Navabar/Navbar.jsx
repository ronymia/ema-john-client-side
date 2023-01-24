import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
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
                    <NavLink to="/"
                        className={({ isActive }) => isActive ? "active-route" : undefined}
                    >
                        Home
                    </NavLink>
                    <NavLink to="/shop"
                        className={({ isActive }) => isActive ? "active-route" : undefined}
                    >
                        Shop
                    </NavLink>
                    <NavLink to="/orders"
                        className={({ isActive }) => isActive ? "active-route" : undefined}
                    >
                        Orders
                    </NavLink>
                    <NavLink to="/inventory"
                        className={({ isActive }) => isActive ? "active-route" : undefined}
                    >
                        Inventory
                    </NavLink>
                    {
                        user ?
                            <button type="button" className="btn logOut-btn"
                                onClick={userLogOUt}
                            >
                                Log Out</button>
                            :
                            <>
                                <NavLink to="/login"
                                    className={({ isActive }) => isActive ? "active-route" : undefined}
                                >
                                    Login
                                </NavLink>
                                <NavLink to="/signUp">Sign Up</NavLink>
                            </>
                    }
                </ul>
            </nav>
        </header>
    );
}
