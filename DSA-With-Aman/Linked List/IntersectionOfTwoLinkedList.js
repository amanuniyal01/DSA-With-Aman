// Definition for singly-linked list
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}


const getIntersectionNode = function(headA, headB) {
    // Store elements of headB into set.
    let store = new Set();

    while (headB) {
        store.add(headB);
        headB = headB.next;
    }
// Check if elements of headA is present inside headB or not.
    while (headA) {
        if (store.has(headA)) {
            return headA;
        }
        headA = headA.next;
    }

    return null;
};

// Helper: create linked list from array
const createList = (arr) => {
    let head = new ListNode(arr[0]);
    let curr = head;

    for (let i = 1; i < arr.length; i++) {
        curr.next = new ListNode(arr[i]);
        curr = curr.next;
    }

    return head;
};

// 🔥 IMPORTANT: create intersection manually
// Common part
let common = createList([8, 9, 10]);

// List A: 1 → 2 → 3 → 8 → 9 → 10
let headA = createList([1, 2, 3]);
let tempA = headA;
while (tempA.next) tempA = tempA.next;
tempA.next = common;

// List B: 4 → 5 → 8 → 9 → 10
let headB = createList([4, 5]);
let tempB = headB;
while (tempB.next) tempB = tempB.next;
tempB.next = common;

// Test
let result = getIntersectionNode(headA, headB);

if (result) {
    console.log("Intersection at node with value:", result.val);
} else {
    console.log("No intersection");
}