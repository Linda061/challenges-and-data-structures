const LinkedList = require("./linkedList");

describe("LinkedList", () => {
  let list;

  
  beforeEach(() => {
    list = new LinkedList();  
  });

  test("should add a node to the end of the list", () => {
    list.add(7); 
    expect(list.includes(7)).toBe(true); 
  });

  test("should print the list correctly", () => {
    list.add(7);  
    list.add(14); 
    list.add(21); 

    const consoleSpy = jest.spyOn(console, 'log');  
    list.print();
    expect(consoleSpy).toHaveBeenCalledWith("head -> 7 -> 14 -> 21 -> null");
    consoleSpy.mockRestore(); 
  });

  test("should remove a node from the list", () => {
    list.add(7);  
    list.add(14); 
    list.remove(7); 
    expect(list.includes(7)).toBe(false); 
  });

  test("should return false if node is not found", () => {
    list.add(7);  
    list.add(14); 
    expect(list.includes(21)).toBe(false); 
  });

  test("should insert a node at a specific index", () => {
    list.add(7);  
    list.add(14); 
    list.insertAt(10, 1); 
    expect(list.includes(10)).toBe(true); 
  });

  test("should not insert at an invalid index", () => {
    list.add(7);  
    list.add(14); 
    list.insertAt(21, -1); 
    expect(list.includes(21)).toBe(false); 
  });

  
  test("should handle remove from an empty list", () => {
    list.remove(7);  
    expect(list.includes(7)).toBe(false); 
  });

  test("should handle insert at invalid index", () => {
    list.add(7);  
    list.add(14); 
    list.insertAt(21, -1); 
    expect(list.includes(21)).toBe(false); 
  });

  test("should handle insert at index greater than length", () => {
    list.add(7); 
    list.add(14); 
    list.insertAt(21, 5); 
    expect(list.includes(21)).toBe(false); 
  });

  test("should handle print on an empty list", () => {
    const consoleSpy = jest.spyOn(console, 'log');
    list.print(); 
    expect(consoleSpy).toHaveBeenCalledWith("head -> null");
    consoleSpy.mockRestore();
  });
});
