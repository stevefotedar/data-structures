// someInstance.push:
//input : string
//output :
//Process : Adding the string as a value to the incremented numerical key at the storage object

//someInstance.pop:
//input :
// output : string (that we passed it via push) from the TOP OF THE STACK!!!
//Process : storing the last entered string to a variable. deleting that key[value] pair and returning the value

//someInstance.size
//input : none
//output : length of the stack in storage
//process : Object.keys(storage).length

var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[someInstance.size()] = value;
  };

  someInstance.pop = function() {
    var result = storage[someInstance.size() -1];
    delete storage[someInstance.size() -1];
    return result;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
