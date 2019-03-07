import React from 'react';
import '../../styles/settings_slideout.css'

const SettingsSlideout = (props) => {

    const {
      cycleInputCB, saveGridNameInputCB, selectionInputCB,
      loadCB, saveCB
     } = props.callBacks;

    const { cycleValue, saveGridNameValue, savedGrids = false } = props;


    const options = (!savedGrids) ? []
      : savedGrids.map((savedGrid, index) => {
          return (
            <option value={index} key={`sg${index}`}>{savedGrid.gridName}</option>
          );
        });

    const defaultOption =  <option value={null} key={`sgDefault`}>Choose a grid to load</option>
    options.unshift(defaultOption);

    return (
      <section className='settings'>

        <label htmlFor="cycles">Number of Cycles: </label>
        <input
          type="number"
          className="control"
          name='cycles'
          onChange={cycleInputCB}
          value={cycleValue}
        />


        <label htmlFor="saved_grids_selection">Select Grid</label>
        <select className='control' name='saved_grids_selection' onChange={selectionInputCB}>
          {options}
        </select>

        <label htmlFor="load">Load Selected Grid</label>
        <input type="button" className="control" name='load' onClick={loadCB}/>



        <label htmlFor="save_name">Name Grid</label>
        <input
          type="text"
          className="control"
          name='save_name'
          value={saveGridNameValue}
          onChange={saveGridNameInputCB}
        />

        <label htmlFor="save">Save Grid</label>
        <input type="button" className="control" name='save' onClick={saveCB}/>
      </nav>
      );

  }

  export default Controls;

  );
}

export default Menu;
