import { registrarImagen } from "./lazy";


const max = 123, min = 1;
const random = () => Math.floor(Math.random() * (max - min)) + min;

//Crear una imagen y agregar al contenedor
const createImgageNode = () => {

    const container = document.createElement('div');
    container.className = 'p-4';

    const image = document.createElement("img");
    image.className = "mx-auto";
    image.width = "320";
    image.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;

    container.appendChild(image);
    return container;
};

const nuevaImagen = createImgageNode();
const primaryNode = document.getElementById("images");

//Botones

const addButton = document.getElementById("add");


const addImage = () => {
    const nuevaImagen = createImgageNode();
    primaryNode.append(nuevaImagen);
    registrarImagen(nuevaImagen);
};
addButton.addEventListener("click", addImage);

//Limpiar pantalla 

const clearImages = document.getElementById("clear");

const clearImage = () => {
    primaryNode.innerHTML = '';
}
clearImages.addEventListener("click", clearImage);
