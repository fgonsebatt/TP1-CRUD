
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");

const email = document.getElementById("mail");

const error = document.getElementById("errormail");
const errorNom = document.getElementById("errornom");
const errorApell = document.getElementById("errorapell");

const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const textoForm = /^[a-zA-Z\u00C0-\u017F\s]+$/;
const numForm = /^[0-9]+$/;


window.addEventListener("load", () => {

  const isValid = email.value.length === 0 || emailRegExp.test(email.value);
  email.className = isValid ? "valido" : "invalido";

  const isValidNom = nombre.value.length === 0 || textoForm.test(nombre.value);
  nombre.className = isValidNom ? "valido" : "invalido";

  const isValidApell = apellido.value.length === 0 || textoForm.test(apellido.value);
  apellido.className = isValidApell ? "valido" : "invalido";

});

email.addEventListener("input", () => {
  const isValid = email.value.length === 0 || emailRegExp.test(email.value);
  if (isValid) {
    email.className = "valido";
    error.textContent = "";
    error.className = "error";
  } else {
    email.className = "invalido";
  }
});
nombre.addEventListener("input", () => {
  const isValidNom = nombre.value.length === 0 || textoForm.test(nombre.value);
  if (isValidNom) {
    nombre.className = "valido";
    error.textContent = "";
    error.className = "error";
  } else {
    nombre.className = "invalido";
  }
});
apellido.addEventListener("input", () => {
  const isValidApell = apellido.value.length === 0 || textoForm.test(apellido.value);
  if (isValidApell) {
    apellido.className = "valido";
    error.textContent = "";
    error.className = "error";
  } else {
    apellido.className = "invalido";
  }
});

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("formulario").addEventListener('submit', validarFormulario); 
});

function validarFormulario(evento) {
  evento.preventDefault();
  const isValid = email.value.length === 0 || emailRegExp.test(email.value);
  if (!isValid) {
    email.className = "invalido";
    error.textContent = "Ingrese un email correcto";
    error.className = "error activo";
    return;
  } else {
    email.className = "valido";
    error.textContent = "";
    error.className = "error";

  }
  const isValidNom = nombre.value.length === 0 || textoForm.test(nombre.value);
  if (!isValidNom) {
    nombre.className = "invalido";
    errorNom.textContent = "Ingrese un nombre correcto";
    errorNom.className = "error activo";
    return;
  } else {
    nombre.className = "valido";
    errorNom.textContent = "";
    errorNom.className = "error";
  }
  const isValidApell = apellido.value.length === 0 || textoForm.test(apellido.value);
  if (!isValidApell) {
    apellido.className = "invalido";
    errorApell.textContent = "Ingrese un apellido correcto";
    errorApell.className = "error activo";
    return;
  } else {
    apellido.className = "valido";
    errorApell.textContent = "";
    errorApell.className = "error";
  }
  this.submit();
};
