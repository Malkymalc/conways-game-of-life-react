import React, { Component } from 'react';
import '../styles/game.css'

import Controls from './components/controls.js';
import Grid from './components/_1_grid.js';
import life from './models/life.js'


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

  const cycle = () => {
    const newGrid = life.getNextGrid(this.state.currentGrid);
    this.setState({currentGrid: newGrid});
  }

  const play = () => {
    this.setState({cycles: (this.state.cycles -1)});
  }

  const startGameCB = (cyclesInput) => () => {
    this.setState({cycles: cyclesInput})
  }
  const pauseGameCB = () => {
    this.setState({play: false})
  }
  const resetGridCB = () => {
    this.setState({play: false, currentGrid: life.getBlankGrid()})
  }
  const loadCB = () => {
    console.log('loading selected grid');
  }
  const saveCB = () => {
    console.log('saving selected grid');
  }
  const controlFunctions = {
    this.startGameCB,
    this.pauseGameCB,
    this.resetGridCB,
    this.loadCB,
    this.saveCB
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
        <Grid className='grid' grid={currentGrid}/>
      </div>
    );
  }
}

export default Game;
