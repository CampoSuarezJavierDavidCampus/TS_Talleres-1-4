/* TALLER 01 */
/* ///////////////////////////////////////////////////////////// */
/* 
Cree 10 variables de tipo cadena donde almacene valores string en
Ingles y aplique cada una de los siguientes métodos de cadena
1.
length
2.
includes()
3.
back ticks o templatre strings
4.
trimStart()
5.
trimEnd()
6.
replace
7.
slice
8.
split
9.
ToUpperCase
10.
ToLowerCase
*/
let texto:string = ' hola mundo ';
let arrTexto:string[] = texto.split(' ')
console.log(`
    EJEMPLO DE USO DE ALGUNOS METODOS DE CADENA 
    TEXTO NORMAL. "${texto}".\n    
    PROPIEDAD "length": "${texto.length}"\n
    PROPIEDAD "toLowerCase": "${texto.toLowerCase()}"\n
    PROPIEDAD "toUpperCase": "${texto.toUpperCase()}"\n
    METHODO "trimStart()": "${texto.trimStart()}"\n
    METHODO "trimEnd()": "${texto.trimEnd()}"\n
    METHODO "replace": ${texto.replace('hola','hi')}\n
    METHODO "split": ${texto.split(' ')}\n    
    METHODO "slice": ${arrTexto.slice(0,2)}\n
    METHODO "includes": ${arrTexto.includes('mundo')}\n
`);