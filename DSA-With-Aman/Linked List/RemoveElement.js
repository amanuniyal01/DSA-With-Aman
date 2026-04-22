
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

// Function to remove elements
function removeElements(head, val) {
    // sentinel node...
    let sentinel = new ListNode(0);
    sentinel.next = head;

    let prev = sentinel;

    while (prev && prev.next) {
        if (prev.next.val === val) {
            prev.next = prev.next.next;
        } else {
            prev = prev.next;
        }
    }

    return sentinel.next;
}

// Helper: create linked list from array
function createList(arr) {
    let dummy = new ListNode(0);
    let curr = dummy;

    for (let num of arr) {
        curr.next = new ListNode(num);
        curr = curr.next;
    }

    return dummy.next;
}

// Helper: print linked list
function printList(head) {
    let curr = head;
    let result = [];

    while (curr) {
        result.push(curr.val);
        curr = curr.next;
    }

    console.log(result.join(" -> "));
}

// 🔥 Test
let head = createList([1, 2, 6, 3, 4, 5, 6]);
console.log("Original:");
printList(head);

head = removeElements(head, 6);

console.log("After removing 6:");
printList(head);