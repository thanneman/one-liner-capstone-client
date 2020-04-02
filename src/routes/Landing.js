import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MainContext from '../MainContext'
import LoadingSpinner from '../components/LoadingSpinner'
import JokeApiService from '../services/joke-api-service'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaughBeam } from '@fortawesome/free-regular-svg-icons'
import Footer from '../components/Footer'

export default class Landing extends Component {
  static contextType = MainContext
  // Set initial state for user before fetch
  state = {
    loading: false,
    joke: [],
    error: null
  }

  // Fetches jokes and updates state when the component mounts
  componentDidMount() {
    this.setState({ loading: true })
    JokeApiService.getAllJokes()
      .then(resJson =>
        this.setState({
          joke: resJson[0],
          loading: false
        })
      )
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

  render() {
    // Display loader if the request is taking too long
    const { loading } = this.state
    let loadedJoke
    let loader
    if (loading === true) {
      loader = <LoadingSpinner />
    } else {
      loadedJoke = (
        <>
          <h3>Top Voted Joke Today:</h3>
          <h4>
            <span className='detail-label'>Q: </span>
            {this.state.joke.question}
          </h4>
          <h4>
            <span className='detail-label'>A: </span>
            {this.state.joke.answer}
          </h4>
          <p>Posted by: {this.state.joke.username}</p>
        </>
      )
    }
    return (
      <>
        <main role='main'>
          <header>
            <div className='landing-logo'></div>
            <h1>
              <FontAwesomeIcon icon={faLaughBeam} size='lg' /> One-Liner
            </h1>
            <p>A comical community to post and rate the best jokes.</p>
            <p>Login or Signup to start posting your funniest jokes.</p>
          </header>
          <div className='site-access'>
            <p>
              <Link className='login-btn' to='/login'>
                Login
              </Link>{' '}
              <Link className='login-btn' to='/signup'>
                Sign Up
              </Link>
            </p>
          </div>
          <div className='top-joke'>
            <div className='joke-card-title'>
              {loader}
              {loadedJoke}
            </div>
          </div>
        </main>
        <Footer />
      </>
    )
  }
}
