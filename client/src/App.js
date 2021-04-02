import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
// import Start from './Pages/Start/Start';
import GamePage from './Pages/GamePage/GamePage';
// import HealthBar from './Components/Healthbar/Healthbar';
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
            {/* <Start/> */}
            <Route path="/gamepage">
            <GamePage />
            </Route>
            <Route path='/about'>
              <About/>
            </Route>
          </Switch>
          {/* <HealthBar/> */}
        </Router>
      </div>
    )
  }
}

export default App; 