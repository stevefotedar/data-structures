

// Instantiate a new graph
var Graph = function() {
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.hasOwnProperty(node)
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for(var i = 0; i < this[node].length; i++){
    this.removeEdge(this[node][i], node);
  }
  delete this[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this[fromNode].includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this[fromNode].push(toNode);
  this[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this[fromNode].splice(this[fromNode].indexOf(toNode),1);
  this[toNode].splice(this[toNode].indexOf(fromNode),1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  var nodes = Object.keys(this);
  for (var i = 0; i < nodes.length; i++) {
    cb(nodes[i]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


