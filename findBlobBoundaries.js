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

function findBlobBoundaries(sample) {
  console.log(findFirstBlobCell(sample));
}

findBlobBoundaries(sample);
