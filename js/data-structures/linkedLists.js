'use strict';
//Linked Lists
function LinkedList() {
    this.head = null;
    this.tail = null;
}

function Node(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
}

LinkedList.prototype.printFromHead = function(searchValue) {
	let currentNode = this.head;
  	var str1 = "HEAD->"
    var str2 = "->"
 	var str3 = "<-TAIL"

  	if(currentNode) {

	  	while(currentNode) {
		  	str1 = str1.concat(currentNode.value)
		  	if(currentNode.next !== null) str1 = str1.concat(str2)
		    currentNode = currentNode.next; 
	  	}
	}
	else str1 = str1.concat(null)

    str1 = str1.concat(str3)
    console.log(str1)
}

LinkedList.prototype.addToHead = function(value) {
	const newNode = new Node(value, this.head, null);
	if (this.head) this.head.prev = newNode;
	else this.tail = newNode;
	this.head = newNode;

};

LinkedList.prototype.addToTail = function(value) {
    const newNode = new Node(value, null, this.tail);
    if (this.tail) this.tail.next = newNode;
    else this.head = newNode;
    this.tail = newNode;
};

LinkedList.prototype.removeHead = function() {
    if (!this.head) return null;
    let value = this.head.value;
    this.head = this.head.next;
  
    if (this.head) this.head.prev = null;
    else this.tail = null;
  
    return value;
};

LinkedList.prototype.removeTail = function() {
    if (!this.tail) return null;
    let value = this.tail.value;
    this.tail = this.tail.prev;
  
    if (this.tail) this.tail.next = null;
    else this.head = null;
  
    return value;
}

//Implementation
console.log("Linked Lists");
const list = new LinkedList();
list.addToHead(100);
list.addToHead(200);
list.addToHead(300);
list.addToTail(50);
console.log(list);
list.printFromHead();
list.removeTail();
list.printFromHead();
list.removeHead();
list.printFromHead()
list.removeTail();
list.printFromHead();
list.removeHead();
list.printFromHead();