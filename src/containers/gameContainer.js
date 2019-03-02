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
      savedGrids: [],
      saveGridName: '',
      cycles: 50,
      currentGrid: startGrid,
      play: false,
      mouseDown: false
    }
  }


  cycle = () => {
    const newGrid = life.getNextGrid(this.state.currentGrid);
    this.setState({currentGrid: newGrid});
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



  cycleInput = (e) => {
    this.setState({cycles: e.target.value});
  }


  startGameCB = () => {
    console.log('start game firing');
    this.setState({play: true});
    setInterval(() => {
      if (this.state.cycles > 0 && this.state.play === true){
        // console.log('cycles: ', this.state.cycles);
        this.cycle();
        const newCycles = this.state.cycles - 1;
        this.setState({cycles: newCycles});
      } else {
        if (this.state.play === true) this.setState({play: false});
      }
    }, 1000);
  }

  pauseGameCB = () => {
    this.setState({play: false});
  }
  resetGridCB = () => {
    this.setState({play: false, currentGrid: life.getBlankGrid()})
  }


  loadCB = () => {
    if (this.state.play === true){
      alert('Please pause game before loading a saved Grid');
      return;
    }
    const selectIndex = this.state.selectIndex;
    const selectedGrid = [...this.state.savedGrids][selectIndex];
    this.setState({currentGrid: selectedGrid.grid});
  }

  saveCB = () => {
    if (this.state.play === true){
      alert('Please pause game before saving');
      return;
    }
    const gridToSave = {
      gridName: this.state.saveGridName,
      grid: this.state.currentGrid
    }
    const savedGrids = [...this.state.savedGrids];
    const newSavedGrids = savedGrids.concat(gridToSave);
    localStorage.setItem('savedGrids', newSavedGrids);
    this.setState({savedGrids: newSavedGrids});
  }

  componentDidMount(){
    // getSavedGames
  }

  componentDidUpdate(){

  }

  render() {

    const controlFunctions = {
      cycleInput: this.cycleInput,
      startGameCB: this.startGameCB,
      pauseGameCB: this.pauseGameCB,
      resetGridCB: this.resetGridCB,
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
