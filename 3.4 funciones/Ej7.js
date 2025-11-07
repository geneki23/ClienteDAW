let tareas = [
  { id: 1, titulo: "Estudiar JavaScript", completada: false },
  { id: 2, titulo: "Comprar pan", completada: true },
  { id: 3, titulo: "Hacer ejercicio", completada: false }
];


// 1. Generar ID siguiente
const generarId = arr => Math.max(...arr.map(t => t.id), 0) + 1;

// 2. Agregar tarea
const agregarTarea = (arr, titulo) => [...arr, { id: generarId(arr), titulo, completada: false }];

// 3. Completar tarea
const completarTarea = (arr, id) => arr.map(t => t.id === id ? { ...t, completada: true } : t);

// 4. Eliminar tarea
const eliminarTarea = (arr, id) => arr.filter(t => t.id !== id);

// 5. Obtener pendientes
const obtenerPendientes = arr => arr.filter(t => !t.completada);

// 6. Contar completadas
const contarCompletadas = arr => arr.reduce((total, t) => total + (t.completada ? 1 : 0), 0);


// PRUEBAS
console.log("Tareas iniciales:", tareas);

console.log("\nID siguiente:", generarId(tareas));

const tareasConNueva = agregarTarea(tareas, "Leer un libro");
console.log("\nDespués de agregar:", tareasConNueva);

const tareasCompletadas = completarTarea(tareasConNueva, 1);
console.log("\nDespués de completar id 1:", tareasCompletadas);

const tareasEliminadas = eliminarTarea(tareasCompletadas, 2);
console.log("\nDespués de eliminar id 2:", tareasEliminadas);

console.log("\nTareas pendientes:", obtenerPendientes(tareasEliminadas));

console.log("\nTotal completadas:", contarCompletadas(tareasEliminadas));

console.log("\nTareas originales (sin modificar):", tareas);