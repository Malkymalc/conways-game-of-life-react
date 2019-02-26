import React from 'react';
import '../styles/grid.css';

import Row from './_2_row.js';

const Grid = (props) => {

  const grid = this.props.grid;
  const rows = grid.map(rowArray => <Row className='row' cells={rowArray}/>);

  return (  <main className='gridDiv'>  {rows}  </main> );

}

export default Grid;
