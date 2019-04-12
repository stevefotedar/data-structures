// A tree is a hierarchical data structure consisting of a node (potentially) with children. The children are trees unto themselves, that is, nodes with (potential) children. For this reason the tree is referred to as a recursive data structure.

// Tree image

// A tree would be great for....
// Making a family tree.

// A tree class, in functional with shared methods style, with the following properties:
//   .children property, an array containing a number of subtrees
//   .addChild() method, takes any value, sets that as the target of a node, and adds that node as a child of the tree
//   .contains() method, takes any input and returns a boolean reflecting whether it can be found as the value of the target node or any descendant node
// What is the time complexity of the above functions?

var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {  
  if (this.value === target){
    return true;
  }
  for(var i = 0; i < this.children.length; i++){
    if(this.children[i].contains(target) === true){
      return true;
    }
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
