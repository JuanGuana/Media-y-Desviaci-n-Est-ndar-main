/**
 * Clase Calculadora
 * Contiene los métodos estáticos para realizar los cálculos estadísticos:
 * - Media aritmética
 * - Desviación estándar poblacional
 * - Valor mínimo
 * - Valor máximo
 */
class Calculadora {

    /**
     * Calcula la media aritmética de un arreglo de valores numéricos.
     * @param {number[]} valores - Conjunto de números.
     * @returns {string} Media aritmética con 4 decimales.
     */
    static calcularMedia(valores) {
        const suma = valores.reduce((acc, n) => acc + n, 0);
        return (suma / valores.length).toFixed(4);
    }

    /**
     * Calcula la desviación estándar poblacional de un conjunto de valores.
     * @param {number[]} valores - Conjunto de números.
     * @returns {string} Desviación estándar con 4 decimales.
     */
    static calcularDesviacionEstandar(valores) {
        const media = valores.reduce((acc, n) => acc + n, 0) / valores.length;
        const sumaDif = valores.reduce((acc, n) => acc + Math.pow(n - media, 2), 0);
        const varianza = sumaDif / valores.length;
        return Math.sqrt(varianza).toFixed(4);
    }

    /**
     * Obtiene el valor mínimo dentro del conjunto.
     * @param {number[]} valores - Conjunto de números.
     * @returns {string} Valor mínimo con 4 decimales.
     */
    static calcularMinimo(valores) {
        return Math.min(...valores).toFixed(4);
    }

    /**
     * Obtiene el valor máximo dentro del conjunto.
     * @param {number[]} valores - Conjunto de números.
     * @returns {string} Valor máximo con 4 decimales.
     */
    static calcularMaximo(valores) {
        return Math.max(...valores).toFixed(4);
    }
}
