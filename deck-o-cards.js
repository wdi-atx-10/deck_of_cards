// Fisher-Yates Shuffle
// http://stackoverflow.com/a/6274398
var shuffleIt = function shuffle(array) {
    var counter = array.length, temp, index;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}


// 1. Make the function deck_o_cards assemble an array of cards using the provided suits and values arrays.
// Each card in the deck should be an object formatted as: {suit: 'hearts', value: 'A'}
function deck_o_cards() {
  var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
  var suits = ['hearts', 'diamonds', 'clubs', 'spades'];

  var cards = []; // deck
  var shuffledCards = []; // deck shuffled

  // Make 52 card objects and store them in the "cards" array
  // Hint: use 2 for loops
for(var k=0; k<suits.length; k++){
  for(var i=0; i<values.length; i++) {
    var cardType = {
      suit : suits[k],
      value : values[i]
        };
    cards.push(cardType);
  }
}

  // 2. Shuffle the cards
  // Hint: shuffle function is already defined below
shuffleIt(cards);

  // Pull the top card from the newly shuffledCards
var topCard = cards.shift();

  // 3. Print the results:
  // "The deck has {n} cards"
  // "The top card is the {value} of {suit}"
var cardsInDeck = cards.length;

console.log("The deck has " + cardsInDeck + " cards");
console.log("The top card is the " + topCard.value + " of " + topCard.suit);
}

deck_o_cards();
