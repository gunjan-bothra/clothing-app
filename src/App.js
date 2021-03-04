import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/Homepage/Homepage.component';
import { Switch, Route } from 'react-router-dom';
import SingnInandSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

const HatsPage = () => (

  <div>

    <h1>HATS PAGE </h1>

  </div>

);
class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/hats' component={HatsPage} />
          <Route path='/signin' component={SingnInandSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
