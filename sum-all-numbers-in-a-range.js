function sumAll(arr) {
  let result = 0;
  let max = Math.max(arr[0],arr[1]);
  let min = Math.min(arr[0],arr[1]); 
  for (let i = min; i <= max; i++) {
    result = result + i;
  }
  return result; 
}

console.log(sumAll([10, 5])); // Returns 45 (5+6+7+8+9+10)

// Methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
