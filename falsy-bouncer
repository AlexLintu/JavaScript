function bouncer(arr) {
  let result = [];
  for (let i=0; i < arr.length; i++) {
    let bool = Boolean(arr[i]);
    if (bool === true) {
      result.push(arr[i]);
    }
  }
  return result;
}

// Second way
function bouncer(arr) {
  return arr.filter(Boolean);
}

// test 
bouncer([7, "ate", "", false, 9]);
