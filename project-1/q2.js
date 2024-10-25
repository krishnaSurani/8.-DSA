// 2. Transpose of a MatrixGiven a matrix, write a function to find its transpose.
// Input:  [
//           [1, 2],
//           [3, 4]
//         ]
// Output: [
//           [1, 3],
//           [2, 4]
//         ]


let arr=[
    [1, 2],
    [3, 4]
]
let temp=[]

for(let i=0; i<arr.length; i++)
    {
        temp[i]=[]
        for(let j=0; j<arr[i].length; j++)
        {
            temp[i][j] = arr[j][i];   
        }
    
        
        console.log(temp[i]);
    }
    