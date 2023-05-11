"use strict";
const EsParOImpar = () => {
    while (true) {
        const Numero = parseInt(prompt('INGRESE UN NUMERO PARA INDICAR SI ES PAR O IMPAR'));
        alert(`EL NUMERO INGRESADO ES ${Numero % 2 == 0 ? 'PAR' : 'IMPAR'}`);
    }
};
EsParOImpar();
