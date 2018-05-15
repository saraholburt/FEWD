//Vanilla JS

/*document.getElementById('grayButton').onclick = switchGray; //Get Element by ID from the HTML 
document.getElementById('whiteButton').onclick = switchWhite;
document.getElementById('orangeButton').onclick = switchOrange;

function switchGray () {
	document.body.style.backgroundColor = 'gray'; //takes the CSS syntax and styles with dashes become camelCase
	document.body.style.color = 'white';
}

function switchWhite () {
	document.body.style.backgroundColor = 'white';
	document.body.style.color = 'black';
}

function switchOrange () {
	document.body.style.backgroundColor = 'orange';
	document.body.style.color = '#fbfbfb';
	document.getElementById('switcher').style.height = "400px";
}
*/


//JQuery

$(document).ready(function() {
	$('#grayButton').click(function() {
		$('body').css({background: "gray"});
		$('h1').css('color', 'white');
		$('p').css('color', 'white');
	});
	$('#whiteButton').click(function() {
		$('body').css('background', 'white');
		$('h1').css('color', 'black');
		$('p').css('color', 'black');
	});
	$('#orangeButton').click(function() {
		$('body').css('background', 'orange');
		$('h1').css('color', 'black');
		$('p').css('color', 'black');
	});
});