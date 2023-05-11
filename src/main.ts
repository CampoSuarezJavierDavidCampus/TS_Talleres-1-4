/* TALLER 01 */
/* ///////////////////////////////////////////////////////////// */
/* 
3.
a.
Establezca el valor de 'idioma' en el idioma que se
habla donde vive.
b.
Piense en qué variables deberían ser variables
constantes (¿qué valores nunca cambian y cuáles podrían
cambiar?). Luego, cambia estas variables a const.
c.
observe lo que sucede.
*/

const
esTercerMundista:boolean = true,
idioma:string = 'Español';

console.log(`
    AHORA SON CONSTANTES:
    mi pais ${esTercerMundista?'es':'no es'} Tercer Mundista,
    ademas hablamos ${idioma}
`);