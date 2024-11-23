// Reverse a String Using Two Pointers
// Given a string, reverse it using two pointers (one at the start and one at the end).

// Example:
// Input: "hello"
// Output: "olleh"



let n = "hello";
let b = n.split("")
let l = 0, r = n.length - 1;

while (l < r) {

        let tem = b[l];
        b[l] = b[r]
        b[r] = tem
        
        l++;
        r--

}
n = b.join("")

console.log(n)





