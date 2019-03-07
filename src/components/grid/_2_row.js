import React from 'react';
import Cell from './_3_cell.js';

const Row = (props) => {

  const row = props.row;

  const cells = row.map((cellStatus, i) => {
    return (
      <Cell
        className='cell'
        isAwake={cellStatus}
        rowNum={props.rowNum}
        columnNum={i}
        key={`Row${props.rowNum}Col${i}`}
        toggle={props.toggle}
        mouseOver={props.mouseOver}
      />
    );
  });

  return (
    <div className='rowDiv'>
      {cells}
    </div>
  );

}

export default Row;
