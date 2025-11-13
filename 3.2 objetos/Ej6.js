// ===== EJERCICIO 6: Symbol y claves ocultas =====

// Creo un símbolo para usarlo como clave
let id = Symbol("id");

// Creo el objeto empleado con el símbolo
let empleado = {
    nombre: "Laura",
    edad: 25
};

// Añado la propiedad con el símbolo
empleado[id] = 12345;

// Intento verlo con for...in (no aparecerá)
console.log("Propiedades de empleado:");
for (let prop in empleado) {
    console.log(prop + ":", empleado[prop]);
}

// Para acceder al símbolo hay que hacerlo directamente
console.log("ID con símbolo:", empleado[id]);