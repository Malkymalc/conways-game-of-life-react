import React from 'react';

const Controls = (props) => {

  const { startGameCB, pauseGameCB, resetGridCB } = props.callBacks;



  return (
    <nav className='control-panel'>

      <label htmlFor="start">Start Game</label>
      <input type="button" className="control" name='start' onClick={startGameCB}/>

      <label htmlFor="pause">Pause Game</label>
      <input type="button" className="control" name='pause' onClick={pauseGameCB}/>

      <label htmlFor="reset">Reset Grid</label>
      <input type="button" className="control" name='reset' onClick={resetGridCB}/>

    </nav>
  );

}

export default Controls;
