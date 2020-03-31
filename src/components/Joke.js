import React from 'react'
import MainContext from '../MainContext'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'

export default function Joke(props) {
    return (
        <>
            <MainContext.Consumer>
                {(context) => (
                <div className="joke-card" id={props.id}>
                    <div className="joke-card-title">
                        <div className="joke-card-vote">
                            <p>Posted by: {props.username} on {moment(props.date).format("MM/D/YY")} | <span className="detail-label">Votes: {props.rating}</span></p>
                        </div>
                        <h4>Q: {props.question}</h4>
                        <h4>A: {props.answer}</h4>
                        <button id={props.id} type="submit" disabled={context.upvoteDisabled.indexOf(props.id)!==-1} onClick={context.handleUpvote}>Upvote <FontAwesomeIcon icon={faArrowUp} size="1x" /></button>
                        <button id={props.id} type="submit" disabled={context.downvoteDisabled.indexOf(props.id)!==-1} onClick={context.handleDownvote}>Downvote <FontAwesomeIcon icon={faArrowDown} size="1x" /></button>
                    </div>
                </div>
                )}
            </MainContext.Consumer>
        </>
    )
}