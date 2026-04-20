// Definition for singly-linked list
class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}
function isPalindrome(head) {
    let arr = [];
    let curr = head;

    // Convert linked list to array
    while (curr !== null) {
        arr.push(curr.val);
        curr = curr.next;
    }

    // Check palindrome
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        if (arr[left] !== arr[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}

//  Create Linked List: 1 → 2 → 3 → 2 → 1
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(2);
head.next.next.next.next = new ListNode(1);

// Test
console.log(isPalindrome(head)); // true