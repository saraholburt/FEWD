$(document).ready(function(){
	/*********** PUT THINGS HERE ****************/

	/****** QUESTION 1 ************/
	document.getElementById('return5th_submit').onclick = function(){
			var text = document.getElementById('return5th_input').value;
			document.getElementById('return5th_display').innerHTML = text.charAt(4);
	}
    /****** QUESTION 2 ************/
    // Same as above except output second to last char of a input string

    document.getElementById('returnLast_submit').onclick = function(){
		var questionText = document.getElementById('returnLast_input').value;
		document.getElementById('returnLast_display').innerHTML = questionText.charAt(questionText.length-2);
    }

	/****** QUESTION 3 ************/
	// Check to see if a word exists in a hard-coded paragraph, display "YES" if found and "NO" if not

	document.getElementById('checkWork_submit').onclick = function() {

		var paragraph = document.getElementById('paragraph_chunk').value;
		var userInput = document.getElementById('checkWork_input').value;

		if (paragraph.indexOf(userInput) >= 0) {
			document.getElementById('checkWork_display').innerHTML = "Yes";
		}
		else {
			document.getElementById('checkWork_display').innerHTML = "No";
		}
	}






	/*$('#checkWork_submit').click(function() {
		/*var paragraph = $('#ps3').val();
		var userInput = $('#checkWork_input').val();

		if ('p:contains(cbkbcsukc)') {
			$('#checkWork_display').html('<p>YES</p>');
		}
		else {
			$('#checkWork_display').html('<p>NO</p>');
		}

	});*/


	/****** QUESTION 4 ************/
	// Reverse string inputted by user

	$('#reverseString_submit').click(function() {
		var rightWay = $('#reverseString_input').val();
		var reverseWay = rightWay.split("").reverse().join("");
		$('#reverseString_display').html(reverseWay);
	});


	/****** QUESTION 5 ************/
	// Output HELLO WORLD into a div, but you must first store "hello world" into a variable and then output the variable

	$('#helloworld_submit').click(function() {
		var hello = 'HELLO WORLD';
		$('#helloworld_display').html(hello);
	});

	/****** QUESTION 6 ************/
	// Provide an input for user to type their name and greet them with their name "Hello BLANK, welcome to the website" should go in greet1 display

	$('#greet1_submit').click(function() {
		var name = $('#greet1_input').val();
		$('#greet1_display').html('Hello '+name+', welcome to the website');
	});

	/****** QUESTION 7 ************/
	// Do the same as above but only greet them if their names are Alice, Bob, or YOUR NAME

	$('#greet2_submit').click(function() {
		var nameInput = $('#greet2_input').val();

		if (nameInput == 'Alice'|| nameInput == 'Bob') {
			$('#greet2_display').html('Hello '+nameInput+', welcome to the website');
		}
		else {
			$('#greet2_display').html('Go Away');
		}
	});


	/****** QUESTION 8 ************/
	// Accept two integers from the user and display the larger

	$('#integerMax_submit').click(function() {
		var num1 = parseFloat($('#integerMax_input1').val());
		var num2 = parseFloat($('#integerMax_input2').val());

		if (num1 > num2) {
			$('#integerMax_display').html(num1+' is bigger!');
		}
		if (num1 < num2) {
			$('#integerMax_display').html(num2+' is bigger!');
		}
		else {
			$('#integerMax_display').html("They're the same!");
		}
	});


	/****** QUESTION 9 ************/
	// Accept three integers from the user and display the SIGN of the product of the three (aka: display + or -)


	/****** QUESTION 10 ************/
	// Write a JavaScript program to sort three numbers. Display them in order from greatest to smallest

	$('#integerSort_submit').click(function() {
		var input1 = parseFloat($('#integerSort_input1').val());
		var input2 = parseFloat($('#integerSort_input2').val());
		var input3 = parseFloat($('#integerSort_input3').val());

		if (input1 > input2 && input1 > input3) {
			if (input2 > input3) {
				$('#integerSort_display').html(input1+input2+input3);
			}
			else {
				$('#integerSort_display').html(input1+input3+input2);
			}
		}
		if (input2 > input1 && input2 > input3) {
			if (input1 > input3) {
				$('#integerSort_display').html(input2+input1+input3);
			}
			else {
				$('#integerSort_display').html(input2+input3+input1);
			}
		}
		if (input3 > input1 && input3 > input2) {
			if (input2 > input1) {
				$('#integerSort_display').html(input3+input2+input1);
			}
			else {
				$('#integerSort_display').html(input3+input1+input2);
			}
		}
	});

	/****** QUESTION 11 ***********/
	// Write a function called play() to play rock, paper, scissors and output the winner (player 1 or player 2). This requires ressearch on how to make a function

	document.getElementById('rps_submit').onclick = function() {
		var play1 = document.getElementById('rps_player1').value;
		var play2 = document.getElementById('rps_player2').value;
		play(play1, play2);
	}

	function play(play1, play2) {
		if (play1 == 'rock') {
			if (play2 == 'paper') {
				document.getElementById('rps_winner_display').innerHTML = 'Player 2 wins!';
			}
			if (play2 == 'scissor') {
				document.getElementById('rps_winner_display').innerHTML = 'Player 1 wins!';
			}
		}
		if (play1 == 'scissors') {
			if (play2 == 'paper') {
				document.getElementById('rps_winner_display').innerHTML = 'Player 1 wins!';
			}
			if (play2 == 'rock') {
				document.getElementById('rps_winner_display').innerHTML = 'Player 2 wins!';
			}
		}
		if (play1 == 'paper') {
			if (play2 == 'rock') {
				document.getElementById('rps_winner_display').innerHTML = 'Player 1 wins!';
			}
			if (play2 == 'scissor') {
				document.getElementById('rps_winner_display').innerHTML = 'Player 2 wins!';
			}
		}
		if (play2 == play1) {
			document.getElementById('rps_winner_display').innerHTML = 'Tie!';
		}
	}

	/****** QUESTION 12 ***********/
	// Calculate the factoral of a number inputted by the user

		document.getElementById('factoral_submit').onclick = function () {
			var numberInput = parseFloat(document.getElementById('factoral_input').value);

			for (var i = numberInput-1; i >= 1; i--) {
				numberInput = i * numberInput;
				document.getElementById('factoral_display').innerHTML = numberInput;
			}
		}



	/****** QUESTION 13 ***********/
	//Write a JavaScript program to construct the following pattern:
	//*
	//**
	//***
	//****
	//*****

	document.getElementById('star_submit').onclick = function() {
		var star = '*';
		var starArray = [];

		for (var i = 0; i < 6; i++) {
			starArray.push(star.repeat(i) + '<br>');
			document.getElementById('star_display').innerHTML = starArray.join("");
		}
	}


	/****** QUESTION 14 ***********/
	//Write a function that multiplies a base by itself a certain number of times (exponent)

	/****** QUESTION 15 ***********/
	//Write a program that prints the numbers from 1 to 100. But for multiples of three print "Foo" instead of the number and for the multiples of five print "Bar". For numbers which are multiples of both three and five print "FooBar"


});
