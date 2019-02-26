import React from 'react';
import Cell from './_3_cell.js';

const Row = (props) => {

  const row = props.row;
  const cells = row.map(cellStatus => <Cell className='cell' cellStatus={cellStatus}/>);

  return (
    <div className='rowDiv'>
      {cells}
    </div>
  );

}

export default Row;
