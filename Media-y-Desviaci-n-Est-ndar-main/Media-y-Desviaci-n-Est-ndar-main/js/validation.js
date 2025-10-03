/**
 * Clase Validador
 * Encargada de verificar que las entradas sean válidas y numéricas.
 */
class Validador {

    /**
     * Verifica si un valor es numérico.
     * @param {string} valor - Texto a evaluar.
     * @returns {boolean} Verdadero si el valor es numérico, falso en caso contrario.
     */
    static esNumerico(valor) {
        return !isNaN(valor) && valor.trim() !== "";
    }

    /**
     * Valida un conjunto de entradas.
     * - Deben ser exactamente 10 valores.
     * - Cada valor debe ser numérico.
     * @param {string[]} entradas - Arreglo de valores ingresados por el usuario.
     * @returns {boolean} Verdadero si todas las entradas son válidas, falso si no.
     */
    static validarEntradas(entradas) {
        if (entradas.length !== 10) return false;
        return entradas.every(val => Validador.esNumerico(val));
    }
}
