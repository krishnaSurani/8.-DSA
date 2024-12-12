// Implement the binary search algorithm to find an element in a sorted array. Explain both recursive and iterative approaches with examples. Example:
// Input: Array: [1, 3, 5, 7, 9, 11], Target: 7
// Output: Found at index 3. 

let arr = [1, 3, 5, 7, 9, 11];
let target=7;
let left = 0;
let right = arr.length-1;


while(left <= right)
{
    let mid=Math.floor((left + right)/2);

    if(arr[mid] == target)
    {
        console.log(mid);
        break;
    }
    else if(arr[mid] < target)
    {
        left = mid + 1;
    }
    else if(arr[mid] > target)
    {
        right = mid - 1;
    }
}