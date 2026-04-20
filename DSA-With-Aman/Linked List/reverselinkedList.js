
class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

// Reverse Linked List 
function reverseList(head) {
    let prev = null;
    let curr = head;

    while (curr !== null) {
        let tempNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = tempNode;
    }

    return prev; // new head
}

// Helper function to print list
function printList(head) {
    let curr = head;
    let result = "";
    while (curr !== null) {
        result += curr.val + " -> ";
        curr = curr.next;
    }
    console.log(result + "null");
}

//  Create Linked List: 1 → 2 → 3 → 4 → 5
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

console.log("Original List:");
printList(head);

//  Reverse
head = reverseList(head);

console.log("Reversed List:");
printList(head);