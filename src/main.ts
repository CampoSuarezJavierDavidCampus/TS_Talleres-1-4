/* TALLER 02 */
/* ///////////////////////////////////////////////////////////// */
/* 
2. Dado un número indicar si es par o impar y si es mayor de 10.
*/

const EsParOImpar = ():never=>{
    while (true) {
        const Numero:number = parseInt(prompt('INGRESE UN NUMERO PARA INDICAR SI ES PAR O IMPAR') as string);
        alert(`EL NUMERO INGRESADO ES ${Numero % 2 == 0?'PAR':'IMPAR'}`);
    }
}

EsParOImpar();