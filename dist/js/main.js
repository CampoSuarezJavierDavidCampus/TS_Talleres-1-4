"use strict";
const EsParOImpar = () => {
    while (true) {
        const I = parseFloat(prompt('INGRESE EL VALOR DE LA CORRIENTE \n I =>')), R = parseFloat(prompt('INGRESE EL VALOR DE LA RESISTENCIA \n R =>')), V = I * R;
        alert(`EL VOLTAJE DEL CICUITO CON CORRIENTE I = ${I}; RESISTENCIA R = ${R}\n NOS DA UN VOTAJE DE V = ${V}`);
    }
};
EsParOImpar();
