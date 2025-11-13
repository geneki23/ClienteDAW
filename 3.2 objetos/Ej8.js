// ===== EJERCICIO 8: Herencia de Clases =====

// Clase base Vehicle
class Vehicle {
    constructor(name) {
        this.name = name;
    }
    
    move() {
        console.log(this.name + " se está moviendo");
    }
}

// Clase hija Car que extiende Vehicle
class Car2 extends Vehicle {
    constructor(name, model) {
        super(name); // Llamo al constructor padre
        this.model = model;
    }
    
    // Sobrescribo el método move
    move() {
        console.log(this.name + " is Rolling out!");
    }
    
    // Método adicional
    info() {
        console.log("Nombre: " + this.name + ", Modelo: " + this.model);
    }
}

// Creo el objeto myCar
let myCar = new Car2("Toyota", "BZ4X");

// Llamo a los métodos
myCar.move();
myCar.info();