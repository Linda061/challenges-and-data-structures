const LinkedList = require("./linkedList");
const reverse = require("./reverse/reverse");

const list = new LinkedList();

list.add(5);
list.add(10);
list.add(20);
list.add(30);

list.print();

reverse(list); 

console.log("Reversed List:");
list.print();


list.remove(10);  
list.print();  


console.log(list.includes(20));  
console.log(list.includes(10)); 

list.insertAt(15, 2); 
list.print();  