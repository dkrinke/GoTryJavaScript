console.log('1.2');
// Implement a function void reverse(char* str) 
// in C or C++ which reverses a nullterminated string.

function Reverse(str) {
	var str2 = '';

	for (var i = str.length-1; i > -1; i--) {
		str2 = str2.concat(str[i]);
	}

	return str2;
}

console.log(Reverse('string'));

// Reverses a string inline recursively
function ReverseInLineRecursively_1(str) {
	var len = str.length;
  	
  	if (len > 1) {
    	return str[len - 1] + arguments.callee(str.substring(1, len - 1)) + str[0];
  	}
  	return str;
}

console.log(ReverseInLineRecursively_1('string'));

// Reverses a string inline recursively
function ReverseInLineRecursively_2(str) {
	var len = str.length;
  	
  	if (len > 1) {
    	return str[len - 1] + ReverseInLineRecursively_2(str.substring(1, len - 1)) + str[0];
  	}
  	return str;
}

console.log(ReverseInLineRecursively_2('string'));