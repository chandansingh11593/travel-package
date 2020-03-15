import React from 'react';
import './App.scss';
import Navbar from './shared/header/navbar';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Home } from './components/home/home'
import { About } from './components/about/about';
import { Footer } from './shared/footer/footer';
import { Contact } from './components/contact/contact';
import { Destination } from './components/destinations/destination';

function App() {
  return (
    <div className="App">
      <Router>
        <>
        <Navbar></Navbar>
        </>
        <main>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/about-us" component={About} />
            <Route exact path="/contact-us" component={Contact} />
            <Route exact path="/destination" component={Destination} />
            <Redirect to="/home"></Redirect>
          </Switch>
        </main>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
