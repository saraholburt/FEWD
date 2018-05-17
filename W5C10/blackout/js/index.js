$(document).ready(function(){

	$('#light_switch').click(switchLight);

	function switchLight() {
		if ($('body').hasClass('dark')) {
			$('body').removeClass('dark');
		}
		else {
			$('body').addClass('dark');
		}
	}
});