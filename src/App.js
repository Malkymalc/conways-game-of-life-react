import React, { Component } from 'react';
import './App.css';

import Game from './containers/gameContainer.js';
import withSplash from './components/withSplash.js';

class App extends Component {

  render() {
    return (
      <Game className="game"/>
    );
  }
}

export default withSplash(App);
