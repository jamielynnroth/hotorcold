// // Randomly select a number between 0 and 50
$(document).ready(function(){
var number= Math.floor(Math.random()*101);

	$('#controls').submit(function(event){
		event.preventDefault();
		var guess = $("#controls input").val();
		// console.log(guess);
		playGame(guess, number);
	}); // click event
	
	$('#play_again').click(function() {
			location.reload();
		}); //#play_again button
}); //doc ready



// // Check if the guess is correct
var playGame = function (guess, number){
	if (!guess){
		return ; 
	}else if (guess == number){
		// console.log('got it');
		$('#correct').show();
		$('#correct').html(number +'! Yahtzee!'+ '<form><input type="button" id="play_again" value="Play Again!"></form>');
		$('#high').hide();
		$('#low').hide();
		$('#again').hide();
		$('#controls').hide();
	} else if (guess > number){
		// console.log('too high');
		$('#again').fadeToggle('slow', 'linear');
		$('#high').show();
		$('#low').hide();
		$('#correct').hide();
		$('#again').fadeToggle('slow', 'linear');
		// var lastGuess= guess;
		// if (lastGuess-number < guess-number){
		// 	console.log("Getting warmer!");
		// }else if (lastGuess-numbe > guess-number) {
		// 	console.log("Brrrr...");
		// };
	}else if (guess < number){
		// console.log('too low');
		$('#again').fadeToggle('slow', 'linear');
		$('#low').show();
		$('#high').hide();
		$('#correct').hide();
		$('#again').fadeToggle('slow', 'linear');
		// lastGuess= guess;
		// if (lastGuess-number < guess-number){
		// 	console.log("Getting warmer!");
		// }else if (lastGuess-numbe > guess-number) {
		// 	console.log("Brrrr...");
		// };
	};
};





