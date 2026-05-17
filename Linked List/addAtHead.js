function node(val) {
    this.val = val;
    this.next = null;
}

var MyLinkedList = function () {
    this.head = null;
    this.size = 0;
};

/** ADD AT HEAD */
MyLinkedList.prototype.addAtHead = function (val) {
    let newNode = new node(val);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
};

/** PRINT (for testing) */
MyLinkedList.prototype.print = function () {
    let curr = this.head;
    let res = "";

    while (curr !== null) {
        res += curr.val + " -> ";
        curr = curr.next;
    }

    console.log(res + "null");
};


let list = new MyLinkedList();

list.addAtHead(10);
list.addAtHead(20);
list.addAtHead(30);

list.print();  // 30 -> 20 -> 10 -> null