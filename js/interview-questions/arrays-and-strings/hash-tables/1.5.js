'use strict';
console.log('1.5');
// Implement a method to perform basic string compression using the counts
// of repeated characters. For example, the string aabcccccaaa would become
// a2blc5a3. If the "compressed" string would not become smaller than the original
// string, your method should return the original string.

function Compress(str) {

	var compressedStr = '';
	var currentChar = '';
	var currentCount = '';
	var maxCount =0;

	for (var i = 0; i < str.length; i++) {
		if (currentChar !== str[i]) {
			compressedStr = compressedStr + currentChar + currentCount;
			maxCount = Math.max(maxCount, currentCount);
			currentChar = str[i];
			currentCount = 1;
		} else {
			currentCount++;
		}
	}
	
	compressedStr = compressedStr + currentChar + currentCount;
  	maxCount = Math.max(maxCount, currentCount);

	return maxCount === 1 ? str : compressedStr;
}


console.log(Compress('strings'))