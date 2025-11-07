// Saludar (nombre)
function saludar(nombre) {
  return `Hola, ${nombre}!`;
}

console.log("=== FUNCIÓN SALUDAR ===");
console.log(saludar("Ana"));
console.log(saludar("Carlos"));
console.log(saludar("María"));


// Es par (numero)
function esPar(numero) {
  return numero % 2 === 0;
}

console.log("\n=== FUNCIÓN ES PAR ===");
console.log(`¿Es 4 par? ${esPar(4)}`);
console.log(`¿Es 7 par? ${esPar(7)}`);
console.log(`¿Es 10 par? ${esPar(10)}`);
console.log(`¿Es 15 par? ${esPar(15)}`);


// Operación en array: aplica callback
function operacionArray(arr, callback) {
  const resultado = [];
  for (const elemento of arr) {
    resultado.push(callback(elemento));
  }
  return resultado;
}

console.log("\n=== FUNCIÓN OPERACIÓN ARRAY ===");

const numeros = [1, 2, 3, 4, 5];
console.log("Array original:", numeros);

const multiplicarPor2 = num => num * 2;
console.log("Multiplicar por 2:", operacionArray(numeros, multiplicarPor2));

const sumar5 = num => num + 5;
console.log("Sumar 5:", operacionArray(numeros, sumar5));

const elevarAlCuadrado = num => num ** 2;
console.log("Elevar al cuadrado:", operacionArray(numeros, elevarAlCuadrado));


// Promedio (array)
const promedio = arr => {
  return arr.reduce((acumulador, valor) => acumulador + valor, 0) / arr.length;
};

console.log("\n=== FUNCIÓN PROMEDIO ===");
const valores1 = [10, 20, 30, 40, 50];
console.log("Array:", valores1);
console.log("Promedio:", promedio(valores1));

const valores2 = [5, 8, 12, 15];
console.log("\nArray:", valores2);
console.log("Promedio:", promedio(valores2));

const valores3 = [100, 200, 300];
console.log("\nArray:", valores3);
console.log("Promedio:", promedio(valores3));