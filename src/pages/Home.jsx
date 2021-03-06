//React library
import React from 'react'
import {useState} from 'react'
import { useHistory } from 'react-router'

//Style & Css
import '../styles/Home.css'
import bannerimage from '../assets/quiz.svg'

//Material UI components
import {Button, MenuItem, TextField,} from "@material-ui/core"

//External Import
import Categories from '../Data/Categories'
import ErrorMessage from '../components/ErrorMessage'


function Home({name, setName, fetchQuestion}) {
    
        const [category, setCategory] = useState("");
        const [difficulty, setDifficulty] = useState("");
        const [error, setError] = useState(false);
        const history = useHistory();

    const handleSubmit = () => {
        if(!category || !difficulty || !name){
            setError(true)
        }else{
            setError(false)
            fetchQuestion(category, difficulty)
            history.push("/paijo/quiz")
        }
    };   
    return (
        <div className="content">
            <div className="settings">
                <span style={{ fontSize: 30 }}>Quiz Settings</span>
                <div className="settings_select">
                    {error && <ErrorMessage>Please Fill all The Fields</ErrorMessage>}
                    <TextField
                    style={{ marginBottom: 25 }}
                    label="Enter Your Name"
                    variant="outlined"
                    onChange={(e) => setName(e.target.value)}
                    />
                    
                    <TextField
                    select
                    label="Select Category"
                    variant="outlined"
                    style={{ marginBottom: 30 }}
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                    >
                    {Categories.map((cat) => (
                        <MenuItem key={cat.category} value={cat.value}>
                        {cat.category}
                        </MenuItem>
                    ))}
                    </TextField>

                    <TextField
                    select
                    label="Select Difficulty"
                    variant="outlined"
                    style={{ marginBottom: 30 }}
                    onChange={(e) => setDifficulty(e.target.value)}
                    value={difficulty}
                    >
                    <MenuItem key="Easy" value="easy">
                        Easy
                    </MenuItem>
                    <MenuItem key="Medium" value="medium">
                        Medium
                    </MenuItem>
                    <MenuItem key="Hard" value="hard">
                        Hard
                    </MenuItem>

                    </TextField>
                    <Button variant='contained' color='primary' size='large'
                    onClick={handleSubmit}
                    >
                        Start Quiz
                    </Button>
                </div>
            </div>
            <img src={bannerimage} className="banner" alt="quiz img" />
        </div>
    )
}

export default Home
