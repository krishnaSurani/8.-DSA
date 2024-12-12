// Given an array, write a function to find the next greater element for each element in the array. If no such element exists, return -1. Example:
// Input: [4, 5, 2, 25]
// Output: [5, 25, 25, -1] 

let arr = [4, 5, 2, 25];
let newarr = Array(arr.length).fill(-1);
let stack = [];

for (let i = 0; i < arr.length; i++) {
    stack.push(i);

    if (arr[i + 1] > arr[i]) {
        // console.log(arr[i + 1]);

        while (stack.length > 0) {
            let j = stack[stack.length - 1];
            newarr[j] = arr[i + 1];
            stack.pop();
        }
    }
}


console.log(newarr);
