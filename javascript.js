// // Randomly select a number between 0 and 50


// // Ask the user to pick a number when they click the guess button






$(document).ready(function(){
var number= Math.floor(Math.random()*51);

	$('#guess').click(function(event){
		event.preventDefault();
		var guess = $("#controls:selected").val();
		console.log(guess);
		// var guess = prompt("Guess a number:");
		playGame(guess, number);
	}); // click event
}); //doc ready

// Check if the guess is correct and give feedback 
var playGame = function (guess, number){
	if (guess == number){
		alert('You got it!');
	} else if (guess > number){
		alert("Too high!");
		guess = prompt('Guess again!');
		playGame(guess, number);
	}else if (guess < number){
		alert("Too low!");
		guess = prompt('Guess again!');
		playGame(guess, number);
	}else {
		alert("That's not a number...")
		guess = prompt('Guess again!');
		playGame(guess, number);
	}
};




