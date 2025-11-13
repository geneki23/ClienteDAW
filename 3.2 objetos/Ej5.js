// ===== EJERCICIO 5: Métodos en objetos y uso de "this" =====

// Creo el constructor Car
function Car(name, model, year) {
    this.name = name;
    this.model = model;
    this.year = year;
}

// Pruebo crear un coche
let miCoche = new Car("Ford", "Mustang", 2020);
console.log("Mi coche:", miCoche);