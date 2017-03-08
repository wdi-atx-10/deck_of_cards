console.log("JS file is connected to HTML! Woo!")

var cards = ['queen', 'queen', 'king', 'king'];

var cardsInPlay = [];

var matches = [];

var clearCard = document.getElementsByClassName('card');

var addMatch = function () {
	matches.push('1');
}

var board = document.getElementById('game-board');

function createBoard () {
	for (var i = 0; i<cards.length; i++) {
		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener('click', isTwoCards);
		board.appendChild(cardElement);
	}
};

var isTwoCards = function () {
	cardsInPlay.push(this.getAttribute('data-card'));
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='spades-884197_1280.png' height='200px' width='150px' alt='king card'>"; //king
	} else {
		this.innerHTML = "<img src='spades-884203_1280.png' height='200px' width='150px' alt='queen card'>"; //queen
	}
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
		clearCard.innerHTML = '';
	}
};

function isMatch(cardsInPlay) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
    	addMatch();
    	alert('You found ' + matches.length + ' matches!');
    } else {
    	alert('Sorry, try again.');
	}
};

createBoard();
