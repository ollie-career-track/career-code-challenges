class Set {
  constructor() {
    this.setArray = [];
  }

  static intersection(setOne, setTwo) {
    return setOne + setTwo;
  }

  static union(setOne, setTwo) {
    return setOne + setTwo;
  }

  static difference(setOne, setTwo) {
    return setOne + setTwo;
  }

  add(item) {
    if(this.setArray.length === 0) {
      this.setArray.push(item);
    }

    if(!this.has(item)) {
      this.setArray.push(item);
    }

    return 'Cannot add item already in set';
  }

  remove(item) {
    for(let i = 0; i < this.setArray.length; i++) {
      if(this.setArray[i] === item) {
        this.setArray.splice([i], 1);
      }
    }
  }

  has(item) {
    for(let i = 0; i < this.setArray.length; i++) {
      if(this.setArray[i] === item) {
        return true;
      }
    }

    return false;
  }

  intersection(set) {
    return set;
  }

  union(set) {
    return set;
  }

  difference(set) {
    return set;
  }
}

module.exports = Set;