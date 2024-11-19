// Find the Maximum and Minimum in an Array
// Given an array of integers, return both the maximum and minimum values in the array using linear search.


let arr = [3, 7, 1, 5, 9, 0, 2];
let min = Infinity
let max = -Infinity;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
    if (arr[i] < min) {
        min = arr[i];
    }
}

console.log(max, min);

