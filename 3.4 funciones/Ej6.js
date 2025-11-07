let estudiantes = [
  { nombre: "Ana", nota: 9 },
  { nombre: "Luis", nota: 4 },
  { nombre: "Marta", nota: 7 },
  { nombre: "Pedro", nota: 5 },
  { nombre: "Sara", nota: 9 }
];

console.log("Estudiantes originales:", estudiantes);


// a) Ordenar por nota de mayor a menor
const estudiantesOrdenados = [...estudiantes].sort((a, b) => b.nota - a.nota);
console.log("\na) Ordenados por nota (mayor a menor):", estudiantesOrdenados);


// b) Comprobaciones con every() y some()
const todosAprobados = estudiantes.every(estudiante => estudiante.nota >= 5);
console.log("\nb) ¿Todos han aprobado (nota >= 5)?", todosAprobados);

const hayMatricula = estudiantes.some(estudiante => estudiante.nota >= 9);
console.log("   ¿Alguno tiene matrícula de honor (nota >= 9)?", hayMatricula);


// c) Agrupar por nota con reduce()
const estudiantesPorNota = estudiantes.reduce((grupos, estudiante) => {
  const nota = estudiante.nota;
  if (!grupos[nota]) {
    grupos[nota] = [];
  }
  grupos[nota].push(estudiante);
  return grupos;
}, {});

console.log("\nc) Estudiantes agrupados por nota:", estudiantesPorNota);


// d) Array de strings con formato "Nombre - Nota"
const estudiantesFormateados = estudiantes.map(estudiante => 
  `${estudiante.nombre} - ${estudiante.nota}`
);

console.log("\nd) Formato 'Nombre - Nota':", estudiantesFormateados);