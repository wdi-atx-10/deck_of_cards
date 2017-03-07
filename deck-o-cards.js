// 1. Make the function deck_o_cards assemble an array of cards using the provided suits and values arrays.
// Each card in the deck should be an object formatted as: {suit: 'hearts', value: 'A'}

deck_o_cards();
function deck_o_cards() {
  var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
  var suits = ['hearts', 'diamonds', 'clubs', 'spades'];

  var cards = []; // deck
  var shuffledCards = []; // deck shuffled


  for(i=0; i<values.length; i++ ){
      for(z=0; z<suits.length; z++){
            var deck = {};

            deck.values=values[i];
            deck.suits=suits[z];
            cards.push(deck);
      }
  }

  // Make 52 card objects and store them in the "cards" array
  // Hint: use 2 for loops
shuffledCards=shuffle(cards);

  // 2. Shuffle the cards
  // Hint: shuffle function is already defined below
console.log(shuffledCards[0])

  // Pull the top card from the newly shuffledCards

console.log('the deck has ' + cards.length + 'cards');
console.log('the top card is the ' + shuffledCards[0].values + ' ' + shuffledCards[0].suits);
  // 3. Print the results:
  // "The deck has {n} cards"
  // "The top card is the {value} of {suit}"

}

function shuffle(array) {
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

// Fisher-Yates Shuffle
// http://stackoverflow.com/a/6274398
