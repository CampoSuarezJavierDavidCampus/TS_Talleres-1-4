/* TALLER 01 */
/* ///////////////////////////////////////////////////////////// */
/* 
a.
Si su país se dividiera por la mitad, y cada mitad contendría la
mitad de la población, Entonces, ¿cuántas personas vivirían en cada
mitad?
b.
Aumente la población de su país en 1M y registre el resultado
en la consola
c.
Finlandia tiene una población de 6 millones. ¿Tu país tiene más
gente que ¿Finlandia?
d.
La población promedio de un país es de 33 millones de
personas. ¿Tu país tiene menos gente que el país promedio?
e.
Basado en las variables que creó, cree una nueva variable
'descripción' que contiene una cadena con este formato: 'Colombia
está en América, y Bucaramanga que está en el departamento de
Santander tiene un barrio llamado el prado y sus 3000 personas
hablan inglés.
*/
let 
continente:string,
pais:string,
departamento:string,
ciudad:string,
barrio:string,
direccion:string,
descripción:string,
poblacion:number,
personasQueHablanIngles:number;

continente = 'america';
pais = 'colombia';
departamento = 'santander';
ciudad = 'bucaramanga';
barrio = 'san Alonso';
direccion = 'calle 21 #28-25';
poblacion = parseFloat(prompt('ingerse el numero de habitantes que hay en su pais') as string);
personasQueHablanIngles = parseInt(prompt('En Su barrio cuantas personas hablan ingles') as string);

descripción = `
    Estoy vivo en el continente de ${continente}, en\n
    un pais llamado ${pais}, en donde estoy ubicado en el\n
    departamento de ${departamento} dentro de la ciudad de ${ciudad},
    en el barrio ${barrio} con direccion ${direccion},\n
    hay ${personasQueHablanIngles} personas que hablan ingles.
`;



console.log(`
    La mitad de la poblacion es de ${poblacion/2}.\n
    Mi pais tiene ${poblacion>6000000 ? 'mas' : 'menos'} gente que finlandia.\n
    Mi pais esta por ${poblacion>33000000 ? 'encima': 'debajo'} que el promedio.\n
    ${descripción}
`);