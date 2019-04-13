var BinarySearchTree = function(value) {
  var newTree = Object.create(binTreeMethods);

  newTree.value = value;
  newTree.left = null;
  newTree.right = null;
  return newTree;
};

binTreeMethods = {};

binTreeMethods.insert = function (value) {
  if (!this.contains(value)) {
    var node;
    for (var i = this; i !== null; i.value > value ? i = i.left : i = i.right) {
      node = i;
    }
    // console.log(node);
    node.value > value ? node.left = BinarySearchTree(value) : node.right = BinarySearchTree(value);
  }
};

binTreeMethods.contains = function (target) {
  for (var currentNode = this; currentNode !== null; currentNode.value > target ? currentNode = currentNode.left : currentNode = currentNode.right) {
    if (currentNode.value === target) {
      return true;
    }
  }
  return false;
};

binTreeMethods.depthFirstLog = function (callBack) {
  callBack(this.value);
  if (this.left) {
    this.left.depthFirstLog(callBack);
  }
  if (this.right) {
    this.right.depthFirstLog(callBack);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
