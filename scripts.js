var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var reset = document.querySelector("#reset");
var span1 = document.querySelector("#firstScore"); // Number that will display on the page.
var span2 = document.querySelector("#secondScore"); // Number that will display on the page.
var input = document.querySelector("input");
var variable = document.querySelector("#variable"); // Made to change the winningScore.
var p1Score = 0;
var p2Score = 0;
var gameOver = false; // Boolean that ends the game when it becomes true.
var winningScore = 5;

p1Button.addEventListener("click", function() {
	if (!gameOver) {
	  p1Score += 1; 
	}
	if (p1Score === winningScore) {
	  span1.style.color = "green";
	  gameOver = true; // Ends the game.
	}
	span1.textContent = p1Score; //Continuosly updates the left side score on the website.
});

p2Button.addEventListener("click", function() {
	if (!gameOver) {
	  p2Score += 1;
	  
	} 
	if (p2Score === winningScore) {
	  span2.style.color = "green";
	  gameOver = true; // Ends the game.
	}
	span2.textContent = p2Score; // Continuosly updadtes the right side score on the website.
});

function resetAll() { // Made to restart the game.
	p1Score = 0;
	p2Score = 0;
	winningScore = 5;
	span1.textContent = p1Score;
	span2.textContent = p2Score;
	span1.style.color = "black";
	span2.style.color = "black";
	gameOver = false;
}
reset.addEventListener("click", function() {
	resetAll(); 
});

input.addEventListener("change", function() {
    resetAll(); // So everytime you try to change the game's winning score, the game resets to avoid certain bugs.
	variable.textContent = this.value;
	winningScore = parseInt(this.value); // .value returns a string, so it needs to be converted to an integrer in order to use conditionals.
});

