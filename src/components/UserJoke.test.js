import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import UserJoke from './UserJoke'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <UserJoke />
    </BrowserRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})
