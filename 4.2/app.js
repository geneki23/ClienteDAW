// =========================================
// EJERCICIO 1: Selección de Elementos
// =========================================

// Guarda en una variable el elemento con ID titulo-principal
const tituloPrincipal = document.getElementById('titulo-principal');

// Guarda en una variable el primer elemento con clase subtitulo
const primerSubtitulo = document.querySelector('.subtitulo');

// Guarda en una variable una NodeList con todos los elementos <img> que tengan la clase thumb
const thumbnails = document.querySelectorAll('img.thumb');

// Guarda en una variable el elemento <button> que tiene el ID btn-add-task
const btnAddTask = document.getElementById('btn-add-task');

// Imprime por consola el contenido de texto de estas variables
console.log('Título principal:', tituloPrincipal.textContent);
console.log('Primer subtítulo:', primerSubtitulo.textContent);
console.log('Thumbnails:', thumbnails);
thumbnails.forEach((thumb, index) => {
    console.log(`  Thumbnail ${index + 1}:`, thumb.alt);
});
console.log('Botón añadir tarea:', btnAddTask.textContent);


// =========================================
// EJERCICIO 2: El Interruptor
// =========================================

// Selecciona el botón toggle y el div de la bombilla
const btnToggle = document.getElementById('btn-toggle');
const lightBulb = document.getElementById('light-bulb');

// Añade un addEventListener al botón btn-toggle
btnToggle.addEventListener('click', function () {
    // Intercambia (toggle) las clases luz-apagada y luz-encendida
    lightBulb.classList.toggle('luz-apagada');
    lightBulb.classList.toggle('luz-encendida');
});


// =========================================
// EJERCICIO 3: Editor de Perfil
// =========================================

// Selecciona el elemento con clase profile-name y cambia su textContent
const profileName = document.querySelector('.profile-name');
profileName.textContent = 'Miguel Moreno';

// Selecciona el elemento con clase profile-desc y cambia su textContent
const profileDesc = document.querySelector('.profile-desc');
profileDesc.textContent = 'Estudiante de 2º de DAW';

// Selecciona el section con ID profile-card y usa setAttribute para cambiar data-user-id
const profileCard = document.getElementById('profile-card');
profileCard.setAttribute('data-user-id', 'DWEC-001');


// =========================================
// EJERCICIO 4: Galería de Imágenes
// =========================================

// Selecciona la imagen principal (main-image)
const mainImage = document.getElementById('main-image');

// Selecciona todas las miniaturas (.thumb) - ya tenemos thumbnails del Ejercicio 1

// Usando un bucle (forEach), añade un addEventListener de tipo click a cada miniatura
thumbnails.forEach(function (thumb) {
    thumb.addEventListener('click', function () {
        // Cuando se haga clic en una miniatura, la propiedad src de la imagen principal 
        // debe cambiar por la propiedad src de la miniatura que fue clicada
        mainImage.src = thumb.src;
    });
});


// =========================================
// EJERCICIO 5: Añadir Tareas
// =========================================

// Selecciona los elementos necesarios
const inputNewTask = document.getElementById('input-new-task');
const taskList = document.getElementById('task-list');

// Añade un addEventListener al botón btn-add-task (ya tenemos btnAddTask del Ejercicio 1)
btnAddTask.addEventListener('click', function () {
    // Lee el valor (value) del input
    const taskValue = inputNewTask.value.trim();

    // Si el valor no está vacío
    if (taskValue !== '') {
        // Crea un nuevo elemento <li>
        const newLi = document.createElement('li');

        // Establece el textContent del <li> al valor del input
        newLi.textContent = taskValue;

        // Añade (con appendChild) el nuevo <li> a la lista task-list
        taskList.appendChild(newLi);

        // Limpia el valor del input (déjalo en "")
        inputNewTask.value = '';
    }
});


// =========================================
// EJERCICIO 6: El Modal
// =========================================

// Selecciona el modal (#modal), el botón para abrir (#btn-open-modal) y el botón para cerrar (#btn-close-modal)
const modal = document.getElementById('modal');
const btnOpenModal = document.getElementById('btn-open-modal');
const btnCloseModal = document.getElementById('btn-close-modal');

// Añade un click listener a btn-open-modal que quite la clase hidden del modal
btnOpenModal.addEventListener('click', function () {
    modal.classList.remove('hidden');
});

// Añade un click listener a btn-close-modal que añada la clase hidden al modal
btnCloseModal.addEventListener('click', function () {
    modal.classList.add('hidden');
});


// =========================================
// EJERCICIO 7: Notificación Avanzada
// =========================================

// Selecciona el div con ID status-box
const statusBox = document.getElementById('status-box');

// Usa innerHTML para cambiar su contenido
statusBox.innerHTML = '<strong>Estado:</strong> <span class="status-success">Conectado</span>';

// Desafío: 3 segundos después de cargar la página, cambiar el estado
setTimeout(function () {
    // Selecciona el span interno (que ahora tiene la clase status-success)
    const statusSpan = statusBox.querySelector('.status-success');

    // Cámbiale la clase a status-error
    statusSpan.classList.remove('status-success');
    statusSpan.classList.add('status-error');

    // Cambia su textContent a "Desconectado"
    statusSpan.textContent = 'Desconectado';
}, 3000);


// =========================================
// EJERCICIO 8: Preguntas Teóricas
// =========================================

/*
PREGUNTA (h): ¿Por qué es preferible usar elemento.classList.add('mi-clase') en lugar de 
elemento.style.color = 'blue' para cambiar la apariencia de un elemento?

RESPUESTA:
Es preferible usar classList.add('mi-clase') por varias razones:

1. SEPARACIÓN DE RESPONSABILIDADES: CSS debe encargarse de los estilos y JavaScript del 
   comportamiento. Usando clases, mantenemos los estilos en archivos CSS donde pertenecen.

2. MANTENIBILIDAD: Si queremos cambiar el color azul por verde, con classList solo 
   modificamos el CSS. Con style.color tendríamos que buscar en todo el JavaScript.

3. REUTILIZACIÓN: Una clase CSS puede reutilizarse en múltiples elementos y contener 
   múltiples propiedades. Con style solo podemos cambiar una propiedad a la vez.

4. ESPECIFICIDAD: Los estilos inline (element.style) tienen mayor especificidad que las 
   clases CSS, lo que puede causar problemas al intentar sobrescribir estilos.

5. TOGGlE Y OTRAS OPERACIONES: classList ofrece métodos útiles como toggle(), remove(), 
   contains() que facilitan la manipulación de estados visuales.

6. PERFORMANCE: El navegador optimiza mejor los cambios de clase que los cambios de 
   estilos inline individuales, especialmente cuando se cambian múltiples propiedades.


================================================================================

PREGUNTA (f, g, e): ¿Cuál es la forma estándar de añadir un evento (como un clic) a un botón? 
¿Por qué esta forma es mejor para la compatibilidad entre navegadores (Criterio g) que poner 
onclick="miFuncion()" directamente en el HTML?

RESPUESTA:
La forma estándar es usar addEventListener():

    elemento.addEventListener('click', function() {
        // código a ejecutar
    });

Esta forma es mejor por las siguientes razones:

1. SEPARACIÓN DE RESPONSABILIDADES: Mantiene el JavaScript separado del HTML, haciendo 
   el código más limpio y fácil de mantener. El HTML se encarga de la estructura y 
   JavaScript del comportamiento.

2. MÚLTIPLES LISTENERS: Con addEventListener podemos añadir múltiples funciones al mismo 
   evento. Con onclick="" en HTML solo podemos tener uno (el nuevo sobrescribe al anterior).

3. COMPATIBILIDAD ENTRE NAVEGADORES: addEventListener es el estándar del DOM Level 2, 
   soportado por todos los navegadores modernos de manera consistente. Los atributos 
   inline pueden comportarse de forma diferente en navegadores antiguos.

4. CONTROL DEL FLUJO DE EVENTOS: addEventListener permite usar el tercer parámetro para 
   controlar la fase de captura o burbujeo del evento, algo imposible con onclick inline.

5. REMOVELISTENER: Podemos eliminar el listener cuando ya no lo necesitemos con 
   removeEventListener(), imposible con los atributos inline.

6. SEGURIDAD: El código inline en HTML puede ser más vulnerable a ataques XSS 
   (Cross-Site Scripting) y algunas políticas de seguridad (CSP) lo bloquean.

7. DEBUGGING: Es más fácil depurar código que está en archivos JavaScript separados 
   que código embebido en atributos HTML.
*/
