console.log('1.3');
// Given two strings, write a method to decide if one is a permutation of the other.

function Permutation(str1, str2) {
    return (str1).localeCompare(str2) === 0;
}

console.log(Permutation('abc','abc'))
console.log(Permutation('abc','abcd'))


function PermutationWithoutLocalCompare(str1, str2) {
    var sortedStr1 = str1.split('').sort().join('');
    var sortedStr2 = str2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

console.log(PermutationWithoutLocalCompare('abc','abc'))
console.log(PermutationWithoutLocalCompare('abc','abcd'))
