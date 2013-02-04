// // Randomly select a number between 0 and 50


// // Ask the user to pick a number when they click the guess button






$(document).ready(function(){
var number= Math.floor(Math.random()*101);

	$('#controls').submit(function(event){
		event.preventDefault();
		var guess = $("#controls input").val();
		// alert(guess);
		// var guess = prompt("Guess a number:");
		playGame(guess, number);
	}); // click event
}); //doc ready

// Check if the guess is correct and give feedback 
var playGame = function (guess, number){
	if (!guess){
		return ; 
	}else if (guess == number){
		$('#correct').show();
		$('#high').hide();
		$('#low').hide();
		$('#again').hide();
		$('#controls').hide();
		$('#correct').html(number+'! Yatzee!'+ '<form><input type="button" id="play_again" value="Play Again!"></form>');
	} else if (guess > number){
		$('#again').show();
		$('#high').show();
		$('#low').hide();
		$('#correct').hide();
		// guess = $("#controls option:selected").val();
		// playGame(guess, number);
	}else if (guess < number){
		$('#again').show();
		$('#low').show();
		$('#high').hide();
		$('#correct').hide();
		// guess = $("#controls option:selected").val();
		// playGame(guess, number);
	}
	// else {
	// 	alert("That's not a number...")
	// 	guess = $("#controls option:selected").val();
	// 	prompt('Guess again!');
	// 	// playGame(guess, number);
	// }
};

$('#play_again').click(function() {
	location.reload();
	});



