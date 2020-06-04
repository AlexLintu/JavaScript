// Version 1
let hash = '';

for (let hashNumber = 0; hashNumber <= 7; hashNumber += 1) {
  hash += '#';
  console.log(hash);
}

// Version 2
for (let line = '#'; line.length < 8; line += '#') {
  console.log(line);
}

// Result
// #
// ##
// ###
// ####
// #####
// ######
// #######