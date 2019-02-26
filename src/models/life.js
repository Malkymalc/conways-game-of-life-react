function getBlankGrid(xLength = 50, yLength = 50) {
    const rowMaker = () => {
        const cellMaker = () => false;
        const row = Array.from({length: xLength},cellMaker);
        return row;
    }
    const blankGrid = Array.from({length: yLength}, rowMaker);
    return blankGrid;
};

function getNeighbourGrid(currentGrid){
  neighbourGrid = currentGrid.map(function(row,rowIndex,grid){
    return row.map(function(cell, cellIndex, row){
        var neighbours = 0;
        if (rowIndex != 0){
          //count live neighbours above if cell not in top row
          if ( grid[rowIndex-1][cellIndex-1])  {neighbours +=1 }
          if ( grid[rowIndex-1][cellIndex] )   {neighbours +=1 }
          if ( grid[rowIndex-1][cellIndex+1])  {neighbours +=1 }
        }
        // count neighbourss either side
        if ( grid[rowIndex][cellIndex-1] )   {neighbours +=1 }
        if ( grid[rowIndex][cellIndex+1] )   {neighbours +=1 }
        if (rowIndex != (grid.length-1)){
          // count live neighbourss below if cell not in bottom row
          if ( grid[rowIndex+1][cellIndex-1])  {neighbours +=1 }
          if ( grid[rowIndex+1][cellIndex] )   {neighbours +=1 }
          if ( grid[rowIndex+1][cellIndex+1])  {neighbours +=1 }
        }
        return neighbours;
    });
  });
  return neighbourGrid;
};

function calcNewGrid(currentGrid, neighbourGrid) {
  newGrid = currentGrid.map(function(row, rowNum, grid){
    return row.map(function(cell, cellNum, row){
      alive = cell;
      neighbours = neighbourGrid[rowNum][cellNum];
      if (neighbours < 2) { return false; }
      else if (neighbours === 2 && alive) { return true; }
      else if (neighbours === 3 && alive) { return true; }
      else if (neighbours === 3 && !alive) { return true; }
      // else if (neighbours === 0 && !alive) { return true; }
      else if (neighbours === 4 && !alive) { return true; } //remove this
      else if (neighbours > 3) { return false; }            // change this?
      else { return false; }
    });
  });
  return newGrid;
}


function getNextGrid(grid) {
  let neighbourGrid = getNeighbourGrid(grid);
  return calcNewGrid(grid, neighbourGrid);
}


export default life = {
  getBlankGrid,
  getNextGrid
};
