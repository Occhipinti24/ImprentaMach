/*
let=NombreUsuario =prompt("Ingrese su nombre");
let=Password;


if (NombreUsuario == ""){
    alert("No ingresaste ningun dato");
} else {
    alert("Ingresaste: " + NombreUsuario);
}
*/

//Formulario Login
//function BienvenidaMach() //Cuando Tomi pase su codigo 

document.getElementById("FormularioL").addEventListener("submit", function(event){
    event.preventDefault();

    const mail=document.getElementById("gmail").value;
    const password=document.getElementById("password").value;
    if(password.length >10){
    console.log("El numero maximo de caracteres ingresados debe ser 10")
    alert("La contraseña no puede tener mas de 10 caracteres")
    return
}
if (mail && password) { //valida que ambos campos esten completos
    console.log(`mail: ${password}`) //alt +96 (backticks interpolacion de variables)
    console.log(`password: ${mail}`)
    console.log("todo correcto")
    alert ("Bienvenido a Imprenta MACH!")
}else{
    console.log("Algunos campos estan vacios");
    alert("Por favor completa todos los campos");
}

})
