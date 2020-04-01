import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import JokeList from '../components/JokeList'
import Footer from '../components/Footer'
import MainContext from '../MainContext'


export default class Dashboard extends Component {
    static defaultProps = {
        userJokes: [],
        error: null,
        
    }

    static contextType = MainContext;

    componentDidMount() {
        this.context.setUserJokes();
    }

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