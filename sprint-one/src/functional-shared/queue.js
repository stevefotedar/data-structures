// Functional instantiation with shared methods: same as step 1, but with shared methods
// Do:
// Work within the src/functional-shared/ folder
// Create an object that holds the methods that will be shared by all instances of the class
// Use the keyword this in your methods
// Use _.extend to copy the methods onto the instance
// Don't:
// Use the keyword new or prototype chains


var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  newQueue.storage = {};
  _.extend(newQueue, queueMethods);
  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.size()] = value;
};

queueMethods.dequeue = function() {
  var dequeuedValue = this.storage['0'];
  for (var i = 0; i < this.size(); i++) {
    this.storage[i] = this.storage[i + 1];
  }
  delete this.storage[this.size() - 1];
  return dequeuedValue;
};

queueMethods.size = function() {
  return Object.keys(this.storage).length;
};