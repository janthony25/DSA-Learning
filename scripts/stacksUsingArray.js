class Stack {
    constructor() {
       this.array = [];
    }

    peek() {
        return this.array[this.array.length - 1]
    }


    // top --> push
    // bottom --> last top
    push(value) {
        this.array.push(value);
        return this;
    }

    pop(){
        this.array.pop();
        return this;
    }
}

const myStack  = new Stack();
myStack.push('google')
myStack.push('discord')
myStack.peek()
console.log(myStack)