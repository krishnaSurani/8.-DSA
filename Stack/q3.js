
function isPalindrome(str) {

    let stack = [];
    let ans = ""
    for (let char of str) {
            stack.push(char)
    }

    for (let el of str) {
            ans += stack.pop()
    }


    console.log(ans);

    return ans == str

}

console.log(isPalindrome("radar"));