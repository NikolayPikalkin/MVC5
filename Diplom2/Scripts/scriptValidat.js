function validate_form() {
	let Name = document.inputForm.Name;
	let Width = document.inputForm.Width;
	let Length = document.inputForm.Length;
	let Type = document.inputForm.Type;

	valid = true;

	if (Name.value == "") {
		isInvalid(Name);
		valid = false;
	}
	else {
		isValid(Name);
	}

	if (Width.value == "") {
		isInvalid(Width);
		valid = false;
	}
	else
		if (!validWidth(Width.value)) {

		isInvalid(Width);

			valid = false;
		}
		else {
		isValid(Width);
		}


		if (Length.value == "") {
		isInvalid(Length);
			valid = false;
		}
		else if (!validLength(Length.value)) {

		isInvalid(Length);

		valid = false;
		}
		else {
			isValid(Length);
		}



	return valid;
}



function validWidth(value) {
	validW = true;
	const reg = /^[-]?\d+(?:[\.]\d+)?$/
	if (value.match(reg)) {
		if (parseInt(value) < 90 && parseInt(value) > -90) {
			validW = true;
		}
		else {
			validW = false;
		}
	}
	else
		validW = false;

	console.log(validW);
	return validW;
}

function validLength(value) {
	validL = true;
	const reg = /^[-]?\d+(?:[\.]\d+)?$/
	if (value.match(reg)) {
		if (parseInt(value) < 180 && parseInt(value) > -180) {
			validL = true;
		}
		else {
			validL = false;
		}
	}
	else
		validL = false;

	console.log(validL);
	return validL;
}







function isInvalid(inp) {
	inp.classList.add('is-invalid');
}

function isValid(inp) {
	inp.classList.remove('is-invalid');
	inp.classList.add('is-valid');
}
