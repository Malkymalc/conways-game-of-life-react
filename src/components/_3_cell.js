import React from 'react';
import '../styles/_3_cell.css';


const Cell = (props) => {

  return (
    <div
      className={`cellDiv ${props.awake ? 'awake' : 'asleep'}`}
      onClick={props.toggle(props.column, props.row)}
      onMouseOver={props.mouseOver}
    >
    </div>
  );
}

export default Cell;
