$(document).ready(function(){
var number= Math.floor(Math.random()*51);

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



var feedback = function (guess, number, prevGuess){
		if (Math.abs(guess-number) < Math.abs(prevGuess-number)){
			// console.log("Getting warmer!");
			$('#warmer').fadeToggle('slow', 'linear');
			$('#warmer').fadeToggle('slow', 'linear');
		}else if (Math.abs(guess-number) > Math.abs(prevGuess-number)) {
			// console.log("Brrrr...");
			$('#colder').fadeToggle('slow', 'linear');
			$('#colder').fadeToggle('slow', 'linear');
		}else if (guess-number === 1){
			$('#almost').fadeToggle('slow', 'linear');
			$('#almost').fadeToggle('slow', 'linear');
		}else if (!prevGuess){
			return ;
		}
}; //feedback



var prevGuess = null;

// // Check if the guess is correct
var playGame = function (guess, number){
	if (!guess){
		return ; 
	}else if (guess == number){
		// console.log('got it');
		$('#correct').show();
		$('.correct_number').html(number);
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
		feedback(guess, number, prevGuess);
	}else if (guess < number){
		// console.log('too low');
		$('#again').fadeToggle('slow', 'linear');
		$('#low').show();
		$('#high').hide();
		$('#correct').hide();
		$('#again').fadeToggle('slow', 'linear');
		feedback(guess, number, prevGuess);
	}
	prevGuess = guess;
	// console.log(prevGuess);
};









