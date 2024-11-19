// Find the First Occurrence of a Target Element
// Given an array of integers, find the first index where a target element appears. Return -1 if the target is not found.

function find()
{
    let arr=[10,20,30,40,50]
    let targer=30;

    for(let i=0; i<arr.length; i++)
    {
        if(arr[i]==targer)
        {
            return i;
        }
    }
}

console.log(find());
