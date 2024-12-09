let str = "{{()}}"
let stack = [];

let obj = { '}': '{', ']': '[', ')': '(' }

function isBlance() {
        for (let el of str) {
                if (['{', '[', '('].includes(el)) {
                        stack.push(el)
                }
                else if (stack.length == 0 || (stack.pop() != obj[el])) {
                        console.log(el);

                        return false

                }


        }

        if (stack.length > 0) {
                return false;
        }
        else {
                return true;
        }

}


console.log(isBlance());