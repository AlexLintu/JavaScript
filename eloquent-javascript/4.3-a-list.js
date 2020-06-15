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

function prepend(element, list) {
  let newList = {
    value: element,
    next: list
  }
  return newList;
}

function nth(list, n) {
  if (!list) {
    return undefined;
  } else if (n === 0) {
    return list.value
  } else {
    return nth(list.next, n - 1);
  }
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20