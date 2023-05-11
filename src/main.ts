/* TALLER 02 */
/* ///////////////////////////////////////////////////////////// */
/* 
3. Construir el algoritmo para determinar el voltaje de un
circuito a partir de la resistencia y la intensidad de corriente.
*/

const EsParOImpar = ():never=>{
    while (true) {
        const 
        I:number = parseFloat(prompt('INGRESE EL VALOR DE LA CORRIENTE \n I =>') as string),
        R:number = parseFloat(prompt('INGRESE EL VALOR DE LA RESISTENCIA \n R =>') as string),
        V:number =  I * R;

        alert(`EL VOLTAJE DEL CICUITO CON CORRIENTE I = ${I}; RESISTENCIA R = ${R}\n NOS DA UN VOTAJE DE V = ${V}`);
    }
}

EsParOImpar();