const cards = ['diamond', 'spade', 'heart', 'club'];
let currentCard;
while (currentCard !== 'spade') {
  // Math.floor(Math.random() * 4) gives us a random number from 0 to 3. We use this number to index the cards array, and assign the value of currentCard to a random element from that array:
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}