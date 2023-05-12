"use strict";
function obtenerEstudiantes() {
    var _a, _b, _c;
    let estudiantes = [];
    do {
        let nombreEstudiante = (_a = prompt('INGRESA EL NOMBRE DEL ESTUDIANTE')) === null || _a === void 0 ? void 0 : _a.trim().toLocaleUpperCase(), generoEstudiante = (_b = prompt('INGRESA EL GENERO DEL ESTUDIANTE\nM/F=>')) === null || _b === void 0 ? void 0 : _b.trim().toLocaleUpperCase(), notaEstudiante = parseFloat(prompt('INGRESA LA NOTA DEL ESTUDIANTE=>'));
        if ((generoEstudiante !== 'M' && generoEstudiante !== 'F') || nombreEstudiante.length == 0)
            continue;
        const nuevoEstudiante = {
            nombre: nombreEstudiante,
            genero: generoEstudiante,
            nota: notaEstudiante
        };
        estudiantes.unshift(nuevoEstudiante);
    } while (((_c = prompt('DESEA AGREGAR ALGUN ESTUDAIANTE\nDIGITE "SI" PARA CONTINUAR.=>')) === null || _c === void 0 ? void 0 : _c.toUpperCase()) == 'SI');
    return estudiantes;
}
function obtenerEstudianteMayorOMenorNota(estudiantes, solicitudDeLaMayorNota = true) {
    let estudianteMayorNota = estudiantes.reduce((estudianteAnterior, estudianteSiguiente) => {
        if (solicitudDeLaMayorNota)
            return mayorNota(estudianteAnterior, estudianteSiguiente);
        return menorNota(estudianteAnterior, estudianteSiguiente);
    });
    return `EL ESTUDIANTE ${estudianteMayorNota.nombre}
     CON LA NOTA DE ${estudianteMayorNota.nota} POSEE LA ${solicitudDeLaMayorNota ? 'MAYOR' : 'MENOR'} NOTA`;
}
function mayorNota(estudianteAnterior, estudianteSiguiente) {
    if (estudianteAnterior.nota < estudianteSiguiente.nota)
        return estudianteSiguiente;
    return estudianteAnterior;
}
function menorNota(estudianteAnterior, estudianteSiguiente) {
    if (estudianteAnterior.nota > estudianteSiguiente.nota)
        return estudianteSiguiente;
    return estudianteAnterior;
}
function conteoDeGenerosDeLosEstudiantes(estudiantes) {
    let contadorDeM = 0, contadorDeF = 0;
    estudiantes.forEach((estudiante) => {
        estudiante.genero == 'F' ? contadorDeF++ : contadorDeM++;
    });
    return `EL NUMERO DE ESTUDIANTES M:${contadorDeM} Y EL NUMERO DE ESTUDIANTES F:${contadorDeF}`;
}
let estudiantes = obtenerEstudiantes();
if (estudiantes.length !== 0) {
    console.log(obtenerEstudianteMayorOMenorNota(estudiantes) + '\n', obtenerEstudianteMayorOMenorNota(estudiantes, false) + '\n', conteoDeGenerosDeLosEstudiantes(estudiantes));
}
else {
    console.log(`NO HAY ESTUDIANTES REGISTRADOS`);
}
