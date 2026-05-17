function node(val) {
    this.val = val;
    this.next = null;
}

var MyLinkedList = function () {
    this.head = null;
    this.size = 0;
};

/** ADD AT INDEX */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    let newNode = new node(val);

    if (index < 0 || index > this.size) return;

    if (index === 0) {
        newNode.next = this.head;
        this.head = newNode;
    } else {
        let curr = this.head;

        for (let i = 0; i < index - 1; i++) {
            curr = curr.next;
        }

        newNode.next = curr.next;
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

list.addAtIndex(0, 10);
list.addAtIndex(1, 20);
list.addAtIndex(2, 30);
list.addAtIndex(1, 15);

list.print(); // 10 -> 15 -> 20 -> 30 -> null