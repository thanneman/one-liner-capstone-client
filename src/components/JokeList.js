import React, { Component } from 'react'
import MainContext from '../MainContext'
import Joke from '../components/Joke'
import ValidationError from './validation-error'

export default class JokeList extends Component {
    static defaultProps = {
        jokes: [],
        error: null,
    }

    static contextType = MainContext;
    
    render() {
        const { jokes, error } = this.context

        return (
                <section className="joke-list">
                    <h3>All Jokes</h3>
                    {error && (<ValidationError message={error} />)}
                    {jokes.map(joke =>
                        <Joke 
                            key={joke.id}
                            {...joke}
                        />
                    )}
                </section>
        )
    }

}