
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}


var addTwoNumbers = function (l1, l2) {

    //Node to store sum result.
    let ans = new ListNode(0);
    let ansHead = ans;
    let carry = 0;

    //Do this till either l1 , l2 , carry exist.
    while (l1 || l2 || carry) {

        //l1?l1.val : 0 => If l1 ends before l2 so it'll become null to avoid this using optional chaining that it will be set to 0. same with l2.
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;

        //First digit of sum i.e. 20 => 2
        carry = Math.floor(sum / 10);

        //Last digit of sum i.e> 10 => 0
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