
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}


var mergeTwoLists = function (l1, l2) {
    let newNode = new ListNode(-1);
    let curr = newNode;

    while (l1 && l2) {
        if (l1.val < l2.val) {
            curr.next = l1;
            l1 = l1.next;
        } else {
            curr.next = l2;
            l2 = l2.next;
        }
        curr = curr.next;
    }

    if (!l1) {
        curr.next = l2
    }
    if (!l2) {
        curr.next = l1
    }

    return newNode.next;
};


function createList(arr) {
    let dummy = new ListNode(-1);
    let curr = dummy;

    for (let num of arr) {
        curr.next = new ListNode(num);
        curr = curr.next;
    }

    return dummy.next;
}


function printList(head) {
    let result = [];
    while (head) {
        result.push(head.val);
        head = head.next;
    }
    console.log(result.join(" -> "));
}


let l1 = createList([1, 3, 5]);
let l2 = createList([2, 4, 6]);

let merged = mergeTwoLists(l1, l2);

printList(merged);