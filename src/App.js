import React, { Component } from 'react';

import Home from './containers/Home';

import { Route, Switch } from 'react-router-dom';

import './App.css';

const NotFound = () => {
  return(
    <h2>ページが見つかりません</h2>
  )
}

class App extends Component {

  render() {
    return (
      <Switch>
      <Route exact path="/" component={Home} />
      </Switch>
      );
  }
}

export default App;
