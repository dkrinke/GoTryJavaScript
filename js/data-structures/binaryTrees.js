//Binary Trees
function Node(val){
    this.value = val;
    this.left = null;
    this.right = null;
}

function BinarySearchTree(){
    this.root = null;
}     


BinarySearchTree.prototype.push = function(val){
   var root = this.root;

   if(!root){
      this.root = new Node(val);
      return;
   }

   var currentNode = root;
   var newNode = new Node(val); 

   while(currentNode){
      if(val < currentNode.value){
          if(!currentNode.left){
             currentNode.left = newNode;
             break;
          }
          else{
             currentNode = currentNode.left;
        }
     }
     else{
         if(!currentNode.right){
            currentNode.right = newNode;
            break;
         }
         else{
            currentNode = currentNode.right;
         }
     }
  }
};

var level = function(parent, ptr, lvl) {
  // base cases
  if (parent === null)
    return 0;

  console.log(parent);
 
  if (parent === ptr)
      return lvl;
 
  // Return level if Node is present in left subtree
  var l = level(parent.left, ptr, lvl + 1);
  if (l != 0) return l;

  // Else search in right subtree
  return level(parent.right, ptr, lvl + 1);
}

'use strict';
var isSibling = function(parent, node1, node2) {
  if (parent === null) return false;
 
  return ((parent.left === node1 && parent.right === node2) ||
          (parent.left === node2 && parent.right === node1) ||
          isSibling(parent.left, node1, node2) ||
          isSibling(parent.right, node1, node2));
}

var isCousin = function(parent, node1, node2) {
  console.log(parent, node1, node2)
  return ((level(parent, node1, 1) === level(parent, node2, 1)) && (!isSibling(parent, node1, node2)));
}

//Implementation
console.log("Binary Trees");
var bst = new BinarySearchTree();
bst.push(6);
bst.push(4);
bst.push(8);
bst.push(9);
bst.push(7);
bst.push(5);
bst.push(3);
console.log(bst)
console.log(bst.root)
console.log(bst.root.value)

console.log(isCousin(bst.root, new Node(5), new Node(7)), true);
console.log(isCousin(bst.root, new Node(5), new Node(8)), false);