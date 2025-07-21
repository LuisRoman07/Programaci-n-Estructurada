//OPERADORES ARITMETICOS
let a = 15; 
let b = 4;

suma = a+b;
console.log(`La suma de a + b es: ${suma}`);
console.log("Resta", a-b)
console.log("Multiplicacion:", a*b)
console.log("Division", a/b)
console.log("Modulo", a % b)

//OPERADORES DE COMPARACION
let edad1 = 20;
let edad2 = 25;

console.log("Comparacion estricta", edad1 === edad2);

console.log("¿Edad 1 > Edad 2", edad1 > edad2);
console.log("¿Edad 1 < Edad 2", edad1 < edad2);
console.log("¿Edad 1 == Edad 2", edad1 == edad2);
console.log("¿Edad 1 != Edad 2", edad1 != edad2);
console.log("¿Edad 1 >= Edad 2", edad1 >= edad2);
console.log("¿Edad 1 <= Edad 2", edad1 <= edad2);

//OPERADORES DE ASIGNACION
let puntos =0;

puntos = puntos +10;
console.log(`El puntaje final es ${puntos}` )
puntos +=10;

puntos -=5;
puntos *=2;

//OPERADORES LOGICOS 
let timeTarea = false;
let estudio = true;

let puedeSalir = !timeTarea && estudio;
console.log(`¿Puede salir a jugar? ${puedeSalir}`);

//OPERADOR TERMARIO
let numero =9;

let resultado = (numero % 2 ==0) ? "Par" : "Impar";
 console.log(`El numero es: ${resultado }`)





