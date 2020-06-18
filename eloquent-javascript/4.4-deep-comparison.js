const deepEqual = (val1, val2) => {
  if (val1 === val2) {
    return true;
  }

  if (val1 === null || typeof val1 !== 'object'
    || val2 === null || typeof val2 !== 'object') {
    return false;
  }

  if (typeof val1 === 'object' && typeof val2 === 'object') {
    let propsInVal1 = 0;
    let propsInVal2 = 0;

    for (let prop in val1)
      propsInVal1 += 1;

    for (let prop in val2) {
      propsInVal2 += 1;
      if (!(prop in val1) || !deepEqual(val1[prop], val2[prop]))
        return false;
    }

    return propsInVal1 === propsInVal2;
  }
}

let obj1 = {
  here: {
    is: "an"
  },
  object: 2
};

let obj2 = {
  here: 1,
  object: 2
};

let obj3 = {
  here: {
    is: "an"
  },
  object: 2
};

console.log(deepEqual(obj1, obj1));
// → true
console.log(deepEqual(obj1, obj2));
// → false
console.log(deepEqual(obj1, obj3));
// → true