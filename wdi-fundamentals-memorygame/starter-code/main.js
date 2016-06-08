
// 4 cards with variables

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

// using different comparisons on cards


if (cardFour === cardTwo)  {
	alert("Sorry, try again!");
}

else if (cardFour === cardThree) {   // two kings
	alert("You have found a match!");
}

else (cardFour === cardOne) 
	alert("Sorry, try again!");




if (cardTwo === cardFour) {
	alert("Sorry, try again!");
}

else if (cardThree === cardFour) {  //  two kings
	alert("You have found a match!");
}

else (cardOne === cardFour)
	alert("Sorry, try again!"); 




if (cardOne === cardThree) {
	alert("Sorry, try again!");
}

else if (cardOne === cardTwo) {     // two queens
	alert("You have found a match!");
}

else (cardThree === cardOne) 
	alert("Sorry, try again!");





if (cardThree === cardOne) {
	alert("Sorry, try again!");
}

else if (cardTwo === cardOne) {  //   two queens
	alert("You have found a match!");
}

else (cardOne === cardThree)
	alert("Sorry, try again!");



var cards = ['queen', 'queen', 'king', 'king'];

var cardsInPlay = [ ];


var createBoard = function() {
	var board = document.getElementById('game-board');

		for (var i = 0; i < cards.length; i++)  {
			var newDiv = document.createElement('div');
			newDiv.className = 'card';
			board.appendChild(newDiv);
			cardElement.setAttribute('data-card', cards[i]);
		}

}

function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
	cardElement.addEventListener('click', isTwoCards);

		if (cardsInPlay.length === 2)  {
			

	cardElement.innerHTML = '<img src="king.png" alt="King of Spades" />';
	cardElement.innerHTML = '<img src="queen.png" alt="Queen of Spades" />';		

			isMatch(cardsInPlay);
			cardsInPlay = [];
		}
}

var isMatch = function() {

}












