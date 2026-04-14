function node(val) {
    this.val = val;
    this.next = null;
}

var MyLinkedList = function () {
    this.head = null;
    this.size = 0;
};

/** ADD AT TAIL */
MyLinkedList.prototype.addAtTail = function (val) {
    let newNode = new node(val);

    if (this.head === null) {
        this.head = newNode;
    } else {
        let curr = this.head;

        while (curr.next !== null) {
            curr = curr.next;
        }

        curr.next = newNode;
    }

    this.size++;
};


MyLinkedList.prototype.print = function () {
    let curr = this.head;
    let res = "";

    while (curr !== null) {
        res += curr.val + " -> ";
        curr = curr.next;
    }

    console.log(res + "null");
};

/** TEST */
let list = new MyLinkedList();

list.addAtTail(10);
list.addAtTail(20);
list.addAtTail(30);

list.print(); // 10 -> 20 -> 30 -> null