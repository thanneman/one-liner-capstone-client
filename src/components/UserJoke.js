import React from 'react'
import MainContext from '../MainContext'
import { NavLink } from 'react-router-dom'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

export default function UserJoke(props) {
    // If the user has no jokes display a prompt to add a joke
    if (props.id === null) {
        return (<div className="no-jokes">
                    You don't have any jokes. Please enter a new joke!
                    <NavLink className='no-joke-btn' to="/newjoke"><FontAwesomeIcon icon={faPlusCircle} size="lg" /> Add a Joke</NavLink>
                </div>)
    }

    return (
        <>
            <MainContext.Consumer>
                {(context) => (
                <div className="joke-card" id={props.id}>
                    <div className="joke-card-title">
                        <div className="joke-card-vote">
                            <p>Posted on {moment(props.date).format("MM/D/YY")} | <span className="detail-label">Votes: {props.rating}</span></p>
                        </div>
                        <h4>Q: {props.question}</h4>
                        <h4>A: {props.answer}</h4>
                        <button id={props.id} type='submit' onClick={context.handleDelete}>Delete <FontAwesomeIcon icon={faTrashAlt} size="lg" /></button>
                    </div>
                </div>
                )}
            </MainContext.Consumer>
        </>
    )
}
