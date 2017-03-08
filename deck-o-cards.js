// 1. Make the function deck_o_cards assemble an array of cards using the provided suits and values arrays.
// Each card in the deck should be an object formatted as: {suit: 'hearts', value: 'A'}
function deck_o_cards() {
  var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
  var suits = ['hearts', 'diamonds', 'clubs', 'spades'];

  var cards = []; // deck
  var shuffledCards = []; // deck shuffled

  // Make 52 card objects and store them in the "cards" array
  // Hint: use 2 for loops
  for (var i = 0; i < suits.length; i++) {

    // console.log(suits[i]); - this will show the suits


    for (var j = 0; j < values.length; j++) {
      card = {
        suit: suits[i],
        value: values[j]
      };

      // console.log(card); - this will print the deck of cards

      cards.push(card);
    }
  }

  // 2. Shuffle the cards
  // Hint: shuffle function is already defined below
  shuffledCards = shuffle(cards);


// Pull the top card from the newly shuffledCards
topCard = shuffledCards[0];

// get 5 cards from shuffled deck
pokerHand = shuffledCards.slice(0,5);

// console.log(pokerHand);


// console.log(topCard);

// 3. Print the results:
  // "The deck has {n} cards"
  // "The top card is the {value} of {suit}"
console.log('The deck has ' + cards.length + ' cards');
console.log('The top card is the ' + topCard.value + ' of ' + topCard.suit);
console.log('Here is your poker hand: ' + '\n' +
pokerHand[0].value + ' of ' + pokerHand[0].suit + '\n' +
pokerHand[1].value + ' of ' + pokerHand[1].suit + '\n' +
pokerHand[2].value + ' of ' + pokerHand[2].suit + '\n' +
pokerHand[3].value + ' of ' + pokerHand[3].suit + '\n' +
pokerHand[4].value + ' of ' + pokerHand[4].suit + '\n'
);


// Fisher-Yates Shuffle
// http://stackoverflow.com/a/6274398
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

}

deck_o_cards();
