

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(key, value) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  if (Array.isArray(this._storage.get(index)) === true && JSON.stringify(this._storage.get(index)).includes(key)) {
    for (var i = 0; i < this._storage.get(index).length; i++) {
      if (this._storage.get(index)[i][0] === key) {
        this._storage.get(index)[i][1] = value;
      }
    }
  }
  if (!Array.isArray(this._storage.get(index))) {
    this._storage.set(index, [[key, value]]);
  }
  if (this._storage.get(index) && !JSON.stringify(this._storage.get(index)).includes(key)) {
    this._storage.get(index).push([key, value]);
  }
};

HashTable.prototype.retrieve = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  if (this._storage.get(index).length === 1) {
    return this._storage.get(index)[0][1];
  } else {
    for (var i = 0; i < this._storage.get(index).length; i++) {
      if (this._storage.get(index)[i][0] === key) {
        return this._storage.get(index)[i][1];
      }
    }
  }
};

HashTable.prototype.remove = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  var newArray = this._storage.get(index);
  if (this._storage.get(index).length === 1) {
    newArray.splice(0, 1);
  } else {
    for (var i = 0; i < this._storage.get(index).length; i++) {
      if (this._storage.get(index)[i][0] === key) {
        newArray.splice(i, 1);
      }
    }
  }
  this._storage.set(index, newArray);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


