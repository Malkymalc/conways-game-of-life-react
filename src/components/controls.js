import React from 'react';

const Controls = (props) => {

  const {
    cycleInput, startGameCB, pauseGameCB, resetGridCB, loadCB, saveCB
   } = props.callBacks;

  const { cycleValue, savedGrids = false } = props;
  //
  // const options = savedGrids.map(savedGrid => {
  //   return (
  //     <option value={savedGrid.grid}>{savedGrid.name}</option>
  //   );
  // });

  return (
    <nav className='control-panel'>

      <label htmlFor="cycles">Number of Cycles: </label>
      <input
        type="number"
        className="control"
        name='cycles'
        onChange={cycleInput}
        value={cycleValue}
      />

      <label htmlFor="start">Start Game</label>
      <input type="button" className="control" name='start' onClick={startGameCB}/>

      <label htmlFor="pause">Pause Game</label>
      <input type="button" className="control" name='pause' onClick={pauseGameCB}/>

      <label htmlFor="reset">Reset Grid</label>
      <input type="button" className="control" name='reset' onClick={resetGridCB}/>



      {/* <label htmlFor="saved_grids_selection">Select Grid</label>
        <select name="" className='control' name='saved_grids_selection'>
        {options}
      </select> */}

      <label htmlFor="load">Load Selected Grid</label>
      <input type="button" className="control" name='load' onClick={loadCB}/>



      <label htmlFor="save_name">Name Grid</label>
      <input type="text" className="control" name='save_name'/>

      <label htmlFor="save">Save Grid</label>
      <input type="button" className="control" name='save' onClick={saveCB}/>
    </nav>
    );

}

export default Controls;
