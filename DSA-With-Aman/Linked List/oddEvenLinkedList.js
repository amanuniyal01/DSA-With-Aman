
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const oddEvenLinkedList = (head) => {
    // Edge case
    if (!head || !head.next) return head;
// Create three variables odd,even and evenStart
    let odd = head;
    let even = head.next;
    let evenStart = even;
// Run this loop till even.next!=null
    while (even && even.next) {
        odd.next = odd.next.next;
        even.next = even.next.next;

        odd = odd.next;
        even = even.next;
    }

    odd.next = evenStart;

    return head;
};

// Helper function to print list
const printList = (head) => {
    let curr = head;
    let result = [];
    while (curr) {
        result.push(curr.val);
        curr = curr.next;
    }
    console.log(result.join(" -> "));
};

// Create Linked List: 1 -> 2 -> 3 -> 4 -> 5
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

console.log("Original List:");
printList(head);

head = oddEvenLinkedList(head);

console.log("After Rearranging (Odd-Even):");
printList(head);