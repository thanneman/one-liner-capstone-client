import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import MainContext from '../MainContext'
import Joke from '../components/Joke'
import ValidationError from './validation-error'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

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
                    {jokes.length === 0 &&
                        <div className="no-jokes">
                            You don't have any jokes. Please enter a new joke!
                            <NavLink className='no-joke-btn' to="/newjoke"><FontAwesomeIcon icon={faPlusCircle} size="lg" /> Add a Joke</NavLink>
                        </div>
                    }
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