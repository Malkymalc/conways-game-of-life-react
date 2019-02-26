import React from 'react';

import Cell from './_3_cell.js';

const Row = (props) => {

  const row = this.props.rowArray;
  const cells = row.map(cell => <Cell className='cell' cells={cell}/>);

  return (  <div className='rowDiv'>  {cells}  </div> );

}

export default Row;
