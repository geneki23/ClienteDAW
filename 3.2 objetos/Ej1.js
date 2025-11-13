// ===== EJERCICIO 1: Creación y acceso a objetos =====

// Creo el objeto persona con sus propiedades
let persona = {
    nombre: "Ana",
    edad: 28,
    trabajo: "Ingeniera"
};

// Imprimo nombre y edad con notación de punto
console.log("Nombre:", persona.nombre);
console.log("Edad:", persona.edad);

// Añado la propiedad pais
persona.pais = "España";

// Elimino la propiedad trabajo
delete persona.trabajo;

// Muestro el objeto completo
console.log("Objeto modificado:", persona);

// Accedo a edad usando corchetes
console.log("Edad con corchetes:", persona["edad"]);