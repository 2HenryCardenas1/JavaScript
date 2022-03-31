let mes = 1;
let mensaje ;

switch (mes){
    case 1: case 2: case 12:
        mensaje="Invierno";
        break;
    case 3: case 4: case 5: 
        mensaje = "Verano";
        break;
    case 6: case 7: case 8:
        mensaje = "Otoño";
        break;
    case 9: case 10: case 11: 
        mensaje = "Primavera";
        break;
    default:
        mensaje = "Mes fuera del rango";
}
console.log(mensaje);

