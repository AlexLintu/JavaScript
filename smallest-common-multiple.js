function smallestCommons(arr) {
  var range = [];
  for (var i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--) {
    range.push(i);
  }
  var lcm = range[0];
  for (i = 1; i < range.length; i++) {
    var GCD = gcd(lcm, range[i]); // GCD - greatest common divisor
    lcm = (lcm * range[i]) / GCD;
  }
  return lcm;
  
  function gcd(x,y) {
    if (y === 0) {
      return x;
    } else {
      return gcd(y, x % y);
    }
  }
}


console.log(smallestCommons([1,8])); // Returns 840

// Euclidean algorithm: https://en.wikipedia.org/wiki/Euclidean_algorithm
