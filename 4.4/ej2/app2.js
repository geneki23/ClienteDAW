/**
 * @fileoverview Ejercicio 2: Validador de Email en Vivo
 * Este archivo implementa validación en tiempo real de emails
 * usando expresiones regulares (RegExp) y el evento 'input'.
 * @author Estudiante
 */

// Selección de elementos del DOM
const emailInput = document.getElementById('email-input');
const emailFeedback = document.getElementById('email-feedback');

/**
 * Expresión regular para validar formato de email.
 * Patrón: 
 * - ^[^\s@]+ : Comienza con uno o más caracteres que no sean espacios ni @
 * - @ : Contiene el símbolo arroba
 * - [^\s@]+ : Seguido de uno o más caracteres que no sean espacios ni @
 * - \. : Contiene un punto literal
 * - [^\s@]+$ : Termina con uno o más caracteres que no sean espacios ni @
 * @type {RegExp}
 */
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Valida un email usando la expresión regular definida.
 * @param {string} email - El email a validar.
 * @returns {boolean} True si el email es válido, false en caso contrario.
 */
function validarEmail(email) {
    return regexEmail.test(email);
}

/**
 * Marca el input como válido.
 * Añade la clase 'valido', quita la clase 'invalido' del input
 * y muestra el mensaje "Email Válido" en el span de feedback.
 * @returns {void}
 */
function marcarValido() {
    emailInput.classList.add('valido');
    emailInput.classList.remove('invalido');
    emailFeedback.textContent = 'Email Válido';
    emailFeedback.classList.add('valido');
    emailFeedback.classList.remove('invalido');
}

/**
 * Marca el input como inválido.
 * Añade la clase 'invalido', quita la clase 'valido' del input
 * y muestra el mensaje "Email Inválido" en el span de feedback.
 * @returns {void}
 */
function marcarInvalido() {
    emailInput.classList.add('invalido');
    emailInput.classList.remove('valido');
    emailFeedback.textContent = 'Email Inválido';
    emailFeedback.classList.add('invalido');
    emailFeedback.classList.remove('valido');
}

/**
 * Manejador del evento 'input' para validación en tiempo real.
 * Se ejecuta cada vez que el usuario escribe en el campo de email.
 * Obtiene el valor actual del input, lo valida con la regex
 * y actualiza los estilos y mensaje de feedback según el resultado.
 * @param {InputEvent} event - El objeto del evento de input.
 * @returns {void}
 */
function handleEmailInput(event) {
    const valorEmail = emailInput.value;

    // Si el campo está vacío, limpiar el feedback
    if (valorEmail === '') {
        emailInput.classList.remove('valido', 'invalido');
        emailFeedback.textContent = '';
        emailFeedback.classList.remove('valido', 'invalido');
        return;
    }

    // Validar email y actualizar UI
    if (validarEmail(valorEmail)) {
        marcarValido();
    } else {
        marcarInvalido();
    }
}

// Añadir listener para el evento 'input'
emailInput.addEventListener('input', handleEmailInput);
