import React, { Component } from 'react'
import TokenService from '../services/token-service'
import { NavLink } from 'react-router-dom'
//import logo from '../images/logo.png'

export default class NavBar extends Component {

    handleLogout = () => {
        TokenService.clearAuthToken()
        window.location = '/'
    }

    render() {
        return (
            <nav role="navigation">
                <div className="logo"><NavLink to="/dashboard">One-Liner</NavLink></div>
                <ul>
                    <li><NavLink to="/newjoke">New Joke</NavLink></li>
                    <li><NavLink to="/" onClick={this.handleLogout}>Logout</NavLink></li>
                </ul>
            </nav>
        )
    }
}