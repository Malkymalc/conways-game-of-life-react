import React from 'react';

import Cell from './_3_cell.js';

const Row = (props) => {

  const row = this.props.row;
  const rows = grid.map(rowArray => <Cell className='cell' cells={rowArray}/>);

  return (  <div className='rowDiv'>  {cells}  </div> );

}

export default Row;
