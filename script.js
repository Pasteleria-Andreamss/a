// NAVEGACIÓN ENTRE SECCIONES (INICIO, TIENDA, CONTACTO)
function mostrarSeccion(seccionId) {
    const secciones = document.querySelectorAll('.seccion-contenido');
    secciones.forEach(sec => sec.classList.remove('active-section'));

    const seccionSeleccionada = document.getElementById('seccion-' + seccionId);
    if (seccionSeleccionada) {
        seccionSeleccionada.classList.add('active-section');
    }

    const enlaces = document.querySelectorAll('.nav-link');
    enlaces.forEach(link => link.classList.remove('active'));

    event.target.classList.add('active');
}

// BUSCADOR EN TIEMPO REAL EN EL CATÁLOGO
function filtrarCatalogo() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const productos = document.querySelectorAll('.card-producto');

    // Asegura que al buscar se muestre la sección de tienda
    mostrarSeccion('tienda');

    productos.forEach(card => {
        const busqueda = card.getAttribute('data-nombre').toLowerCase();
        if (busqueda.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

// CONTROL DE MODALES (TÉRMINOS Y PRIVACIDAD)
function abrirModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "flex";
    }
}

function cerrarModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none";
    }
}

// CERRAR MODAL HACIENDO CLIC FUERA
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
};