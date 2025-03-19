//calculateSum
function calculateSum(a, b) {
    return a + b;
}

console.log(calculateSum(5, 10));

//ISEven
function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(10));

//FindMax
function findMax(arr) {
    if (arr.length === 0) {
        return null;
    }
    return Math.max(...arr);
}
console.log(findMax([10, 25, 78, 45, 46,105, 4]));

// filterOddNumbers 
function filterOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
}
console.log(filterOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]));

//countWords
function countWords(str) {
    if (!str.trim()) {
        return 0; 
    }
    return str.trim().split(/\s+/).length;
}

console.log(countWords("Hello world!"));

//removeDuplicates
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); 