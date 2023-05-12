"use strict";
let Bucaramanga = {
    nombre: 'Bucaramanga',
    direccion: 'vnsdkfjvndjf',
    telefono: 34234898
}, bogota = {
    nombre: 'Bogota',
    direccion: 'fbgnjkg78',
    telefono: 988549
}, medellin = {
    nombre: 'Medellin',
    direccion: 'nbjfknbj',
    telefono: 540869450
}, mexico = {
    nombre: 'Ciudad de Mexico',
    direccion: 'vbdhfjbvdhj',
    telefono: 7348957
}, python = {
    nombre: 'PYTHON',
    tieneSanbox: false,
    esRemota: false
}, javascript = {
    nombre: 'JAVASCRIPT',
    tieneSanbox: true,
    esRemota: false
}, php = {
    nombre: 'PHP',
    tieneSanbox: false,
    esRemota: true
}, typeScript = {
    nombre: 'TYPESCRIPT',
    tieneSanbox: true,
    esRemota: true
}, roadmap = {
    nroCreditos: 3000,
    nroAsignaturas: 4,
    year: '2023'
}, apolo = {
    nombre: 'Apolo',
    piso: 'PRINCIPAL',
    nro: '6'
}, artemise = {
    nombre: 'artemise',
    piso: 'PRINCIPAL',
    nro: '6'
}, spotnick = {
    nombre: 'spotnick',
    piso: 'PRINCIPAL',
    nro: '6'
}, ser = {
    nombre: 'SER',
    piso: 'AUDITORIO',
    nro: '6'
}, ingles = {
    nombre: 'SER',
    piso: 'AUDITORIO',
    nro: '6'
}, basico = {
    tecnologia: python,
    esElectiva: false
}, medio = {
    prerequisito: [python, javascript],
    tecnologia: php,
    esElectiva: false
}, avanzado = {
    prerequisito: [python, javascript, php],
    tecnologia: typeScript,
    esElectiva: true
}, m2 = {
    dia: '23-12-2024',
    hora: '4:00 - 10:00',
    salones: [ingles, ser, spotnick]
}, j2 = {
    dia: '19-04-2023',
    hora: '4:00 - 10:00',
    salones: [ingles, ser, artemise]
}, d2 = {
    dia: '07-01-2023',
    hora: '7:00 - 16:00',
    salones: [ingles, ser, apolo]
}, juan = {
    nombre: 'juan david',
    telefono: 9878934,
    email: 'dnvjdknfv@vfmkdl.cds',
    teams: [m2, j2],
    asignaturas: [php, javascript]
}, paco = {
    nombre: 'paco adrian',
    telefono: 765312123,
    email: 'fdsjng@vdl.cds',
    teams: [m2, d2],
    asignaturas: [python, php, typeScript]
}, pedro = {
    barrio: 'csd',
    transporte: 'bus',
    nivelActual: avanzado,
    nombre: 'pedro de la mar',
    telefono: 2343290,
    email: 'nbjkbg.nj@fvmjd.vfd',
    teams: [m2],
    horarios: {
        ingles: ingles,
        ser: ser
    }
}, campus = {
    trainers: [juan, paco],
    campers: [pedro],
    niveles: [avanzado, basico, medio],
    sedes: [bogota, medellin, Bucaramanga, mexico],
    tecnologias: [php, python, javascript, typeScript],
    teams: [m2, j2, d2],
    roadMap: roadmap
};
console.log(campus);
