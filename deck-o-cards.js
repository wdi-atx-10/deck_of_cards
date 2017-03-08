function deck_o_cards() {
  var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
  var suits = ['hearts', 'diamonds', 'clubs', 'spades'];

  var cards = []; // deck
  var shuffledCards = []; // deck shuffled

  // Make 52 card objects and store them in the "cards" array
  // Hint: use 2 for loops
  for (var i=0; i<suits.length; i++) {
    for(var j=0; j<values.length;j++) {
      var deck = {};
      deck.suit= suits[i];
      deck.value=values[j];
      cards.push(deck);
    }
  }


  // 2. Shuffle the cards
  // Hint: shuffle function is already defined below
shuffle(cards);

  // Pull the top card from the newly shuffledCards
var topCard= cards[0];

  // 3. Print the results:
  // "The deck has {n} cards"
  // "The top card is the {value} of {suit}"
console.log('The deck has '+cards.length+' cards.');
console.log('The top card is the '+cards[0].value+' of '+cards[0].suit+'.');
//Bonus

var handOfPoker=[cards[0], cards[1], cards[2], cards[3], cards[4]];

console.log('Your cards for poker are:');
for (var k=0; k<5; k++) {

  console.log('a '+cards[k].value+' of '+cards[k].suit);
  }
}



deck_o_cards();


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
