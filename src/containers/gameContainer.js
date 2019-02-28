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


  toggle = (row, column) => () => {
    if (this.state.play === false){
      this.setState((state) => {
        const newGrid = [...state.currentGrid];
        const cell = newGrid[row][column];
        newGrid[row][column] = (cell === true) ? false : true;
        return newGrid;
      });
    }
  }
  mouseOver = (row, column) => () => {
    if (this.state.mouseDown) this.toggle(row, column)();
  }
  mouseDown = () => {
    this.setState({mouseDown: true});
  }
  mouseUp = () => {
    this.setState({mouseDown: false});
  }



  cycle = () => {
    const newGrid = life.getNextGrid(this.state.currentGrid);
    this.setState({currentGrid: newGrid});
  }



  cycleInput = (e) => {
    this.setState({cycles: e.target.value});
  }
  startGameCB = () => {
    this.cycle()
    this.setState((state) => {
      const newState = {...state};
      newState.play = true;
      return newState;
    });
    return (this.state.cycles > 0 && this.state.play === true) ?
    this.startGameCB() :
    null;
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
      cycleInput: this.cycleInput,
      startGame: this.startGameCB,
      pauseGameCB: this.pauseGameCB,
      resetGrid: this.resetGridCB,
      loadCB: this.loadCB,
      saveCB: this.saveCB
    }

    return (
      <div
        className="App"
        onMouseDown={this.mouseDown}
        onMouseUp={this.mouseUp}
      >
        <header className="header">
          <h1>Conway's <em> Game of Life</em></h1>
        </header>
        <Controls
          cycleValue={this.state.cycles}
          savedGrids={this.state.savedGrids}
          cycles={this.state.cycles}
          callBacks={controlFunctions}
        />
        <Grid
          className='grid'
          grid={this.state.currentGrid}
          toggle={this.toggle}
          mouseOver={this.mouseOver}
        />
      </div>
    );
  }

}

export default Game;
