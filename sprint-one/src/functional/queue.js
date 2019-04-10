// Implement both stack and queue data structures in each of the instantiation styles. The functional style is stubbed out in src/functional/queue.js and src/functional/stack.js to get you started.

//   [ ]No arrays! Instead, use an object with numeric keys
//   [ ]Pass all the tests (open SpecRunner.html in a browser to see which tests are passing)

//   Data Structure Specs
// Implement a stack with the following methods:

//   push(string) - Add a string to the top of the stack
//   pop() - Remove and return the string on the top of the stack
//   size() - Return the number of items on the stack
// Implement a queue with the following methods:

//   enqueue(string) - Add a string to the back of the queue
//   dequeue() - Remove and return the string at the front of the queue
//   size() - Return the number of items in the queue

//   Functional instantiation: a simple "maker" pattern
// Do:
// Work within the src/functional/ folder
// Define all functions and properties within the maker function
// Don't:
// Use the keyword new, the keyword this, or any prototype chains
// Capitalize the maker function name
// Example: The provided classes Stack and Queue already follow this pattern

//enqueue
//input: string
//output: nothing
//process: adds string to object at numeric key value

//dequeue
//input: nothing
//output: returns first string in obj
//process: deletes string from obj and reorders the numberic keys

//size:
//input: function invoked
//output: size of objects.keys

var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[someInstance.size()] = value;
  };

  someInstance.dequeue = function() {
    var result = storage['0'];
    for (var i = 0; i < someInstance.size(); i++) {
      storage[i] = storage[(i + 1)];
    }
    delete storage[(someInstance.size() - 1)];
    console.log(storage);
    return result;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
