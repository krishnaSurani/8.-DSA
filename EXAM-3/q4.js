// Q4. Fibonacci Using Recursion
// Write a recursive function to compute the `n`-th Fibonacci number.
// **Example:**
// Input: `n = 6`
// Output: `8`

function fibo(n)
{
    if (n <= 1)
    {
        return n;
    }

    return fibo(n-1) + fibo(n-2)
}

console.log(fibo(6));
