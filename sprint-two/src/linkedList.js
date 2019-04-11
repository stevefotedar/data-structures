// A linked list is a dynamic data structure that allows for constant time insertion and removal at any point in the linked list (compare this to an array which on average has linear time insertion and removal operations). In exchange for this insertion and removal speed, linked lists are not indexed and any find operations on a link list require the linear time operation of traversing the entire linked-list from the beginning.

// Linked List image

// A linked list would be great for....
// An itinerary you expect to add and remove destinations to and from.

// A linkedList class, in functional style, with the following properties:
//   .head property, a linkedListNode instance
//   .tail property, a linkedListNode instance
//   .addToTail() method, takes a value and adds it to the end of the list
//   .removeHead() method, removes the first node from the list and returns its value
//   .contains() method, returns boolean reflecting whether or not the passed-in value is in the linked list
// What is the time complexity of the above functions?




var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (this.head === null) {
      this.head = Node(value);
      this.tail = this.head;
    } else {
      this.tail.next = Node(value);
      this.tail = this.tail.next;
    }
  };

  list.removeHead = function() {
    var result = this.head.value;
    this.head = this.head.next;
    return result;
  };

  list.contains = function(target) {
    for (var i = this.head; i !== null; i = i.next) {
      if (i.value === target) {
        return true;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
