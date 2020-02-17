import React from 'react';
import './App.css';
import { Navbar } from './shared/header/navbar';
import {BrowserRouter as  Router , Switch, Route, Redirect } from 'react-router-dom';
import { Home } from './components/home/home'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar>
        </Navbar>
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Redirect to="/"></Redirect>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
