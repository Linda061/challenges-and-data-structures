const LinkedList = require("../linkedList");

function reverse(linkedList) {
  let current = linkedList.head;
  let prev = null;
  let values = [];

  if (linkedList.head === null) {
    console.log("the list is empty.");
    return linkedList;
  }

  if (linkedList.head.next === null) {
    console.log("this list contains one node only so no need to reverse");
    return linkedList;
  }

  while (current !== null) {
    if (values.includes(current.data)) {
      console.log("duplicate value found:", current.data);
    }
      values.push(current.data);

    let nextNode = current.next;
    current.next = prev;  
    prev = current;
    current = nextNode;
  }

  linkedList.head = prev;
  console.log("the list has been reversed.");
  
  return linkedList;
}

module.exports = reverse;
