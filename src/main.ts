/* TALLER 02 */
/* ///////////////////////////////////////////////////////////// */
/* 
6. Construir el algoritmo en Javascript para un programa
para cualquier cantidad de estudiantes que lea el nombre,
el sexo y la nota definitiva y halle al estudiante con la mayor
nota y al estudiante con la menor nota y cuantos eran
hombres y cuantos mujeres.

*/
type Estudiante = {
    nombre:string,
    genero: 'M'|'F',
    nota:number
}

function obtenerEstudiantes():Estudiante[] {
    let estudiantes:Estudiante[] = []
    do {
        let
        nombreEstudiante = prompt('INGRESA EL NOMBRE DEL ESTUDIANTE')?.trim().toLocaleUpperCase() as string,
        generoEstudiante = prompt('INGRESA EL GENERO DEL ESTUDIANTE\nM/F=>')?.trim().toLocaleUpperCase() as string,
        notaEstudiante = parseFloat(prompt('INGRESA LA NOTA DEL ESTUDIANTE=>') as string);
        if((generoEstudiante !== 'M' && generoEstudiante !== 'F') || nombreEstudiante.length == 0) continue;

        const nuevoEstudiante:Estudiante = {
            nombre: nombreEstudiante,        
            genero: generoEstudiante,
            nota: notaEstudiante
        }

        estudiantes.unshift(nuevoEstudiante);    
    } while (prompt('DESEA AGREGAR ALGUN ESTUDAIANTE\nDIGITE "SI" PARA CONTINUAR.=>')?.toUpperCase() == 'SI');
    return estudiantes;
}

function obtenerEstudianteMayorOMenorNota(estudiantes:Estudiante[],solicitudDeLaMayorNota:boolean = true):string{
    let estudianteMayorNota = estudiantes.reduce((estudianteAnterior:Estudiante,estudianteSiguiente:Estudiante):Estudiante=>{
        if(solicitudDeLaMayorNota)return mayorNota(estudianteAnterior,estudianteSiguiente);
        return menorNota(estudianteAnterior,estudianteSiguiente);
    });

    return `EL ESTUDIANTE ${estudianteMayorNota.nombre}
     CON LA NOTA DE ${estudianteMayorNota.nota} POSEE LA ${solicitudDeLaMayorNota?'MAYOR':'MENOR'} NOTA`;
}

function mayorNota(estudianteAnterior:Estudiante,estudianteSiguiente:Estudiante):Estudiante{
    if(estudianteAnterior.nota < estudianteSiguiente.nota) return estudianteSiguiente;
    return estudianteAnterior;
}

function menorNota(estudianteAnterior:Estudiante,estudianteSiguiente:Estudiante):Estudiante{
    if(estudianteAnterior.nota > estudianteSiguiente.nota) return estudianteSiguiente;
    return estudianteAnterior;
}

function conteoDeGenerosDeLosEstudiantes(estudiantes:Estudiante[]):string{
    let
        contadorDeM:number = 0,
        contadorDeF:number = 0;
    estudiantes.forEach((estudiante:Estudiante):void=>{
        estudiante.genero == 'F'?contadorDeF++:contadorDeM++;
    })
    return `EL NUMERO DE ESTUDIANTES M:${contadorDeM} Y EL NUMERO DE ESTUDIANTES F:${contadorDeF}`;
}

let estudiantes = obtenerEstudiantes();
if(estudiantes.length!==0){
    console.log(
        obtenerEstudianteMayorOMenorNota(estudiantes) + '\n',
        obtenerEstudianteMayorOMenorNota(estudiantes,false) + '\n',
        conteoDeGenerosDeLosEstudiantes(estudiantes)
    );
}else{
    console.log(`NO HAY ESTUDIANTES REGISTRADOS`)
}
