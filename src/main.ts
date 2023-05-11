/* TALLER 02 */
/* ///////////////////////////////////////////////////////////// */
/* 
1. Construir el algoritmo para un programa que ingrese tres
notas de un alumno, si el promedio es menor o igual a 3.9
mostrar un mensaje "Estudie“, de lo contrario un mensaje que
diga "becado"
*/

const promedio = (...numerosIngresados:number[]):number=>{
    const CantidadDeNumerosIngresados = numerosIngresados.length,
    ResultadoDelPromedio:number = numerosIngresados.reduce((numeroAnterios,NumeroAcctual)=>numeroAnterios + NumeroAcctual)/CantidadDeNumerosIngresados;    
    return Math.round(ResultadoDelPromedio);
},
SumarNumeros = ():never=>{
    while (true) {
        let numerosIngresados:number[] | undefined= prompt('Ingrese los valores de sus calificaciones, separelas por "," \n=>')?.split(',').map((num)=>parseInt(num)),
        resultadoDelPromedio:number= 0;
        
        if(typeof numerosIngresados !== 'undefined' ) resultadoDelPromedio = promedio(...numerosIngresados);

        alert(`EL PROMEDIO DE LA SUMATORIA ES DE: ${resultadoDelPromedio}`)
    }
};

SumarNumeros();


