function node(val) {
    this.val = val;
    this.next = null;
}

var MyLinkedList = function () {
    this.head = null;
    this.size = 0;
};

/** GET VALUE AT INDEX */
MyLinkedList.prototype.get = function (index) {
    if (index < 0 || index >= this.size) {
        return -1;
    }

    let curr = this.head;

    for (let i = 0; i < index; i++) {
        curr = curr.next;
    }

    return curr.val;
};

/** PRINT LIST */
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

/* Manually creating linked list: 10 -> 15 -> 20 -> 30 */
let n1 = new node(10);
let n2 = new node(15);
let n3 = new node(20);
let n4 = new node(30);

n1.next = n2;
n2.next = n3;
n3.next = n4;

list.head = n1;
list.size = 4;

/** OUTPUT */
list.print(); // 10 -> 15 -> 20 -> 30 -> null

console.log(list.get(0)); // 10
console.log(list.get(1)); // 15
console.log(list.get(2)); // 20
console.log(list.get(3)); // 30
console.log(list.get(4)); // -1