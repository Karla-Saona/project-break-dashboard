//Variables q necesito
const MAYUS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const MINUS = "abcdefghijklmnopqrstuvwxyz";
const NUM = "0123456789";
const SIMB = "!@#$%&*()-_=+";

function generarPassword(Longitud) {

  // Comprobamos que la longitud es válida
if (Longitud < 12 || Longitud > 50) {
    return "La longitud debe estar entre 12 y 50";
}

  //console.log (securePassword (5));
  //Aseguramos que haya al menos un carcater de cada tipo

let password = "";
  password += MAYUS[Math.floor(Math.random() * MAYUS.length)];
  password += MINUS[Math.floor(Math.random() * MINUS.length)];
  password += NUM[Math.floor(Math.random() * NUM.length)];
  password += SIMB[Math.floor(Math.random() * SIMB.length)];

  const mixAll = MAYUS + MINUS + NUM + SIMB; //mezclar todos los caracteres

  //utilizamos un bucle para rellenar el resto de la contraseña, rellenar 

for (let i = password.length; i < Longitud; i++) {
    const enterPassword = Math.floor(Math.random() * mixAll.length);
    password += mixAll[enterPassword];
}

  password = mix(password); //Mezclamos los caracteres para que no empiecen igual los primeros 4

return password;
}

//Convertimos el string en un array. 
//es necesario mezclar pq evita que la contraseña empiece siempre con mayus
function mix(contra) {
const arr = contra.split("");

for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

return arr.join("");
}

document.addEventListener("DOMContentLoaded", () => {
const btnGenerar = document.getElementById("generatorPassword");
const inputLength = document.getElementById("length");
const passwordText = document.getElementById("password");
const resultadoBox = document.getElementById("resultadoPassword"); 

if (!btnGenerar || !inputLength || !passwordText || !resultadoBox) return;

btnGenerar.addEventListener("click", () => {
const longitud = parseInt(inputLength.value, 10);

const resultado = generarPassword(longitud);

 // mostrar el resultado (sea contraseña o mensaje de error)
passwordText.textContent = resultado;

// 👇 Mostramos el bloque de resultado solo cuando se ha pulsado el botón
resultadoBox.style.display = "block";
});
});
