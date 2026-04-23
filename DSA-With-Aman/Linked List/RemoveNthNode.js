// Definition for singly-linked list
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

// Function (Length Method)
function removeNthFromEnd(head, n) {
    let sentinel = new ListNode(0);
    sentinel.next = head;

    let length = 0;
    let curr = head;

    // Step 1: Calculate length
    while (curr) {
        length++;
        curr = curr.next;
    }

    // Step 2: Find node before the one to delete
    let prev = sentinel;
    for (let i = 0; i < length - n; i++) {
        prev = prev.next;
    }

    // Step 3: Delete node
    prev.next = prev.next.next;

    return sentinel.next;
}

// Helper: Create Linked List
function createLinkedList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;

    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }

    return dummy.next;
}

// Helper: Print Linked List
function printList(head) {
    let result = [];
    while (head) {
        result.push(head.val);
        head = head.next;
    }
    console.log(result.join(" -> "));
}

// 🔥 Test
let head = createLinkedList([1, 2, 3, 4, 5]);
let n = 2;

let updatedHead = removeNthFromEnd(head, n);
printList(updatedHead);  // Output: 1 -> 2 -> 3 -> 5