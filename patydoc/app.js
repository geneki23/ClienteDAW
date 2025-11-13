
/**
 * Tipado para una tarea usada en la aplicación.
 * @typedef {Object} Tarea
 * @property {string|number} id - Identificador único de la tarea
 * @property {string} texto - Texto/descripcion de la tarea
 * @property {boolean} completada - Indicador si la tarea está completada
 * @property {string|Date} fechaCreacion - Fecha de creación (ISO string o Date)
 */

/**
 * Gestor (singleton) de tareas obtenido del módulo TaskManager.
 * @type {any}
 */
const gestor = TaskManager.getInstance();

/**
 * Fábrica para crear elementos de UI de tareas.
 * @type {ElementoUIFactory}
 */
const factory = new ElementoUIFactory();

/**
 * Observador que renderiza la vista simple usando la fábrica.
 * @returns {void}
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
 * Observador que renderiza la vista detallada usando la fábrica.
 * Añade manejadores de eventos a los elementos creados por la fábrica.
 * @returns {void}
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

/**
 * Añade una nueva tarea usando el texto del input.
 * @returns {void}
 */
function agregarTarea() {
  const input = document.getElementById('input-tarea');
  const texto = input.value.trim();

  if (texto) {
    /**
     * Llamada al gestor para crear una tarea nueva usando solo el texto.
     * El gestor se encarga de construir el objeto `Tarea` completo.
     */
    gestor.agregarTarea(texto);
    input.value = '';
    input.focus();
  }
}

/**
 * Manejador de evento para el input de tarea.
 * @param {KeyboardEvent} e
 * @returns {void}
 */
function manejarKeypressInput(e) {
  if (e.key === 'Enter') agregarTarea();
}

// Registrar listener del input
document.getElementById('input-tarea').addEventListener('keypress', manejarKeypressInput);

// Renderizado inicial
renderizarVistaSimple();
renderizarVistaDetallada();