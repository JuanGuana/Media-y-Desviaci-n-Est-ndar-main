/**
 * Clase InterfazUsuario
 * Gestiona la interacción con el usuario:
 * - Creación de campos de entrada.
 * - Obtención de datos ingresados.
 * - Muestra y limpia mensajes de error.
 * - Administra botones de cálculo y reinicio.
 */
class InterfazUsuario {
    constructor() {
        this.inputsContainer = document.getElementById("inputs-container");
        this.errorMensaje = document.getElementById("mensaje-error");
        this.botonCalcular = document.getElementById("btn-calcular");
        this.botonReiniciar = document.getElementById("btn-reiniciar");
        this.panelResultados = new PanelResultados();

        this.crearCamposEntrada();
    }

    /**
     * Crea dinámicamente 10 campos de entrada en la interfaz.
     */
    crearCamposEntrada() {
        for (let i = 0; i < 10; i++) {
            const input = document.createElement("input");
            input.type = "text";
            input.classList.add("entrada");
            input.placeholder = `Valor ${i + 1}`;
            this.inputsContainer.appendChild(input);
        }
    }

    /**
     * Obtiene los valores ingresados por el usuario en los campos de entrada.
     * @returns {string[]} Arreglo con los valores ingresados.
     */
    obtenerEntradas() {
        const valores = [...document.querySelectorAll(".entrada")].map(i => i.value);
        return valores;
    }

    /**
     * Muestra un mensaje de error en la interfaz.
     * @param {string} mensaje - Texto del error a mostrar.
     */
    mostrarError(mensaje) {
        this.errorMensaje.textContent = mensaje;
    }

    /**
     * Limpia el mensaje de error mostrado en la interfaz.
     */
    limpiarError() {
        this.errorMensaje.textContent = "";
    }

    /**
     * Limpia las entradas y los resultados en la interfaz.
     */
    limpiarInterfaz() {
        document.querySelectorAll(".entrada").forEach(i => i.value = "");
        this.panelResultados.limpiarResultados();
        this.limpiarError();
    }
}

/**
 * Clase PanelResultados
 * Se encarga de mostrar y limpiar los resultados estadísticos en pantalla.
 */
class PanelResultados {
    constructor() {
        this.media = document.getElementById("media");
        this.desviacion = document.getElementById("desviacion");
        this.minimo = document.getElementById("minimo");
        this.maximo = document.getElementById("maximo");
    }

    /**
     * Renderiza en la interfaz los resultados calculados.
     * @param {string} media - Media aritmética.
     * @param {string} desviacion - Desviación estándar.
     * @param {string} minimo - Valor mínimo.
     * @param {string} maximo - Valor máximo.
     */
    renderizarResultados(media, desviacion, minimo, maximo) {
        this.media.textContent = media;
        this.desviacion.textContent = desviacion;
        this.minimo.textContent = minimo;
        this.maximo.textContent = maximo;
    }

    /**
     * Limpia los valores mostrados en los resultados.
     */
    limpiarResultados() {
        this.media.textContent = "";
        this.desviacion.textContent = "";
        this.minimo.textContent = "";
        this.maximo.textContent = "";
    }
}
