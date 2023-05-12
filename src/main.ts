/* TALLER 03 */
/* ///////////////////////////////////////////////////////////// */
/* 
1. Construir un objeto literal "campus" que gestione
la info(PROPIEDADES) de Campus, trainers, campers, niveles,
tecnologías, teams y roadMap
1.1. De campus administrar los datos de contacto de las sedes en
Bucaramanga, Bogotá, Medellín y México
1.2. De los trainers y campers, su nombre, sus teléfonos, teams
(horarios de las teams=> día, hora y salones (nro y piso), y el
email, y de los campers también horarios de inglés y ser.
1.3. De los campers, también gestionar su nivel actual, como su
barrio y medio de transporte
1.4. De los niveles, su pre requisito, a que tecnología pertenece, si
es electiva u obligatoria
1.5. De la roadmap , Nro de créditos, año, Nro de asignaturas
////////    ////////////////////777

2. Consultas: Usando Destructuring,
2.1 De los trainers, reportar si la asignatura (tecnología) es
remota o presencial y de los campers el nombre de salón.
2.2 El teléfono de la sede de Medellín y la dirección de la
sede de Bucaramanga
2.3 De la asignatura (tecnología) si tiene sandbox o no
////////////////////////////

3. Consultas: Usando sintaxis de punto.
3.1 Reportar, prerequisito de la asignatura (tecnología) y nro de
créditos del roadmap
3.2 Agregar mas objetos con mas objetos anidados de manera libre
(por lo menos 7)
*/

type Sede = {
    nombre:string,
    telefono:number,
    direccion:string
}

type Roadmap = {
    nroCreditos:number,
    nroAsignaturas:number
    year:string,
    
}

type Tecnologia = {
    nombre:string,
    tieneSanbox:boolean,
    esRemota:boolean    
}

type Salon = {
    nombre:string,
    nro: string,
    piso:string
}

type Nivel = {
    prerequisito?:Tecnologia[],
    tecnologia:Tecnologia,
    esElectiva:boolean
}

type Team = {
    dia:string,
    hora:string,
    salones:Salon[]
}

type Usuario = {
    nombre:string,
    telefono:number,
    email:string,
    teams:Team[]
}

type Camper = Usuario & {
    barrio:string,
    transporte:string,
    nivelActual:Nivel
    horarios:{
        ingles:Salon,
        ser:Salon
    }
}

type Trainer = Usuario & {
    asignaturas:Tecnologia[],    
}


type Campus = {
    trainers:Trainer[],
    campers:Camper[],
    niveles:Nivel[],
    sedes:Sede[],
    tecnologias:Tecnologia[],
    teams:Team[],
    roadMap:Roadmap
}

/* CREAR SEDES */
let 
Bucaramanga:Sede = {
    nombre: 'Bucaramanga',
    direccion: 'vnsdkfjvndjf',
    telefono:34234898
},
bogota:Sede = {
    nombre: 'Bogota',
    direccion: 'fbgnjkg78',
    telefono:988549
},
medellin:Sede = {
    nombre: 'Medellin',
    direccion: 'nbjfknbj',
    telefono:540869450
},
mexico:Sede = {
    nombre:'Ciudad de Mexico',
    direccion: 'vbdhfjbvdhj',
    telefono:7348957
},

/* Tecnologia  */
python:Tecnologia = {
    nombre:'PYTHON',
    tieneSanbox:false,
    esRemota:false
},
javascript:Tecnologia = {
    nombre:'JAVASCRIPT',
    tieneSanbox:true,
    esRemota:false
},
php:Tecnologia = {
    nombre:'PHP',
    tieneSanbox:false,
    esRemota:true
},
typeScript:Tecnologia = {
    nombre:'TYPESCRIPT',
    tieneSanbox:true,
    esRemota:true
},
/* Roadmap */
roadmap:Roadmap = {
    nroCreditos:3000,
    nroAsignaturas:4,
    year:'2023'
},
/* SALONES */
apolo:Salon = {
    nombre:'Apolo',
    piso:'PRINCIPAL',
    nro:'6'
},
artemise:Salon = {
    nombre:'artemise',
    piso:'PRINCIPAL',
    nro:'6'
},
spotnick:Salon = {
    nombre:'spotnick',
    piso:'PRINCIPAL',
    nro:'6'
},
ser:Salon = {
    nombre:'SER',
    piso:'AUDITORIO',
    nro:'6'
},
ingles:Salon = {
    nombre:'SER',
    piso:'AUDITORIO',
    nro:'6'
},
/* Nivel */
basico:Nivel = {    
    tecnologia:python,
    esElectiva:false
},
medio:Nivel = {    
    prerequisito:[python,javascript],
    tecnologia:php,
    esElectiva:false    
},
avanzado:Nivel = {    
    prerequisito:[python,javascript,php],
    tecnologia:typeScript,
    esElectiva:true
},
/* Team */
m2:Team = {
    dia:'23-12-2024',
    hora:'4:00 - 10:00',
    salones: [ingles,ser,spotnick]
},
j2:Team = {
    dia:'19-04-2023',
    hora:'4:00 - 10:00',
    salones: [ingles,ser,artemise]
},
d2:Team = {
    dia:'07-01-2023',
    hora:'7:00 - 16:00',
    salones: [ingles,ser,apolo]
},
/* Usuario  */
juan:Trainer = {
    nombre:'juan david',
    telefono: 9878934,
    email:'dnvjdknfv@vfmkdl.cds',
    teams:[m2,j2],
    asignaturas:[php,javascript]
},
paco:Trainer = {
    nombre:'paco adrian',
    telefono: 765312123,
    email:'fdsjng@vdl.cds',
    teams:[m2,d2],
    asignaturas:[python,php,typeScript]
},
pedro:Camper = {
    barrio:'csd',
    transporte:'bus',
    nivelActual:avanzado,
    nombre:'pedro de la mar',
    telefono: 2343290,
    email:'nbjkbg.nj@fvmjd.vfd',
    teams:[m2],
    horarios:{
        ingles:ingles,
        ser:ser
    }
},
campus:Campus = {
    trainers:[juan,paco],
    campers:[pedro],
    niveles:[avanzado,basico,medio],
    sedes:[bogota,medellin,Bucaramanga,mexico],
    tecnologias:[php,python,javascript,typeScript],
    teams:[m2,j2,d2],
    roadMap:roadmap
};

console.log(campus);
