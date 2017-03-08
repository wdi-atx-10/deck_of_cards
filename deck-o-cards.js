function deck_o_cards() {
  var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
  var suits = ['hearts', 'diamonds', 'clubs', 'spades'];

  var cards = []; // deck
  var shuffledCards = []; // deck shuffled
  //var card;

  
  for (var j = 0 ; j < suits.length; j++) {
    for (var i = 0; i < values.length; i++){
    var deck = {
    values : values[i],
    suits : suits[j] 
      
    };
    
    cards.push(deck);
 }
}

console.log(cards.length);

shuffle(cards);

var topCard = cards[0]; 

  // Pull the top card from the newly shuffledCards


  // 3. Print the results:
  // "The deck has {n} cards"
  // "The top card is the {value} of {suit}"
console.log('The deck has ' + cards.length + " cards.");
console.log('The top card in the deck is ' + cards[0].values + " of " + cards[0].suits);


}

deck_o_cards();

//Fisher-Yates Shuffle
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
