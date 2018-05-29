$(document).ready(function(){

$('#submit').click(compare);

function compare () {
	var leftSide = $('#a').val();
	var rightSide = $('#b').val();

	if (leftSide > rightSide) {
		$('#comparison').html(">");
	}
	if (rightSide > leftSide) {
		$('#comparison').html("<");
	}
	else  {
		$('#comparison').html("=");
	}
}

});