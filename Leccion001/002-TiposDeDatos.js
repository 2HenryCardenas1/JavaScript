//La variables son dinamicas


var nombre = "Pepa";
console.log(nombre);

//Numerico

var numero = 1000;
console.log(numero);

//Tipo de dato Object

var objeto = {
    nombre : "Pepa",
    apellido : "Perez",
    telefono : "43436534"
}

console.log(objeto);

//Se puede cambiar el valor de una variable a otro dato distinto 

nombre = 20;
console.log( nombre)
//Ver el tipo de dato de una variable
console.log(typeof nombre)

//Tipo de dato boolean (true/ false)

var boolTrue = true;
var boolFalse = false;

if (boolFalse == true) {
    console.log("Es True");
}
else{
    console.log("Es falso");
}

//Tipo de dato function

function miFuncion(){}
console.log(typeof miFuncion);

//Tipo de dato Symbol = se usa para crear un tipo de dato unico de una variable
var simbolo = Symbol("mi simbolo");
console.log(typeof simbolo)

//Las clases en js son de tipo function

class Persona {
    constructo(nombre,apellido){
        this.nombre= nombre;
        this.apellido = apellido;
    }

}
console.log(Persona);

//Tipo undefined
var x;
console.log(x);

//Null = ausencia de valor

var y = null
console.log(y);


//ARREGLOS


var array = ["Hola",1,"BMW",10.5];

console.log(array);

//Tipo de dato vacio

var empty = '';

console.log(empty)