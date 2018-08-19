'use strict';
console.log('1.8');
// Assume you have a method isSubstring which checks if one word is a
// substring of another. Given two strings, si and s2, write code to check if s2 is
// a rotation of si using only one call to isSubstring (e.g.,"waterbottle"is a rotation
// of "erbottlewat").

var isSubstring = function(s1, s2) {

	if (s1.length !== s2.length) return false;

	if(s1.length === 1 && (s1 === s2)) return true;

	for(var i = 1; i < s2.length; i++) {
		
		var sub1 = s2.substring(0,i);
		var sub2 = s2.substring(i,s2.length);
		var rotatedStr = sub2 + sub1;
		
		if(s1 === rotatedStr) return true;
	}

	return false;
}

var isSubstringWithIncludes = function(s1, s2) {

	if (s1.length !== s2.length) return false;
  	return (s2 + s2).includes(s1);
}

var s1 = 'waterbottle';
var s2 = 'erbottlewat';
var s3 = 'bottlerewat';
var s4 = 'a';
var s5 = 'a';
var s6 = 'ab'

console.log('isSubstring');
console.log(isSubstring(s1,s2), true);
console.log(isSubstring(s1,s3), false);
console.log(isSubstring(s4,s5), true);
console.log(isSubstring(s4,s6), false);

console.log('isSubstringWithIncludes');
console.log(isSubstringWithIncludes(s1,s2), true);
console.log(isSubstringWithIncludes(s1,s3), false);
console.log(isSubstringWithIncludes(s4,s5), true);
console.log(isSubstringWithIncludes(s4,s6), false);
