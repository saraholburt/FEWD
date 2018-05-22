$(document).ready(function() {
	
	$('#entry').submit(enter);
	
	var total = 0;

	function enter(event) {
		event.preventDefault();
		var entry = $('#newEntry').val();
		entry = parseFloat(entry);
		total = total + entry;
		entry = currencyFormat(entry);
		$('#entries').append("$" + entry + "<br>");
		$('#total').html("$" + currencyFormat(total));
	}

	function currencyFormat(number) {
		number = parseFloat(number);
		number = number.toFixed(2);
		return number;
	}

});