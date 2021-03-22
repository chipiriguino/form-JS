function validar() {
	var user = document.getElementById("user");
    var lastName = document.getElementById("lastname");
	var email = document.getElementById("email");
	var pass1 = document.getElementById("pass1");
	var elementoCHECK = document.getElementById("terminos");

	if(user.value.length < 2)
	{
      alert("Debe completar el campo nombre con mínimo 2 caracteres");
    	user.focus();
    	return false;
	}
    if(lastName.value.length < 2)
	{
      alert("Debe completar el campo apellidos con mínimo 2 caracteres");
    	user.focus();
    	return false;
	}
	if(email.value.length < 2)
	{
		alert("Debe completar el campo email con mínimo 2 caracteres");
		email.focus();
		return false;
	}
	if(pass1.value.length < 2)
	{
		alert("Debe completar el campo contraseña con mínimo 2 caracteres");
		pass1.focus();
		return false;
	}
	
	if(!elementoCHECK.checked)
	{
		alert("Debe aceptar los términos y condiciones");
		return false;
	}
  else
  {
    alert("Datos de formulario enviados exitosamente.");
    document.getElementById("myForm").reset();
	  return false;
	}
}