// // Definition for singly-linked list
// class ListNode {
//     constructor(val, next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }
// function isPalindrome(head) {
//     let arr = [];
//     let curr = head;

//     // Convert linked list to array
//     while (curr !== null) {
//         arr.push(curr.val);
//         curr = curr.next;
//     }

//     // Check palindrome
//     let left = 0;
//     let right = arr.length - 1;

//     while (left < right) {
//         if (arr[left] !== arr[right]) {
//             return false;
//         }
//         left++;
//         right--;
//     }

//     return true;
// }

// //  Create Linked List: 1 → 2 → 3 → 2 → 1
// let head = new ListNode(1);
// head.next = new ListNode(2);
// head.next.next = new ListNode(3);
// head.next.next.next = new ListNode(2);
// head.next.next.next.next = new ListNode(1);

// // Test
// console.log(isPalindrome(head)); // true



// Optimized Approach
// Definition of ListNode
class ListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

// Function to check palindrome
const palindromeLinkedList = (head) => {
    if (!head || !head.next) {
        return true;
    }

    // Step 1: Find middle
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Step 2: Reverse second half
    let prev = null;
    let curr = slow;

    while (curr !== null) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }

    // Step 3: Compare both halves
    let start = head;
    let end = prev;

    while (end !== null) {
        if (start.value !== end.value) {
            return false;
        }
        start = start.next;
        end = end.next;
    }

    return true; // ✅ you missed this
};

// Helper function to create linked list
const createLinkedList = (arr) => {
    let head = new ListNode(arr[0]);
    let current = head;

    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }

    return head;
};

// Test
const head = createLinkedList([1, 2, 3, 2, 1]);

console.log(palindromeLinkedList(head)); // true