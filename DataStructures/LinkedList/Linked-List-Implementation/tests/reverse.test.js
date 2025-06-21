const LinkedList = require("../linkedList"); 
const reverse = require("../reverse/reverse");

describe("LinkedList reverse", () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
  });

  test("reverse the list", () => {
    list.add(1);
    list.add(2);
    list.add(3);
    list.add(4);
    list.add(5);

     reverse(list); 

    let values = [];
    let current = list.head;
    while (current) {
      values.push(current.data);
      current = current.next;
    }

    expect(values).toEqual([5, 4, 3, 2, 1]);
  });

  test("handling a single node list", () => {
    list.add(7);
    reverse(list); 
    
    expect(list.head.data).toBe(7);
    expect(list.head.next).toBe(null);
  });

  
  test("handling an empty list", () => {
    reverse(list); 
    expect(list.head).toBe(null); 
  });

  
  test("reverse a list with duplicated values", () => {
    list.add(1);
    list.add(2);
    list.add(2);
    list.add(3);
    list.add(4);

    reverse(list); 

    let values = [];
    let current = list.head;
    while (current) {
      values.push(current.data);
      current = current.next;
    }

    expect(values).toEqual([4, 3, 2, 2, 1]);
  });
});
