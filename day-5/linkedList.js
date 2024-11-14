class Node{
    constructor()
    {
        this.data = data;
        this.next = null;
    }
}


class singleLinkedList{
    constructor()
    {
        this.head = null;
    }

    append(a)
    {
        let newNode = new Node(a)
        if(!this.head)
        {
            this.head = newNode
        }
        else{
            let current = this.head;
            while(current.next != null)
            {
                current = current.next;
            }
            current.next = newNode
        }
    }
}


let data = new singleLinkedList()
data.append(10)
data.append(20)
data.append(30)

console.log(data);
