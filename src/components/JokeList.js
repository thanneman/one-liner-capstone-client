import React, { Component } from 'react'
import MainContext from '../MainContext'
import Joke from '../components/Joke'

export default class JokeList extends Component {
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

    addJoke = joke => {
        this.setState({
            jokes: [...this.state.jokes, joke],
        })
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
            addJoke: this.addJoke,
            deleteJoke: this.deleteJoke,
            //addUser: this.addUser,
        }

        return (
            <MainContext.Provider value={contextValue}>
                <section className="joke-list">
                    <h3>All Jokes</h3>
                    <Joke />
                </section>
            </MainContext.Provider>
        )
    }

}