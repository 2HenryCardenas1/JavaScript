function holaMundo(nombre) { console.log(nombre); }


// Arrow function
const holaMundoA = nombre => console.log(nombre);

//Arrow function con varios parametros de entradas 
const holaMundoAA = (nombre, apellido) => {
    console.log(nombre, apellido);
}
//Siempre retorna un valor
const myfunction = (a, b) => a * b;


function suma(n) {
    let suma = 0;
    for (let i = 0; i < n; i++) {
        suma += i
    }
    return suma;
}

const sumaA = n => {
    let suma = 0;
    for (let i = 0; i < n; i++) {
        suma += i
    }
    return suma;
}


holaMundoA("Henry");
holaMundoAA("Henry", "Cardenas");
myfunction(2, 2);
console.log(suma(3));
console.log(sumaA(3));



//ARRAYS

const frutas = ["platano", "mora", "fresa", "piña", "platano",]

/*
map me devuelve un array con modificaciones
find busca el primer elemento
filter me filtra y me trae todos los elementos que indique 
*/

//FOREACH 

frutas.forEach(elemento => console.log(elemento));

//Find element

const fruta = frutas.find(elemento => elemento === "platano");
console.log(fruta)



//Convertir en etiquetas html

let frutA = [{
    nombre: "coco",
    imagen: "imagencoco",
    precio: 5
}, {
    nombre: "platano",
    imagen: "imagenplatano",
    precio: 2
}, {
    nombre: "fresa",
    imagen: "imagenfresa",
    precio: 3
}, {
    nombre: "piña",
    imagen: "imagenpiña",
    precio: 4
}, {
    nombre: "coco",
    imagen: "imagencoco",
    precio: 5
},

];

console.log(frutA);

//Recorriendo mi array de frutas de frutas 

frutA.forEach(fruta => console.log("Fruta :" + `${fruta.nombre}` + "\nImagen :" + `${fruta.imagen}` + "\nPrecio :" + `${fruta.precio}`));


//MAP => hace un array por cada numero de elemntos dentro del array principal
//Se usa para realizar una transformacion de elementos de arrays

html = frutA.map(fruta =>
    `<div>
     <img src='${fruta.imagen}'>
     <h1>${fruta.nombre}</h1>
     <p>${fruta.precio}</p>
 </div>`
)

console.log(html)

numero = [1, 2, 3, 4, , 5, 6, 7, 8, 9, 10];

tabla5 = numero.map(numero => numero * 5);

console.log(tabla5);

//Al poner ...fruta(nuestra variable que recorre el array) nos trae el resto de variables que tiene el array y que no vamos a editar 
const frutaActualizado = frutA.map(fruta => {
    return {...fruta, precioColombiano: fruta.precio * 4000
    }

});

console.log(frutaActualizado);