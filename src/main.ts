/* TALLER 02 */
/* ///////////////////////////////////////////////////////////// */
/* 
8. Programa que Ingrese por teclado:
a. el valor del lado de un cuadrado para mostrar por pantalla el
perímetro del mismo
b. la base y la altura de un rectángulo para mostrar el área del
mismo
*/
type Cuadrilatero = {
    lados:number[] | number,
    primetro:()=>string
}
let 
    cuadrado:Cuadrilatero = {
        lados: 0,
        primetro(){                        
            return `EL PERIMETRO DEL CUADRADO ES ${this.lados as number * 4}`;
        } 
    },
    rectangulo:Cuadrilatero = {
        lados: [0,0],
        primetro(){            
            return `EL PERIMETRO DEL RECTANGULO ES  ${(2 * (this.lados as number[])[0] as number ) + (2 * (this.lados as number[])[1 as number] )}`;
        }
    };    

cuadrado.lados = parseInt(prompt('INGRESA EL VALOR DEL LADO DEL CUADRADO\n=>') as string)
alert(cuadrado.primetro());

rectangulo.lados = [
    parseInt(prompt('INGRESA LA ALTURA DEL RECTANGULO') as string),
    parseInt(prompt('INGRESA LA BASE DEL RECTANGULO') as string)
];

alert(rectangulo.primetro());
