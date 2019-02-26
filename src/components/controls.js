import React from 'react';

const Controls = (props) => {

  const {startGame, pauseGame, resetGrid, load, save} = this.props.callbacks;
  const savedGrids = this.props.savedGrids;

  const options = savedGrids.map(savedGrid => {
    return (
      <option value={savedGrid.grid}>{savedGrid.name}</option>
    );
  });

  return (
    <nav className='control-panel'>

      <label htmlFor="cycles">Number of Cycles: </label>
      <input type="number" className="control" name='cycles'/>

      <label htmlFor="start">Start Game</label>
      <input type="button" className="control" name='start' onClick={startGame}/>

      <label htmlFor="pause">Pause Game</label>
      <input type="button" className="control" name='pause' onClick={pauseGame}/>

      <label htmlFor="reset">Reset Grid</label>
      <input type="button" className="control" name='reset' onClick={resetGrid}/>



      <label htmlFor="saved_grids_selection">Select Grid</label>
      <select name="" className='control' name='saved_grids_selection'>
        {options}
      </select>

      <label htmlFor="load">Load Selected Grid</label>
      <input type="button" className="control" name='load' onClick={load}/>



      <label htmlFor="save_name">Name Grid</label>
      <input type="text" className="control" name='save_name'/>

      <label htmlFor="save">Save Grid</label>
      <input type="button" className="control" name='save' onClick={save}/>
    </nav>
  )


}


export default Controls;
