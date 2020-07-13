import React from 'react'
import './header.scss'
import { Link } from 'react-router-dom'
import Logo from '../images/logo.png'

export default function Header() {
    return (
        <div className="header">
            <Link to="/">
                <img src={Logo} alt="Sammy" className="logo" />
            </Link>
            <div className="tabs-container">
                <Link className="tab" to="/">
                    Home
                </Link>
                <Link className="tab" to="/about">
                    What's This?
                </Link>
                <Link className="tab" to="/commands">
                    Commands
                </Link>
                <Link className="tab special" to="/start">
                    Get Started
                </Link>
            </div>
        </div>
    )
}
