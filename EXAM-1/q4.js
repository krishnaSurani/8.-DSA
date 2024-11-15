// 4) Do, sorting of array using Selection Sort

let arr=[5,18,45,62,2,23];

for(let a=0; a<arr.length; a++)
{
    let max=a;

    for(let b=a+1; b<arr.length; b++)
    {
        if(arr[b] > arr[max])
        {
            max=b;
        }
    }

    let temp=arr[max];
    arr[max]=arr[a];
    arr[a]=temp;
}


console.log(arr);