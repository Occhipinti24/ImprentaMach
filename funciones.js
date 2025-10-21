const formulariocontacto = document.getElementById("form-contacto");

formulariocontacto.addEventListener("submit", function(e) {
  e.preventDefault();

  const confirmar = prompt("¿Deseas enviar el mensaje? (sí / no)");

  if (confirmar && confirmar.toLowerCase() === "si") {
    alert("✅ ¡Mensaje enviado con éxito!");
    formulariocontacto.reset();
  } else {
    alert("❌ Envío cancelado");
  }
});