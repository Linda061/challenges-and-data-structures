const LinkedList = require("../linkedList");

function mergeSortedLists(list1, list2) {
    let current1 = list1.head;
    let current2 = list2.head;
    let mergedList = new LinkedList();  

    if (!current1 && !current2) return null;

    if (!current1) return list2;
    if (!current2) return list1;

   
    while (current1 && current2) {
        if (current1.data <= current2.data) {
            mergedList.add(current1.data);  
            current1 = current1.next;
        } else {
            mergedList.add(current2.data);  
            current2 = current2.next;
        }
    }

    while (current1) {
        mergedList.add(current1.data);
        current1 = current1.next;
    }

    while (current2) {
        mergedList.add(current2.data);
        current2 = current2.next;
    }

    return mergedList;  
}
module.exports = mergeSortedLists;