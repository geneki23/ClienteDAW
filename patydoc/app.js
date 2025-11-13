// app.js - Utiliza la fábrica para crear elementos DOM

const gestor = TaskManager.getInstance();
const factory = new ElementoUIFactory();

/**
 * Observador que renderiza la vista simple usando la fábrica
 */
function renderizarVistaSimple() {
  const contenedor = document.getElementById('lista-simple');
  contenedor.innerHTML = '';
  
  const tareas = gestor.obtenerTareas();
  
  if (tareas.length === 0) {
    contenedor.innerHTML = '<li class="empty">No hay tareas</li>';
    return;
  }
  
  // Usar la fábrica para crear cada elemento
  tareas.forEach(tarea => {
    const elemento = factory.crearElementoTarea(tarea, 'simple');
    contenedor.appendChild(elemento);
  });
}

/**
 * Observador que renderiza la vista detallada usando la fábrica
 */
function renderizarVistaDetallada() {
  const contenedor = document.getElementById('lista-detallada');
  contenedor.innerHTML = '';
  
  const tareas = gestor.obtenerTareas();
  
  if (tareas.length === 0) {
    contenedor.innerHTML = '<div class="empty">No hay tareas</div>';
    return;
  }
  
  // Usar la fábrica para crear cada elemento
  tareas.forEach(tarea => {
    const elemento = factory.crearElementoTarea(tarea, 'detallado');
    
    // Agregar eventos a los elementos creados por la fábrica
    const checkbox = elemento.querySelector('.tarea-checkbox');
    checkbox.addEventListener('change', () => {
      gestor.marcarTareaComoCompletada(tarea.id);
    });
    
    const btnEliminar = elemento.querySelector('.btn-eliminar');
    btnEliminar.addEventListener('click', () => {
      gestor.eliminarTarea(tarea.id);
    });
    
    contenedor.appendChild(elemento);
  });
}

// Suscribir observadores
gestor.suscribir(renderizarVistaSimple);
gestor.suscribir(renderizarVistaDetallada);

// Función para agregar tarea
function agregarTarea() {
  const input = document.getElementById('input-tarea');
  const texto = input.value.trim();
  
  if (texto) {
    gestor.agregarTarea(texto);
    input.value = '';
    input.focus();
  }
}

// Event listener del input
document.getElementById('input-tarea').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') agregarTarea();
});

// Renderizado inicial
renderizarVistaSimple();
renderizarVistaDetallada();