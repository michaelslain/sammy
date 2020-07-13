import React from 'react'
import './home.scss'
import DiscordLogo from '../images/discord.png'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className="home">
            <div className="hero">
                <img src={DiscordLogo} alt="Discord" className="background" />
                <h1 className="heading">
                    Run <font className="special">Javascript</font> <br />
                    code on <font className="special">Discord</font>
                </h1>
                <Link className="cta" to="/about">
                    Learn More
                </Link>
                <Link className="cta clear" to="/start">
                    Invite Bot
                </Link>
            </div>
        </div>
    )
}
