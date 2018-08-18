console.log('1.7');

// Write an algorithm such that if an element in an MxN matrix is 0, its entire row
// and column are set to 0.

var checkZeros = function(matrix) {

 	var matrixHeight = matrix.length;
    var matrixWidth = matrix[0].length;
	var rowsToZero = [];
	var colsToZero = [];

	for(var i = 0; i < matrixHeight; i++) {
		for(var j = 0; j < matrixWidth; j++) {
			if(matrix[i][j] === 0) {
				rowsToZero[i] = true;
				colsToZero[j] = true;
			}
		}
	}

	return {
		rowsToZero: rowsToZero,
		colsToZero: colsToZero
	}
};

var zeroCol = function(matrix, col) {
	for(var i = 0; i < matrix.length; i++) {
		matrix[i][col] = 0;
	}
};

var zeroRow = function(matrix, row) {
	for(var j = 0; j < matrix[0].length; j++) {
		matrix[row][j] = 0;
	}
};

var zeroifyCols = function(matrix, zeroScan) {
  for (var col in zeroScan.colsToZeroify) {
    zeroCol(matrix, Number(col));  
  }
};

var zeroifyRows = function(matrix, zeroScan) {
  for (var row in zeroScan.rowsToZeroify) {
    zeroRow(matrix, Number(row));  
  }
};

var zeroMatrix = function(matrix) {

  if(matrix.length === 0) { return; }

  var zeroScan = checkZeros(matrix);

  zeroifyCols(matrix, zeroScan);
  zeroifyRows(matrix, zeroScan);

};


// Testing
var testMatrix = [
	[1, 1, 1, 1],
	[1, 1, 1, 1],
	[1, 0, 1, 1],
	[1, 1, 1, 1],
	[1, 1, 1, 1],
	[1, 1, 1, 1]
];

console.log(testMatrix)
zeroMatrix(testMatrix);
console.log(testMatrix)
