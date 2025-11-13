// ===== EJERCICIO 2: Operador "in" y bucle "for...in" =====

// Compruebo si existe la propiedad nombre
console.log("¿Existe 'nombre'?", "nombre" in persona);

// Compruebo si existe apellido
console.log("¿Existe 'apellido'?", "apellido" in persona);

// Recorro todas las propiedades del objeto
console.log("Propiedades de persona:");
for (let clave in persona) {
    console.log(clave + ":", persona[clave]);
}