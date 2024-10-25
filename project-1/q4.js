// 4. Sort the Array with any sorting Algorithm 
// Input [5,6,8,7,4,6,3,9,2,1] 
// Output[1,2,3,4,5,6,7,8,9]


let arr=[5,6,8,7,4,6,3,9,2,1];


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
    
        let temp= arr[min];
        arr[min]=arr[x];
        arr[x]=temp;
    }
    
    console.log(arr);