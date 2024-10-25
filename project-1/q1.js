// 1. Sum of Diagonal Elements
// Write a program to find the sum of the diagonal elements of a square matrix.
// Input: [
// [2, 3, 4],
// [5, 6, 7],
// [8, 9, 1]
// ]
// Output: 9

let arr =[
    [2, 3, 4],
    [5, 6, 7],
    [8, 9, 1]
]
let sum=0;

for(let i=0; i<arr.length; i++)
{
    for(let j=0; j<arr[i].length; j++)
    {
        arr[i][j] = arr[i][j];   
    }

    console.log(arr[i]);
    
}
for(i=0,j=0; i<arr.length; i++,j++)
	{
		sum=sum+arr[i][j];
	}

    console.log("sum =",sum);
    