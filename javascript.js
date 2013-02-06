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

var oldNew = function (){
		$("#controls input").each(function(){
				var originalGuess=$('#controls input').val();
				console.log(originalGuess);
				$('#controls input').data("oldVal", (originalGuess).val());
			}); //each

		$('#controls input').change(function(){
			var currentGuess= $(this);
			console.log(currentGuess);
			var newValue = $(this).data("newVal", currentGuess);
		}); //change

		$('#controls input').focus(function(){
			var oldValue = $(this).data('oldVal');
		}); //focus

		// if (lastGuess-number < guess-number){
		// 	console.log("Getting warmer!");
		// }else if (lastGuess-numbe > guess-number) {
		// 	console.log("Brrrr...");
		// };
}; //oldNew



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
		oldNew();
	}else if (guess < number){
		// console.log('too low');
		$('#again').fadeToggle('slow', 'linear');
		$('#low').show();
		$('#high').hide();
		$('#correct').hide();
		$('#again').fadeToggle('slow', 'linear');
		oldNew();
		// if (lastGuess-number < guess-number){
		// 	console.log("Getting warmer!");
		// }else if (lastGuess-numbe > guess-number) {
		// 	console.log("Brrrr...");
		// };
	}
};





