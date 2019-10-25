class Set {
  constructor() {
    this.setArray = [];
  }

  static intersection(setOne, setTwo) {
    const intersection = new Set;

    for(let i = 0; i < setTwo.setArray.length; i++) {
      if(setTwo.has(setOne.setArray[i])) {
        intersection.setArray.push(setOne.setArray[i]);
      }
    }

    if(intersection.setArray.length < 1) {
      return false;
    }

    return intersection;
  }

  static union(setOne, setTwo) {
    const union = new Set;

    for(let i = 0; i < setOne.setArray.length; i++) {
      union.add(setOne.setArray[i]);
    }

    for(let i = 0; i < setTwo.setArray.length; i++) {
      union.add(setTwo.setArray[i]);
    }

    return union;
  }

  static difference(setOne, setTwo) {
    const difference = new Set;

    for(let i = 0; i < setOne.setArray.length; i++) {
      if(!setTwo.has(setOne.setArray[i])) {
        difference.add(setOne.setArray[i]);
      }
    }

    for(let i = 0; i < setTwo.setArray.length; i++) {
      if(!setOne.has(setTwo.setArray[i])) {
        difference.add(setTwo.setArray[i]);
      }
    }

    if(difference.setArray.length < 1) {
      return false;
    }

    return difference;
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
    return Set.intersection(this, set);
  }

  union(set) {
    return Set.union(this, set);
  }

  difference(set) {
    return Set.difference(this, set);
  }
}

module.exports = Set;