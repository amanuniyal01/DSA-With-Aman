
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}


var addTwoNumbers = function (l1, l2) {
    let ans = new ListNode(0); 
    let ansHead = ans;
    let carry = 0;

    while (l1 || l2 || carry) {
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;

        carry = Math.floor(sum / 10);
        let digit = sum % 10;

        let newNode = new ListNode(digit);
        ans.next = newNode;
        ans = ans.next;

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    return ansHead.next;
};



function createList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;

    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }

    return dummy.next;
}

//  Helper: Print linked list
function printList(head) {
    let result = [];
    while (head) {
        result.push(head.val);
        head = head.next;
    }
    console.log(result.join(" -> "));
}

let l1 = createList([2, 4, 3]); // 342
let l2 = createList([5, 6, 4]); // 465

let result = addTwoNumbers(l1, l2);

// Output
printList(result);  //  7 -> 0 -> 8