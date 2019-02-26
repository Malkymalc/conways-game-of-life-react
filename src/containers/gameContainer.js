import React, { Component } from 'react';
import '../styles/game.css'

import Controls from '../components/controls.js';
import Grid from '../components/_1_grid.js';
import life from '../models/life.js';


class Game extends Component{

  constructor(props){
    super(props);

    const startGrid = life.getBlankGrid();

    this.state = {
      savedGrids: null,
      cycles: Infinity,
      currentGrid: startGrid,
      play: false
    }
  }

  cycle = () => {
    const newGrid = life.getNextGrid(this.state.currentGrid);
    this.setState({currentGrid: newGrid});
  }

  play = () => {
    this.setState({cycles: (this.state.cycles -1)});
  }

  startGameCB = (cyclesInput) => () => {
    this.setState({cycles: cyclesInput})
  }
  pauseGameCB = () => {
    this.setState({play: false})
  }
  resetGridCB = () => {
    this.setState({play: false, currentGrid: life.getBlankGrid()})
  }
  loadCB = () => {
    console.log('loading selected grid');
  }
  saveCB = () => {
    console.log('saving selected grid');
  }

  componentDidMount(){
    // getSavedGames
  }

  render() {
    const controlFunctions = {
      startGameCB: this.startGame,
      pauseGameCB: this.pauseGameCB,
      resetGridCB: this.resetGrid,
      loadCB: this.loadCB,
      saveCB: this.saveCB
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1>Conway's <em> Game of Life</em></h1>
        </header>
        <Controls
          savedGrids={this.state.savedGrids}
          cycles={this.state.cycles}
          callBacks={this.controlFunctions}
        />
        <Grid className='grid' grid={this.state.currentGrid}/>
      </div>
    );
  }
}

export default Game;
