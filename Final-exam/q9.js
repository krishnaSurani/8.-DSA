// Given an array that has been , write a program to find the index of a target value using a modified binary search algorithm. If the target is not found, return -1.Example:
// Input: Array = [4, 5, 6, 7, 0, 1, 2], Target = 0
// Output: 4
// Input: Array = [4, 5, 6, 7, 0, 1, 2], Target = 3
// Output: -1

function find()
{
    let arr = [4, 5, 6, 7, 0, 1, 2];
let target=0;
let left = 0;
let right = arr.length-1;


while(left <= right)
{
    let mid=Math.floor((left + right)/2);

    if(arr[mid] == target)
    {
        return mid;
    }
    else if(arr[mid] > arr[left])
    {
        if(target <= arr[mid] && target >= arr[left])
        {
            right = mid - 1;
        }
        else{
            left = mid + 1;
        }
    }
    else{
        if(target >= arr[mid] && target <= arr[left])
        {
            left = mid + 1;
        }
        else{
            right = mid - 1;
        }
    }
}
    return -1;
}

console.log(find());
