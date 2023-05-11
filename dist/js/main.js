"use strict";
let edadDeLaPersonaConMayorEdad = 0, nombreDeLaPersonaConMayorEdad = '';
for (let i = 0; i < 3; i++) {
    const NombreDeLaPersona = prompt(`INGRESA LA EDAD DE LA PERSONA ${i + 1}`), EdadDeLaPersona = parseInt(prompt(`INGRESA LA EDAD DE LA PERSONA ${1 + 1}`));
    if (edadDeLaPersonaConMayorEdad < EdadDeLaPersona) {
        edadDeLaPersonaConMayorEdad = EdadDeLaPersona;
        nombreDeLaPersonaConMayorEdad = NombreDeLaPersona;
    }
}
alert(`
LA PERSONA ${nombreDeLaPersonaConMayorEdad} CON LA EDAD\n 
DE ${edadDeLaPersonaConMayorEdad} ES LA PERSONA CON MAYOR EDAD
`);
