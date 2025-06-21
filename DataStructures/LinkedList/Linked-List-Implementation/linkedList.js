const Node = require("./nodeClass");

class LinkedList {
  constructor() {
    this.head = null;  
  }

  add(data) {
    const newNode = new Node(data); 

    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let current = this.head;

    while (current.next !== null) {
      current = current.next;
    }

    current.next = newNode;

  }

 
  print() {
  let current = this.head;
  
  if (current === null) {
    console.log("head -> null");  
    return;
  }

  let result = "";
  
  while (current !== null) {
    result += current.data + " -> ";
    current = current.next;
  }

  result += "null";  
  console.log("head -> " + result);  
}

  
  remove(data) {
    if (this.head === null) {
      console.log("List is empty"); 
      return;
    }

    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next !== null && current.next.data !== data) {
      current = current.next;
    }

    if (current.next === null) {
      console.log("Data not found in list");
      return;
    }

    current.next = current.next.next;
  }

  
  includes(data) {
    let current = this.head;
    while (current !== null) {
      if (current.data === data) {
        return true; 
      }
      current = current.next;
    }
    return false; 
  }

  
  insertAt(data, index) {
    if (index < 0) {
      console.log("Invalid index");
      return;
    }

    const newNode = new Node(data);

    if (index === 0) {
      newNode.next = this.head; 
      this.head = newNode;
      return;
    }

    let current = this.head;
    let count = 0;

    while (current !== null && count < index - 1) {
      count++;
      current = current.next;
    }

    if (current === null) {
      console.log("Index out of bounds");  
      return;
    }

    newNode.next = current.next;
    current.next = newNode;
  }

}


module.exports = LinkedList;