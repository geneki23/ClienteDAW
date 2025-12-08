/**
 * @fileoverview Ejercicio 1: Laboratorio de Eventos
 * Este archivo contiene funciones para demostrar el manejo de eventos
 * de ratón y teclado en JavaScript.
 * @author Estudiante
 */

// Selección de elementos del DOM
const zonaRaton = document.getElementById('zona-mouse');
const inputTexto = document.getElementById('input-texto');
const logList = document.getElementById('log');

/**
 * Añade un mensaje al log de eventos.
 * Crea un elemento <li> con el mensaje proporcionado y lo añade
 * al principio de la lista de log, mostrando los eventos más recientes arriba.
 * @param {string} mensaje - El mensaje a mostrar en el log.
 * @returns {void}
 */
function log(mensaje) {
    const li = document.createElement('li');
    li.textContent = mensaje;
    logList.insertBefore(li, logList.firstChild);
}

// ==========================================
// EVENTOS DE RATÓN
// ==========================================

/**
 * Manejador del evento mouseenter.
 * Se ejecuta cuando el ratón entra en la zona de ratón.
 * Añade la clase 'highlight' al elemento y registra el evento.
 * @param {MouseEvent} event - El objeto del evento de ratón.
 * @returns {void}
 */
function handleMouseEnter(event) {
    zonaRaton.classList.add('highlight');
    log('Ratón Entró');
}

/**
 * Manejador del evento mouseleave.
 * Se ejecuta cuando el ratón sale de la zona de ratón.
 * Quita la clase 'highlight' del elemento y registra el evento.
 * @param {MouseEvent} event - El objeto del evento de ratón.
 * @returns {void}
 */
function handleMouseLeave(event) {
    zonaRaton.classList.remove('highlight');
    log('Ratón Salió');
}

/**
 * Manejador del evento click.
 * Se ejecuta cuando se hace clic en la zona de ratón.
 * Registra el evento de clic en el log.
 * @param {MouseEvent} event - El objeto del evento de ratón.
 * @returns {void}
 */
function handleClick(event) {
    log('Clic');
}

/**
 * Manejador del evento mousemove.
 * Se ejecuta cuando el ratón se mueve dentro de la zona de ratón.
 * Registra la posición actual del ratón (X, Y) relativa al elemento.
 * @param {MouseEvent} event - El objeto del evento de ratón con las coordenadas.
 * @returns {void}
 */
function handleMouseMove(event) {
    const posX = event.offsetX;
    const posY = event.offsetY;
    log(`Ratón moviéndose en X: ${posX}, Y: ${posY}`);
}

// Añadir listeners de eventos de ratón
zonaRaton.addEventListener('mouseenter', handleMouseEnter);
zonaRaton.addEventListener('mouseleave', handleMouseLeave);
zonaRaton.addEventListener('click', handleClick);
zonaRaton.addEventListener('mousemove', handleMouseMove);

// ==========================================
// EVENTOS DE TECLADO
// ==========================================

/**
 * Manejador del evento focus.
 * Se ejecuta cuando el input de texto recibe el foco.
 * Registra que el input ha sido enfocado.
 * @param {FocusEvent} event - El objeto del evento de foco.
 * @returns {void}
 */
function handleFocus(event) {
    log('Input enfocado');
}

/**
 * Manejador del evento blur.
 * Se ejecuta cuando el input de texto pierde el foco.
 * Registra que el input ha sido desenfocado.
 * @param {FocusEvent} event - El objeto del evento de desenfoque.
 * @returns {void}
 */
function handleBlur(event) {
    log('Input desenfocado');
}

/**
 * Manejador del evento keydown.
 * Se ejecuta cuando se pulsa una tecla mientras el input tiene el foco.
 * Registra qué tecla ha sido pulsada usando event.key.
 * @param {KeyboardEvent} event - El objeto del evento de teclado.
 * @returns {void}
 */
function handleKeyDown(event) {
    log(`Tecla pulsada: ${event.key}`);
}

/**
 * Manejador del evento keyup.
 * Se ejecuta cuando se suelta una tecla mientras el input tiene el foco.
 * Registra el código de la tecla soltada usando event.code.
 * @param {KeyboardEvent} event - El objeto del evento de teclado.
 * @returns {void}
 */
function handleKeyUp(event) {
    log(`Tecla soltada: ${event.code}`);
}

// Añadir listeners de eventos de teclado
inputTexto.addEventListener('focus', handleFocus);
inputTexto.addEventListener('blur', handleBlur);
inputTexto.addEventListener('keydown', handleKeyDown);
inputTexto.addEventListener('keyup', handleKeyUp);
