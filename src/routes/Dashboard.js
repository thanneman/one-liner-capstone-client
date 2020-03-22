import React, { Component } from 'react'
//import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'
//import JokeList from '../components/JokeList'
import Footer from '../components/Footer'


export default class Dashboard extends Component {


    render() {
        return (
            <>
                <main role="main">
                    <NavBar />
                    {/* <JokeList /> */}
                    <section class="joke-list">
                        <div class="joke-card">
                        <div class="joke-card-title">
                            <h4>Q: What do metals call their friends?</h4>
                            <h4>A: Their chromies</h4>
                        </div>
                        <div class="joke-card-vote">
                            <p>user3392 | Votes: 10 | <span role="img" aria-label="Thumbs up">👍</span>  <span role="img" aria-label="Thumbs down">👎</span></p>
                        </div>
                        </div>
                        <div class="joke-card">
                        <div class="joke-card-title">
                            <h4>Q: I was named after my dad</h4>
                            <h4>A: Because I couldn’t possibly have been named before him</h4>
                        </div>
                        <div class="joke-card-vote">
                            <p>dadjoker88 | Votes: 3 | <span role="img" aria-label="Thumbs up">👍</span>  <span role="img" aria-label="Thumbs down">👎</span></p>
                        </div>
                        </div>
                        <div class="joke-card">
                        <div class="joke-card-title">
                            <h4>Q: Seven has "even" in it.?</h4>
                            <h4>A: That's odd</h4>
                        </div>
                        <div class="joke-card-vote">
                            <p>mom | Votes: 1 | <span role="img" aria-label="Thumbs up">👍</span>  <span role="img" aria-label="Thumbs down">👎</span></p>
                        </div>
                        </div>
                    </section>
                </main>
                <Footer />
            </>
        )
    }

}