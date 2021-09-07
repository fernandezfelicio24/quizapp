//React library
import {useState} from 'react'
import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Components
import Footer from './components/Footer';
import Header from './components/Header';

//Pages
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Result from './pages/Result';

//Style & Css
import './App.css';
import BcImage from './assets/ques1.png'

function App() {

    const [name, setName] = useState("");

    const [questions, setQuestions] = useState();
    const [score, setScore] = useState(0)

    const fetchQuestion = async(category = "", difficulty="") => {
          const {data} = await axios.get(
            `https://opentdb.com/api.php?amount=10${
              category && `&category=${category}`
            }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
          );
          // console.log(data);
          setQuestions(data.results);
    }

  return (
    <BrowserRouter>
      <div className="app" style={{backgroundImage: `url(${BcImage})`}}> 
          
        <Header/>
        <Switch>

          <Route path='/paijo' exact>
              <Home name={name} setName={setName} fetchQuestion={fetchQuestion} />
          </Route>

          <Route path='/paijo/quiz' >
              <Quiz
              name={name}
              questions={questions}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}
              
              />
          </Route>

          <Route path='/paijo/result' >
              <Result
              name={name}
              score={score}
              />
          </Route>
          
        </Switch>
      </div>
    
    
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
