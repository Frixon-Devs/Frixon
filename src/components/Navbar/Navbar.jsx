import React, { useState } from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
    
    const [navToggle, setNavToggle] = useState(false)
    


    return (
        <nav className="navbar">
            <Link to="# " className="logo">Frixion™</Link>
            <ul className={navToggle? "links active": "links"}>
                <li className="link">
                    <Link id="l" to="/">Home</Link>
                </li>
                <li className="link">
                    <Link id="l" to="/about">About</Link>
                </li>
                <li className="link">
                    <Link id="l" to="/projects">Projects</Link>
                </li>
                {/* <li className="link">
                    <Link id="l" to="/services">Services</Link>
                </li> */}
                <li className="link">
                    <Link id="l" to="/devs">Developers</Link>
                </li>
            </ul>
            <ion-icon onClick={() => setNavToggle(!navToggle)} name={navToggle? "close-outline": "menu-outline"} className="nav-toggle" ></ion-icon>
        </nav>
    );
}
