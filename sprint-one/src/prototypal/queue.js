// Do:
// Work within the src/protoypal/ folder.
// Use Object.create with the object from step 2 to create instances of your class
// Don't:
// Use the keyword new


var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.storage = {};
  return newQueue;
};

var queueMethods = {};

queueMethods.dequeue = function(){
  var result = this.storage["0"];
  for(var i = 0; i < this.size(); i++){
    this.storage[i] = this.storage[i+1]
  }
  delete this.storage[this.size()-1];
  return result;
};

queueMethods.enqueue = function(value){
  this.storage[this.size()] = value;
};

queueMethods.size = function(){
  return Object.keys(this.storage).length;
};

