import React, { Component } from 'react'
//import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
//import AddJoke from '../components/AddJoke'


export default class NewJoke extends Component {


    render() {
        return (
            <>
                <main role="main">
                    <NavBar />
                    {/* <AddJoke /> */}
                </main>
                <Footer />
            </>
        )
    }

}