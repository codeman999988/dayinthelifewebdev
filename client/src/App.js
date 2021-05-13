import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import GamePage from './Pages/GamePage/GamePage';
import About from './Pages/About/About';

class App extends Component {
  
  render() {
    return (
      <div>
        <Router>
          <Header/>
          <Switch>
            <Route exact path="/">
            <Home />
            </Route>
            <Route path="/gamepage">
            <GamePage />
            </Route>
            <Route path='/about'>
              <About/>
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App; 