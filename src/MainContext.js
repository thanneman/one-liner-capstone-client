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
})

export default MainContext