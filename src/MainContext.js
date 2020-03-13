import React from 'react'

const MainContext = React.createContext({
    jokes: [],
    id: '',
    question: '',
    answer: '',
    rating: '',
    error: '',
    addJoke: () => {},
    deleteJoke: () => {},
    addUser: () => {},
})

export default MainContext