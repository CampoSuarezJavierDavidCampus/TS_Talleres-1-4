/* TALLER 02 */
/* ///////////////////////////////////////////////////////////// */
/* 
4. Construir el algoritmo que solicite el nombre y edad de 3
personas y determine el nombre de la persona con mayor edad.
*/
let 
edadDeLaPersonaConMayorEdad:number = 0,
nombreDeLaPersonaConMayorEdad:string = '';


for (let i = 0; i < 3; i++) {
    const 
    NombreDeLaPersona:string = prompt(`INGRESA LA EDAD DE LA PERSONA ${i +1}`) as string,
    EdadDeLaPersona:number = parseInt(prompt(`INGRESA LA EDAD DE LA PERSONA ${1 + 1}`) as string);
    if(edadDeLaPersonaConMayorEdad < EdadDeLaPersona) {
        edadDeLaPersonaConMayorEdad = EdadDeLaPersona;
        nombreDeLaPersonaConMayorEdad = NombreDeLaPersona;
    }
}

alert(`
LA PERSONA ${nombreDeLaPersonaConMayorEdad} CON LA EDAD\n 
DE ${edadDeLaPersonaConMayorEdad} ES LA PERSONA CON MAYOR EDAD
`);