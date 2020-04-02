import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import UserJokeList from './UserJokeList'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <UserJokeList />
    </BrowserRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
