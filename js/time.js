
// creó una funcion para q nos de la hora
function updateClock() {
const now = new Date(); // Nos da la fecha y la hora actual del sistema (del PC / dispositivo).
const parts = [
    now.getHours(),
    now.getMinutes(),
    now.getSeconds(),
];
/*console.log(parts);//imprimes la funcion, me la devuelve como un array*/

//conviertó numeros sueltos en un formato reloj
const formatted = parts.map(num => num.toString().padStart(2,"0"))
.join(":");

// partes de la fecha
const day = now.getDate();
const month = now.getMonth() + 1; // muy importante pq enero= 0
const year = now.getFullYear();

// formato dd/mm/yyyy
const formattedDate = `${day}/${month}/${year}`;

document.getElementById("clock").textContent = formatted;
document.getElementById("date").textContent = formattedDate;

//mensaje según la hora 

const message = getMessageforTime(now);
document.getElementById("message").textContent = message;
}

function getMessageforTime(now){
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const totalMinutes = hours * 60 + minutes;

    let message = "";
//deben cumplir las 2 condiciones al mismo tiempo
/*Desde las 00:01 hasta las 07:00. 
La hora actual es igual o después de las 00:01”
>= 1 significa después de las 00:01
7 * 60 = 420 minutos
420 minutos equivalen a 07:00
La hora actual es antes de las 07:00”. */

if (totalMinutes >= 1 && totalMinutes < 7 * 60) {
    message = "Es hora de descansar. Apaga y sigue mañana";}
    //Desde las 07:01 hasta las 12:00
    
else if (totalMinutes >= 421 && totalMinutes <= 720) {
    message = "Buenos días, desayuna fuerte y a darle al código.";
}

    //Desde las 12:01 hasta las 14:00 . el rango es 12:01 → 14:00 , q seria lo mismo 721 → 840
else if (totalMinutes >= 721 && totalMinutes <= 840) {
    message = "Echa un rato más pero no olvides comer.";
}
    //Desde las 14:01 hasta las 16:00 
    else if (totalMinutes >= 841 && totalMinutes <= 960) {
    message = "Espero que hayas comido.";
}

    //Desde las 16:01 hasta las 18:00 
else if (totalMinutes >= 961 && totalMinutes <= 1080) {
    message = "Buenas tardes, el último empujón.";
}
    //Desde las 18:01 hasta las 22:00 
else if (totalMinutes >= 1081 && totalMinutes <= 1320) {
    message = "Esto ya son horas extras... piensa en parar pronto.";
}
    //Desde las 22:01 hasta las 00:00 
else if (totalMinutes >= 1081 && totalMinutes <= 1320) {
    message = "Esto ya son horas extras... piensa en parar pronto.";
}
return message;
}


updateClock();//para ejecutar la funcion
setInterval(updateClock,1000); //Ejecuta una función repetidamente, setInterval(función, tiempo_en_milisegundos);