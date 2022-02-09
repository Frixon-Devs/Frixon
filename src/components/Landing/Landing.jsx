import React from 'react';
import './Landing.css'
import { Link } from 'react-router-dom';

export default function Landing() {
    return (
        <div className="landing">
            <div className="content">
                <h1 className="title">Team Frixion™</h1>
                <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid tempora vitae explicabo!</h3>
                <div className="buttons">
                    <Link to="/about" className="btn-primary btn">About Us</Link>
                    <Link to="/projects" className="btn btn-secondary">Projects</Link>
                </div>
            </div>
        </div>
    );
}
