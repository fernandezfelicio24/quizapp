//React library
import React from 'react'
import { useEffect, useState } from 'react'

//Style & Css
import '../styles/Quiz.css'

//Material UI components
import { CircularProgress} from "@material-ui/core"

//External Import
import Questions from '../components/Questions';

function Quiz({name, questions, score, setScore, setQuestions}) {

        const [options, setOptions] = useState();
        const [currQues, setCurrQues] = useState(0);
    
        useEffect(() => {
        setOptions(
            questions &&
            handleShuffle([
                questions[currQues]?.correct_answer,
                ...questions[currQues]?.incorrect_answers,
            ])
        );
        }, [currQues, questions]);
    
        console.log(questions);
    
        const handleShuffle = (options) => {
        return options.sort(() => Math.random() - 0.5);
        };
    
    return (
    <div className="quiz">
            <span className="subtitle">Welcome, {name}</span>
    
            {questions ? (
            <>
                <div className="quizInfo">
                    <span>{questions[currQues].category}</span>
                    <span>
                        {/* {questions[currQues].difficulty} */}
                        Score : {score}
                    </span>
                </div>
                <Questions
                currQues={currQues}
                setCurrQues={setCurrQues}
                questions={questions}
                options={options}
                correct={questions[currQues]?.correct_answer}
                score={score}
                setScore={setScore}
                />
            </>
            ) : (
            <CircularProgress
                style={{ margin: 100 }}
                color="inherit"
                size={150}
                thickness={1}
            />
            )}
    </div>
    )
}

export default Quiz
