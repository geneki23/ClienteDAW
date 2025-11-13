// ===== EJERCICIO 9: Encapsulación con Propiedades Privadas =====

class CajaFuerte {
    #codigo; 
    
    constructor(propietario, codigoInicial) {
        this.propietario = propietario;
        this.#codigo = codigoInicial;
    }
    
    verCodigo() {
        return this.#codigo;
    }
    
    cambiarCodigo(nuevoCodigo) {
        
        if (nuevoCodigo.toString().length === 4) {
            this.#codigo = nuevoCodigo;
            console.log("Código cambiado correctamente");
        } else {
            console.log("Error: el código debe tener 4 dígitos");
        }
    }
}

// Creo el objeto miCaja
let miCaja = new CajaFuerte("Ana", 1234);


console.log("Código actual:", miCaja.verCodigo());


miCaja.cambiarCodigo(5678);

// Verifica que cambió
console.log("Nuevo código:", miCaja.verCodigo());