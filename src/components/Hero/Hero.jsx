import React from 'react';
import { Link } from 'react-router-dom';
import hero from '../../assets/images/hero.jpg';
import './Hero.css';

export default function Home() {
    return (
        <div className="hero">
            <div className="hero__intro">
                <h3>Sale up to 70% off</h3>
                <div className="">
                    <h1>New Collection For Fall</h1>
                    <h2>Discover all the new arrivals of ready-to-wear collection.</h2>
                </div>
                <button type="button" className="btn hero__btn">
                    <Link to="/shop">SHOP NOW</Link>
                </button>
            </div>
            <figure className="hero-img">
                <img src={hero} alt="" />
            </figure>
        </div>
    );
}
