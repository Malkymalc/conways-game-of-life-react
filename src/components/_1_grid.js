import React from 'react';
import '../styles/_1_grid.css';

import Row from './_2_row.js';

const Grid = (props) => {

  const grid = props.grid;
  const rows = grid.map(row => <Row className='row' row={row}/>);

  return (
    <main className='gridDiv'>
      {rows}
    </main>
  );

}

export default Grid;
