import React, { Component } from 'react'
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