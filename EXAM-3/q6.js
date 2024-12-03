// Q6. Basic Binary Search
// Write a function that implements binary search to find the target in a sorted array. Return
// the index of the target, or `-1` if not found.
// **Example:**
// Input: `arr = [1, 3, 5, 7, 9, 11]`, `target = 7`
// Output: `3`


let arr = [1, 3, 5, 7, 9, 11];
let target = 7;
let left=0;
let right=arr.length-1;

function find()
{
    while(left <= right)
        {
            let mid=Math.floor((left + right)/2);
        
            if(arr[mid]==target)
            {
                return mid;
            }
            if(arr[mid] < target)
            {
                left = mid + 1;
            }
            if(arr[mid] > target)
            {
                right = mid - 1;
            }
        }

        return -1;

}

console.log(find());
