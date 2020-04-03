import React, { Component } from 'react';
import MainContext from '../MainContext';
import Joke from '../components/Joke';
import ValidationError from './validation-error';
import LoadingSpinner from '../components/LoadingSpinner';

export default class JokeList extends Component {
  static defaultProps = {
    jokes: [],
    upvoteDisabled: [],
    downvoteDisabled: [],
    error: null,
  };

  static contextType = MainContext;

  render() {
    const { jokes, upvoteDisabled, downvoteDisabled, error } = this.context;
    return (
      <section className='joke-list'>
        <h3>All Jokes</h3>
        {error && <ValidationError message={error} />}
        {jokes.length === 0 && <LoadingSpinner />}
        {jokes.map((joke) => (
          <Joke
            key={joke.id}
            {...joke}
            upvoted={upvoteDisabled}
            downvoted={downvoteDisabled}
          />
        ))}
      </section>
    );
  }
}
