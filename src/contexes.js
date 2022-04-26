import React from "react";

 const scoreContext = React.createContext({
    score: 0,
    setScore: () => {},
    
})
const currentQuestionContex = React.createContext({
    currentQuestion: 0,
    setCurrentQuestion: () =>{}
})
const showResultsContex = React.createContext({
    showResults: false,
    setCurrentQuestion: () =>{}
})

export {scoreContext, currentQuestionContex, showResultsContex};
