let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function countOnline(obj) {
  let count = 0;
  for (let user in users) {
    if (users[user].online === true) {
      count++;
    }
  }
  return count;
}

// test
console.log(countOnline(users));
