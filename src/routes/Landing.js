import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'


export default class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
        }
    }

    render() {
        return (
            <>
                <main role="main">
                    <header>
                        <div className="landing-logo"></div>
                        <h1>One-Liner</h1>
                        <p>A comical community to post and rate the best jokes</p>
                    </header>
                    <div className="site-access">
                        <p>
                            <Link to="/login">Login</Link> | <Link to="/signup">Sign Up</Link>
                        </p>
                    </div>
                    <div className="top-joke">
                        Blank
                    </div>
                </main>
                <Footer />
            </>
        )
    }

}