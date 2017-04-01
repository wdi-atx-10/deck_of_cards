// 1. Make the function deck_o_cards assemble an array of cards using the provided suits and values arrays.
// Each card in the deck should be an object formatted as: {suit: 'hearts', value: 'A'}
// function card(suits, values) {
//   this.suits = suits;
//   this.values = values;
//   this.name = names;
// }
//
//
// function card(suits, values, name) {
//     this.suits = suits;
//     this.values = values;
}
function deck_o_cards() {
  var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'];
  var suits = ['hearts', 'diamonds', 'clubs', 'spades'];
  var cards = []; // deck
  var shuffledCards = []; // deck shuffled


  // Make 52 card objects and store them in the "cards" array
  // Hint: use 2 for loops
for (i=0; i<suits.length; i ++) {
  for (j=0; j<values.length; i ++)
    var card = {
      suits: suits[i],
      values: values[j]
    };
   cards.push(card)
   console.log('test one')
}

return cards;

other method ----
var cards = [];
for(var i=0; i<values.length; i++){
   cards.push([values[i], suits[j]]);
}
console.log(cards)


//method 2 -
  for(var i=0; i<.length; i++){
 if (typeof values[1] !== ‘undefined’) {
     cards.push([array1[i]);
 }
 if (typeof [1] !== ‘undefined’) {
     cards.push(suits[i]);
  }
  console.log( caards)
var condition =(array1.length.array2.length ? array1.length : array2.length);

store them in the "cards" array

could use map fnc here??





  // 2. Shuffle the cards
  // Hint: shuffle function is already defined below

  function shuffle(cards) {
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


  // Pull the top card from the newly shuffledCards


  // 3. Print the results:
  // "The deck has {n} cards"
  // "The top card is the {value} of {suit}"

}



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
