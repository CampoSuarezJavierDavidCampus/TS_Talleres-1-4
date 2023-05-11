/* TALLER 01 */
/* ///////////////////////////////////////////////////////////// */
/* 
2.
a.
Declare una variable llamada 'esTercerMundista' y
establezca su valor de acuerdo con su país. La variable debe
contener un valor booleano. También declarar una variable
'idioma', pero no le asigne ningún valor todavía.
b.
Registrar los valores de 'esTercerMundista',
'continente', 'país' e 'idioma'
*/

let 
esTercerMundista:boolean = true,
idioma:string = 'Español';

console.log(`
    mi pais ${esTercerMundista?'es':'no es'} Tercer Mundista,
    ademas hablamos ${idioma}
`);