"use strict";
const promedio = (...numerosIngresados) => {
    const CantidadDeNumerosIngresados = numerosIngresados.length, ResultadoDelPromedio = numerosIngresados.reduce((numeroAnterios, NumeroAcctual) => numeroAnterios + NumeroAcctual) / CantidadDeNumerosIngresados;
    return Math.round(ResultadoDelPromedio);
}, SumarNumeros = () => {
    var _a;
    while (true) {
        let numerosIngresados = (_a = prompt('Ingrese los valores de sus calificaciones, separelas por "," \n=>')) === null || _a === void 0 ? void 0 : _a.split(',').map((num) => parseInt(num)), resultadoDelPromedio = 0;
        if (typeof numerosIngresados !== 'undefined')
            resultadoDelPromedio = promedio(...numerosIngresados);
        alert(`EL PROMEDIO DE LA SUMATORIA ES DE: ${resultadoDelPromedio}`);
    }
};
SumarNumeros();
