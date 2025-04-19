class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        return this.first;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        }
        else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }

    dequeue() {
        if (this.first === null) {
            return null;
        }

        if(this.first === this.last) {
            return null;
        }
        // Remove the first in queue
        this.first = this.first.next;
        this.length--;
        return this;

    }
}

const myQueue = new Queue();
myQueue.enqueue('joy')
myQueue.enqueue('matt')
myQueue.enqueue('pavel')
myQueue.dequeue()
myQueue.dequeue()
console.log(myQueue)

// Joy
// Matt
// Pavel
// Samir