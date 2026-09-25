let saldo = 1000.00;
let deposito = 0;
let retiros =0;
let opcion;


do {
  opcion = Number(prompt(
    "MENÚ CAJERO\n1. Consultar saldo\n2. Depositar dinero\n3. Retirar dinero\n4. Salir"
  ));

  switch (opcion) {

    case 1:
      alert("Saldo actual: Q" + saldo);
      break;

    case 2: {
      let monto = Number(prompt("Cuanto desea depositar?"));
      while (monto <= 0) {
        monto = Number(prompt("Cantidad invalida. Ingrese un monto mayor a 0:"));
      }
      saldo += monto;
      depositos++;
      alert("Depsito realizado. Nuevo saldo: Q" + saldo.toFixed(2));
      break;
    }

    case 3: {
      let monto = Number(prompt("Cuanto desea retirar?"));
      while (monto <= 0 || monto > saldo) {
        if (monto > saldo) {
          monto = Number(prompt("Saldo insuficiente. Ingrese un monto vaido:"));
        } else {
          monto = Number(prompt("Cantidad invlida. Ingrese un monto mayor a 0:"));
        }
      }
      saldo -= monto;
      retiros++;
      alert("Retiro realizado. Nuevo saldo: Q" + saldo);
      break;
    }

    case 4:
      document.write("<h3>Resumen</h3>");
      document.write("Saldo final: Q" + saldo + "<br>");
      document.write("Cantidad de depositos: " + depositos + "<br>");
      document.write("Cantidad de retiros: " + retiros + "<br>");
      document.write("Gracias por utilizar nuestro cajero.<br>");
      break;

    default:
      alert("Opcion no valida");
  }

} while (opcion !== 4); 