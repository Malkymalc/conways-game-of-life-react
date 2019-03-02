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
    console.time('renderNewGrid');
    this.setState((prevState, props) => {
      const newGrid = life.getNextGrid(prevState.currentGrid);
      return {currentGrid: newGrid};
    }, ()=> console.timeEnd('renderNewGrid')
    );
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



  cycleInputCB = (e) => {
    this.setState({cycles: e.target.value});
  }
  saveGridNameInputCB = (e) => {
    this.setState({saveGridName: e.target.value});
  }


  startGameCB = () => {
    console.log('start game firing');
    this.setState({play: true});
    const id = setInterval(() => {
      console.log('cycles: ', this.state.cycles);
      console.time('cycle');
      if (this.state.cycles > 0 && this.state.play === true){
        this.cycle();
        const newCycles = this.state.cycles - 1;
        this.setState({cycles: newCycles}, ()=> console.timeEnd('cycle'));
        // console.timeEnd('cycle')
      } else {
        if (this.state.play === true) this.setState({play: false});
        clearInterval(id);
      }
    }, 2000);
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
    this.setState((prevState, props) => {
      const gridToSave = {
        gridName: prevState.saveGridName,
        grid: prevState.currentGrid
      }
      const savedGrids = prevState.savedGrids;
      const newSavedGrids = [].concat(savedGrids, gridToSave);
      return {savedGrids: newSavedGrids};
    });
  }

  componentDidMount(){
    const savedGrids = JSON.parse(localStorage.getItem('savedGrids'));
    this.setState({savedGrids: savedGrids}, () => console.log(this.state.savedGrids));

  }

  componentDidUpdate(){
    localStorage.setItem('savedGrids', JSON.stringify(this.state.savedGrids));
  }

  render() {

    const controlFunctions = {
      cycleInputCB: this.cycleInputCB,
      saveGridNameInputCB: this.saveGridNameInputCB,
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
          saveGridNameValue={this.state.saveGridName}
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
