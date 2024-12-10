// ### Q6: Count Vowels
// Count the number of vowels in a given string.

// **Example:**
// ```
// Input:
// hello world

// Output:
// 3


function count()
{
    let str="hello world";
    let count=0;

    for(let i=0; i<str.length; i++)
        {
            if(str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u")
            {
              count ++;
            }

           
        }  
        return count;  
}

console.log(count());
