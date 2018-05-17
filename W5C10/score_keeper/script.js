$(document).ready(function() {
	$('#add5').click(add5Points);
	$('#add10').click(add10Points);
	$('#sub1').click(sub1Point);
	$('#zero').click(zero);
	
	var total = 0;

	function add5Points() {
		total = total + 5;
		$('#result').html(total);
	}

	function add10Points() {
		total = total + 10;
		$('#result').html(total);
	}

	function sub1Point() {
		total = total - 1;
		$('#result').html(total);
	}

	function zero() {
		total = 0;
		$('#result').html(total);
	}
});