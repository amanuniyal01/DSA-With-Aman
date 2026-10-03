//  1-> 2 -> 3 -> 4 -> 5->null  k =2
//  5 -> 1 -> 2 -> 3 -> 4 -> null  1st rotation
//  4 -> 5 -> 1 -> 2 -> 3 -> null  2nd Rotation

const rotateListByKTerms = (head, k) => {

    // Empty list or only one node
    if (head === null || head.next === null) {
        return head;
    }

    let length = 0;
    let curr = head;
    let tail = null;

    // Find length and tail
    while (curr !== null) {
        tail = curr;
        curr = curr.next;
        length++;
    }

    // Avoid unnecessary rotations
    k = k % length;

    // If k is 0, no rotation is needed
    if (k === 0) {
        return head;
    }

    // Move to the node just before the new head
    curr = head;

    for (let i = 0; i < length - k - 1; i++) {
        curr = curr.next;
    }

    // The next node becomes the new head
    let newHead = curr.next;

    // Break the list
    curr.next = null;

    // Connect old tail to old head
    tail.next = head;

    return newHead;
};