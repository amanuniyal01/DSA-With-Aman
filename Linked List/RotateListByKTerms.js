//  1-> 2 -> 3 -> 4 -> 5->null  k =2
//  5 -> 1 -> 2 -> 3 -> 4 -> null  1st rotation
//  4 -> 5 -> 1 -> 2 -> 3 -> null  2nd Rotation

const rotateListByKTerms = (list) => {

    if (head == null || head.next == null) {
        return head;
    }


    let length = 0;

    let curr = head;
    let tail = null;

    //Get the length of linked list.
    while (curr !== null) {
        tail = curr
        curr = curr.next
        length++
    }


    // If there is nothing to rotate just return normal list.
    if (k == 0) return head

    //Doing this to save iterations like if k=20 something so by doing this we will get a small number.
    k = k % length

    //Reset current to head;
    curr = head;

    //Run the loop from 0 to length - k times i.e. Reach the previous node that we want to add at head.
    for (let i = 0; i < length - k - 1; i++) {
        curr = curr.next
    }

    let newHead = curr.next
    curr.next = null;
    tail.next = head

    return newHead;

}