/* TALLER 02 */
/* ///////////////////////////////////////////////////////////// */
/* 
5. Construir el algoritmo que lea por teclado dos números,
si el primero es mayor al segundo informar su suma y
diferencia, en caso contrario, informar el producto y la
división del primero respecto al segundo.
*/
const
Numero01:number = parseInt(prompt('INGRESE EL PRIMER NUMERO') as string),
Numero02:number = parseInt(prompt('INGRESE EL SEGUNDO NUMERO') as string);

Numero01 > Numero02 
    ?   alert(`LA SUMA DE ${Numero01} CON ${Numero02} ES ${Numero01 + Numero02} Y SU DIFERENCIA ${Numero01 - Numero02}`)
    :   alert(`EL PRODUCTO DE ${Numero01} CON ${Numero02} ES ${Numero01 * Numero02} Y SU DIVICION ${Numero02/Numero02}`);
    
