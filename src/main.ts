/* TALLER 02 */
/* ///////////////////////////////////////////////////////////// */
/* 
9. N atletas han pasado a finales en salto triple en los juegos
olímpicos femenino de 2022. Diseñe un programa que pida por
teclado los nombres de cada atleta finalista y a su vez, sus
marcas del salto en metros. Informar el nombre de la atleta
campeona que se quede con la medalla de oro y si rompió
récord, reportar el pago que será de 500 millones. El récord
esta en 15,50 metros.
*/

type Atleta = {
    nombre:string,
    marca:number
}

function crearAtleta():null | Atleta {
    let 
        nombre = (prompt('INGRESE EL NOMBRE DE LA COMPETIDORA\n=>') as string).trim().toUpperCase(),
        marcas:number[] = [],
        mejorMarca = 0;

    for (let i = 0; i < 3; i++) 
        marcas.unshift(parseFloat(prompt(`INGRESA LA MARCA N°${i+1} DE ${nombre}\n =>`) as string));

    mejorMarca = mayorMarca(marcas);

    if(!validarDatos(nombre ,marcas)) return null;
    return {
        nombre: nombre,
        marca:mejorMarca 
    }
}

function validarDatos(nombre:string,marcas:number[]):boolean{    
    if(nombre.length==0, marcas.filter((marca)=>isNaN(marca)).length != 0) return false;
    return true    
}

function mayorMarca(marcas:number[]){
    return marcas.reduce((marcaAnterior:number,marcaSiguiente:number):number=>{
        if(marcaAnterior < marcaSiguiente) return marcaSiguiente;
        return marcaAnterior;
    })
}

function obtenerGanador(atletas:Atleta[]):string{
    const AtletaGanador:Atleta =  atletas.reduce((atletaAnterior:Atleta,atletaSiguiente:Atleta)=>{
        if(atletaAnterior.marca < atletaSiguiente.marca) return atletaSiguiente;
        return atletaAnterior;        
    });

    return `
        LA ATLETA GANADORA FUE ${AtletaGanador.nombre} CON UN PUNTAJE DE ${AtletaGanador}M\n
        ${AtletaGanador.marca > 15.50?'ADEMAS GANO':'PERO NO GANO'} EL PREMIO DE 500 M POR ROMPER EL RECORD MUNDIAL
    `;
}

function agregarAtletas():Atleta[]{
    let atletas:Atleta[] = [];
    do {        
        const nuevaAtleta = crearAtleta();        

        if(nuevaAtleta == null) continue;
        else atletas.unshift(nuevaAtleta);
        
    } while ((prompt(`DESEA ANADIR OTRA COMPETIDORA\nDIGITE "SI" PARA CONTINUAR.=>`) as string).trim().toUpperCase() == 'SI');

    return atletas;
}

const Atletas = agregarAtletas()


if(Atletas.length == 0) alert('NO HAY ATLETAS REGISTRADOS')
else alert(obtenerGanador(Atletas));

