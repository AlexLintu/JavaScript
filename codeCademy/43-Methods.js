let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';
/* Using ES5 Syntax:
const alienShip = {
  retreat: function() {
    console.log(retreatMessage);
  }
}
*/

// Using ES6 Syntax:
const alienShip = {
  retreat() {
    console.log(retreatMessage);
  },
  takeOff() {
    console.log('Spim... Borp... Glix... Blastoff!');
  }
}

alienShip.retreat(); // We no longer wish to conquer your planet. It is full of dogs, which we do not care for.
alienShip.takeOff(); // Spim... Borp... Glix... Blastoff!