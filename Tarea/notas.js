const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pedirNota(numero, callback) {
  rl.question(`Ingresa la nota ${numero}: `, (input) => {
    const nota = parseFloat(input);
    if (isNaN(nota)) {
      console.log("Por favor, ingresa un número válido.");
      pedirNota(numero, callback);
    } else {
      callback(nota);
    }
  });
}


let notas = [];
function capturarNotas(i = 1) {
  if (i > 3) {
    const promedio = notas.reduce((sum, nota) => sum + nota, 0) / 3;
    console.log(`El promedio de las tres notas es: ${promedio.toFixed(2)}`);
    rl.close();
  } else {
    pedirNota(i, (nota) => {
      notas.push(nota);
      capturarNotas(i + 1);
    });
  }
}

capturarNotas();
