"use strict";
let cuadrado = {
    lados: 0,
    primetro() {
        return `EL PERIMETRO DEL CUADRADO ES ${this.lados * 4}`;
    }
}, rectangulo = {
    lados: [0, 0],
    primetro() {
        return `EL PERIMETRO DEL RECTANGULO ES  ${2 * this.lados[0] + (2 * this.lados[1])}`;
    }
};
cuadrado.lados = parseInt(prompt('INGRESA EL VALOR DEL LADO DEL CUADRADO\n=>'));
alert(cuadrado.primetro());
rectangulo.lados = [
    parseInt(prompt('INGRESA LA ALTURA DEL RECTANGULO')),
    parseInt(prompt('INGRESA LA BASE DEL RECTANGULO'))
];
alert(rectangulo.primetro());
