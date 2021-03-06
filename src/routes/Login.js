import React, { Component } from 'react';
import ValidationError from '../components/validation-error';
import LoadingSpinner from '../components/LoadingSpinner';
import TokenService from '../services/token-service';
import AuthApiService from '../services/auth-api-service';
import { Link } from 'react-router-dom';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: {
        value: '',
        touched: false
      },
      password: {
        value: '',
        touched: false
      }
    };
  }

  // Check that the users credentials are valid
  handleSubmitJwtAuth = ev => {
    ev.preventDefault();
    this.setState({ error: null, loading: true });
    const { email, password } = ev.target;
    AuthApiService.postLogin({
      email: email.value,
      password: password.value
    })
      .then(res => {
        email.value = '';
        password.value = '';
        this.setState({ loading: false });
        TokenService.saveAuthToken(res.authToken);
        TokenService.saveUserId(res.userId);
        window.location = '/dashboard';
      })
      .then()
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  render() {
    // Display loader if the request is taking too long
    const { loading } = this.state;
    let errorLoad;
    let loader;
    if (this.state.error) {
      errorLoad = <ValidationError message={this.state.error} />;
      //this.state.loading = false;
    } else if (loading === true) {
      loader = <LoadingSpinner />;
    }

    return (
      <>
        <main role='main' className='login-container'>
          <div className='login'>
            <h3>Login</h3>
            <form className='signup-form' onSubmit={this.handleSubmitJwtAuth}>
              <div>
                <input
                  type='text'
                  name='email'
                  id='email'
                  placeholder='Email'
                />
              </div>
              <div>
                <input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='Password'
                />
              </div>
              <button type='submit'>Login</button>
            </form>
            {loader}
            <div>
              <p>
                Don't have an account? <Link to='/signup'>Sign up here</Link>
              </p>
            </div>
            <div>{errorLoad}</div>
          </div>
          <div className='demo'>
            <p>To view a demo use:</p>
            <p>Email: demo@test.com</p>
            <p>Password: Password1</p>
          </div>
        </main>
      </>
    );
  }
}
