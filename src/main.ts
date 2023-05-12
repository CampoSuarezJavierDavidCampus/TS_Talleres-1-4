/* TALLER 02 */
/* ///////////////////////////////////////////////////////////// */
/* 
7. Programa que pida el ingreso del nombre y precio de un artículo y la
cantidad que lleva el cliente. Mostrar lo que debe pagar el comprador
en su factura.
*/
type Articulo = {
    nombre:string,
    precio:number,
    cantidad:number
}

function registrarArticulos():Articulo[]{
    let articulos:Articulo[] = [];
    do {
        const NuevoArticulo:Articulo = {
            nombre: prompt(`INGRESA EL NOMBRE DEL PRODUCTO\n=>`) as string,
            precio: parseFloat(prompt(`INGRESA EL PRECIO DEL PRODUCTO\n=>`) as string),
            cantidad: parseInt(prompt(`INGRESA LA CANTIDAD DE ARTICULOS QUE EL CLIENTE LLEVARA`) as string)
        };
        articulos.unshift(NuevoArticulo)
    } while (prompt('DESEA REGISTRAR OTRO PRODUCTO?\nDIGITE "SI" PARA CONTINUAR. =>')?.toLocaleUpperCase()=='SI');
    return articulos;
}

function mostrarLoQueDebePagar(articulos:Articulo[]):string{
    let factura:string = '';
    articulos.forEach((articulo:Articulo)=>{
        let {nombre,cantidad,precio} =  articulo
        factura+=`${nombre}: ${precio} x ${cantidad} = ${precio * cantidad}\n`
    })
    return factura;
}

let articulos = registrarArticulos();
console.log(mostrarLoQueDebePagar(articulos));