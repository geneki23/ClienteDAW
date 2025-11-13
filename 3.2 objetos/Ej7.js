// ===== EJERCICIO 7: Conversión de objetos a valores primitivos =====

// Creo el objeto cuenta bancaria
let cuentaBancaria = {
    saldo: 1000,
    // Implemento el método toString
    toString: function() {
        return "Saldo: " + this.saldo + " EUR";
    }
};

// Al imprimir el objeto se usa toString
console.log(cuentaBancaria.toString());