/**
 * Archivo principal de la aplicación.
 * Controla el flujo general y la integración de las clases:
 * - Inicializa la interfaz de usuario.
 * - Gestiona validaciones en tiempo real.
 * - Llama a los cálculos cuando las entradas son correctas.
 * - Permite reiniciar la aplicación.
 */
document.addEventListener("DOMContentLoaded", () => {
    // Inicialización de la interfaz de usuario
    const interfaz = new InterfazUsuario();

    /**
     * Evento: Validación en tiempo real al escribir en los inputs
     */
    interfaz.inputsContainer.addEventListener("input", () => {
        const entradas = interfaz.obtenerEntradas();
        if (Validador.validarEntradas(entradas)) {
            interfaz.limpiarError();
            interfaz.botonCalcular.disabled = false;
        } else {
            interfaz.mostrarError("Debe ingresar exactamente 10 valores numéricos.");
            interfaz.botonCalcular.disabled = true;
        }
    });

    /**
     * Evento: Botón Calcular
     * Ejecuta los cálculos estadísticos y muestra los resultados.
     */
    interfaz.botonCalcular.addEventListener("click", () => {
        const entradas = interfaz.obtenerEntradas().map(Number);
        const media = Calculadora.calcularMedia(entradas);
        const desviacion = Calculadora.calcularDesviacionEstandar(entradas);
        const minimo = Calculadora.calcularMinimo(entradas);
        const maximo = Calculadora.calcularMaximo(entradas);

        interfaz.panelResultados.renderizarResultados(media, desviacion, minimo, maximo);
    });

    /**
     * Evento: Botón Reiniciar
     * Limpia las entradas y los resultados para volver a empezar.
     */
    interfaz.botonReiniciar.addEventListener("click", () => {
        interfaz.limpiarInterfaz();
        interfaz.botonCalcular.disabled = true;
    });
});
