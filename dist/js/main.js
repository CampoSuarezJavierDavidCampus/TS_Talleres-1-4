"use strict";
function crearAtleta() {
    let nombre = prompt('INGRESE EL NOMBRE DE LA COMPETIDORA\n=>').trim().toUpperCase(), marcas = [], mejorMarca = 0;
    for (let i = 0; i < 3; i++)
        marcas.unshift(parseFloat(prompt(`INGRESA LA MARCA N°${i + 1} DE ${nombre}\n =>`)));
    mejorMarca = mayorMarca(marcas);
    if (!validarDatos(nombre, marcas))
        return null;
    return {
        nombre: nombre,
        marca: mejorMarca
    };
}
function validarDatos(nombre, marcas) {
    if (nombre.length == 0, marcas.filter((marca) => isNaN(marca)).length != 0)
        return false;
    return true;
}
function mayorMarca(marcas) {
    return marcas.reduce((marcaAnterior, marcaSiguiente) => {
        if (marcaAnterior < marcaSiguiente)
            return marcaSiguiente;
        return marcaAnterior;
    });
}
function obtenerGanador(atletas) {
    const AtletaGanador = atletas.reduce((atletaAnterior, atletaSiguiente) => {
        if (atletaAnterior.marca < atletaSiguiente.marca)
            return atletaSiguiente;
        return atletaAnterior;
    });
    return `
        LA ATLETA GANADORA FUE ${AtletaGanador.nombre} CON UN PUNTAJE DE ${AtletaGanador.marcaAnterior}M\n
        ${AtletaGanador.marca > 15.50 ? 'ADEMAS GANO' : 'PERO NO GANO'} EL PREMIO DE 500 M POR ROMPER EL RECORD MUNDIAL
    `;
}
function agregarAtletas() {
    let atletas = [];
    do {
        const nuevaAtleta = crearAtleta();
        if (nuevaAtleta == null)
            continue;
        else
            atletas.unshift(nuevaAtleta);
    } while (prompt(`DESEA ANADIR OTRA COMPETIDORA\nDIGITE "SI" PARA CONTINUAR.=>`).trim().toUpperCase() == 'SI');
    return atletas;
}
const Atletas = agregarAtletas();
if (Atletas.length == 0)
    alert('NO HAY ATLETAS REGISTRADOS');
else
    alert(obtenerGanador(Atletas));
