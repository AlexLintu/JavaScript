const deepEqual = (val1, val2) => {
  if (val1 === val2) {
    return true;
  }

  if (val1 === null || val2 === null) {
    return false;
  }

  if (typeof val1 === 'object' && typeof val2 === 'object') {
    // let keys1 = Object.keys(val1);
    // let keys2 = Object.keys(val2);

    let propsInVal1 = 0;
    let propsInVal2 = 0;

    for (let prop in val1)
      propsInVal1 += 1;

    for (let prop in val2) {
      propsInVal2 += 1;
      if (!(prop in val1) || !deepEqual(val1[prop], val2[prop]))
        return false;
    }
  }
}

let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true