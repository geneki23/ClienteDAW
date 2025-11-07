let productos = [
  { nombre: "Teclado", precio: 50, stock: 10 },
  { nombre: "Ratón", precio: 20, stock: 0 },
  { nombre: "Monitor", precio: 200, stock: 5 },
  { nombre: "USB", precio: 10, stock: 25 }
];

console.log("Inventario inicial:", productos);


// 1. Función productosConStock
function productosConStock(arr) {
  return arr.filter(producto => producto.stock > 0);
}

console.log("\n1. Productos con stock:", productosConStock(productos));


// 2. Función incrementarPrecio
function incrementarPrecio(arr, porcentaje) {
  return arr.map(producto => ({
    ...producto,
    precio: producto.precio * (1 + porcentaje / 100)
  }));
}

console.log("\n2. Precios incrementados 10%:", incrementarPrecio(productos, 10));


// 3. Función calcularValorTotalInventario
function calcularValorTotalInventario(arr) {
  return arr.reduce((total, producto) => {
    return total + (producto.precio * producto.stock);
  }, 0);
}

console.log("\n3. Valor total inventario:", calcularValorTotalInventario(productos));


// 4. Encadenar funciones
const valorFinal = calcularValorTotalInventario(
  incrementarPrecio(
    productosConStock(productos),
    10
  )
);

console.log("\n4. Valor total tras aumento del 10% (solo con stock):", valorFinal);

console.log("\nDesglose del cálculo:");
const conStock = productosConStock(productos);
console.log("- Productos con stock:", conStock);

const preciosAumentados = incrementarPrecio(conStock, 10);
console.log("- Precios aumentados 10%:", preciosAumentados);

console.log("- Valor total:", valorFinal);