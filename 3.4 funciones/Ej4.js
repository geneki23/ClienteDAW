// PARTE 1: Array de números
const numeros = [1, 4, 7, 10, 15];
console.log("Array original:", numeros);

const resultado = numeros
  .filter(num => num > 5)
  .map(num => num * 2)
  .reduce((suma, num) => suma + num, 0);

console.log("\nProceso encadenado:");
console.log("- Filtrar > 5:", numeros.filter(num => num > 5));
console.log("- Multiplicar x2:", numeros.filter(num => num > 5).map(num => num * 2));
console.log("- Suma total:", resultado);


// PARTE 2: Array de objetos
let usuarios = [
  {nombre: "Ana", edad: 23},
  {nombre: "Luis", edad: 19},
  {nombre: "Marta", edad: 30}
];

console.log("\n\nArray de usuarios:", usuarios);

const nombresOrdenados = usuarios
  .filter(usuario => usuario.edad > 20)
  .map(usuario => usuario.nombre)
  .sort();

console.log("\nProceso encadenado:");
console.log("- Mayores de 20:", usuarios.filter(u => u.edad > 20));
console.log("- Solo nombres:", usuarios.filter(u => u.edad > 20).map(u => u.nombre));
console.log("- Ordenados alfabéticamente:", nombresOrdenados);