//Q4: Count Nodes
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function countNodes(head) {
    let count = 0;
    let current = head;

    
    while (current !== null) {
        count++;
        current = current.next; 
    }

    return count;
}


let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.new= new Node(-1);



console.log(countNodes(head))