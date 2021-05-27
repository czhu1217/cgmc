function contactValidate(email, firstnameval, lastnameval, msgval){
	var emailRE = /\S+@\S+\.\S+/;
	var nameRE = /^[A-Za-z\s]+$/;
	var emailValidation = emailRE.test(email);
	var msgValidation = /\S/.test(msgval);
	var name;
	if (!nameRE.test(firstnameval) && !nameRE.test(lastnameval)){
		name = false;
	}
	else {
		name = true;
	}

	if (emailValidation && name && msgValidation){
		return true;
	}
	else {
		return false;
	}
}

function contactFormSubmit(){
	var firstName = document.getElementById('firstname').value;
	var lastName = document.getElementById('lastname').value;
	var prefEmail = document.getElementById('email').value;
	var msg = document.getElementById('message').value;
	if (contactValidate(prefEmail, firstName, lastName, msg)){
		var emailBody = 'The following information has been automatically generated through the contact form that was completed. Please do not alter or change this section as I would like to know who I am speaking with! :) \r\n' +
			'Full Name: ' + firstName + ' ' + lastName + '\r\n' +
			'Reply Email: ' + prefEmail + '\r\n\r\n' +
			msg;
		emailBody = encodeURIComponent(emailBody);
		window.location.href = 'mailto: rychiu13@gmail.com?subject=Website Message&body=' + emailBody;
	}
	else {
		if (!/^[A-Za-z\s]+$/.test(firstName)){
			$('.firstname-error').css('display', 'initial');
		}
		else {
			$('.firstname-error').css('display', 'none'); //Reset field if valid
		}
		if (!/^[A-Za-z\s]+$/.test(lastName)){
			$('.lastname-error').css('display', 'initial');
		}
		else {
			$('.lastname-error').css('display', 'none'); //Reset field if valid
		}
		if (!/\S+@\S+\.\S+/.test(prefEmail)){
			$('.email-error').css('display', 'initial');
		}
		else {
			$('.email-error').css('display', 'none'); //Reset field if valid
		}
		if (!/\S/.test(msg)){
			$('.message-error').css('display', 'initial');
		}
		else {
			$('.message-error').css('display', 'none'); //Reset field if valid
		}
	}
}