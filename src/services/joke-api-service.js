import TokenService from '../services/token-service'
import config from '../config'

const JokeApiService = {
  // GET all jokes
  getAllJokes() {
    return fetch(`${config.API_ENDPOINT}/jokes`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res =>
        !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
      )
      .catch(error => {
        console.error(error)
      })
  },
  // GET all jokes for logged in user
  getUserJokes() {
    return fetch(
      `${config.API_ENDPOINT}/users/${TokenService.getUserId('user_id')}/jokes`,
      {
        method: 'GET',
        headers: {
          authorization: `bearer ${TokenService.getAuthToken()}`
        }
      }
    )
      .then(res =>
        !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
      )
      .catch(error => {
        console.error(error)
      })
  },
  // GET upvoted jokes for logged in user
  getUserUpvotes() {
    return fetch(
      `${config.API_ENDPOINT}/users/${TokenService.getUserId(
        'user_id'
      )}/upvotes`,
      {
        method: 'GET',
        headers: {
          authorization: `bearer ${TokenService.getAuthToken()}`
        }
      }
    )
      .then(res =>
        !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
      )
      .catch(error => {
        console.error(error)
      })
  },
  // POST new joke for logged in user with required data needed
  postUserJoke(jokeId, question, answer, rating) {
    return fetch(
      `${config.API_ENDPOINT}/users/${TokenService.getUserId('user_id')}/jokes`,
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          authorization: `bearer ${TokenService.getAuthToken()}`
        },
        body: JSON.stringify({
          joke_id: jokeId,
          question,
          answer,
          rating
        })
      }
    ).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    )
  },
  // POST new upvote for logged in user with required data needed
  postUserUpvote(jokeId) {
    return fetch(
      `${config.API_ENDPOINT}/users/${TokenService.getUserId('user_id')}/upvotes/${jokeId}`,
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          authorization: `bearer ${TokenService.getAuthToken()}`
        },
        body: JSON.stringify({
          joke_id: jokeId,
        })
      }
    ).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    )
  },
  // DELETE a joke
  deleteJoke(jokeId, cb) {
    fetch(`${config.API_ENDPOINT}/jokes/${jokeId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    })
  },
  // DELETE a joke for the logged in user
  deleteUserJoke(jokeId, cb) {
    fetch(
      `${config.API_ENDPOINT}/users/${TokenService.getUserId(
        'userId'
      )}/jokes/${jokeId}`,
      {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json',
          authorization: `bearer ${TokenService.getAuthToken()}`
        }
      }
    )
      .then(res => {
        if (!res.ok) {
          return res.json().then(error => {
            throw error
          })
        }
      })
      .then(data => {
        cb(jokeId)
      })
      .catch(error => {
        console.error(error)
      })
  },
  // PATCH joke with upvote
  upvoteJoke(jokeId, cb) {
    fetch(`${config.API_ENDPOINT}/jokes/upvote/${jokeId}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    })
  },
  // PATCH joke with downvote
  downvoteJoke(jokeId, cb) {
    fetch(`${config.API_ENDPOINT}/jokes/downvote/${jokeId}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    })
  }
}

export default JokeApiService
