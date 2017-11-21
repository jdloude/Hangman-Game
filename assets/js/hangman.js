// Array to hold all the anime names to choose from.
var animeWords = ['cowboy bebop', 'code geass', 'dragonball z', 'psycho-pass', 'guilty crown', 'bleach', 'gundam wing', 'baccano!', 'outlaw star', 'death note'];

// Global Variables
var randGenerator = Math.floor(Math.random() * animeWords.length);
var animeChoosenWord = animeWords[randGenerator];
var guessesLeft = 10;
var userGuess = [];
var underScore = [];
var rightGuess =[];
var wrongGuess = [];
var responsiveSlash = document.getElementsByClassName('underScore');
var responsiveRightGuess = document.getElementsByClassName('rightGuess');
var responsiveWrongGuess = document.getElementsByClassName('wrongGuess');
var responsiveguessesLeft = document.getElementsByClassName('guessesLeft');

//Underscore Generator
	var underScoreGenerator = () => {

		for (var i = 0; i < animeChoosenWord.length; i++){

		underScore.push('_');

		responsiveSlash[0].innerHTML = underScore.join(' ');

		}
	}

// takes in the User keystroke
document.onkeypress = function (event){

	userGuess = event.key;

		if (animeChoosenWord.indexOf(userGuess) > -1) {

			for (var i = 0; i < animeChoosenWord.length; i++) {

				if (animeChoosenWord[i] === userGuess) {

					underScore[i] = userGuess;

					responsiveSlash[0].innerHTML = underScore.join(' ');
				}
			}

			rightGuess.push(userGuess);

			responsiveRightGuess[0].innerHTML = rightGuess.join(' ');

			if (userGuess = rightGuess[i]) {
				rightGuess.push(null);
			}

		}


		else {

		wrongGuess.push(userGuess);

		responsiveWrongGuess[0].innerHTML = wrongGuess.join(' ');

		guessesLeft--;

		responsiveguessesLeft[0].innerHTML = guessesLeft;
	
		}

	if (guessesLeft <= 0) {

	alert('You lose '+ name + '!');

	location.reload();

	}
}
	if (underScore === animeChoosenWord) {

				alert('You Win!');

			}

//invokes the underscore function
underScoreGenerator();
