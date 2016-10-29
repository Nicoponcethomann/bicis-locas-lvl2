function validateForm(){
	// Validar name, lastname, email y password no están vacíos
	function validateInputs(){
		var obligatoryInputs = [document.getElementById("name"), document.getElementById("lastname"), document.getElementById("input-email"), document.getElementById("input-password")];
		var error;

		for (var i = 0; i < obligatoryInputs.length; i++){
			if (obligatoryInputs[i].value == ""){
				error = "Por favor completa los campos vacíos";
				alert(error);
				return false;
			}
		}
	}
	validateInputs();
	
  // Validar name y last name
  function validateNameLastName(){
  	// Variables Name
  	var name = document.getElementById("name").value;
  	var nameContainer = document.getElementsByClassName("name-container")[0];
  	var spanName = document.createElement("span");
	  var nameErrorCharacters = document.createTextNode("Caracteres inválidos en tu nombre");
	  var nameErrorUpperCase = document.createTextNode("La primera letra de tu nombre debe ser en mayúscula");
	  // Otras variables
	  var letters = /^[a-zA-Z]+$/;
	  
	  // Validar si name posee caracteres de tipo alfabético 
		if (!name.match(letters)){
			spanName.appendChild(nameErrorCharacters);
			nameContainer.appendChild(spanName);
			return false;
		}

		// Validar la primera letra del name como mayúsculas
		var upperCaseLetters = /[A-Z]/;
		var upperCaseName = name.charAt(0);

		if(!(upperCaseLetters.test(upperCaseName))){
			spanName.appendChild(nameErrorUpperCase);
			nameContainer.appendChild(spanName);
			return false;
		}
  }
  validateNameLastName();

  function validateLastName(){
  	// Variables LastName
	  var lastName = document.getElementById("lastname").value;
	  var lastNameContainer = document.getElementsByClassName("lastname-container")[0];
  	var spanLastName = document.createElement("span");
	  var lastNameErrorCharacters = document.createTextNode("Caracteres inválidos en tu apellido");
	  var lastNameErrorUpperCase = document.createTextNode("La primera letra de tu apellido debe ser en mayúscula");
	  // Otras variables
	  var letters = /^[a-zA-Z]+$/;

	  // Validar si last name posee caracteres de tipo alfabético
	  if (!lastName.match(letters)){
			spanLastName.appendChild(lastNameErrorCharacters);
			lastNameContainer.appendChild(spanLastName);
			return false;
		}

		// Validar la primera letra del last name como mayúsculas
		var upperCaseLetters = /[A-Z]/;
		var upperCaseLastName = lastName.charAt(0);

		if(!(upperCaseLetters.test(upperCaseLastName))){
			spanLastName.appendChild(lastNameErrorUpperCase);
			lastNameContainer.appendChild(spanLastName);
			return false;
		}
  }
  validateLastName();

	// Validar que email tenga formato válido
	function validateEmail(){
		var regularExpressions = /^([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)@([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)[\\.]([a-zA-Z]{2,9})$/;
	  var mail = document.getElementById("input-email").value;
	  var mailContainer = document.getElementsByClassName("email-container")[0];
	  var spanMail = document.createElement("span");
	  var mailError = document.createTextNode("Formato inválido de email");

	  if (!regularExpressions.test(mail)){
			spanMail.appendChild(mailError);
			mailContainer.appendChild(spanMail);
			return false;
		}
	}
	validateEmail();
  
	//Validar password
	// Revisar las expresiones y ver por qué el for de la línea 74 lo salta (o toma como true)
	function validatePassword(){
		var password = document.getElementById("input-password").value;
		var passwordContainer = document.getElementsByClassName("form-group")[0];
		var spanPassword = document.createElement("span");
		var passwordError = document.createTextNode("Tu contraseña no es válida o es insegura. Recuerda que debe tener un mínimo de 6 dígitos");


	  if(password.length < 6 || password == "password" || password == 123456 || password == 098754){
	  	spanPassword.appendChild(passwordError);
	  	passwordContainer.appendChild(spanPassword);
	  	return false;
	  }
	}
	validatePassword();
   
  // Validar campo "Selecciona tu bici" 
  function validateBike(){
  	var bikeType = document.getElementsByTagName("select");
	  var bikeContainer = document.getElementsByClassName("form-group")[1];
	  var spanBike = document.createElement("span");
	  var bikeError = document.createTextNode("Por favor elige un tipo de bicicleta");

	  for (var i = 0; i < bikeType.length; i++){
	  	if(bikeType[i].value == "0"){
	  		spanBike.appendChild(bikeError);
	  		bikeContainer.appendChild(spanBike);
	  		return false;
	  	}
	  }
  }
  validateBike();
}