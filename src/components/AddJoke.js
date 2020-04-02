import React, { Component } from 'react'
import JokeApiService from '../services/joke-api-service'
import ValidationError from './validation-error'
import MainContext from '../MainContext'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

export default class AddJoke extends Component {
  static defaultProps = {
    history: {
      push: () => {}
    }
  }

  static contextType = MainContext

  // Create initial state before fetching data
  constructor(props) {
    super(props)
    this.state = {
      question: {
        value: '',
        touched: false
      },
      answer: {
        value: '',
        touched: false
      }
    }
  }

  // Update question state if input updated
  updateQuestion(question) {
    this.setState({ question: { value: question, touched: true } })
  }

  // Update answer state if input updated
  updateAnswer(answer) {
    this.setState({ answer: { value: answer, touched: true } })
  }

  // Handle submit to POST new joke for logged in user
  handleSubmit = e => {
    e.preventDefault()
    this.setState({ error: null })
    const { question, answer, rating } = e.target
    const newJoke = {
      question: question.value,
      answer: answer.value,
      rating: rating.value
    }
    JokeApiService.postUserJoke(
      newJoke.id,
      newJoke.question,
      newJoke.answer,
      newJoke.rating
    )
      .then(() => {
        window.location = '/dashboard'
      })
      .catch(this.state.error)
  }

  // Validates that a question has been entered
  validateQuestion() {
    const question = this.state.question.value.trim()
    if (question.length === 0) {
      return 'Please enter your joke'
    } else if (question.length > 350) {
      return 'Must be under 350 characters'
    }
  }

  // Validates that an answer has been entered
  validateAnswer() {
    const answer = this.state.answer.value.trim()
    if (answer.length === 0) {
      return 'Please enter an answer to your joke'
    } else if (answer.length > 350) {
      return 'Must be under 350 characters'
    }
  }

  render() {
    return (
      <section className='joke-list'>
        <div className='joke-card-lg'>
          <div className='joke-card-title'>
            <h4>New Joke</h4>
          </div>
          <div className='joke-card-info'>
            <form className='new-joke-form' onSubmit={this.handleSubmit}>
              <label>Enter your joke:</label>
              <input
                type='text'
                name='question'
                id='question'
                required
                placeholder='Your joke'
                onChange={e => this.updateQuestion(e.target.value)}
              />
              {this.state.question.touched && (
                <ValidationError message={this.validateQuestion()} />
              )}

              <label>Joke Answer:</label>
              <input
                type='text'
                name='answer'
                id='answer'
                required
                placeholder='Your joke answer'
                onChange={e => this.updateAnswer(e.target.value)}
              />
              <input type='hidden' name='rating' id='rating' value='0' />
              {this.state.answer.touched && (
                <ValidationError message={this.validateAnswer()} />
              )}

              {this.state.error && (
                <ValidationError message={this.state.error} />
              )}
              <button
                type='submit'
                disabled={this.validateQuestion() || this.validateAnswer()}>
                Submit <FontAwesomeIcon icon={faCheckCircle} size='lg' />
              </button>
            </form>
            <Link className='joke-cancel' to='/dashboard'>
              <button>
                Cancel <FontAwesomeIcon icon={faTimesCircle} size='lg' />
              </button>
            </Link>
          </div>
        </div>
      </section>
    )
  }
}
