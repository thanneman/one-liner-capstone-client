import React, { Component } from 'react'
import TokenService from '../services/token-service'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faSignOutAlt, faListAlt } from '@fortawesome/free-solid-svg-icons'
import { faLaughBeam } from '@fortawesome/free-regular-svg-icons'

export default class NavBar extends Component {

    handleLogout = () => {
        TokenService.clearAuthToken()
        window.location = '/'
    }

    render() {
        const location = window.location.pathname;
        let onMyJoke;
        let notOnMyJokes;
        if (location === "/myjokes" || location === "/newjoke") {
            onMyJoke = <li><NavLink to="/dashboard"><FontAwesomeIcon icon={faListAlt} size="lg" /> All Jokes</NavLink></li>
        } else {
            notOnMyJokes = <li><NavLink to="/myjokes"><FontAwesomeIcon icon={faListAlt} size="lg" /> My Jokes</NavLink></li>
        }
        return (
            <nav role="navigation">
                <div className="logo"><NavLink to="/dashboard"><FontAwesomeIcon icon={faLaughBeam} size="lg" /> One-Liner</NavLink></div>
                <ul>
                    <li><NavLink to="/newjoke"><FontAwesomeIcon icon={faPlusCircle} size="lg" /> New Joke</NavLink></li>
                    {notOnMyJokes}
                    {onMyJoke}
                    <li><NavLink to="/" onClick={this.handleLogout}><FontAwesomeIcon icon={faSignOutAlt} size="lg" /> Logout</NavLink></li>
                </ul>
            </nav>
        )
    }
}