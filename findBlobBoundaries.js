var sample = require('./sample.js');

function findFirstBlobCell(sample) {
  for (var i = 0; i < sample.length; i++) {
    for(var j = 0; j <= sample[i].length; j++) {
      if (sample[i][j] === 1) {
        return { i: i, j: j}
      }
    }
  }
}

function findBlobCellNeighbors(sample, blobTop, cell) {
  var neighbors = [];
  if( cell.i != blobTop && cell.i > 0){
    if (sample[cell.i - 1][cell.j] === 1){
      neighbors.push({i: cell.i - 1, j: cell.j});
    }
  }
  if ( cell.j > 0 ) {
    if (sample[cell.i][cell.j - 1] === 1){
      neighbors.push({i: cell.i, j: cell.j - 1});
    }
  }
  if ( cell.j < sample[cell.i].length - 1){
    if (sample[cell.i][cell.j + 1] === 1){
      neighbors.push({i: cell.i, j: cell.j + 1});
    }
  }
  if ( cell.i < sample.length - 1 ){
    if (sample[cell.i + 1][cell.j] === 1) {
      neighbors.push({i: cell.i + 1, j: cell.j});
    }
  }
  return neighbors;
}

function findBlobBoundaries(sample) {
  var firstCell = findFirstBlobCell(sample);
  var top = firstCell.j;
  var blobCells = [firstCell];
  console.log(findBlobCellNeighbors(sample, top, blobCells[0]));

}

findBlobBoundaries(sample);
