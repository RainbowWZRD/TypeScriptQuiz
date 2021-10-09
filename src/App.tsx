import React, {useState} from "react"
import QuestionCard from "./components/QuestionCard"
import {fetchQuizQuestion} from "./API"
import { isTokenKind } from "typescript"
import {Difficulty} from "./API"

function App() {
const [loading, setLoading] = useState(false)
const [questions, setQuestions] = useState([])
const [number, setNumber] = useState(0)
const [userAnswer, setUserAnswer] = useState([])
const [score, setScore] = useState(0)
const [gameOver, setGameOver] = useState(true)

const TOTAL_QUESTION = 10

console.log(fetchQuizQuestion(TOTAL_QUESTION, Difficulty.EASY)


  const startTrivia = async () => {}

  //Always need to specify the type
  const checkAnswer = (e:React.MouseEvent<HTMLButtonElement> ) => {}

  const nextQuestion = ( ) => {}

  return (
    <div className="App">
      <p style={{fontFamily : "Poppins"}}>REACT QUIZ</p>
      <button onClick={startTrivia}>Start</button>
      <p className="score">Score:</p>
      <p>Loading questions</p>
      {/* <QuestionCard 
      question={questions[number].question} 
      answers={questions[number].answers} 
      callback={checkAnswer} 
      userAnswer={userAnswer ? userAnswer[number] : undefined}  
      questionNr={number + 1} 
      totalQuestions={TOTAL_QUESTION} /> */}
      <button onClick={nextQuestion}>Next</button>
          </div>
  );
}

export default App;
