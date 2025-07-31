const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese la cantidad en kilómetros: ', (km) => {
  const millas = parseFloat(km) * 0.621371;
  console.log(`${km} km equivalen a ${millas.toFixed(2)} mi`);
  rl.close();
});
