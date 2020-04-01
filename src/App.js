import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import PrivateRoute from './components/utils/PrivateRoute'
import JokeApiService from './services/joke-api-service'
import MainContext from './MainContext'
import Landing from './routes/Landing'
import Login from './routes/Login'
import Signup from './routes/Signup'
import Dashboard from './routes/Dashboard'
import NewJoke from './routes/NewJoke'
import UserJokes from './routes/UserJokes'
import './App.css'

export default class App extends Component {
  state = {
    jokes: [],
    userJokes: [],
    upvoteDisabled: [],
    downvoteDisabled: [],
    error: null,
  }
    
  // Helper function to fecth/update state after upvote/downvote
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
    setTimeout(() => {
      JokeApiService.getUserJokes()
      .then(resJson =>
          this.setState({
            userJokes: resJson
          }))
          .catch(res => {
              this.setState({ error: res.error })
          })
    }, 1000);
  }

  deleteJoke = jokeId => {
    const newUserJokes = this.state.userJokes.filter(rec => 
        rec.id !== jokeId
    )
    this.setState({
        userJokes: newUserJokes,
    })
    const newJokes = this.state.jokes.filter(rec => 
      rec.id !== jokeId
    )
    this.setState({
        jokes: newJokes,
    })
  }

  // Fetches jokes and updates state when the component mounts
  componentDidMount() {
      JokeApiService.getAllJokes()
          .then(resJson =>
              this.setState({ jokes: resJson }))
              .catch(res => {
                  this.setState({ error: res.error })
              })
  }

  //Handles upvote on joke
  handleUpvote = e => {
      e.preventDefault()
      const { id } = e.target
      const jokeId = Number(id)
      JokeApiService.upvoteJoke(jokeId, this.updateJokes())
      this.setState({upvoteDisabled: [...this.state.upvoteDisabled, jokeId]})
  }

  //Handles downvote on joke
  handleDownvote = e => {
    e.preventDefault()
    const { id } = e.target
    const jokeId = Number(id)
    JokeApiService.downvoteJoke(jokeId, this.updateJokes())
    this.setState({downvoteDisabled: [...this.state.downvoteDisabled, jokeId]})
  }

  // Handles delete for logged in user
  handleDelete = e => {
    e.preventDefault()
    const { id } = e.target
    const jokeId = Number(id)
    JokeApiService.deleteJoke(jokeId, this.deleteJoke(jokeId))
  }

  setUserJokes = e => {
    JokeApiService.getUserJokes()
          .then(resJson =>
              this.setState({ userJokes: resJson }))
              .catch(res => {
                  this.setState({ error: res.error })
              })
  }


  render() {
    const contextValue = {
      jokes: this.state.jokes,
      userJokes: this.state.userJokes,
      upvoteDisabled: this.state.upvoteDisabled,
      downvoteDisabled: this.state.downvoteDisabled,
      handleUpvote: this.handleUpvote,
      handleDownvote: this.handleDownvote,
      updateJokes: this.updateJokes,
      deleteJoke: this.deleteJoke,
      handleDelete: this.handleDelete,
      setUserJokes: this.setUserJokes,
    }
    return (
      <div className="App">
          <Switch>
            <Route exact path={'/'} component={Landing} />
            <Route path={'/login'} component={Login} />
            <Route path={'/signup'} component={Signup} />
            <MainContext.Provider value={contextValue}>
              <PrivateRoute path={'/dashboard'} component={Dashboard} />
              <PrivateRoute path={'/newjoke'} component={NewJoke} />
              <PrivateRoute path={'/myjokes'} component={UserJokes} />
            </MainContext.Provider>
          </Switch>
      </div>
    )
  }


}