let arr=[5,6,8,7,4,1]

for(let x=0; x<arr.length-1; x++)
{
    let min=x;
    for(let i=x+1; i<arr.length; i++)
    {
        if(arr[i] < arr[min])
        {
            min = i;
        }
    }

    let c= arr[min];
    arr[min]=arr[x];
    arr[x]=c;
}

console.log(arr);
