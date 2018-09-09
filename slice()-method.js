function sliceArray(anim, beginSlice, endSlice) {
  var newArr = anim.slice(beginSlice,endSlice);
  return newArr;
}

var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);

// test
console.log(sliceArray(inputAnim, 1, 3)); // Returns ["Dog", "Tiger"]
