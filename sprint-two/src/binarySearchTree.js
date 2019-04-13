var BinarySearchTree = function(value) {
  var newTree = Object.create(BinarySearchTree.prototype);

  newTree.value = value;
  newTree.left = null;
  newTree.right = null;

};

BinarySearchTree.prototype.insert = function (value) {
  var node;
  for (var i = this; i.value !== null; i.value > value ? i = i.left : i = i.right) {
    node = i;
  }
  node > value ? node.left = BinarySearchTree(value) : node.right = BinarySearchTree(value);
};

BinarySearchTree.prototype.contains = function (value) {
  var node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
