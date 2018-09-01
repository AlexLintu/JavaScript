function sumFibs(num) {
  let prevNum = 0;
  let curNum = 1;
  let result = 0;
  
  while (curNum <= num) {
    if (curNum % 2 !== 0) {
      result += curNum;
    }
    curNum += prevNum;
    prevNum = curNum - prevNum;
  }
  
  return result;
}

console.log(sumFibs(4)); // Returns 5
