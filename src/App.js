import React from 'react';
import './App.css';
import { Navbar } from './shared/header/navbar';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Home } from './components/home/home'
import { About } from './components/about/about';
import { Spinner } from './shared/spinner/spinner';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar>
        </Navbar>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Redirect to="/home"></Redirect>
        </Switch>
      </Router>
      {/* <Spinner></Spinner> */}
    </div>
  );
}

export default App;
