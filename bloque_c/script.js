const inputNombre = document.querySelector("#input-nombre");
const btnSaludar = document.querySelector("#btn-saludar");
const btnLimpiar = document.querySelector("#btn-limpiar");
const mensajeResultado = document.querySelector("#mensaje-resultado");

function generarSaludo() {
    const nombre = inputNombre.value.trim();
    if (nombre === "") {
        mensajeResultado.textContent = "⚠️ Por favor ingresa tu nombre";
        mensajeResultado.style.color = "#ea580c";
    } else {
        mensajeResultado.textContent = `¡Hola ${nombre}! Bienvenido a la evaluación diagnóstica UETS`;
        mensajeResultado.style.color = "#22c55e";
        mensajeResultado.style.fontSize = "1.2em";
    }
}

function limpiarSaludo() {
    inputNombre.value = "";
    mensajeResultado.textContent = "Esperando interacción...";
    mensajeResultado.style.color = "inherit";
}

btnSaludar.addEventListener("click", generarSaludo);
btnLimpiar.addEventListener("click", limpiarSaludo);
