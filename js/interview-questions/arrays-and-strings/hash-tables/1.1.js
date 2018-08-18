console.log('1.1');
// Implement an algorithm to determine if a string has all unique characters. 
function UniqueWithHashMap(str) {
	var dict = {};

	for (var i = 0; i < str.length; i++) {
		if(dict[str[i]] !== undefined ) {
			return false;
		} else {
			dict[str[i]] = 1;
		}
	}

	return true;
}

console.log(UniqueWithHashMap('string')) //Returns true
console.log(UniqueWithHashMap('strings')) //Returns false

// What if you cannot use additional data structures?
function UniqueWithoutHashMap(str) {

	for (var i = 0; i < str.length; i++) {
		for (var j = i+1; j < str.length; j++) {
			if(str[i] === str[j]) return false
		}
	}

	return true;
}

console.log(UniqueWithoutHashMap('string')) //Returns true
console.log(UniqueWithoutHashMap('strings')) //Returns false