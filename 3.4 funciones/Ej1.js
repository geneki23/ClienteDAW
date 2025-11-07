
// PARTE 1


const numeros = [4.7, 2.3, 9.8, 6.5];
console.log("Array original:", numeros);

// a) Redondear hacia arriba usando Math.ceil()
const numerosRedondeados = numeros.map(num => Math.ceil(num));
console.log("\na) Números redondeados hacia arriba:", numerosRedondeados);


// b) Convertir a strings y mostrar longitud
const numerosComoStrings = numeros.map(num => num.toString());
console.log("\nb) Números convertidos a strings:", numerosComoStrings);

numerosComoStrings.forEach((str, index) => {
  console.log(`   "${str}" tiene longitud: ${str.length}`);
});


// c) Calcular mayor y menor valor
const mayorValor = Math.max(...numeros);
const menorValor = Math.min(...numeros);
console.log("\nc) Mayor valor:", mayorValor);  // 9.8
console.log("   Menor valor:", menorValor);    // 2.3




// PARTE 2


const texto = "JavaScript";
console.log("\n\nTexto original:", texto);

// a) Convertir a mayúsculas
const textoMayusculas = texto.toUpperCase();
console.log("\na) En mayúsculas:", textoMayusculas);


// b) Obtener los 4 primeros caracteres
const primerosCuatro = texto.slice(0, 4);

console.log("\nb) Primeros 4 caracteres:", primerosCuatro);


// c) Verificar si contiene la letra "S" mayúscula
const contieneS = texto.includes("S");
console.log("\nc) ¿Contiene la letra 'S' mayúscula?", contieneS);