import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ValidationError from '../components/validation-error'
import LoadingSpinner from '../components/LoadingSpinner'
import Footer from '../components/Footer'


export default class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
        }
    }

    render() {
        // Display loader if the request is taking too long
        const { loading } = this.state;
        let errorLoad;
        let loader;
        if (this.state.error) {
            errorLoad = <ValidationError message={this.state.error} />;
            //this.state.loading = false;
        }
        else if (loading === true) {
            loader = <LoadingSpinner />;
        } 
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
                            <Link to="/dashboard">Login</Link> | <Link to="/signup">Sign Up</Link>
                        </p>
                    </div>
                    <div className="top-joke">
                        {loader}
                        {errorLoad}
                        <h2>Top rated joke today:</h2>
                        <p><span className="joke-label">Q: </span>What do metals call their friends?</p>
                        <p><span className="joke-label">A: </span>Their chromies</p>
                    </div>
                </main>
                <Footer />
            </>
        )
    }

}