
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import BcImage from './assets/ques1.png'
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import {useState} from 'react'

function App() {

    const [name, setName] = useState("");

    const fetchQuestion = () => {

    }

  return (
    <BrowserRouter>
      <div className="app" style={{backgroundImage: `url(${BcImage})`}}> 
          
        <Header/>
        <Switch>

          <Route path='/' exact>
              <Home name={name} setName={setName} fetchQuestion={fetchQuestion} />
          </Route>

          <Route path='/quiz' >
              <Quiz/>
          </Route>

          <Route path='/result' >
              <Result/>
          </Route>
          
        </Switch>
      </div>
    
    
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
