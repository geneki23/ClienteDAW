/**
 * Representa una tarea con su estado y fecha de creación
 */
class Tarea {
  /**
   * @param {string} texto - Texto de la tarea
   */
  constructor(texto) {
    /** @type {number} */
    this.id = Date.now();
    
    /** @type {string} */
    this.texto = texto;
    
    /** @type {boolean} */
    this.completada = false;
    
    /** @type {Date} */
    this.fechaCreacion = new Date();
  }

  /**
   * Marca la tarea como completada
   */
  completar() {
    this.completada = true;
  }

  /**
   * @returns {string} La tarea en formato "[ ] texto" o "[x] texto"
   */
  toString() {
    const estado = this.completada ? '[x]' : '[ ]';
    return `${estado} ${this.texto}`;
  }
}

module.exports = Tarea;