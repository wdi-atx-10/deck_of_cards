function deck_o_cards() {
  var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
  var suits = ['hearts', 'diamonds', 'clubs', 'spades'];

  var cards = []; // deck
  var shuffledCards = []; // deck shuffled

for (var i = 0; i < suits.length; i++) {
  for (var j = 0; j < values.length; j++){
    card = {
      suit: suits[i],
      value: values[j],
    };
    cards.push(card);
  }
}

  shuffledCards = shuffle(cards);

  topCard = shuffledCards[0];

  topSuit = topCard[Object.keys(topCard)[0]];
  topValue = topCard[Object.keys(topCard)[1]];

console.log("The deck has " + cards.length + " cards");
console.log("The first card is the " + topValue + " of " + topSuit);

}

deck_o_cards();

function shuffle(array) {
    var counter = array.length, temp, index;

    while (counter > 0) {

        index = Math.floor(Math.random() * counter);


        counter--;


        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;

}
