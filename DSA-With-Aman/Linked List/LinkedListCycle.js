// Definition for singly-linked list
function ListNode(val) {
    this.val = val;
    this.next = null;
}

// Function to detect cycle
function hasCycle(head) {
    let curr = head;
    let seenNodes = new Set();

    while (curr !== null) {
        if (seenNodes.has(curr)) {
            return true;
        } else {
            seenNodes.add(curr);
            curr = curr.next;
        }
    }
    return false;
}

// ----------- TESTING CODE -----------

// Creating linked list: 1 -> 2 -> 3 -> 4 -> 5
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

// 🔁 Create a cycle manually
// 5 -> points back to node with value 3
head.next.next.next.next.next = head.next.next;

// Call function
let result = hasCycle(head);

// Print result
console.log("Cycle exists:", result);