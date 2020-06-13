function arrayToList(array) {
  let list = null;
  for (let element of array) {
    list = {
      value: element,
      next: list
    }
  }
  return list;
}

console.log(arrayToList([1, 2, 3]));

/*
// Loop 1
let list1 = {
  value: 1,
  next: null
}

// Loop 2
let list2 = {
  value: 2,
  next: {
    value: 1,
    next: null
  }
}

// Loop 3
let list3 = {
  value: 3,
  next: {
    value: 2,
    next: {
      value: 1,
      next: null
    }
  }
}
*/

function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.next) {
    array.push(node.value);
  }
  return array;
}

console.log(listToArray(arrayToList([10, 20, 30])));