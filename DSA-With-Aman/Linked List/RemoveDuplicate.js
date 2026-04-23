// Definition for singly-linked list
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

// Function: Remove duplicates
function removeDuplicates(head) {
    if (!head) return null;

    let seen = new Set();
    let curr = head;
    let prev = null;

    while (curr) {
        if (seen.has(curr.val)) {
            // Duplicate → remove node
            prev.next = curr.next;
        } else {
            // First time seeing value
            seen.add(curr.val);
            prev = curr;
        }
        curr = curr.next;
    }

    return head;
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

// 🔥 Test Case
let head = createLinkedList([1, 2, 3, 2, 4, 1, 5]);

console.log("Original:");
printList(head);

head = removeDuplicates(head);

console.log("After Removing Duplicates:");
printList(head);  // Output: 1 -> 2 -> 3 -> 4 -> 5