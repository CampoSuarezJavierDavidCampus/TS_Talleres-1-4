/* TALLER 01 */
/* ///////////////////////////////////////////////////////////// */
/* 
1.
a.
Declarar variables llamadas 'continente', 'país',
'Departamento', 'ciudad', 'barrio' y 'dirección', y asigne sus
valores de cantidad de habitantes, de acuerdo con su contexto
real en su propio país.
b.
Registre sus valores en la consola.
*/

let 
continente:string,
pais:string,
departamento:string,
ciudad:string,
barrio:string,
direccion:string;

continente = 'america';
pais = 'colombia';
departamento = 'santander';
ciudad = 'bucaramanga';
barrio = 'san Alonso';
direccion = 'calle 21 #28-25';

console.log(`
    Estoy vivo en el continente de ${continente}, en\n
    un pais llamado ${pais}, en donde estoy ubicado en el\n
    departamento de ${departamento} dentro de la ciudad de ${ciudad},
    en el barrio ${barrio} con direccion ${direccion}.
`);