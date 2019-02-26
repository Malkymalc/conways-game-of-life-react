import React, { Component } from 'react';
import './App.css';

import Controls from './components/controls.js'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      savedGrid: null,
      cycles: Infinity
    }
  }

  const controlFunctions = {
    this.startGame,
    this.pauseGame,
    this.resetGrid,
    this.load,
    this.save
  }

  componentDidMount(){
    // getSavedGames
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Conway's <em> Game of Life</em></h1>
        </header>
        <Controls
          savedGrids={this.state.savedGrids}
          cycles={this.state.cycles}
          functions={this.controlFunctions}
        />
      </div>
    );
  }
}

export default App;
