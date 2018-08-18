//TODO fix this

console.log('1.6');
// Given an image represented by an NxN matrix, where each pixel in the image is
// 4 bytes, write a method to rotate the image by 90 degrees. Can you do this in
// place?

Array.prototype.initialize = function() {
	var pixel = 0;

	for(var i=0; i<9; i++) {
	    this[i] = [];
	    for(var j=0; j<9; j++) {
	        this[i][j] = pixel;
	        pixel++;
	    }
	}

	return this;
};

Array.prototype.movePixels = function(row, col) {
	// starts at m[row][col]
	// moves to m[col][edge - row]
	var fromRow;
	var fromCol;
	var fromPixel;

	// first transformation
	var toRow = row; // 0
	var toCol = col; // 1
	var toPixel = this[row][col];

	// Do rotational transformation 4 times
	for (var i = 0; i < 9; i++) {
	  fromRow = toRow;
	  fromCol = toCol;
	  toRow = fromCol;
	  toCol = this.length - 1 - fromRow;

	  fromPixel = toPixel;
	  toPixel = this[toRow][toCol];
	  this[toRow][toCol] = fromPixel;
	}
};

Array.prototype.rotate = function() {

	for (var i = 0; i < this.length / 2; i++) {
	    for (var j = i; j < this.length - i; j++) {
	      this.movePixels(i, j);
	    }
	  }

	return this;
};


var matrix = new Array();
console.log(matrix.initialize());

var matrix2 = new Array();
console.log(matrix2.initialize());
console.log(matrix2.rotate());
