//React library
import React from 'react'
import {useState} from 'react'
import { useHistory } from "react-router";

//Style & Css
import '../styles/Questions.css'

//Material UI components
import { Button } from '@material-ui/core';

//External Import
import ErrorMessage from './ErrorMessage';


function Questions({currQues,setCurrQues,questions, options,correct,score, setScore}) {
            
            const [selected, setSelected] = useState();
            const [error, setError] = useState(false);

            const handleSelect=(i) =>{
                if(selected === i && selected === correct){
                    return "select";
                }
                else if(selected === i && selected !== correct){
                    return "wrong";
                }
                else if(i === correct){
                    return "select";
                }
            }

            const handleCheck = (i) => {
                setSelected(i);
                if(i === correct) setScore(score+1);
                setError(false);
            }

            const handleQuit = () => {

            }

            const history = useHistory();

            const handleNext = () => {
                if(currQues > 8){
                    history.push("/paijo/result")
                } else if (selected) {
                    setCurrQues(currQues + 1)
                    setSelected()
                } else {
                    setError("Please select an option first")
                }
            }

    return (
        <div className="question">

            <h1>Questions {currQues+1}</h1>
            <div className="singleQustion">
                <h2>{questions[currQues].question}</h2>
                <div className="options">
                    {error && <ErrorMessage>{error}</ErrorMessage>}
                    {
                        options && options.map(
                            (i) => <button onClick={() => handleCheck(i)} className={`singleOption  ${selected && handleSelect(i)}`} key={i} disabled={selected}>{i}</button>
                        )
                    }
                </div>
                
                <div className="controls">
                    <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    style={{width: 185}}
                    href="/paijo"
                    onClick={handleQuit}
                    >Quit</Button>

                    <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    style={{width: 185}}
                    onClick={handleNext}
                    >Next Question</Button>
                </div>

            </div>



        </div>
    )
}

export default Questions
