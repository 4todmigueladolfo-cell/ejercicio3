let nombre = prompt("Nombre del cliente:");
let edad = Number(prompt("Edad del cliente:"));
let tipoOpcion = Number(prompt(
  "Tipo de cliente:\n1. Estudiante\n2. Empleado\n3. Cliente general"
));

let tipoCliente = "";
let descuentoTipo = 0; 

switch (tipoOpcion) {
  case 1:
    tipoCliente = "Estudiante";
    descuentoTipo = 5;
    break;
  case 2:
    tipoCliente = "Empleado";
    descuentoTipo = 10;
    break;
  case 3:
    tipoCliente = "Cliente general";
    descuentoTipo = 0;
    break;
  default:
    tipoCliente = "Cliente general";
    descuentoTipo = 0;
}

let subtotal = 0;
let contadorProductos = 0;
let continuar = "s";

do {
  let nombreProducto = prompt("Nombre del producto:");
  let precio = Number(prompt("Precio del producto:"));
  let cantidad = Number(prompt("Cantidad comprada:"));

  let costoProducto = precio * cantidad; 
  subtotal += costoProducto;              
  contadorProductos++;

  continuar = prompt("¿Desea registrar otro producto? (s/n)");
} while (continuar === "s");

let descuentoAdicional = 0;
if (subtotal > 1000) {
  descuentoAdicional = 10;
} else if (subtotal > 500) {
  descuentoAdicional = 5;
}

let descuentoTotalPorcentaje = descuentoTipo + descuentoAdicional;
let montoDescuento = subtotal * (descuentoTotalPorcentaje / 100);
let total = subtotal - montoDescuento;


document.write("<h3>Resumen de la compra</h3>");
document.write("Cliente: " + nombre + " (" + edad + " años)<br>");
document.write("Tipo de cliente: " + tipoCliente + "<br>");
document.write("Cantidad de productos: " + contadorProductos + "<br>");
document.write("Subtotal: Q" + subtotal + "<br>");
document.write("Descuento aplicado: " + descuentoTotalPorcentaje + " (Q" + montoDescuento + ")<br>");
document.write("Total a pagar: Q" + total + "<br><br>");
document.write("Compra realizada con exito. ¡Gracias por su compra, buelva pronto, feliz viaje, " + nombre + "!");