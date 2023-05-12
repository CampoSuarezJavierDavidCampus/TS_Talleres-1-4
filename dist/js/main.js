"use strict";
function registrarArticulos() {
    var _a;
    let articulos = [];
    do {
        const NuevoArticulo = {
            nombre: prompt(`INGRESA EL NOMBRE DEL PRODUCTO\n=>`),
            precio: parseFloat(prompt(`INGRESA EL PRECIO DEL PRODUCTO\n=>`)),
            cantidad: parseInt(prompt(`INGRESA LA CANTIDAD DE ARTICULOS QUE EL CLIENTE LLEVARA`))
        };
        articulos.unshift(NuevoArticulo);
    } while (((_a = prompt('DESEA REGISTRAR OTRO PRODUCTO?\nDIGITE "SI" PARA CONTINUAR. =>')) === null || _a === void 0 ? void 0 : _a.toLocaleUpperCase()) == 'SI');
    return articulos;
}
function mostrarLoQueDebePagar(articulos) {
    let factura = '';
    articulos.forEach((articulo) => {
        let { nombre, cantidad, precio } = articulo;
        factura += `${nombre}: ${precio} x ${cantidad} = ${precio * cantidad}\n`;
    });
    return factura;
}
let articulos = registrarArticulos();
console.log(mostrarLoQueDebePagar(articulos));
