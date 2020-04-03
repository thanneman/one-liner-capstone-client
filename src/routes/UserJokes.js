import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import UserJokeList from '../components/UserJokeList';

export default class UserJokes extends Component {
  render() {
    return (
      <>
        <main role='main'>
          <NavBar />
          <UserJokeList />
        </main>
        <Footer />
      </>
    );
  }
}
