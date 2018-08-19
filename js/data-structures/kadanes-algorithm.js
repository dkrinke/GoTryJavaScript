'use strict';
console.log(`Kadane's Algorithm`);

// For example, in the array [-5, 6, 7, 1, 4, -8, 16], the maximum sum is 26. 
// That is because adding 6 + 7 + 1 + 4 + -8 + 16 gives us 26.

var findMaxSum = function(array) {
	var highestSum = 0;
	var currentSum = 0;

	for(var i = 0; i < array.length; i++) {
		currentSum = 0;
		for(var j = i; j < array.length; j++) {
			currentSum += array[j];
			if(highestSum < currentSum) highestSum = currentSum;
		}
	}

	return highestSum;
};

var findMaxSumWithKadanes = function(array) {
	var highestSum = 0;
	var currentSum = 0;

	for(var i = 0; i < array.length; i++) {
		currentSum = Math.max(array[i], currentSum + array[i]);
		if(highestSum < currentSum) highestSum = currentSum;
	}

	return highestSum;
};


var array = [-5, 6, 7, 1, 4, -8, 16];
console.log(findMaxSum(array));
console.log(findMaxSumWithKadanes(array));