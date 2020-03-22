import React, { Component } from 'react'
//import JokeApiService from '../services/joke-api-service'
import ValidationError from './validation-error'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'


export default class AddJoke extends Component {
    static defaultProps = {
        history: {
            push: () => { }
        }
    }

    // Create initial state before fetching data
    constructor(props) {
        super(props);
        this.state = {
            question: {
                value: '',
                touched: false
            },
            answer: {
                value: '',
                touched: false
            },
        }
    }

    // Update question state if input updated
    updateQuestion(question) {
        this.setState({ question: { value: question, touched: true } });
    }

    // Update answer state if input updated
    updateAnswer(answer) {
        this.setState({ answer: { value: answer, touched: true } });
    }

    /*
    // Handle submit to POST new joke for logged in user
    handleSubmit = e => {
        e.preventDefault()
        this.setState({ error: null })
        const newJoke = {
            question: e.target.question.value,
            answer: e.target.answer.value,
        }
        JokeApiService.postUserJoke(newJoke.id, newJoke.question, newJoke.answer)
            .then(() => {
                window.location = '/dashboard'
            })
            .catch(this.state.error)
    }*/

    // Validates that a question has been entered
    validateQuestion() {
        const question = this.state.question.value.trim();
        if (question.length === 0 ) {
            return 'Please enter your joke';
        }
    }

    // Validates that an answer has been entered
    validateAnswer() {
        const answer = this.state.answer.value.trim();
        if (answer.length === 0 ) {
            return 'Please enter an answer to your joke';
        }
    }

    render() {
        return(
            <section className="joke-list">
                <div className="joke-card-lg">
                <div className="joke-card-title">
                    <h4>New Joke</h4>
                </div>
                <div className="joke-card-info">
                    <form className="new-joke-form" onSubmit={this.handleSubmit}>
                        <label>Enter your joke:</label>
                        <input type="text" name="question" id="question" required placeholder="Your joke" onChange={e => this.updateQuestion(e.target.value)} />
                        {this.state.question.touched && (<ValidationError message={this.validateQuestion()} />)}

                        <label>Joke Answer:</label>
                        <input type="text" name="answer" id="answer" required placeholder="Your joke answer" onChange={e => this.updateAnswer(e.target.value)} />
                        {this.state.answer.touched && (<ValidationError message={this.validateAnswer()} />)}

                        {this.state.error && (<ValidationError message={this.state.error} />)}
                        <button
                            type='submit'
                            disabled={
                                this.validateQuestion() ||
                                this.validateAnswer()
                                }
                                >
                                Submit <FontAwesomeIcon icon={faCheckCircle} size="lg" /></button>
                    </form>
                    <Link className='joke-cancel' to="/dashboard"><button>Cancel <FontAwesomeIcon icon={faTimesCircle} size="lg" /></button></Link>
                </div>
                </div>
            </section>
        )
    }
}