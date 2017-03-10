

  // 1. Make the function deck_o_cards assemble an array of cards using the provided suits and values arrays.
  // Each card in the deck should be an object formatted as: {suit: 'hearts', value: 'A'}
  function deck_o_cards() {

   var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
    var suits = ['hearts', 'diamonds', 'clubs', 'spades'];

    var cards = []; // deck
    var shuffledCards = []; // deck shuffled


   for (var i=0; i<suits.length;i++){
     for (var k=0;k<values.length;k++){
       var deck = {};
       deck.suit = suits[i];
       deck.value = values[k];
       cards.push(deck);
       }
   }

    // 2. Shuffle the cards
    // Hint: shuffle function is already defined below
 //var shuffledCards = shuffle(cards);

    // Pull the top card from the newly shuffledCards

  var topCard = shuffledCards[52];

    // 3. Print the results:
    // "The deck has {n} cards"
    // "The top card is the {value} of {suit}"
   console.log("The deck has " + shuffledCards.length + " cards.");
   console.log("top card is the " + topCard.value + " of " + topCard.suit);

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
  }
