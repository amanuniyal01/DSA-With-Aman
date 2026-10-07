
//  1 -> 2 -> 3 -> 4
// 2 -> 1 -> 3 -> 4


const SwapNodesInPairs = (head) => {

    // Dummy node comes before the head.
    // dummy -> 1 -> 2 -> 3 -> 4
    let dummy = new ListNode(0);
    dummy.next = head;

    // prev points to the node before the pair.
    let prev = dummy;

    // We need at least two nodes to swap.
    while (prev.next !== null && prev.next.next !== null) {

        // First node of the pair.
        let first = prev.next;

        // Second node of the pair.
        let second = first.next;

        // Node after the pair.
        let third = second.next;


        // Connect prev to second.
        //
        // prev -> second
        prev.next = second;

        // Connect second to first.
        //
        // second -> first
        second.next = first;

        // Connect first to third.
        //
        // first -> third
        first.next = third;


        // Move prev to the end of the swapped pair.
        //
        // prev
        //   ↓
        // 2 -> 1 -> 3 -> 4
        //      ↑
        //     first
        //
        // first is now the last node of this pair.
        prev = first;
    }

    return dummy.next;
};