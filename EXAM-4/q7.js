// ### Q7: Reverse String

// Reverse the given string.

// **Example:**
// ```
// Input:
// hello

// Output:
// olleh


function Reverse()
{
    let str="hello";
    let stack=[];

    for(let i=0; i<str.length; i++)
    {
        stack.push(str[i]);
    }

    let ans="";

    while(stack.length > 0)
    {
        ans += stack.pop();
    }
    console.log(ans);
    


}

Reverse();
