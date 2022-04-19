//Operadores corto circuito com

//&& obliga a que la condicion sea verdadera en ambas partes
let numero = 10;
let valMin = 5, valMax = 10;

if (numero >= valMin && numero <= valMax) {
    console.log("Dentro del rango");
}
else {
    console.log("Fuera de rango")
}
// || si alguna parte de la condicion es verdera pasa a realizar el procedimiento

let vacaciones = false, diaDescanso = false;

if (vacaciones == true || diaDescanso == true) {
    console.log("Puede ir a ver al chino");
}
else {
    console.log("Esta trabajando")
}

//Nullish coalescing operator
//Si el dato es nulo o undifined se ejecuta la otra parte, si no se ejecuta el primer proceso

let dato = null
let msj = "Hola"
console.log(dato ?? msj);


//Optional Chaining
/*
El operador de Encadenamiento Opcional permite realizar una especie de "validación" 
en nuestros programas cuando empleamos objetos, arreglos o funciones.
 */

const auto = {
    marca: "Toyota",
    ruedas: 4,
    motor: {
        tamaño: "Grande",
        serie: "ARFY-9562"
    }
}
console.log(auto.motor.serie);

const auto2 = {
    marca: "Toyota",
    ruedas: 4
}
console.log(auto2?.motor?.serie);


//Obtener valores unicos

const numeros = [1, 5, 49, 8, 2, 20, 80, 1, 49, 20];
//spread operator = transformamos la variable en una lista de argumentos
const numerosSinRepetidos = [...new Set(numeros)];
console.log(numeros);
console.log(numerosSinRepetidos);