console.log('This message will be printed to the console.');

function throwError() {
  return notDefinedVar;
}

throwError();

console.log('Because of the error, this will not printed!');
