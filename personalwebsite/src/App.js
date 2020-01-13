import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowseRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={NoMatch} />

        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
