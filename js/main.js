function validateForm(){
	/* Instrucciones
	Todos los campos son obligatorios, excepto los dos últimos.
	Los campos nombre y apellido sólo deben permitir caracteres de la A-Z
	Para los campos nombre y apellido la primera letra debe ser mayúscula
	Validar que el campo email tenga un formato válido. Ej: name@domain.com
	El campo password debe tener al menos 6 caracteres
	El campo password no puede ser igual a "password" ó "123456" ó "098754"
	El valor seleccionado de bicis, debe ser una de las opciones presentadas
	Si algún campo presenta error debe informarse al usuario por medio de un alert. */


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
  	var name = document.getElementById("name").value;
	  var lastName = document.getElementById("lastname").value;
	  var letters = /^[a-zA-Z]+$/;
	  
	  // Validar si name y last name poseen caracteres de tipo alfabético 
		if (!name.match(letters)){
			alert("Caracteres inválidos en tu nombre");
			return false;
		}

		if (!lastName.match(letters)){
			alert("Caracteres inválidos en tu apellido");
			return false;
		}
		// Validar la primera letra del name y last name como mayúsculas
		var upperCaseLetters = /[A-Z]/;
		var upperCaseName = name.charAt(0);
		var upperCaseLastName = lastName.charAt(0);

		if(!(upperCaseLetters.test(upperCaseName))){
			alert("La primera letra de tu nombre debe ser en mayúscula");
			return false;
		}

		if(!(upperCaseLetters.test(upperCaseLastName))){
			alert("La primera letra de tu apellido deber ser en mayúscula");
			return false;
		}
  }
  validateNameLastName();

	// Validar que email tenga formato válido
	function validateEmail(){
		var regularExpressions = /^([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)@([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)[\\.]([a-zA-Z]{2,9})$/;
	  var mail = document.getElementById("input-email").value;

	  if (!regularExpressions.test(mail)){
			errorMail = "Formato inválido de email";
			alert(errorMail);
			return false;
		}
	}
	validateEmail();
  
	//Validar password
	// Revisar las expresiones y ver por qué el for de la línea 74 lo salta (o toma como true)
	function validatePassword(){
		var password = document.getElementById("input-password").value;
	  if(password.length < 6 || password == "password" || password == 123456 || password == 098754){
	  	alert("Tu contraseña no es válida o es insegura. Recuerda que debe tener un mínimo de 6 dígitos");
	  	return false;
	  }
	}
	validatePassword();
   
  // Validar campo "Selecciona tu bici" 
  function validateBike(){
  	var bikeType = document.getElementsByTagName("select");
	  var errorBike;

	  for (var i = 0; i < bikeType.length; i++){
	  	if(bikeType[i].value == "0"){
	  		errorBike = "Por favor elige un tipo de bicicleta";
	  		alert(errorBike);
	  		return false;
	  	}
	  }
  }
  validateBike();

}