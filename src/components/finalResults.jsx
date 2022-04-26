import React from 'react';
import styled from 'styled-components';
import { currentQuestionContex, scoreContext, showResultsContex } from '../contexes';
import { questions } from '../questions';

const Container = styled.div`
width: 90%;
  height: auto;
margin: 0px auto;
  background-color: #240046;
  padding: 16px;
  border-radius: 16px;
  color: white;
  
  border: 0.5px solid #3C096C;
`
const Button = styled.button`
  background-color: deeppink;
  border:none;
  color: white;
  padding: 15px 24px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-weight: bold;
  border-radius: 24px;
  cursor: pointer;
`
const transparent = {
    backgroundColor: 'transparent'
}
const FinalResults = () => {
    const { showResult, setShowResult} = React.useContext(showResultsContex)
    const { score, setScore} = React.useContext(scoreContext)
    const { currentQuestion, setCurrentQuestion} = React.useContext(currentQuestionContex)
    return(
<Container>
        <h1 style={transparent}>final results:</h1>
        <h2 style={transparent}>{score} out of {questions.length} - ({Math.round((score / questions.length) * 100)}%)</h2>
        <Button onClick={() => {
             setCurrentQuestion(0)
             setScore(0)
             setShowResult(false)
        }}>restart game</Button>
      </Container>
    );
}

export default FinalResults;