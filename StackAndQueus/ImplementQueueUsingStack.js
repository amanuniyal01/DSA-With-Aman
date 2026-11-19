var MyQueue = function () {

    //Intialize two Stacks
    this.s1 = [];
    this.s2 = [];
};
MyQueue.prototype.push = function (x) {

    // Normal Push Just add elements into s1.
    this.s1.push(x);
};

MyQueue.prototype.pop = function () {
    // if my s2 empty then only add otherwise return last element.
    //If we will not put this check then if a new element is pushed into queue then that will be return as pop 
    //that is wrong.
    if (this.s2.length === 0) {
        let n = this.s1.length;

        while (n > 0) {
            this.s2.push(this.s1.pop());
            n--;
        }
    }

    let popElement = this.s2.pop();

    return popElement;
};

MyQueue.prototype.peek = function () {
    if (this.s2.length === 0) {
        let n = this.s1.length;

        while (n > 0) {
            this.s2.push(this.s1.pop());
            n--;
        }
    }

    //Get the last element. 
    let peekElement = this.s2[this.s2.length - 1];

    return peekElement;
};

MyQueue.prototype.empty = function () {
    return this.s1.length === 0 && this.s2.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */