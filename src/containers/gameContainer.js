import React, { Component } from 'react';
import '../styles/game.css'
import Controls from '../components/controls.js';
import Grid from '../components/_1_grid.js';
import life from '../models/life.js';


class Game extends Component {

  constructor(props){
    super(props);

    const startGrid = life.getBlankGrid();

    this.state = {
      savedGrids: null,
      cycles: Infinity,
      currentGrid: startGrid,
      play: false,
      mouseDown: false
    }
  }


  toggle = (x,y) => () => {
    this.setState((currState) => {
      const newState = [...currState];
      const cell = newState[x][y];
      newState[x][y] = (cell === true) ? false : true;
      return newState;
    });
  }
  mouseOver = (x,y) => () => {
    this.state.mouseDown ? toggle(x,y)() : console.log('mouseNotDown');
  }

  mouseDown = () => this.setState({mouseDown: true});
  mouseUp = () => this.setState({mouseDown: false});

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
      startGame: this.startGameCB,
      pauseGameCB: this.pauseGameCB,
      resetGrid: this.resetGridCB,
      loadCB: this.loadCB,
      saveCB: this.saveCB
    }

    return (
      <div className="App">
        <header className="header">
          <h1>Conway's <em> Game of Life</em></h1>
        </header>
        <Controls
          savedGrids={this.state.savedGrids}
          cycles={this.state.cycles}
          callBacks={controlFunctions}
        />
        <Grid
          className='grid'
          grid={this.state.currentGrid}
          toggle={this.toggle}
          mouseOver={this.mouseOver}
          mouseDown={this.mouseDown}
          mouseUp={this.mouseUp}
        />
      </div>
    );
  }

}

export default Game;
