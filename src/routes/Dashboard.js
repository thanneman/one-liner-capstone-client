import React, { Component } from 'react'
//import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'
import JokeList from '../components/JokeList'
import Footer from '../components/Footer'


export default class Dashboard extends Component {


    render() {
        return (
            <>
                <main role="main">
                    <NavBar />
                    <JokeList />
                </main>
                <Footer />
            </>
        )
    }

}