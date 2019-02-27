import React from 'react';
import '../styles/_1_grid.css';

import Row from './_2_row.js';

const Grid = (props) => {

  const grid = props.grid;

  const rows = grid.map((row,i) => {
    return (
      <Row
        className='row'
        row={row}
        rowNum={i}
        toggle={props.toggle}
        mouseOver={props.mouseOver}
        key={`Row${i}`}
      />
    );
  });

  return (
    <main
      className='gridDiv'
      onMouseDown={props.mouseDown}
      onMouseUp={props.mouseUp}
    >
      {rows}
    </main>
  );

}

export default Grid;
