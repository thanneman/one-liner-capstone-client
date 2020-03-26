import React, { Component } from 'react'
import ValidationError from './validation-error'
import MainContext from '../MainContext'
import JokeApiService from '../services/joke-api-service'
import { NavLink } from 'react-router-dom'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faPlusCircle, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'


export default class Joke extends Component {
    static contextType = MainContext;
    // Set initial state for user before fetch
    state = {
        //loading: true,
        jokes: [],
        error: null,
    }

    // Helper function to fecth/update state after upvote
    updateJokes () {
        setTimeout(() => {
            JokeApiService.getAllJokes()
            .then(resJson =>
                this.setState({
                    jokes: resJson
                }))
                .catch(res => {
                    this.setState({ error: res.error })
                })
          }, 1000);
    }

    // Fetches jokes and updates state when the component mounts
    componentDidMount() {
        JokeApiService.getAllJokes()
            .then(resJson =>
                this.setState({
                    jokes: resJson
                }))
                .catch(res => {
                    this.setState({ error: res.error })
                })
    }

    //Handles upvote on joke
    handleUpvote = e => {
        e.preventDefault()
        const { id } = e.target
        const jokeId = Number(id)
        JokeApiService.updateJokeVote(jokeId, this.updateJokes())
    }

    render() {
        // If the user has no jokes display a prompt to add a joke
        if (this.state.jokes.length === 0) {
            return <div className="no-jokes">
                        You haven't entered any jokes yet. Please enter a new joke!
                        <NavLink className='no-joke-btn' to="/newjoke"><FontAwesomeIcon icon={faPlusCircle} size="lg" /> Start New Joke</NavLink>
                    </div>
        }
        return (
            <>
                {this.state.error && (<ValidationError message={this.state.error} />)}
                {this.state.jokes.map(joke => (
                <div className="joke-card" key={joke.id} id={joke.id}>
                    <div className="joke-card-title">
                        <div className="joke-card-vote">
                            <p>Posted by: {joke.username} on {moment(joke.date).format("MMMM D, YYYY")} | Votes: {joke.rating}</p>
                        </div>
                        <h4><span className="detail-label">Q: </span>{joke.question}</h4>
                        <h4><span className="detail-label">A: </span>{joke.answer}</h4>
                        <button id={joke.id} type="submit" onClick={this.handleUpvote}><FontAwesomeIcon icon={faArrowUp} size="1x" /> Upvote</button>
                    </div>
                </div>
                ))}
            </>
        )
    }
}