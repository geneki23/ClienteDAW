const Tarea = require('./Tarea');

/**
 * Gestor de tareas con patrón Singleton y Observer.
 */
class TaskManager {
  constructor() {
    if (TaskManager.instance) {
      return TaskManager.instance;
    }
    
    /** @type {Tarea[]} */
    this.tareas = [];
    
    /** @type {Function[]} - Array de funciones observadoras */
    this.observadores = [];
    
    TaskManager.instance = this;
  }

  /**
   * Obtiene la única instancia del gestor
   * @returns {TaskManager}
   */
  static getInstance() {
    if (!TaskManager.instance) {
      TaskManager.instance = new TaskManager();
    }
    return TaskManager.instance;
  }

  /**
   * Suscribe una función observadora que se ejecutará cuando cambie el estado
   * @param {Function} observador - Función que se llamará al notificar cambios
   */
  suscribir(observador) {
    this.observadores.push(observador);
  }

  /**
   * Notifica a todos los observadores suscritos ejecutando sus funciones
   */
  notificar() {
    this.observadores.forEach(observador => observador());
  }

  /**
   * Agrega una nueva tarea y notifica a los observadores
   * @param {string} texto - Texto de la tarea
   * @returns {Tarea}
   */
  agregarTarea(texto) {
    const nuevaTarea = new Tarea(texto);
    this.tareas.push(nuevaTarea);
    this.notificar();
    return nuevaTarea;
  }

  /**
   * Elimina una tarea por ID y notifica a los observadores
   * @param {number} id - ID de la tarea
   * @returns {boolean}
   */
  eliminarTarea(id) {
    const index = this.tareas.findIndex(t => t.id === id);
    if (index !== -1) {
      this.tareas.splice(index, 1);
      this.notificar();
      return true;
    }
    return false;
  }

  /**
   * Obtiene todas las tareas
   * @returns {Tarea[]}
   */
  obtenerTareas() {
    return this.tareas;
  }

  /**
   * Marca una tarea como completada y notifica a los observadores
   * @param {number} id - ID de la tarea
   * @returns {boolean}
   */
  marcarTareaComoCompletada(id) {
    const tarea = this.tareas.find(t => t.id === id);
    if (tarea) {
      tarea.completar();
      this.notificar();
      return true;
    }
    return false;
  }
}

module.exports = TaskManager;