// 1. Crear array con cinco frutas
let frutas = ["Manzana", "Pera", "Naranja", "Plátano", "Uva"];
console.log("1. Array inicial:", frutas);

// 2. Añadir al inicio y al final
frutas.unshift("Fresa");
frutas.push("Sandía");
console.log("\n2. Después de añadir:", frutas);

// 3. Eliminar primera y última
frutas.shift();
frutas.pop();
console.log("\n3. Después de eliminar:", frutas);

// 4. Convertir a mayúsculas con map()
const frutasMayus = frutas.map(fruta => fruta.toUpperCase());
console.log("\n4. Frutas en mayúsculas:", frutasMayus);

// 5. Filtrar frutas con letra "a"
const frutasConA = frutas.filter(fruta => fruta.toLowerCase().includes("a"));
console.log("\n5. Frutas con letra 'a':", frutasConA);

// 6. Posición de "Manzana"
const posicionManzana = frutas.findIndex(fruta => fruta === "Manzana");
console.log("\n6. Posición de 'Manzana':", posicionManzana);

// 7. Comprobar con some() y every()
const empiezaConP = frutas.some(fruta => fruta.startsWith("P"));
console.log("\n7. ¿Alguna empieza con 'P'?", empiezaConP);

const todasMasDe3 = frutas.every(fruta => fruta.length > 3);
console.log("   ¿Todas tienen más de 3 letras?", todasMasDe3);

// 8. Ordenar alfabéticamente
const frutasOrdenadas = [...frutas].sort();
console.log("\n8. Frutas ordenadas:", frutasOrdenadas);

// 9. Unir con reduce()
const frutasString = frutas.reduce((acumulador, fruta, index) => {
  return index === 0 ? fruta : `${acumulador}, ${fruta}`;
}, "");
console.log("\n9. Frutas en string:", frutasString);