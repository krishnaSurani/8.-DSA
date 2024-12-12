// Create a program that uses a Map to count the frequency of each character in a string. Also, demonstrate the use of a Set to store only unique characters from the same string. 

function frequency(arr)
{
    let myMap= new Map();

    for(let value of arr)
    {
        if(myMap.has(value))
        {
            myMap.set(value,myMap.get(value) + 1)
        }
        else{
            myMap.set(value, 1);
        }
    }

    return myMap;
}

let arr = [1,1,2,3,3,3,3,4,5,5];
console.log(frequency(arr));
