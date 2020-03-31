import React from 'react'

const MainContext = React.createContext({
    jokes: [],
    upvoteDisabled: [],
    downvoteDisabled: [],
    handleUpvote: () => {},
    handleDownvote: () => {},
    updateJokes: () => {},
})

export default MainContext