import React from 'react';
import '../../styles/_3_cell.css';


const Cell = (props) => {

  const column = props.columnNum;
  const row = props.rowNum;

  return (
    <div
      className={`cellDiv ${props.isAwake ? 'awake' : 'asleep'}`}
      onClick={props.toggle(row, column)}
      onMouseOver={props.mouseOver(row, column)}
    >
    </div>
  );
}

export default Cell;
