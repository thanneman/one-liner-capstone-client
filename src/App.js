import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import PrivateRoute from './components/utils/PrivateRoute'
//import PublicOnlyRoute from './components/utils/PublicOnlyRoute'
import Landing from './routes/Landing'
import Login from './routes/Login'
import Signup from './routes/Signup'
import Dashboard from './routes/Dashboard'
import NewJoke from './routes/NewJoke'
import UserJokes from './routes/UserJokes'
import './App.css'

export default class App extends Component {
    
    
    render() {
      return (
        <div className="App">
            <Switch>
              <Route exact path={'/'} component={Landing} />
              <Route path={'/login'} component={Login} />
              <Route path={'/signup'} component={Signup} />
              <PrivateRoute path={'/dashboard'} component={Dashboard} />
              <PrivateRoute path={'/newjoke'} component={NewJoke} />
              <PrivateRoute path={'/myjokes'} component={UserJokes} />
            </Switch>
        </div>
      )
    }


}