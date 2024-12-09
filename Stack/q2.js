let array = [4, 5, 2, 25];
let arr = Array(array.length).fill(-1)
let stack = []

for (let a = 0; a < array.length; a++) {

        stack.push(a)
        if (array[a + 1] > array[a]) {
                console.log(array[a + 1])

                while (stack.length > 0) {
                        let b = stack[stack.length - 1]
                        arr[b] = array[a + 1]
                        stack.pop()
                }
        }

}
console.log(arr);