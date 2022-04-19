/*Ciclo While */
let numero = 0;

while(numero < 3) {
    console.log("Estoy dentro del ciclo por que la condicion es verdarea: "+numero);
    numero++;
}

/*Ciclo Do While*/

do {
    console.log("Estoy dentro del do while "+numero);
    numero++;
}while(numero < 3);

/*Ciclo for*/

for(let i= 0; i < numero; i++){
    console.log("Estoy en ["+i+"]");
}

/* Uso del break*/

for(let i= 0; i <= 10; i++){
    if(i %2 == 0){
        console.log(i);
        break;//No sigue iterando
    }
    
}