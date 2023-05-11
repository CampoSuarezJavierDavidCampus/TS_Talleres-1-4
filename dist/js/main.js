"use strict";
let texto = ' hola mundo ';
let arrTexto = texto.split(' ');
console.log(`
    EJEMPLO DE USO DE ALGUNOS METODOS DE CADENA 
    TEXTO NORMAL. "${texto}".\n    
    PROPIEDAD "length": "${texto.length}"\n
    PROPIEDAD "toLowerCase": "${texto.toLowerCase()}"\n
    PROPIEDAD "toUpperCase": "${texto.toUpperCase()}"\n
    METHODO "trimStart()": "${texto.trimStart()}"\n
    METHODO "trimEnd()": "${texto.trimEnd()}"\n
    METHODO "replace": ${texto.replace('hola', 'hi')}\n
    METHODO "split": ${texto.split(' ')}\n    
    METHODO "slice": ${arrTexto.slice(0, 2)}\n
    METHODO "includes": ${arrTexto.includes('mundo')}\n
`);
