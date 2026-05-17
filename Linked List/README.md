Linked List

A Linked List is a linear data structure where elements (called nodes) are stored in non-contiguous memory locations.
Each node contains data and a reference (pointer) to the next node in the sequence.

Unlike arrays, linked lists do not require continuous memory allocation.

Node Structure

Each node has two parts:

[ Data | Next ]

Example:

10 → 20 → 30 → 40 → NULL

Data → value stored in the node

Next → pointer to the next node

NULL → indicates the end of the list

Types of Linked Lists
1. Singly Linked List

Each node points only to the next node.

Head → 10 → 20 → 30 → NULL

Traversal is only forward.

2. Doubly Linked List

Each node has two pointers.

[Prev | Data | Next]

Example:

NULL ← 10 ⇄ 20 ⇄ 30 → NULL

Traversal can be forward and backward.

3. Circular Linked List

The last node points back to the first node instead of pointing to NULL.

10 → 20 → 30
↑         ↓
└─────────┘

Used in round-robin scheduling and cyclic processes.

Basic Operations on Linked List
1. Insertion

Adding a new node.

Types:

Insert at beginning

Insert at end

Insert at specific position

Example:

Before: 10 → 20 → 30
Insert 5 at beginning

After: 5 → 10 → 20 → 30
2. Deletion

Removing a node from the list.

Example:

Before: 10 → 20 → 30
Delete 20

After: 10 → 30
3. Traversal

Visiting every node in the list.

10 → 20 → 30 → NULL
4. Searching

Finding whether a value exists in the list.

Example:

Search 20 → traverse nodes until found
Difference Between Array and Linked List
Feature	Array	Linked List
Memory Allocation	Contiguous memory	Non-contiguous memory
Size	Fixed (in many languages)	Dynamic
Access Time	Fast (O(1))	Slow (O(n))
Insertion	Costly (shifting required)	Efficient
Deletion	Costly (shifting required)	Efficient
Memory Usage	Less overhead	Extra memory for pointers
Advantages of Linked List

Dynamic size

Efficient insertion and deletion

No need for contiguous memory

Easy memory utilization

Disadvantages of Linked List

Extra memory for pointers

No random access (must traverse)

Slower searching compared to arrays

Time Complexity
Operation	Time Complexity
Access	O(n)
Search	O(n)
Insertion	O(1) (if position known)
Deletion	O(1) (if position known)
Simple Linked List Example (JavaScript)
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }
}

const list = new LinkedList();
list.insert(10);
list.insert(20);
list.insert(30);

console.log(list);