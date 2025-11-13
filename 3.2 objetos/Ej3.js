// ===== EJERCICIO 3: Referencias de objetos y clonación =====

// Creo el objeto usuario1
let usuario1 = {
    nombre: "Carlos",
    edad: 30,
    email: "carlos@mail.com"
};

// Hago una copia por referencia
let usuario2 = usuario1;

// Modifico usuario2 y afecta a usuario1 también
usuario2.edad = 35;
console.log("usuario1 edad:", usuario1.edad); // Se ve que cambió

// Hago una clonación superficial con Object.assign
let usuario3 = Object.assign({}, usuario1);

// Cambio una propiedad del clon
usuario3.nombre = "Pedro";

// Imprimo ambos para ver que el original no cambió
console.log("usuario1:", usuario1);
console.log("usuario3 (clon):", usuario3);
