"use strict";
function campturarNumeros() {
    let nuevoNumero, numeros = [];
    while (nuevoNumero = parseInt(prompt('INGRESA UN NUEVO VALOR A LA SUMATORIA'))) {
        numeros.unshift(nuevoNumero);
    }
    return numeros;
}
function sumatoriaDeLosValores(...numeros) {
    return numeros.reduce((numeroPrevio, numeroSiguiente) => {
        return numeroPrevio + numeroSiguiente;
    });
}
function mayorNumero(...numeros) {
    return numeros.reduce((numeroPrevio, numeroSiguiete) => {
        if (numeroPrevio < numeroSiguiete)
            return numeroSiguiete;
        return numeroPrevio;
    });
}
function menorNumero(...numeros) {
    return numeros.reduce((numeroPrevio, numeroSiguiete) => {
        if (numeroPrevio > numeroSiguiete)
            return numeroSiguiete;
        return numeroPrevio;
    });
}
function promedioNumeros(numeros) {
    return sumatoriaDeLosValores(...numeros) / numeros.length;
}
const Numeros = campturarNumeros();
console.log(`
LA SUMATORIA DE LOS VALORES ES DE ${sumatoriaDeLosValores(...Numeros)}.\n
EL VALOR DEL PROMEDIO ES ${promedioNumeros(Numeros)}.\n
CUANTOS VALORES FUERON DIGITADOS ${Numeros.length}.\n
EL MAYOR NUMERO ES ${mayorNumero(...Numeros)}.\n
EL MENOR NUMERO ES ${menorNumero(...Numeros)}.\n
`);
