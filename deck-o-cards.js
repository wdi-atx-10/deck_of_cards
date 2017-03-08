function deck_o_cards () {
	this.names = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
	this.suits = ['Hearts','Diamonds','Spades','Clubs'];
	var cards = [];

    for (var i = 0; i < this.suits.length; i++) {
        for (var n = 0; n < this.names.length; n++) {
            cards.push([this.names[n], this.suits[i]]);
        }
    }

    return cards;
}

console.log(deck_o_cards());

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

shuffledCards = []

//console.log(shuffle(deck_o_cards()));


shuffledCards.push(shuffle(deck_o_cards()));

console.log('First Card:', shuffledCards[0]);
