import React from 'react';
import './App.css';
import FinalResults from './components/finalResults';
import QuestionCard from './components/qustionCard';
import { questions } from './questions';
import {scoreContext, currentQuestionContex, showResultsContex} from './contexes';
import Footer from './Footer';

function App() {

  const [showResult, setShowResult] = React.useState(false)
  const [score, setScore] = React.useState(0)
  const [currentQuestion, setCurrentQuestion] = React.useState(0)

  const scoreValue = { score, setScore, }
  const currentQuestionValue = { currentQuestion, setCurrentQuestion }
  const showResultValue = { showResult, setShowResult}

  

  return (
    <scoreContext.Provider value= {scoreValue}>
    <currentQuestionContex.Provider value={currentQuestionValue}>
    <showResultsContex.Provider value={showResultValue}>
    <div className="App">
      <h1>Yuval Poliak Interview Questions</h1>

      <h2>current score: {score}</h2>
      {showResult ? <FinalResults/> : <QuestionCard/> }
      

    <Footer/>
    </div>
    </showResultsContex.Provider>
    </currentQuestionContex.Provider>
    </scoreContext.Provider>
  );
}

export default App;



