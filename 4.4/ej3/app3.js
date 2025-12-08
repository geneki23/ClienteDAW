/**
 * @fileoverview Ejercicio 3: Formulario de Inscripción TechConf 2025
 * Este archivo implementa validación completa de formularios en tiempo real,
 * cálculo dinámico de costes y gestión del envío del formulario.
 * Cumple con los criterios de evaluación a-h del RA5.
 * @author Estudiante
 */

// ==========================================
// SELECCIÓN DE ELEMENTOS DEL DOM
// ==========================================

const form = document.getElementById('form-inscripcion');
const nombreInput = document.getElementById('nombre');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const tipoEntradaSelect = document.getElementById('tipo-entrada');
const tallerJsCheckbox = document.getElementById('taller-js');
const tallerCssCheckbox = document.getElementById('taller-css');
const resumenTotal = document.getElementById('resumen-total');

const errorNombre = document.getElementById('error-nombre');
const errorEmail = document.getElementById('error-email');
const errorPassword = document.getElementById('error-password');

// ==========================================
// EXPRESIONES REGULARES PARA VALIDACIÓN
// ==========================================

/**
 * Expresión regular para validar formato de email.
 * Patrón: usuario@dominio.extension
 * @type {RegExp}
 */
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Expresión regular para validar contraseña.
 * Requisitos: mínimo 8 caracteres, al menos una mayúscula y un número.
 * - (?=.*[A-Z]) : Lookahead positivo para al menos una mayúscula
 * - (?=.*\d) : Lookahead positivo para al menos un dígito
 * - .{8,} : Mínimo 8 caracteres de cualquier tipo
 * @type {RegExp}
 */
const regexPassword = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

// ==========================================
// FUNCIONES DE VALIDACIÓN
// ==========================================

/**
 * Valida que el campo nombre no esté vacío.
 * Comprueba que el valor del input, después de quitar espacios,
 * no sea una cadena vacía.
 * @returns {boolean} True si el nombre es válido (no vacío), false en caso contrario.
 */
function validarNombre() {
    const valor = nombreInput.value.trim();

    if (valor === '') {
        nombreInput.classList.add('error');
        errorNombre.textContent = 'El nombre es obligatorio';
        return false;
    } else {
        nombreInput.classList.remove('error');
        errorNombre.textContent = '';
        return true;
    }
}

/**
 * Valida que el email tenga un formato correcto.
 * Utiliza la expresión regular regexEmail para comprobar
 * que el email sigue el patrón usuario@dominio.extension.
 * @returns {boolean} True si el email es válido, false en caso contrario.
 */
function validarEmail() {
    const valor = emailInput.value.trim();

    if (valor === '') {
        emailInput.classList.add('error');
        errorEmail.textContent = 'El email es obligatorio';
        return false;
    } else if (!regexEmail.test(valor)) {
        emailInput.classList.add('error');
        errorEmail.textContent = 'Formato de email inválido';
        return false;
    } else {
        emailInput.classList.remove('error');
        errorEmail.textContent = '';
        return true;
    }
}

/**
 * Valida que la contraseña cumpla los requisitos de seguridad.
 * Requisitos: mínimo 8 caracteres, al menos una mayúscula y un número.
 * Utiliza la expresión regular regexPassword para la validación.
 * @returns {boolean} True si la contraseña es válida, false en caso contrario.
 */
function validarPassword() {
    const valor = passwordInput.value;

    if (valor === '') {
        passwordInput.classList.add('error');
        errorPassword.textContent = 'La contraseña es obligatoria';
        return false;
    } else if (!regexPassword.test(valor)) {
        passwordInput.classList.add('error');
        errorPassword.textContent = 'Mínimo 8 caracteres, 1 mayúscula y 1 número';
        return false;
    } else {
        passwordInput.classList.remove('error');
        errorPassword.textContent = '';
        return true;
    }
}

/**
 * Ejecuta todas las validaciones del formulario.
 * Llama a las funciones de validación para nombre, email y contraseña.
 * @returns {boolean} True si todas las validaciones pasan, false si alguna falla.
 */
function validarFormulario() {
    const nombreValido = validarNombre();
    const emailValido = validarEmail();
    const passwordValido = validarPassword();

    return nombreValido && emailValido && passwordValido;
}

// ==========================================
// CÁLCULO DINÁMICO DE COSTE
// ==========================================

/**
 * Actualiza el total a pagar según las opciones seleccionadas.
 * Suma el valor de la entrada (General o VIP) más 50€ por cada
 * taller adicional que esté marcado.
 * @returns {void}
 */
function actualizarTotal() {
    // Obtener precio de la entrada
    let total = parseInt(tipoEntradaSelect.value);

    // Sumar precio de talleres si están seleccionados
    if (tallerJsCheckbox.checked) {
        total += parseInt(tallerJsCheckbox.value);
    }

    if (tallerCssCheckbox.checked) {
        total += parseInt(tallerCssCheckbox.value);
    }

    // Actualizar el texto del resumen
    resumenTotal.textContent = `Total a Pagar: ${total}€`;
}

// ==========================================
// GESTIÓN DEL ENVÍO DEL FORMULARIO
// ==========================================

/**
 * Muestra el mensaje de inscripción completada.
 * Oculta el formulario y muestra un mensaje de confirmación.
 * @returns {void}
 */
function mostrarMensajeExito() {
    // Ocultar el formulario
    form.classList.add('oculto');

    // Crear y mostrar mensaje de éxito
    const mensajeExito = document.createElement('div');
    mensajeExito.className = 'mensaje-exito';
    mensajeExito.innerHTML = '<h2>¡Inscripción completada!</h2>';

    // Insertar mensaje después del formulario
    form.parentNode.insertBefore(mensajeExito, form.nextSibling);
}

/**
 * Manejador del evento submit del formulario.
 * Previene el envío por defecto, ejecuta todas las validaciones
 * y si son correctas, muestra el mensaje de éxito.
 * @param {SubmitEvent} event - El objeto del evento de submit.
 * @returns {void}
 */
function handleSubmit(event) {
    // Prevenir el comportamiento por defecto (recarga de página)
    event.preventDefault();

    // Ejecutar todas las validaciones
    if (validarFormulario()) {
        // Si todas las validaciones pasan, mostrar mensaje de éxito
        mostrarMensajeExito();
    }
    // Si alguna validación falla, los errores ya se muestran
    // gracias a las funciones de validación individuales
}

// ==========================================
// CONFIGURACIÓN DE EVENT LISTENERS
// ==========================================

// Validación en vivo - Nombre (al salir del campo)
nombreInput.addEventListener('blur', validarNombre);

// Validación en vivo - Email (al salir del campo)
emailInput.addEventListener('blur', validarEmail);

// Validación en vivo - Password (al teclear)
passwordInput.addEventListener('input', validarPassword);

// Cálculo dinámico - Tipo de entrada
tipoEntradaSelect.addEventListener('change', actualizarTotal);

// Cálculo dinámico - Talleres
tallerJsCheckbox.addEventListener('change', actualizarTotal);
tallerCssCheckbox.addEventListener('change', actualizarTotal);

// Gestión del envío
form.addEventListener('submit', handleSubmit);
