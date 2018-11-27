const canIVote = age => {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

// Concise Body Arrow Function:
const canIVote = age => age >= 18 ? true : false;

console.log(canIVote(18));