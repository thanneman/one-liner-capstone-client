import React, { Component } from 'react'
//import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'


export default class Landing extends Component {


    render() {
        return (
            <>
                <main role="main">
                    <NavBar />
                    <h1>stuff here</h1>
                </main>
                <Footer />
            </>
        )
    }

}