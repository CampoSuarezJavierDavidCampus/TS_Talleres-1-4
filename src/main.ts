/* TALLER 02 */
/* ///////////////////////////////////////////////////////////// */
/* 
10. Desarrolle un programa cíclico que capture un dato
numérico cada vez, y los vaya acumulando. El programa se
detiene cuando el usuario digita un cero. El programa debe
mostrar: LA SUMATORIA DE LOS VALORES, EL VALOR DEL
PROMEDIO, CUÁNTOS VALORES FUERON DIGITADOS, MAYOR
VALOR Y MENOR VALOR.
*/
function campturarNumeros():number[]{
    let 
    nuevoNumero:number,
    numeros:number[] = [];
    
    while (nuevoNumero = parseInt(prompt('INGRESA UN NUEVO VALOR A LA SUMATORIA') as string)) {
        numeros.unshift(nuevoNumero);
    }    
    return numeros    
}

function sumatoriaDeLosValores(...numeros:number[]){
    return numeros.reduce((numeroPrevio:number,numeroSiguiente:number):number=>{
        return numeroPrevio + numeroSiguiente;
    })
}

function mayorNumero(...numeros:number[] ){
    return numeros.reduce((numeroPrevio:number,numeroSiguiete:number):number=>{
        if(numeroPrevio<numeroSiguiete)return numeroSiguiete;
        return numeroPrevio;
    })
}
function  menorNumero(...numeros:number[] ){
    return numeros.reduce((numeroPrevio:number,numeroSiguiete:number):number=>{
        if(numeroPrevio>numeroSiguiete)return numeroSiguiete;
        return numeroPrevio;
    })
}
function promedioNumeros(numeros:number[]){
    return sumatoriaDeLosValores(...numeros)/numeros.length;
}

const Numeros = campturarNumeros();

console.log(`
LA SUMATORIA DE LOS VALORES ES DE ${sumatoriaDeLosValores(...Numeros)}.\n
EL VALOR DEL PROMEDIO ES ${promedioNumeros(Numeros)}.\n
CUANTOS VALORES FUERON DIGITADOS ${Numeros.length}.\n
EL MAYOR NUMERO ES ${mayorNumero(...Numeros)}.\n
EL MENOR NUMERO ES ${menorNumero(...Numeros)}.\n
`);