import React from 'react'

export const Navbar = () => {
    return (
        <nav className="navbar bg-dark">
            <h1>
                <a href="index.html"><i className="fas fa-code"></i> DeveloperConnector</a>
            </h1>

            <ul>
                <li><a target="_blank" href="profiles.html">Developers</a></li>
                <li><a target="_blank" href="register.html">Register</a></li>
                <li><a target="_blank" href="login.html">Login</a></li>
            </ul>
        </nav>
    )
}