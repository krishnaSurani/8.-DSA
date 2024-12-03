// Q3. Factorial Using Recursion
// Write a recursive function to compute the factorial of a non-negative integer `n`.
// **Example:**
// Input: `n = 5`
// Output: `120`

function fac(n)
{
    if(n == 0)
    {
        return 1; 
    }

    return n * fac(n-1);
}

console.log(fac(5));
