//La funcion isNaN nos verifica si el dato es un numero o no 

let miNumero = "18x";

let edad = Number(miNumero);

console.log(typeof edad);

if (isNaN(miNumero)){ //Si miNumero no es un numero imprima esto:
    console.log("Lo sentimos, no es un numero");
}
else{
    let resultado = (edad >= 18) ? "Puede votar" : "No puede votar";
    console.log(resultado);
}
