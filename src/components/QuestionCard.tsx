import React from "react";
import { callbackify } from "util";

type Props = {
    question : string,
    answers : string[],
    callback : any,
    userAnswer : any,
    questionNr : number,
    totalQuestions : number
}

const QuestionCard : React.FC<Props> = ({
    question,
    answers,
    userAnswer,
    questionNr,
    totalQuestions
}) => {
    return <>
    <p className="number">
        Question : {questionNr} / {totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{__html: question}}></p>
    <div>
        {answers.map((answer) => {
            <div>
                <button disabled={userAnswer} 
                >
                    <span dangerouslySetInnerHTML={{__html: answer}} />
                </button>
                </div>
        })}
    </div>
    </>
}

export default QuestionCard