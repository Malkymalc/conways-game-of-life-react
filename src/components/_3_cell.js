import React from 'react';
import '../styles/_3_cell.css';


const Cell = (props) => {

  return (
    <div className={`cellDiv ${props.awake ? 'awake' : 'asleep'}`}> . </div>
  );
}

export default Cell;
