// Stack.js

class Stack {
    constructor() {
        this.stack = [];
        this.pointer = -1; // Pointer to current position in stack
    }

    push(value) {
        // Remove elements after current pointer when pushing new value
        this.stack.splice(this.pointer + 1, this.stack.length - this.pointer - 1);
        this.stack.push(value);
        this.pointer++;
    }

    pop() {
        if (this.pointer >= 0) {
            const item = this.stack[this.pointer];
            this.pointer--;
            return item;
        }
        return null; // Stack underflow
    }

    peek() {
        if (this.pointer >= 0) {
            return this.stack[this.pointer];
        }
        return null; // Stack empty
    }

    isEmpty() {
        return this.pointer === -1;
    }

    printStack() {
        return this.stack.slice(); // Return a copy of the stack
    }
}

// Export the Stack class
export default Stack;
