// Write a function to reverse a queue using a stack. Provide a step-by-step explanation of how the reversal works.

function reverse() {
    let queue = [];

    function enqueue(q, value) {
        q.push(value);
    }

    function dequeue() {
        return queue.shift();
    }


    function reversalQueue() {
        let stack = [];
        let newqueue = [];

        while (queue.length > 0) {
            let a = dequeue();
            stack.push(a);
        }
        while (stack.length > 0) {
            enqueue(newqueue, stack.pop());
        }

        return newqueue;
    }


    enqueue(queue, 1);
    enqueue(queue, 2);
    enqueue(queue, 3);
    enqueue(queue, 4);
    enqueue(queue, 5);
    enqueue(queue, 6);
    return reversalQueue();
}





console.log(reverse());
