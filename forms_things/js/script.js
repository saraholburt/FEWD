$(document).ready(function(){

		$('#resume-upload-trigger').click(function() {
			$("#resume-upload").click();
		});

		var applicants = [];
		$('#submit-job').click(function(dontSend) {
			dontSend.preventDefault();
			var name = $("#fullname").val();
			var address = $("#address").val();
			var city = $("#city").val();
			var state = $("#state").val();
			var zipcode = $("#zipcode").val();
			var phone = $("#phone").val();
			var email = $("#email").val();

			var applicant = {
				name:name,
				address:address,
				city:city,
				state:state,
				zipcode:zipcode,
				phone:phone,
				email:email
			}

			applicants.push(applicant);
			console.log(applicants);
		});
});
