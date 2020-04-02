import React from 'react'

const MainContext = React.createContext({
  jokes: [],
  userJokes: [],
  upvoteDisabled: [],
  downvoteDisabled: [],
  handleUpvote: () => {},
  handleDownvote: () => {},
  updateJokes: () => {},
  deleteJoke: () => {},
  handleDelete: () => {},
  setUserJokes: () => {},
  handleLogout: () => {}
})

export default MainContext
