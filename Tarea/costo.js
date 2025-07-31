const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese el precio unitario del producto: ', (precio) => {
  rl.question('Ingrese la cantidad de productos comprados: ', (cantidad) => {
    const total = parseFloat(precio) * parseInt(cantidad);
    console.log(`El costo total de la compra es: $${total.toFixed(2)}`);
    rl.close();
  });
});
