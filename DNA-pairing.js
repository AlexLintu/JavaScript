function pairElement(str) {
  let obj = {T: 'A', A: 'T', G: 'C', C: 'G'};
  
  let arr = str.split('');
  // console.log(arr); Returns ["A", "T", "C", "G", "A"]
  for (let i= 0; i < arr.length; i++) {
    arr[i] = [arr[i], obj[arr[i]]];
    // console.log(map['A']); Returns "T"
  }
  return arr;
}

console.log(pairElement("ATCGA")); // Returns [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
