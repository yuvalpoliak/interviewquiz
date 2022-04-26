import styled from 'styled-components';
import React from 'react';
import { questions } from '../questions';
import { currentQuestionContex, scoreContext, showResultsContex } from '../contexes';

const Container = styled.div`
margin: 0px auto;
  background-color: #240046;
  padding: 16px;
  border-radius: 16px;
  color: white;
  width: 90%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border: 0.5px solid #3C096C;
`
const Li = styled.li`
margin: 20px;
background-color: #3C096C;
  padding: 16px;
  border-radius: 20px;
  font-size: 20px;
  margin-top: 8px;
  color: #E0AAFF;
  width: 90%;
  text-align: center;
  cursor: pointer;

  &:hover{
      background-color: #5A189A;
      transition: all 0.5s ease;
  }
`
const Ul = styled.ul`
list-style: none;
background-color: transparent;
display: flex;
align-items: center;
flex-direction: column;
width: 100%;
align-items: center;
  justify-content: center;
`
const QuestionText = styled.h3`
  font-size: 24px;
  color: whitesmoke;
  background-color: transparent;
`
const H2 = styled.h2`
    background-color: transparent;
    color: whitesmoke;
`
const QuestionCard = () => {

    const { score, setScore } = React.useContext(scoreContext)
    const { currentQuestion, setCurrentQuestion} = React.useContext(currentQuestionContex)
    const { showResults, setShowResult } = React.useContext(showResultsContex)

     const optionClicked = (isCorrect) => {
        if(isCorrect) {
            setScore(score + 1)
        }
        if(currentQuestion +1 < questions.length){
        setCurrentQuestion(currentQuestion + 1)
        }
        else{
            setShowResult(true)
        }
    }

    return(
<Container >
      <H2>question {currentQuestion + 1} out of {questions.length}</H2>
      <QuestionText >{questions[currentQuestion].text}</QuestionText>

      <Ul>
        {questions[currentQuestion].options.map((option) => {
            return(
                <Li key={option.id} onClick={()=> optionClicked(option.isCorrect)}>{option.text}</Li>
            )
        })}
      </Ul>
      </Container>
    );
}

export default QuestionCard;