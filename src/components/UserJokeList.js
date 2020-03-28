import React, { Component } from 'react'
import MainContext from '../MainContext'
import UserJoke from '../components/UserJoke'


export default class UserJokeList extends Component {
    state = {
        jokes: [],
        id: '',
        question: '',
        answer: '',
        rating: '',
        error: null,
    }

    setError = error => {
        //console.error(error)
        this.setState({ error: true })
    }

    deleteJoke = jokeId => {
        const newJokes = this.state.jokes.filter(rec => 
            rec.id !== jokeId
        )
        this.setState({
            jokes: newJokes
        })
    }
    

    render() {
        const contextValue = {
            id: this.state.id,
            question: this.state.question,
            answer: this.state.answer,
            rating: this.state.rating,
            deleteJoke: this.deleteJoke,
        }

        return (
            <MainContext.Provider value={contextValue}>
                <section className="joke-list">
                    <h3>My Jokes</h3>
                    <UserJoke />
                </section>
            </MainContext.Provider>
        )
    }

}