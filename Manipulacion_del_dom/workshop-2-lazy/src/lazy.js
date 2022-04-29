//Interseccion observer = carga de objetos en la pagina cuando esten listos


const observer = new IntersectionObserver((entires) => {
    entires
        .filter(isIntersecting) // Esta funcion nos dice que elemento esta interceptando 
        .forEach(cargarImagen);
});

const isIntersecting = (entry) => {
    return entry.isIntersecting; // true si esta dentro de la pantalla 
}
//Cargar imagen lazy loading

let totalImages = 0;
let loadedImages = 0;

const cargarImagen = (entry) => {
    
    const container = entry.target // este nodo es nuestro container de imagen
    //Accedemos a la etiquetas img del contenedor
    const image = container.firstChild;
    const url = image.dataset.src;
    image.src = url;

    image.onload = () => {
        totalImages += 1;
        logState();
    };


    //No volver a cargar la imagen 
    observer.unobserve(container);
}



export const registrarImagen = (imagen) => {
    //Interseccion observer -> observar(imagen)
    observer.observe(imagen);
    totalImages += 1;
    logState();

}

//contador

function logState() {
    console.log(`⚪️ Total Imágenes: ${totalImages}`);
    console.log(`🟣 Imágenes cargadas: ${loadedImages}`);
    console.log("--------------------------------------");
}