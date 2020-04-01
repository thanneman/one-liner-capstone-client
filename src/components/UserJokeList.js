import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import MainContext from '../MainContext'
import UserJoke from '../components/UserJoke'
import ValidationError from './validation-error'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'


export default class UserJokeList extends Component {
    static defaultProps = {
        userJokes: [],
        error: null,
        
    }

    static contextType = MainContext;
    
    render() {
        const { userJokes, error } = this.context
        return (
                <section className="joke-list">
                    <h3>My Jokes</h3>
                    {userJokes.length === 0 &&
                        <div className="no-jokes">
                            You don't have any jokes. Please enter a new joke!
                            <NavLink className='no-joke-btn' to="/newjoke"><FontAwesomeIcon icon={faPlusCircle} size="lg" /> Add a Joke</NavLink>
                        </div>
                    }
                    {error && (<ValidationError message={error} />)}
                    {userJokes.map(joke =>
                        <UserJoke 
                            key={joke.id}
                            {...joke}
                        />
                    )}
                </section>
        )
    }

}