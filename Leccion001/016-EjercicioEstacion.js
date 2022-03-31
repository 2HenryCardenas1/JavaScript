let mes = 4;

if (mes == 1 || mes == 2 || mes == 12) {
    console.log("El mes "+ mes+" esta en la estacion de invierno");
}
else if (mes == 3 || mes == 4 || mes == 5) {
    console.log("El mes "+ mes+" esta en la estacion de verano");
}
else if (mes == 6 || mes == 7 || mes == 8) {
    console.log("El mes "+ mes+" esta en la estacion de otoño");
}
else if (mes == 9 || mes == 10 || mes == 11){
    console.log("El mes "+ mes+" esta en la estacion de primavera");
}
else{
    console.log("El mes "+ mes+" no existe");
}