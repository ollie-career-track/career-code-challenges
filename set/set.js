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

    
  }

  remove(item) {
    return item;
  }

  has(item) {
    return item;
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