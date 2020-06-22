class Group {
  constructor() {
    this.data = [];
  }

  has(value) {
    return this.data.includes(value);
  }

  add(value) {
    if (!this.has(value)) {
      this.data.push(value);
    }
  }

  delete(value) {
    let index = this.data.indexOf(value);
    if (index !== -1) {
      this.data.splice(index, 1); // (index, deleteCount (an integer indicating the number of elements in the array to remove from start))
    }
  }

  static from(iterableObj) {
    let group = new Group();
    for (let value of iterableObj) {
      group.add(value);
    }
    return group;
  }
}

let testArray = [1, 2, 3, 4, 5, 5, 5];
let testGroup = Group.from(testArray);
console.log(testGroup.has(5));