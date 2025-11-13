/**
 * Tipado para una tarea usada en la aplicación.
 * @typedef {Object} Tarea
 * @property {string|number} id - Identificador único de la tarea
 * @property {string} texto - Texto/descripcion de la tarea
 * @property {boolean} completada - Indicador si la tarea está completada
 * @property {string|Date} fechaCreacion - Fecha de creación (ISO string o Date)
 */

/**
 * Fábrica para crear elementos de UI de tareas.
 * Encapsula la lógica de creación del DOM según el tipo solicitado.
 * @class ElementoUIFactory
 */
class ElementoUIFactory {
  /**
  * Crea un elemento de UI para una tarea según el tipo
  * @param {Tarea} tarea - Objeto tarea con propiedades id, texto, completada, fechaCreacion
   * @param {string} tipo - Tipo de elemento: 'simple' o 'detallado'
   * @returns {HTMLElement} Elemento DOM creado
  * @throws {Error} Si el tipo no es reconocido
   */
  crearElementoTarea(tarea, tipo) {
    if (tipo === 'simple') {
      return this.crearElementoSimple(tarea);
    } else if (tipo === 'detallado') {
      return this.crearElementoDetallado(tarea);
    } else {
      throw new Error(`Tipo desconocido: ${tipo}`);
    }
  }

  /**
  * Crea un elemento simple tipo lista
  * @param {Tarea} tarea
  * @returns {HTMLLIElement}
  * @private
   */
  crearElementoSimple(tarea) {
    const li = document.createElement('li');
    li.className = 'tarea-simple';
    li.textContent = tarea.toString();
    
    if (tarea.completada) {
      li.classList.add('completada');
    }
    
    return li;
  }

  /**
  * Crea un elemento detallado con más información
  * @param {Tarea} tarea
  * @returns {HTMLDivElement}
  * @private
   */
  crearElementoDetallado(tarea) {
    const div = document.createElement('div');
    div.className = 'tarea-detallada';
    
    // Checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = tarea.completada;
    checkbox.className = 'tarea-checkbox';
    checkbox.dataset.id = tarea.id;
    
    // Texto
    const texto = document.createElement('span');
    texto.className = 'tarea-texto';
    texto.textContent = tarea.texto;
    if (tarea.completada) {
      texto.classList.add('completada');
    }
    
    // Fecha
    const fecha = document.createElement('span');
    fecha.className = 'tarea-fecha';
    const fechaObj = new Date(tarea.fechaCreacion);
    fecha.textContent = fechaObj.toLocaleDateString();
    
    // Botón eliminar
    const btnEliminar = document.createElement('button');
    btnEliminar.className = 'btn-eliminar';
    btnEliminar.textContent = 'Eliminar';
    btnEliminar.dataset.id = tarea.id;
    
    // Ensamblar
    div.appendChild(checkbox);
    div.appendChild(texto);
    div.appendChild(fecha);
    div.appendChild(btnEliminar);
    
    return div;
  }
}

// Exportar para Node.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ElementoUIFactory;
}